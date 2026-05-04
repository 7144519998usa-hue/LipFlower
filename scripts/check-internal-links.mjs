import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  beautyBrandCategories,
  beautyBrands,
  beautyCalculators,
  beautyCategoryPages,
  beautyComparePages,
  beautyLandingPages,
  beautySellers,
  beautyUniversityTopics,
} from "../app/lib/beautyData.js";
import { programmaticBestPages } from "../app/lib/programmaticSeoData.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "app");
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);

const ignoredPrefixes = [
  "/api/",
  "/_vercel/",
  "/sitemaps/",
];

const ignoredExactPaths = new Set([
  "/api",
  "/favicon.ico",
  "/icon.svg",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap_index.xml",
]);

function normalizePath(value) {
  if (!value || !value.startsWith("/")) {
    return null;
  }

  const [withoutHash] = value.split("#");
  const [withoutQuery] = withoutHash.split("?");
  const normalized = withoutQuery === "/" ? "/" : withoutQuery.replace(/\/+$/, "");
  return normalized || "/";
}

function shouldIgnore(value) {
  return (
    ignoredExactPaths.has(value) ||
    ignoredPrefixes.some((prefix) => value.startsWith(prefix)) ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes("${")
  );
}

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next") {
          return [];
        }
        return listFiles(fullPath);
      }
      return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
    }),
  );

  return files.flat();
}

async function buildStaticRouteSet() {
  const files = await listFiles(appDir);
  const routes = new Set(["/"]);

  files
    .filter((file) => path.basename(file) === "page.js" || path.basename(file) === "page.jsx")
    .forEach((file) => {
      const relativeDir = path.relative(appDir, path.dirname(file));
      if (!relativeDir || relativeDir === ".") {
        routes.add("/");
        return;
      }

      if (relativeDir.includes("[") || relativeDir.includes("]")) {
        return;
      }

      routes.add(`/${relativeDir.split(path.sep).join("/")}`);
    });

  return routes;
}

function buildGeneratedRouteSet() {
  const routes = new Set();

  beautyLandingPages.forEach((page) => routes.add(`/${page.categoryPath}/${page.slug}`));
  beautyUniversityTopics.forEach((page) => routes.add(`/beauty-university/${page.slug}`));
  beautyComparePages.forEach((page) => routes.add(`/compare/${page.slug}`));
  beautyCalculators.forEach((page) => routes.add(`/calculators/${page.slug}`));
  beautyBrands.forEach((brand) => routes.add(`/brands/${brand.slug}`));
  beautyBrandCategories.forEach((page) => routes.add(`/brands/${page.brandSlug}/${page.categorySlug}`));
  beautySellers.forEach((seller) => routes.add(`/sellers/${seller.slug}`));
  beautyCategoryPages.forEach((page) => routes.add(`/${page.slug}`));
  programmaticBestPages.forEach((page) => routes.add(`/best/${page.slug}`));

  return routes;
}

async function collectInternalPathReferences() {
  const files = await listFiles(appDir);
  const references = new Map();
  const pathPattern = /["'`]((?:\/[a-zA-Z0-9][^"'`\s),\]]*|\/))["'`]/g;

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const relativeFile = path.relative(rootDir, file);
    const lines = source.split(/\r?\n/);

    for (const match of source.matchAll(pathPattern)) {
      const normalized = normalizePath(match[1]);
      if (!normalized || shouldIgnore(normalized)) {
        continue;
      }

      const before = source.slice(0, match.index);
      const lineNumber = before.split(/\r?\n/).length;
      const key = normalized;
      const existing = references.get(key) || [];
      existing.push({
        file: relativeFile,
        line: lineNumber,
        text: lines[lineNumber - 1]?.trim() || "",
      });
      references.set(key, existing);
    }
  }

  return references;
}

const staticRoutes = await buildStaticRouteSet();
const generatedRoutes = buildGeneratedRouteSet();
const knownRoutes = new Set([...staticRoutes, ...generatedRoutes]);
const references = await collectInternalPathReferences();

const missing = [...references.keys()]
  .filter((href) => !knownRoutes.has(href))
  .sort()
  .map((href) => ({ href, references: references.get(href) }));

const summary = {
  knownRoutes: knownRoutes.size,
  referencedInternalPaths: references.size,
  missingCount: missing.length,
  missing,
};

console.log(JSON.stringify(summary, null, 2));

if (missing.length > 0) {
  process.exitCode = 1;
}

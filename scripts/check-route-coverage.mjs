import { readdir } from "node:fs/promises";
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

const intentionallyUnregisteredRoutes = new Set([
  "/search",
]);

const ignoredRoutePrefixes = [
  "/api/",
  "/sitemaps/",
];

const ignoredExactRoutes = new Set([
  "/icon.svg",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap_index.xml",
]);

const registeredTrustRoutes = [
  "/about",
  "/about/advertiser-disclosure",
  "/about/cite-lipflower",
  "/about/editorial-policy",
  "/about/how-we-make-money",
  "/about/media-kit",
  "/contact",
  "/privacy-policy",
  "/terms",
];

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
      return [fullPath];
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

function buildRegistryRouteSet() {
  const routes = new Set([
    "/",
    "/best",
    "/brands",
    "/calculators",
    "/compare",
    "/sellers",
    "/beauty-university",
    "/beauty-research",
    "/beauty-routines",
    "/beauty-gifts",
    "/beauty-occasions",
    "/beauty-ingredients",
    "/beauty-finishes",
    "/beauty-shades",
    "/beauty-glossary",
    "/beauty-calendar",
    "/beauty-checklists",
    "/beauty-seller-scorecard",
    "/beauty-claims-guide",
    "/beauty-methodology",
    "/beauty-faq",
    ...registeredTrustRoutes,
  ]);

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

function isIgnoredRoute(route) {
  return (
    ignoredExactRoutes.has(route) ||
    ignoredRoutePrefixes.some((prefix) => route.startsWith(prefix)) ||
    intentionallyUnregisteredRoutes.has(route)
  );
}

const staticRoutes = await buildStaticRouteSet();
const generatedRoutes = buildGeneratedRouteSet();
const knownRoutes = new Set([...staticRoutes, ...generatedRoutes]);
const registryRoutes = buildRegistryRouteSet();

const missingFromRegistry = [...knownRoutes]
  .filter((route) => !registryRoutes.has(route) && !isIgnoredRoute(route))
  .sort();

const registryWithoutRoute = [...registryRoutes]
  .filter((route) => !knownRoutes.has(route))
  .sort();

const summary = {
  knownRouteCount: knownRoutes.size,
  registryRouteCount: registryRoutes.size,
  intentionallyUnregisteredRoutes: [...intentionallyUnregisteredRoutes].sort(),
  missingFromRegistryCount: missingFromRegistry.length,
  missingFromRegistry,
  registryWithoutRouteCount: registryWithoutRoute.length,
  registryWithoutRoute,
};

console.log(JSON.stringify(summary, null, 2));

if (missingFromRegistry.length > 0 || registryWithoutRoute.length > 0) {
  console.error("Route registry coverage mismatch detected.");
  process.exitCode = 1;
}

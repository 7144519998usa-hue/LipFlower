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
  beautySystemPages,
  beautyUniversityTopics,
} from "../../app/lib/beautyData.js";
import { buildBeautyPageRegistry } from "../../app/lib/beautyPageRegistry.js";
import { getSitemapSections } from "../../app/lib/sitemapData.js";
import { programmaticBestPages } from "../../app/lib/programmaticSeoData.js";

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const appDir = path.join(rootDir, "app");

export const staticHubRoutes = [
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
  "/about",
  "/about/advertiser-disclosure",
  "/about/cite-lipflower",
  "/about/editorial-policy",
  "/about/how-we-make-money",
  "/about/media-kit",
  "/contact",
  "/privacy-policy",
  "/search",
  "/terms",
];

export const intentionallyNoindexRoutes = ["/search"];
export const intentionallyUnregisteredRoutes = new Set(intentionallyNoindexRoutes);

export const registeredTrustRoutes = [
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

export function countBy(items, keyGetter) {
  return items.reduce((counts, item) => {
    const key = keyGetter(item) || "unknown";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

export function sortObjectByKey(value) {
  return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
}

export function sortEntriesByCountAscending(counts) {
  return Object.entries(counts).sort(([, a], [, b]) => a - b);
}

export async function listFiles(dir, { extensions = null } = {}) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next") {
          return [];
        }
        return listFiles(fullPath, { extensions });
      }
      if (extensions && !extensions.has(path.extname(entry.name))) {
        return [];
      }
      return [fullPath];
    }),
  );

  return files.flat();
}

export async function buildStaticRouteSet() {
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

export function buildGeneratedRouteSet() {
  const routes = new Set();

  beautyLandingPages.forEach((page) => routes.add(`/${page.categoryPath}/${page.slug}`));
  beautyUniversityTopics.forEach((page) => routes.add(`/beauty-university/${page.slug}`));
  beautyComparePages.forEach((page) => routes.add(`/compare/${page.slug}`));
  beautyCalculators.forEach((page) => routes.add(`/calculators/${page.slug}`));
  beautyBrands.forEach((brand) => routes.add(`/brands/${brand.slug}`));
  beautyBrandCategories.forEach((page) => routes.add(`/brands/${page.brandSlug}/${page.categorySlug}`));
  beautySellers.forEach((seller) => routes.add(`/sellers/${seller.slug}`));
  beautyCategoryPages.forEach((page) => routes.add(`/${page.slug}`));
  beautySystemPages.forEach((page) => routes.add(`/${page.slug}`));
  programmaticBestPages.forEach((page) => routes.add(`/best/${page.slug}`));

  return routes;
}

export function buildRegistryRouteSet() {
  return new Set(buildBeautyPageRegistry().map((entry) => entry.canonicalPath));
}

export function buildRouteInventory() {
  return {
    staticHubRoutes: staticHubRoutes.length,
    categoryLandingPages: beautyLandingPages.length,
    programmaticBestPages: programmaticBestPages.length,
    comparisonPages: beautyComparePages.length,
    calculatorPages: beautyCalculators.length,
    brandPages: beautyBrands.length,
    brandCategoryPages: beautyBrandCategories.length,
    sellerPages: beautySellers.length,
    categoryPages: beautyCategoryPages.length,
    beautyUniversityPages: beautyUniversityTopics.length,
    systemPages: beautySystemPages.length,
  };
}

export const sitemapSections = getSitemapSections();
export const buildScriptBeautyPageRegistry = buildBeautyPageRegistry;

export function countGeneratedPublicRoutes(routeInventory = buildRouteInventory()) {
  return Object.values(routeInventory).reduce((total, count) => total + count, 0);
}

export function countIndexablePublicRoutes(routeInventory = buildRouteInventory()) {
  return countGeneratedPublicRoutes(routeInventory) - intentionallyNoindexRoutes.length;
}

export {
  beautyBrandCategories,
  beautyBrands,
  beautyCalculators,
  beautyCategoryPages,
  beautyComparePages,
  beautyLandingPages,
  beautySellers,
  beautySystemPages,
  beautyUniversityTopics,
  programmaticBestPages,
};

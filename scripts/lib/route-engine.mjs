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
  beautySiteUrl,
  beautySystemPages,
  beautyUniversityTopics,
  getBeautyHubPage,
} from "../../app/lib/beautyData.js";
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
  beautySystemPages.forEach((page) => routes.add(`/${page.slug}`));
  programmaticBestPages.forEach((page) => routes.add(`/best/${page.slug}`));

  return routes;
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

export const sitemapSections = [
  { slug: "beauty-core", assignments: ["core"] },
  { slug: "beauty-commercial", assignments: ["commercial"] },
  { slug: "beauty-programmatic", assignments: ["programmatic"] },
  { slug: "beauty-comparisons", assignments: ["comparisons"] },
  { slug: "beauty-brands", assignments: ["brands"] },
  { slug: "beauty-sellers", assignments: ["sellers"] },
  { slug: "beauty-education", assignments: ["education"] },
];

function makeRegistryEntry({
  canonicalPath,
  title,
  sitemapAssignment,
  priority = 0.8,
  changeFrequency = "weekly",
  pageType = "page",
  publicationState = "published_indexable",
  indexabilityState = "indexable",
}) {
  return {
    canonicalPath,
    canonicalUrl: `${beautySiteUrl}${canonicalPath}`,
    title,
    sitemapAssignment,
    pageType,
    publicationState,
    indexabilityState,
    changeFrequency,
    priority,
  };
}

export function buildScriptBeautyPageRegistry() {
  const homePage = getBeautyHubPage("home");

  return [
    makeRegistryEntry({
      canonicalPath: "/",
      title: homePage.title,
      sitemapAssignment: "core",
      priority: 1,
      pageType: "home",
    }),
    ...beautyLandingPages.map((page) =>
      makeRegistryEntry({
        canonicalPath: `/${page.categoryPath}/${page.slug}`,
        title: page.title,
        sitemapAssignment: "commercial",
        pageType: "landing",
      }),
    ),
    makeRegistryEntry({ canonicalPath: "/compare", title: "Luxury Beauty Comparisons", sitemapAssignment: "comparisons" }),
    makeRegistryEntry({
      canonicalPath: "/best",
      title: "Best Beauty Product Guides",
      sitemapAssignment: "programmatic",
      pageType: "best-hub",
    }),
    ...programmaticBestPages.map((page) =>
      makeRegistryEntry({
        canonicalPath: `/best/${page.slug}`,
        title: page.title,
        sitemapAssignment: "programmatic",
        pageType: "best-programmatic",
        indexabilityState: page.governance.indexabilityState,
        publicationState: page.contentStatus === "approved" ? "published_indexable" : "live_noindex",
        priority: 0.7,
      }),
    ),
    makeRegistryEntry({ canonicalPath: "/calculators", title: "Beauty Finders", sitemapAssignment: "commercial", pageType: "tool-hub" }),
    ...beautyCalculators.map((page) =>
      makeRegistryEntry({ canonicalPath: `/calculators/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "tool" }),
    ),
    ...beautyComparePages.map((page) =>
      makeRegistryEntry({ canonicalPath: `/compare/${page.slug}`, title: page.title, sitemapAssignment: "comparisons", pageType: "comparison" }),
    ),
    makeRegistryEntry({ canonicalPath: "/brands", title: "Luxury Beauty Brands", sitemapAssignment: "brands" }),
    ...beautyBrands.map((brand) =>
      makeRegistryEntry({ canonicalPath: `/brands/${brand.slug}`, title: `${brand.name} Luxury Beauty`, sitemapAssignment: "brands", pageType: "brand" }),
    ),
    makeRegistryEntry({ canonicalPath: "/sellers", title: "Luxury Beauty Sellers", sitemapAssignment: "sellers" }),
    ...beautySellers.map((seller) =>
      makeRegistryEntry({ canonicalPath: `/sellers/${seller.slug}`, title: `${seller.name} Seller Profile`, sitemapAssignment: "sellers", pageType: "seller" }),
    ),
    ...beautyBrandCategories.map((page) =>
      makeRegistryEntry({ canonicalPath: `/brands/${page.brandSlug}/${page.categorySlug}`, title: page.title, sitemapAssignment: "brands", pageType: "brand-category" }),
    ),
    ...beautyCategoryPages.map((page) =>
      makeRegistryEntry({ canonicalPath: `/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "category" }),
    ),
    makeRegistryEntry({ canonicalPath: "/beauty-university", title: "Beauty University", sitemapAssignment: "education" }),
    makeRegistryEntry({ canonicalPath: "/beauty-research", title: "LipFlower Beauty Research Library", sitemapAssignment: "education", pageType: "research-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-routines", title: "LipFlower Beauty Routine Library", sitemapAssignment: "education", pageType: "routine-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-gifts", title: "LipFlower Beauty Gift Guide Library", sitemapAssignment: "education", pageType: "gift-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-occasions", title: "LipFlower Beauty Occasion Library", sitemapAssignment: "education", pageType: "occasion-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-ingredients", title: "LipFlower Beauty Ingredient Library", sitemapAssignment: "education", pageType: "ingredient-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-finishes", title: "LipFlower Beauty Finish and Texture Library", sitemapAssignment: "education", pageType: "finish-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-shades", title: "LipFlower Beauty Shade and Color Library", sitemapAssignment: "education", pageType: "shade-library", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-glossary", title: "LipFlower Beauty Glossary", sitemapAssignment: "education", pageType: "glossary", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-calendar", title: "LipFlower Beauty Shopping Calendar", sitemapAssignment: "education", pageType: "seasonal-reference", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-checklists", title: "LipFlower Beauty Buying Checklists", sitemapAssignment: "education", pageType: "buying-checklists", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-seller-scorecard", title: "LipFlower Beauty Seller Scorecard", sitemapAssignment: "education", pageType: "seller-scorecard", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-claims-guide", title: "LipFlower Beauty Claims Guide", sitemapAssignment: "education", pageType: "claims-guide", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-methodology", title: "LipFlower Beauty Comparison Methodology", sitemapAssignment: "education", pageType: "comparison-methodology", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/beauty-faq", title: "LipFlower Beauty FAQ", sitemapAssignment: "education", pageType: "faq", priority: 0.85 }),
    makeRegistryEntry({ canonicalPath: "/about", title: "About LipFlower", sitemapAssignment: "education", pageType: "trust", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/about/advertiser-disclosure", title: "Affiliate Disclosure", sitemapAssignment: "education", pageType: "disclosure", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/about/cite-lipflower", title: "Cite LipFlower", sitemapAssignment: "education", pageType: "editor-resource", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/about/editorial-policy", title: "Editorial Policy", sitemapAssignment: "education", pageType: "editorial-policy", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/about/how-we-make-money", title: "How We Make Money", sitemapAssignment: "education", pageType: "affiliate-policy", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/about/media-kit", title: "LipFlower Media Kit", sitemapAssignment: "education", pageType: "media-kit", priority: 0.7 }),
    makeRegistryEntry({ canonicalPath: "/contact", title: "Contact LipFlower", sitemapAssignment: "education", pageType: "contact", priority: 0.5 }),
    makeRegistryEntry({ canonicalPath: "/privacy-policy", title: "Privacy Policy", sitemapAssignment: "education", pageType: "policy", priority: 0.4 }),
    makeRegistryEntry({ canonicalPath: "/terms", title: "Terms of Use", sitemapAssignment: "education", pageType: "policy", priority: 0.4 }),
    ...beautyUniversityTopics.map((page) =>
      makeRegistryEntry({ canonicalPath: `/beauty-university/${page.slug}`, title: page.title, sitemapAssignment: "education", pageType: "education" }),
    ),
    ...beautySystemPages.map((page) =>
      makeRegistryEntry({ canonicalPath: `/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "system" }),
    ),
  ];
}

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

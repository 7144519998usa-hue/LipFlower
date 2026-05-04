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
} from "../app/lib/beautyData.js";
import { programmaticBestPages } from "../app/lib/programmaticSeoData.js";

function countBy(items, keyGetter) {
  return items.reduce((counts, item) => {
    const key = keyGetter(item) || "unknown";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function sortObjectByKey(value) {
  return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
}

const staticHubRoutes = [
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

const routeInventory = {
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

const generatedPublicRoutes =
  routeInventory.staticHubRoutes +
  routeInventory.categoryLandingPages +
  routeInventory.programmaticBestPages +
  routeInventory.comparisonPages +
  routeInventory.calculatorPages +
  routeInventory.brandPages +
  routeInventory.brandCategoryPages +
  routeInventory.sellerPages +
  routeInventory.categoryPages +
  routeInventory.beautyUniversityPages +
  routeInventory.systemPages;

const indexablePublicRoutes = generatedPublicRoutes - 1; // /search is intentionally noindex,follow.

const approvedProgrammaticPages = programmaticBestPages.filter(
  (page) => page.contentStatus === "approved" && page.governance?.indexabilityState === "indexable",
);

const summary = {
  project: "LipFlower",
  siteUrl: process.env.LIPFLOWER_SITE_URL || "https://lipflower.com",
  generatedPublicRoutes,
  indexablePublicRoutes,
  intentionallyNoindexRoutes: ["/search"],
  routeInventory,
  programmaticSeo: {
    totalBestPages: programmaticBestPages.length,
    approvedIndexableBestPages: approvedProgrammaticPages.length,
    byVertical: sortObjectByKey(countBy(programmaticBestPages, (page) => page.vertical)),
    byIndexability: sortObjectByKey(
      countBy(programmaticBestPages, (page) => page.governance?.indexabilityState),
    ),
  },
  commercialInventory: {
    brands: beautyBrands.length,
    brandCategoryPages: beautyBrandCategories.length,
    sellers: beautySellers.length,
    comparisons: beautyComparePages.length,
    calculators: beautyCalculators.length,
  },
  qaCommand: "npm run verify",
  productionVerifyCommand: "npm run verify:production",
};

console.log(JSON.stringify(summary, null, 2));

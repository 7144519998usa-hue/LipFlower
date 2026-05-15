import {
  beautyBrandCategories,
  beautyBrands,
  beautyCalculators,
  beautyComparePages,
  beautySellers,
  buildScriptBeautyPageRegistry,
  buildRouteInventory,
  countGeneratedPublicRoutes,
  intentionallyNoindexRoutes,
  programmaticBestPages,
  countBy,
  sortObjectByKey,
} from "./lib/route-engine.mjs";

const routeInventory = buildRouteInventory();
const registryEntries = buildScriptBeautyPageRegistry();
const approvedProgrammaticPages = programmaticBestPages.filter(
  (page) => page.contentStatus === "approved" && page.governance?.indexabilityState === "indexable",
);

const summary = {
  project: "LipFlower",
  siteUrl: process.env.LIPFLOWER_SITE_URL || "https://lipflower.com",
  generatedPublicRoutes: countGeneratedPublicRoutes(routeInventory),
  indexablePublicRoutes: registryEntries.filter((entry) => entry.indexabilityState === "indexable").length,
  intentionallyNoindexRoutes,
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
  fastQaCommand: "npm run verify:fast",
  productionVerifyCommand: "npm run verify:production",
};

console.log(JSON.stringify(summary, null, 2));

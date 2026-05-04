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

function countBy(items, keyGetter) {
  return items.reduce((counts, item) => {
    const key = keyGetter(item) || "unknown";
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function sortEntriesByCountAscending(counts) {
  return Object.entries(counts).sort(([, a], [, b]) => a - b);
}

function buildMilestoneProgress(indexableRoutes) {
  return [1000, 10000, 50000, 100000].map((target) => ({
    target,
    current: indexableRoutes,
    remaining: Math.max(target - indexableRoutes, 0),
    percentComplete: Number(Math.min((indexableRoutes / target) * 100, 100).toFixed(2)),
  }));
}

function getCoverageRisks({ indexableRoutes, commercialInventory, verticalCounts }) {
  const risks = [];

  if (indexableRoutes < 10000) {
    risks.push({
      area: "page-scale",
      severity: "medium",
      note: "The site has crossed the first 1k-route foundation, but still needs controlled expansion before it approaches 10k+ pages.",
    });
  }

  if (commercialInventory.brands < 25) {
    risks.push({
      area: "brand-depth",
      severity: "high",
      note: "Brand inventory is the clearest growth constraint. Add more governed brand hubs before scaling deeper comparisons.",
    });
  }

  if (commercialInventory.comparisons < 50) {
    risks.push({
      area: "comparison-depth",
      severity: "high",
      note: "Comparison pages are high-intent commercial routes. Expand cautiously with real product/brand value and internal links.",
    });
  }

  if (commercialInventory.sellers < 8) {
    risks.push({
      area: "seller-depth",
      severity: "medium",
      note: "Seller coverage is useful for affiliate trust and comparison routing. Add only reputable beauty sellers with clear disclosure paths.",
    });
  }

  sortEntriesByCountAscending(verticalCounts)
    .filter(([, count]) => count < 80)
    .forEach(([vertical, count]) => {
      risks.push({
        area: `${vertical}-coverage`,
        severity: "medium",
        note: `${vertical} has ${count} programmatic best pages. Consider adding category depth if the vertical is strategically important.`,
      });
    });

  return risks;
}

function buildNextActions({ commercialInventory, verticalCounts }) {
  const underbuiltVerticals = sortEntriesByCountAscending(verticalCounts)
    .filter(([, count]) => count < 120)
    .map(([vertical]) => vertical);

  return [
    {
      priority: 1,
      action: "Add brand hubs",
      target: "25 to 50 reputable beauty, skin care, makeup, fragrance, hair care, and artificial jewelry brands.",
      reason: `Current brand count is ${commercialInventory.brands}; brand depth improves trust, internal links, and comparison coverage.`,
    },
    {
      priority: 2,
      action: "Expand comparison pages",
      target: "50 to 200 high-intent product, brand, and category comparisons with unique verdicts.",
      reason: `Current comparison count is ${commercialInventory.comparisons}; comparison pages are commercial and useful when not thin.`,
    },
    {
      priority: 3,
      action: "Balance weaker verticals",
      target: underbuiltVerticals.length > 0 ? underbuiltVerticals.join(", ") : "Maintain current vertical balance.",
      reason: "Balanced vertical coverage keeps LipFlower from becoming over-weighted toward one beauty pillar.",
    },
    {
      priority: 4,
      action: "Add education-to-commerce bridges",
      target: "More Beauty University articles that link into best pages, sellers, comparisons, and category hubs.",
      reason: `Current Beauty University count is ${beautyUniversityTopics.length}; education pages help protect programmatic SEO from feeling thin.`,
    },
  ];
}

const staticIndexableRoutes = 30; // Static hubs, trust pages, and policy pages excluding /search.
const indexableRoutes =
  staticIndexableRoutes +
  beautyLandingPages.length +
  programmaticBestPages.length +
  beautyComparePages.length +
  beautyCalculators.length +
  beautyBrands.length +
  beautyBrandCategories.length +
  beautySellers.length +
  beautyCategoryPages.length +
  beautyUniversityTopics.length;

const verticalCounts = countBy(programmaticBestPages, (page) => page.vertical);
const commercialInventory = {
  brands: beautyBrands.length,
  brandCategoryPages: beautyBrandCategories.length,
  sellers: beautySellers.length,
  comparisons: beautyComparePages.length,
  calculators: beautyCalculators.length,
};

const report = {
  project: "LipFlower",
  indexableRoutes,
  milestoneProgress: buildMilestoneProgress(indexableRoutes),
  verticalProgrammaticCoverage: Object.fromEntries(sortEntriesByCountAscending(verticalCounts)),
  commercialInventory,
  editorialInventory: {
    categoryLandingPages: beautyLandingPages.length,
    categoryPages: beautyCategoryPages.length,
    beautyUniversityPages: beautyUniversityTopics.length,
  },
  risks: getCoverageRisks({ indexableRoutes, commercialInventory, verticalCounts }),
  nextActions: buildNextActions({ commercialInventory, verticalCounts }),
};

console.log(JSON.stringify(report, null, 2));

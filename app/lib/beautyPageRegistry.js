import {
  beautyBrands,
  beautyBrandCategories,
  beautyCalculators,
  beautyCategoryPages,
  beautyComparePages,
  beautyLandingPages,
  beautySellers,
  beautySiteUrl,
  beautySystemPages,
  beautyUniversityTopics,
  getBeautyHubPage,
} from "./beautyData.js";
import { programmaticBestPages } from "./programmaticSeoData.js";

function makeEntry({
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

let beautyPageRegistryCache;
let indexableBeautyPageRegistryCache;
const indexableBeautyPageRegistryByAssignmentCache = new Map();

export function buildBeautyPageRegistry() {
  if (beautyPageRegistryCache) {
    return beautyPageRegistryCache;
  }

  const homePage = getBeautyHubPage("home");

  beautyPageRegistryCache = [
    makeEntry({
      canonicalPath: "/",
      title: homePage.title,
      sitemapAssignment: "core",
      priority: 1,
      pageType: "home",
    }),
    ...beautyLandingPages.map((page) =>
      makeEntry({
        canonicalPath: `/${page.categoryPath}/${page.slug}`,
        title: page.title,
        sitemapAssignment: "commercial",
        pageType: "landing",
      }),
    ),
    makeEntry({
      canonicalPath: "/compare",
      title: "Luxury Beauty Comparisons",
      sitemapAssignment: "comparisons",
    }),
    makeEntry({
      canonicalPath: "/best",
      title: "Best Beauty Product Guides",
      sitemapAssignment: "programmatic",
      pageType: "best-hub",
    }),
    makeEntry({
      canonicalPath: "/shop",
      title: "Shop Beauty on Amazon",
      sitemapAssignment: "commercial",
      pageType: "amazon-shop",
      priority: 0.9,
      changeFrequency: "daily",
    }),
    ...programmaticBestPages.map((page) =>
      makeEntry({
        canonicalPath: `/best/${page.slug}`,
        title: page.title,
        sitemapAssignment: "programmatic",
        pageType: "best-programmatic",
        indexabilityState: page.governance.indexabilityState,
        publicationState: page.contentStatus === "approved" ? "published_indexable" : "live_noindex",
        priority: 0.7,
      }),
    ),
    makeEntry({
      canonicalPath: "/calculators",
      title: "Beauty Finders",
      sitemapAssignment: "commercial",
      pageType: "tool-hub",
    }),
    ...beautyCalculators.map((page) =>
      makeEntry({
        canonicalPath: `/calculators/${page.slug}`,
        title: page.title,
        sitemapAssignment: "commercial",
        pageType: "tool",
      }),
    ),
    ...beautyComparePages.map((page) =>
      makeEntry({
        canonicalPath: `/compare/${page.slug}`,
        title: page.title,
        sitemapAssignment: "comparisons",
        pageType: "comparison",
      }),
    ),
    makeEntry({
      canonicalPath: "/brands",
      title: "Luxury Beauty Brands",
      sitemapAssignment: "brands",
    }),
    ...beautyBrands.map((brand) =>
      makeEntry({
        canonicalPath: `/brands/${brand.slug}`,
        title: `${brand.name} Luxury Beauty`,
        sitemapAssignment: "brands",
        pageType: "brand",
      }),
    ),
    makeEntry({
      canonicalPath: "/sellers",
      title: "Luxury Beauty Sellers",
      sitemapAssignment: "sellers",
    }),
    ...beautySellers.map((seller) =>
      makeEntry({
        canonicalPath: `/sellers/${seller.slug}`,
        title: `${seller.name} Seller Profile`,
        sitemapAssignment: "sellers",
        pageType: "seller",
      }),
    ),
    ...beautyBrandCategories.map((page) =>
      makeEntry({
        canonicalPath: `/brands/${page.brandSlug}/${page.categorySlug}`,
        title: page.title,
        sitemapAssignment: "brands",
        pageType: "brand-category",
      }),
    ),
    ...beautyCategoryPages.map((page) =>
      makeEntry({
        canonicalPath: `/${page.slug}`,
        title: page.title,
        sitemapAssignment: "commercial",
        pageType: "category",
      }),
    ),
    makeEntry({
      canonicalPath: "/beauty-university",
      title: "Beauty University",
      sitemapAssignment: "education",
    }),
    makeEntry({
      canonicalPath: "/beauty-research",
      title: "LipFlower Beauty Research Library",
      sitemapAssignment: "education",
      pageType: "research-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-routines",
      title: "LipFlower Beauty Routine Library",
      sitemapAssignment: "education",
      pageType: "routine-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-gifts",
      title: "LipFlower Beauty Gift Guide Library",
      sitemapAssignment: "education",
      pageType: "gift-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-occasions",
      title: "LipFlower Beauty Occasion Library",
      sitemapAssignment: "education",
      pageType: "occasion-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-ingredients",
      title: "LipFlower Beauty Ingredient Library",
      sitemapAssignment: "education",
      pageType: "ingredient-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-finishes",
      title: "LipFlower Beauty Finish and Texture Library",
      sitemapAssignment: "education",
      pageType: "finish-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-shades",
      title: "LipFlower Beauty Shade and Color Library",
      sitemapAssignment: "education",
      pageType: "shade-library",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-glossary",
      title: "LipFlower Beauty Glossary",
      sitemapAssignment: "education",
      pageType: "glossary",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-calendar",
      title: "LipFlower Beauty Shopping Calendar",
      sitemapAssignment: "education",
      pageType: "seasonal-reference",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-checklists",
      title: "LipFlower Beauty Buying Checklists",
      sitemapAssignment: "education",
      pageType: "buying-checklists",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-seller-scorecard",
      title: "LipFlower Beauty Seller Scorecard",
      sitemapAssignment: "education",
      pageType: "seller-scorecard",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-claims-guide",
      title: "LipFlower Beauty Claims Guide",
      sitemapAssignment: "education",
      pageType: "claims-guide",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-methodology",
      title: "LipFlower Beauty Comparison Methodology",
      sitemapAssignment: "education",
      pageType: "comparison-methodology",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/beauty-faq",
      title: "LipFlower Beauty FAQ",
      sitemapAssignment: "education",
      pageType: "faq",
      priority: 0.85,
    }),
    makeEntry({
      canonicalPath: "/about",
      title: "About LipFlower",
      sitemapAssignment: "education",
      pageType: "trust",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/advertiser-disclosure",
      title: "Affiliate Disclosure",
      sitemapAssignment: "education",
      pageType: "disclosure",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/cite-lipflower",
      title: "Cite LipFlower",
      sitemapAssignment: "education",
      pageType: "editor-resource",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/editorial-policy",
      title: "Editorial Policy",
      sitemapAssignment: "education",
      pageType: "editorial-policy",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/how-we-make-money",
      title: "How We Make Money",
      sitemapAssignment: "education",
      pageType: "affiliate-policy",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/media-kit",
      title: "LipFlower Media Kit",
      sitemapAssignment: "education",
      pageType: "media-kit",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/contact",
      title: "Contact LipFlower",
      sitemapAssignment: "education",
      pageType: "contact",
      priority: 0.5,
    }),
    makeEntry({
      canonicalPath: "/privacy-policy",
      title: "Privacy Policy",
      sitemapAssignment: "education",
      pageType: "policy",
      priority: 0.4,
    }),
    makeEntry({
      canonicalPath: "/terms",
      title: "Terms of Use",
      sitemapAssignment: "education",
      pageType: "policy",
      priority: 0.4,
    }),
    ...beautyUniversityTopics.map((page) =>
      makeEntry({
        canonicalPath: `/beauty-university/${page.slug}`,
        title: page.title,
        sitemapAssignment: "education",
        pageType: "education",
      }),
    ),
    ...beautySystemPages.map((page) =>
      makeEntry({
        canonicalPath: `/${page.slug}`,
        title: page.title,
        sitemapAssignment: "commercial",
        pageType: "system",
      }),
    ),
  ];

  return beautyPageRegistryCache;
}

export function getIndexableBeautyPageRegistryEntries() {
  if (!indexableBeautyPageRegistryCache) {
    indexableBeautyPageRegistryCache = buildBeautyPageRegistry().filter(
      (entry) => entry.indexabilityState === "indexable",
    );
  }

  return indexableBeautyPageRegistryCache;
}

export function getIndexableBeautyPageRegistryEntriesByAssignment(assignments = []) {
  const normalizedAssignments = Array.isArray(assignments) ? assignments : [assignments];
  const cacheKey = [...normalizedAssignments].sort().join("|");

  if (!indexableBeautyPageRegistryByAssignmentCache.has(cacheKey)) {
    indexableBeautyPageRegistryByAssignmentCache.set(
      cacheKey,
      getIndexableBeautyPageRegistryEntries().filter((entry) =>
        normalizedAssignments.includes(entry.sitemapAssignment),
      ),
    );
  }

  return indexableBeautyPageRegistryByAssignmentCache.get(cacheKey);
}

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
} from "./beautyData";
import { programmaticBestPages } from "./programmaticSeoData";

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

export function buildBeautyPageRegistry() {
  const homePage = getBeautyHubPage("home");

  return [
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
      canonicalPath: "/about/cite-lipflower",
      title: "Cite LipFlower",
      sitemapAssignment: "education",
      pageType: "editor-resource",
      priority: 0.7,
    }),
    makeEntry({
      canonicalPath: "/about/media-kit",
      title: "LipFlower Media Kit",
      sitemapAssignment: "education",
      pageType: "media-kit",
      priority: 0.7,
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
}

export function getIndexableBeautyPageRegistryEntries() {
  return buildBeautyPageRegistry().filter((entry) => entry.indexabilityState === "indexable");
}

export function getIndexableBeautyPageRegistryEntriesByAssignment(assignments = []) {
  const normalizedAssignments = Array.isArray(assignments) ? assignments : [assignments];
  return getIndexableBeautyPageRegistryEntries().filter((entry) =>
    normalizedAssignments.includes(entry.sitemapAssignment),
  );
}

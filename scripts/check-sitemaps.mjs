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
} from "../app/lib/beautyData.js";
import { programmaticBestPages } from "../app/lib/programmaticSeoData.js";

const sitemapSections = [
  { slug: "beauty-core", assignments: ["core"] },
  { slug: "beauty-commercial", assignments: ["commercial"] },
  { slug: "beauty-programmatic", assignments: ["programmatic"] },
  { slug: "beauty-comparisons", assignments: ["comparisons"] },
  { slug: "beauty-brands", assignments: ["brands"] },
  { slug: "beauty-sellers", assignments: ["sellers"] },
  { slug: "beauty-education", assignments: ["education"] },
];

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

function buildRegistryEntries() {
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
    makeEntry({ canonicalPath: "/compare", title: "Luxury Beauty Comparisons", sitemapAssignment: "comparisons" }),
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
    makeEntry({ canonicalPath: "/calculators", title: "Beauty Finders", sitemapAssignment: "commercial", pageType: "tool-hub" }),
    ...beautyCalculators.map((page) =>
      makeEntry({ canonicalPath: `/calculators/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "tool" }),
    ),
    ...beautyComparePages.map((page) =>
      makeEntry({ canonicalPath: `/compare/${page.slug}`, title: page.title, sitemapAssignment: "comparisons", pageType: "comparison" }),
    ),
    makeEntry({ canonicalPath: "/brands", title: "Luxury Beauty Brands", sitemapAssignment: "brands" }),
    ...beautyBrands.map((brand) =>
      makeEntry({ canonicalPath: `/brands/${brand.slug}`, title: `${brand.name} Luxury Beauty`, sitemapAssignment: "brands", pageType: "brand" }),
    ),
    makeEntry({ canonicalPath: "/sellers", title: "Luxury Beauty Sellers", sitemapAssignment: "sellers" }),
    ...beautySellers.map((seller) =>
      makeEntry({ canonicalPath: `/sellers/${seller.slug}`, title: `${seller.name} Seller Profile`, sitemapAssignment: "sellers", pageType: "seller" }),
    ),
    ...beautyBrandCategories.map((page) =>
      makeEntry({ canonicalPath: `/brands/${page.brandSlug}/${page.categorySlug}`, title: page.title, sitemapAssignment: "brands", pageType: "brand-category" }),
    ),
    ...beautyCategoryPages.map((page) =>
      makeEntry({ canonicalPath: `/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "category" }),
    ),
    makeEntry({ canonicalPath: "/beauty-university", title: "Beauty University", sitemapAssignment: "education" }),
    makeEntry({ canonicalPath: "/beauty-research", title: "LipFlower Beauty Research Library", sitemapAssignment: "education", pageType: "research-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-routines", title: "LipFlower Beauty Routine Library", sitemapAssignment: "education", pageType: "routine-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-gifts", title: "LipFlower Beauty Gift Guide Library", sitemapAssignment: "education", pageType: "gift-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-occasions", title: "LipFlower Beauty Occasion Library", sitemapAssignment: "education", pageType: "occasion-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-ingredients", title: "LipFlower Beauty Ingredient Library", sitemapAssignment: "education", pageType: "ingredient-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-finishes", title: "LipFlower Beauty Finish and Texture Library", sitemapAssignment: "education", pageType: "finish-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-shades", title: "LipFlower Beauty Shade and Color Library", sitemapAssignment: "education", pageType: "shade-library", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-glossary", title: "LipFlower Beauty Glossary", sitemapAssignment: "education", pageType: "glossary", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-calendar", title: "LipFlower Beauty Shopping Calendar", sitemapAssignment: "education", pageType: "seasonal-reference", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-checklists", title: "LipFlower Beauty Buying Checklists", sitemapAssignment: "education", pageType: "buying-checklists", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-seller-scorecard", title: "LipFlower Beauty Seller Scorecard", sitemapAssignment: "education", pageType: "seller-scorecard", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-claims-guide", title: "LipFlower Beauty Claims Guide", sitemapAssignment: "education", pageType: "claims-guide", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-methodology", title: "LipFlower Beauty Comparison Methodology", sitemapAssignment: "education", pageType: "comparison-methodology", priority: 0.85 }),
    makeEntry({ canonicalPath: "/beauty-faq", title: "LipFlower Beauty FAQ", sitemapAssignment: "education", pageType: "faq", priority: 0.85 }),
    makeEntry({ canonicalPath: "/about/cite-lipflower", title: "Cite LipFlower", sitemapAssignment: "education", pageType: "editor-resource", priority: 0.7 }),
    makeEntry({ canonicalPath: "/about/media-kit", title: "LipFlower Media Kit", sitemapAssignment: "education", pageType: "media-kit", priority: 0.7 }),
    ...beautyUniversityTopics.map((page) =>
      makeEntry({ canonicalPath: `/beauty-university/${page.slug}`, title: page.title, sitemapAssignment: "education", pageType: "education" }),
    ),
    ...beautySystemPages.map((page) =>
      makeEntry({ canonicalPath: `/${page.slug}`, title: page.title, sitemapAssignment: "commercial", pageType: "system" }),
    ),
  ];
}

const registryEntries = buildRegistryEntries();
const sitemapSectionSlugs = new Set(sitemapSections.map((section) => section.slug));
const assignmentSlugs = new Set(sitemapSections.flatMap((section) => section.assignments));
const indexableEntries = registryEntries.filter((entry) => entry.indexabilityState === "indexable");
const nonIndexableInSitemap = registryEntries.filter(
  (entry) => entry.indexabilityState !== "indexable" && assignmentSlugs.has(entry.sitemapAssignment),
);
const missingAssignments = registryEntries.filter((entry) => !assignmentSlugs.has(entry.sitemapAssignment));

const urls = indexableEntries.map((entry) => entry.canonicalUrl || entry.url);
const duplicateUrls = urls
  .filter((url, index) => urls.indexOf(url) !== index)
  .filter((url, index, list) => list.indexOf(url) === index)
  .sort();

const byAssignment = indexableEntries.reduce((counts, entry) => {
  counts[entry.sitemapAssignment] = (counts[entry.sitemapAssignment] || 0) + 1;
  return counts;
}, {});

const sectionCounts = sitemapSections.reduce((counts, section) => {
  counts[section.slug] = indexableEntries.filter((entry) =>
    section.assignments.includes(entry.sitemapAssignment),
  ).length;
  return counts;
}, {});

const emptySections = Object.entries(sectionCounts)
  .filter(([, count]) => count === 0)
  .map(([section]) => section);

const summary = {
  totalRegistryEntries: registryEntries.length,
  indexableEntries: indexableEntries.length,
  sitemapSections: [...sitemapSectionSlugs],
  sectionCounts,
  byAssignment,
  duplicateUrlCount: duplicateUrls.length,
  duplicateUrls,
  missingAssignmentCount: missingAssignments.length,
  missingAssignments: missingAssignments.map((entry) => ({
    canonicalPath: entry.canonicalPath,
    sitemapAssignment: entry.sitemapAssignment,
  })),
  nonIndexableInSitemapCount: nonIndexableInSitemap.length,
  emptySections,
};

console.log(JSON.stringify(summary, null, 2));

if (duplicateUrls.length > 0) {
  console.error(`${duplicateUrls.length} duplicate sitemap URLs found.`);
  process.exitCode = 1;
}

if (missingAssignments.length > 0) {
  console.error(`${missingAssignments.length} registry entries use unknown sitemap assignments.`);
  process.exitCode = 1;
}

if (nonIndexableInSitemap.length > 0) {
  console.error(`${nonIndexableInSitemap.length} non-indexable entries are assigned to sitemap sections.`);
  process.exitCode = 1;
}

if (emptySections.length > 0) {
  console.error(`Empty sitemap sections: ${emptySections.join(", ")}.`);
  process.exitCode = 1;
}

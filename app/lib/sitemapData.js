import {
  getIndexableBeautyPageRegistryEntries,
  getIndexableBeautyPageRegistryEntriesByAssignment,
} from "./beautyPageRegistry";

const sitemapSections = [
  { slug: "beauty-core", assignments: ["core"] },
  { slug: "beauty-commercial", assignments: ["commercial"] },
  { slug: "beauty-programmatic", assignments: ["programmatic"] },
  { slug: "beauty-comparisons", assignments: ["comparisons"] },
  { slug: "beauty-brands", assignments: ["brands"] },
  { slug: "beauty-sellers", assignments: ["sellers"] },
  { slug: "beauty-education", assignments: ["education"] },
];

function dedupeSitemapEntries(entries) {
  const deduped = new Map();

  entries.forEach((entry) => {
    deduped.set(entry.canonicalUrl || entry.url, entry);
  });

  return [...deduped.values()].sort((left, right) =>
    (left.canonicalUrl || left.url).localeCompare(right.canonicalUrl || right.url),
  );
}

export function getSitemapSections() {
  return sitemapSections;
}

export async function getSitemapEntries() {
  return dedupeSitemapEntries(getIndexableBeautyPageRegistryEntries());
}

export async function getSitemapEntriesForSection(sectionSlug) {
  const section = getSitemapSections().find((item) => item.slug === sectionSlug);
  if (!section) {
    return [];
  }

  return dedupeSitemapEntries(getIndexableBeautyPageRegistryEntriesByAssignment(section.assignments));
}

export function getSitemapIndexUrl(siteUrl) {
  return `${siteUrl}/sitemap_index.xml`;
}

export function getSitemapUrls(siteUrl) {
  return [
    `${siteUrl}/sitemap.xml`,
    ...getSitemapSections().map((section) => `${siteUrl}/sitemaps/${section.slug}/sitemap.xml`),
  ];
}

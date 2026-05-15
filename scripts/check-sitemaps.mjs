import {
  buildScriptBeautyPageRegistry,
  sitemapSections,
} from "./lib/route-engine.mjs";

const sitemapSectionSlugs = new Set(sitemapSections.map((section) => section.slug));
const assignmentSlugs = new Set(sitemapSections.flatMap((section) => section.assignments));
const registryEntries = buildScriptBeautyPageRegistry();
const indexableEntries = registryEntries.filter((entry) => entry.indexabilityState === "indexable");
const nonIndexableInSitemap = registryEntries.filter(
  (entry) =>
    entry.indexabilityState !== "indexable" &&
    entry.publicationState !== "live_noindex" &&
    assignmentSlugs.has(entry.sitemapAssignment),
);
const missingAssignments = indexableEntries.filter((entry) => !assignmentSlugs.has(entry.sitemapAssignment));

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

import {
  beautyBrands,
  beautyCalculators,
  beautyCategoryPages,
  beautyComparePages,
  beautyLandingPages,
  beautySellers,
  beautySystemPages,
  beautyUniversityTopics,
} from "./beautyData.js";
import { programmaticBestPages } from "./programmaticSeoData.js";

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createEntry({ href, title, description, pageType, keywords = [] }) {
  const haystack = normalize([title, description, keywords.join(" ")].join(" "));
  return {
    href,
    title,
    description,
    pageType,
    haystack,
  };
}

export function buildSearchIndex() {
  return [
    createEntry({
      href: "/luxury-beauty",
      title: "Luxury Beauty Edit",
      description: "Explore premium skin care, makeup, fragrance, lip care, brands, and sellers.",
      pageType: "hub",
      keywords: ["beauty", "luxury", "skin care", "makeup", "lip care", "fragrance"],
    }),
    ...beautyLandingPages.map((page) =>
      createEntry({
        href: `/${page.categoryPath}/${page.slug}`,
        title: page.title,
        description: page.summary,
        pageType: "beauty guide",
        keywords: page.relatedLinks || [],
      }),
    ),
    ...beautyComparePages.map((page) =>
      createEntry({
        href: `/compare/${page.slug}`,
        title: page.title,
        description: page.summary,
        pageType: "comparison",
        keywords: page.columns || [],
      }),
    ),
    ...programmaticBestPages.map((page) =>
      createEntry({
        href: `/best/${page.slug}`,
        title: page.title,
        description: page.summary,
        pageType: "best guide",
        keywords: [
          page.seoKeyword,
          page.vertical,
          page.categoryPlural,
          page.intentLabel,
          ...page.examples,
        ],
      }),
    ),
    ...beautyCalculators.map((page) =>
      createEntry({
        href: `/calculators/${page.slug}`,
        title: page.title,
        description: page.summary,
        pageType: "calculator",
      }),
    ),
    ...beautyBrands.map((brand) =>
      createEntry({
        href: `/brands/${brand.slug}`,
        title: `${brand.name} Luxury Beauty`,
        description: brand.description,
        pageType: "brand",
      }),
    ),
    ...beautySellers.map((seller) =>
      createEntry({
        href: `/sellers/${seller.slug}`,
        title: `${seller.name} Seller Profile`,
        description: seller.description,
        pageType: "seller",
        keywords: seller.bestFor,
      }),
    ),
    ...beautyCategoryPages.map((page) =>
      createEntry({
        href: `/${page.slug}`,
        title: page.title,
        description: page.description,
        pageType: "category",
      }),
    ),
    ...beautySystemPages.map((page) =>
      createEntry({
        href: `/${page.slug}`,
        title: page.title,
        description: page.description,
        pageType: "system",
      }),
    ),
    ...beautyUniversityTopics.map((page) =>
      createEntry({
        href: `/beauty-university/${page.slug}`,
        title: page.title,
        description: page.description,
        pageType: "education",
      }),
    ),
  ];
}

export function searchSite(query = "") {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(" ").filter(Boolean);

  return buildSearchIndex()
    .map((entry) => {
      let score = 0;

      terms.forEach((term) => {
        if (entry.haystack.includes(term)) {
          score += entry.title.toLowerCase().includes(term) ? 3 : 1;
        }
      });

      return { ...entry, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
    .slice(0, 24);
}

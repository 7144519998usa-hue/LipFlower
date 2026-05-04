const siteUrl = process.env.LIPFLOWER_VERIFY_URL || "https://lipflower.com";

const checks = [
  { path: "/", status: 200, name: "homepage" },
  { path: "/robots.txt", status: 200, name: "robots" },
  { path: "/sitemap_index.xml", status: 200, name: "sitemap index" },
  { path: "/sitemaps/beauty-programmatic/sitemap.xml", status: 200, name: "programmatic sitemap" },
  { path: "/beauty-research", status: 200, name: "beauty research library" },
  { path: "/beauty-routines", status: 200, name: "beauty routine library" },
  { path: "/beauty-gifts", status: 200, name: "beauty gift library" },
  { path: "/beauty-occasions", status: 200, name: "beauty occasion library" },
  { path: "/beauty-ingredients", status: 200, name: "beauty ingredient library" },
  { path: "/beauty-finishes", status: 200, name: "beauty finish library" },
  { path: "/beauty-shades", status: 200, name: "beauty shade library" },
  { path: "/beauty-glossary", status: 200, name: "beauty glossary" },
  { path: "/beauty-calendar", status: 200, name: "beauty shopping calendar" },
  { path: "/beauty-checklists", status: 200, name: "beauty buying checklists" },
  { path: "/beauty-seller-scorecard", status: 200, name: "beauty seller scorecard" },
  { path: "/beauty-claims-guide", status: 200, name: "beauty claims guide" },
  { path: "/beauty-methodology", status: 200, name: "beauty methodology" },
  { path: "/beauty-faq", status: 200, name: "beauty faq" },
  { path: "/about", status: 200, name: "about page" },
  { path: "/about/advertiser-disclosure", status: 200, name: "affiliate disclosure" },
  { path: "/about/editorial-policy", status: 200, name: "editorial policy" },
  { path: "/about/how-we-make-money", status: 200, name: "monetization policy" },
  { path: "/about/media-kit", status: 200, name: "media kit" },
  { path: "/about/cite-lipflower", status: 200, name: "citation resource" },
  { path: "/contact", status: 200, name: "contact page" },
  { path: "/privacy-policy", status: 200, name: "privacy policy" },
  { path: "/terms", status: 200, name: "terms page" },
  { path: "/search", status: 200, name: "site search" },
  { path: "/beauty-university/fragrance-family-reference-chart", status: 200, name: "reference guide" },
  { path: "/artificial-jewelry", status: 200, name: "artificial jewelry hub" },
  { path: "/artificial-jewelry/fashion-earrings", status: 200, name: "artificial jewelry landing page" },
  { path: "/best/best-artificial-earrings", status: 200, name: "artificial jewelry programmatic page" },
  { path: "/best/best-luxury-moisturizer", status: 200, name: "programmatic page" },
  { path: "/_vercel/insights/script.js", status: 200, name: "Vercel Analytics script" },
  { path: "/api/v1/system/page-registry", status: 404, name: "protected page registry" },
  { path: "/api/v1/system/programmatic-governance", status: 404, name: "protected governance endpoint" },
];

async function checkUrl({ path, status, name }) {
  const response = await fetch(`${siteUrl}${path}`, { method: "HEAD", redirect: "manual" });

  if (response.status !== status) {
    throw new Error(`${name} expected ${status}, received ${response.status} for ${path}`);
  }

  return { name, path, status: response.status };
}

async function verifySitemapIndex() {
  const response = await fetch(`${siteUrl}/sitemap_index.xml`);
  const xml = await response.text();
  const hasFullSitemap = xml.includes("<loc>https://lipflower.com/sitemap.xml</loc>");
  const requiredSitemapSections = [
    "/sitemaps/beauty-core/sitemap.xml",
    "/sitemaps/beauty-commercial/sitemap.xml",
    "/sitemaps/beauty-programmatic/sitemap.xml",
    "/sitemaps/beauty-comparisons/sitemap.xml",
    "/sitemaps/beauty-brands/sitemap.xml",
    "/sitemaps/beauty-sellers/sitemap.xml",
    "/sitemaps/beauty-education/sitemap.xml",
  ];
  const missingSitemapSections = requiredSitemapSections.filter((section) => !xml.includes(section));

  if (hasFullSitemap) {
    throw new Error("sitemap_index.xml should not include the full /sitemap.xml fallback");
  }

  if (missingSitemapSections.length) {
    throw new Error(`sitemap_index.xml is missing sections: ${missingSitemapSections.join(", ")}`);
  }

  return { name: "sitemap segmentation", path: "/sitemap_index.xml", status: response.status };
}

async function verifySearchNoindex() {
  const response = await fetch(`${siteUrl}/search`);
  const html = await response.text();

  if (!html.includes("noindex")) {
    throw new Error("/search should render noindex metadata");
  }

  return { name: "search noindex", path: "/search", status: response.status };
}

const results = [];

for (const check of checks) {
  results.push(await checkUrl(check));
}

results.push(await verifySitemapIndex());
results.push(await verifySearchNoindex());

console.log(JSON.stringify({ siteUrl, checks: results }, null, 2));

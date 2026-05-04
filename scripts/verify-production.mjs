const siteUrl = process.env.LIPFLOWER_VERIFY_URL || "https://lipflower.com";

const checks = [
  { path: "/", status: 200, name: "homepage" },
  { path: "/robots.txt", status: 200, name: "robots" },
  { path: "/sitemap_index.xml", status: 200, name: "sitemap index" },
  { path: "/sitemaps/beauty-programmatic/sitemap.xml", status: 200, name: "programmatic sitemap" },
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
  const hasProgrammaticSitemap = xml.includes("/sitemaps/beauty-programmatic/sitemap.xml");

  if (hasFullSitemap) {
    throw new Error("sitemap_index.xml should not include the full /sitemap.xml fallback");
  }

  if (!hasProgrammaticSitemap) {
    throw new Error("sitemap_index.xml is missing the beauty-programmatic sitemap");
  }

  return { name: "sitemap segmentation", path: "/sitemap_index.xml", status: response.status };
}

const results = [];

for (const check of checks) {
  results.push(await checkUrl(check));
}

results.push(await verifySitemapIndex());

console.log(JSON.stringify({ siteUrl, checks: results }, null, 2));

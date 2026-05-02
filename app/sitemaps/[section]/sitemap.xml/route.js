import { appEnv } from "../../../lib/env";
import { getSitemapEntriesForSection } from "../../../lib/sitemapData";

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function renderUrlset(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `<url>
<loc>${escapeXml(entry.canonicalUrl)}</loc>
<changefreq>${escapeXml(entry.changeFrequency)}</changefreq>
<priority>${escapeXml(entry.priority)}</priority>
</url>`,
  )
  .join("\n")}
</urlset>`;
}

export async function GET(_request, { params }) {
  const { section } = await params;
  const entries = appEnv.isNonProduction ? [] : await getSitemapEntriesForSection(section);

  return new Response(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

import { appEnv, publicEnv } from "../lib/env";
import { getSitemapUrls } from "../lib/sitemapData";
import { renderSitemapIndexXml } from "../lib/sitemapXml";

export async function GET() {
  const sitemapUrls = appEnv.isNonProduction ? [] : getSitemapUrls(publicEnv.siteUrl);
  const xml = renderSitemapIndexXml(sitemapUrls);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}

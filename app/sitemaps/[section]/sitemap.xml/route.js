import { appEnv } from "../../../lib/env";
import { getSitemapEntriesForSection } from "../../../lib/sitemapData";
import { renderUrlsetXml } from "../../../lib/sitemapXml";

export async function GET(_request, { params }) {
  const { section } = await params;
  const entries = appEnv.isNonProduction ? [] : await getSitemapEntriesForSection(section);

  return new Response(renderUrlsetXml(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

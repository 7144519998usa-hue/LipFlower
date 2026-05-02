import { appEnv } from "./lib/env";
import { getSitemapEntries } from "./lib/sitemapData";

export default async function sitemap() {
  if (appEnv.isNonProduction) {
    return [];
  }

  const entries = await getSitemapEntries();

  return entries.map((entry) => ({
    url: entry.canonicalUrl || entry.url,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

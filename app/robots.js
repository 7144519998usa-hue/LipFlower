import { appEnv, publicEnv } from "./lib/env";
import { getSitemapIndexUrl } from "./lib/sitemapData";

export default function robots() {
  if (appEnv.isNonProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*?*utm_", "/*?*page=", "/*?*sort="]
      }
    ],
    sitemap: getSitemapIndexUrl(publicEnv.siteUrl)
  };
}

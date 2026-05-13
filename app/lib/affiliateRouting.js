import { beautySellers } from "./beautyData.js";
import { publicEnv } from "./env.js";
import { createAmazonDirectProductUrl } from "./amazonVerifiedProducts.js";

const allowedAffiliateHosts = new Set(
  beautySellers.map((seller) => new URL(seller.affiliateUrl).hostname.toLowerCase()),
);

function safeParam(value = "", fallback = "") {
  return String(value || fallback)
    .replace(/[^\w\s:./-]/g, "")
    .trim()
    .slice(0, 120);
}

export function createAffiliateOutboundHref({ href, source = "site", label = "affiliate" }) {
  const params = new URLSearchParams({
    url: href,
    source: safeParam(source, "site"),
    label: safeParam(label, "affiliate"),
  });

  return `/api/outbound?${params.toString()}`;
}

export function createAmazonSearchUrl(query = "") {
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", String(query || "luxury beauty").trim() || "luxury beauty");

  if (publicEnv.amazonAssociateTag) {
    url.searchParams.set("tag", publicEnv.amazonAssociateTag);
  }

  return url.toString();
}

export function createAmazonProductUrl(asin = "") {
  return createAmazonDirectProductUrl(asin);
}

export function createSellerSearchUrl(seller, query = "") {
  const searchQuery = String(query || "luxury beauty").trim() || "luxury beauty";
  const encodedQuery = encodeURIComponent(searchQuery);

  if (seller.slug === "amazon") {
    return createAmazonSearchUrl(searchQuery);
  }

  if (seller.slug === "sephora") {
    return `https://www.sephora.com/search?keyword=${encodedQuery}`;
  }

  if (seller.slug === "ulta") {
    return `https://www.ulta.com/search?search=${encodedQuery}`;
  }

  return seller.affiliateUrl;
}

export function getSafeAffiliateDestination(rawUrl = "") {
  try {
    const destination = new URL(rawUrl);
    const isHttps = destination.protocol === "https:";
    const hostname = destination.hostname.toLowerCase();

    if (!isHttps || !allowedAffiliateHosts.has(hostname)) {
      return null;
    }

    return destination.toString();
  } catch {
    return null;
  }
}

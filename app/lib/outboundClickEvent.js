import { beautyComparePages, beautySellers } from "./beautyData.js";
import { programmaticBestPages } from "./programmaticSeoData.js";

const sellerByHost = new Map(
  beautySellers.map((seller) => [new URL(seller.affiliateUrl).hostname.toLowerCase(), seller]),
);

function safeAnalyticsValue(value = "", fallback = "unknown") {
  return String(value || fallback)
    .replace(/[^\w\s:./-]/g, "")
    .trim()
    .slice(0, 160);
}

function inferSourceType(source = "") {
  if (source.startsWith("best-product-")) {
    return "best_product_card";
  }

  if (source.startsWith("best-")) {
    return "best_seller_panel";
  }

  if (source.startsWith("compare-")) {
    return "comparison_offer_panel";
  }

  if (source.startsWith("sticky-best-")) {
    return "sticky_best_cta";
  }

  if (source.startsWith("sticky-compare-")) {
    return "sticky_comparison_cta";
  }

  return source || "unknown";
}

function inferPageFamily(source = "") {
  if (source.includes("best-")) {
    return "best";
  }

  if (source.includes("compare-")) {
    return "compare";
  }

  if (source.includes("seller")) {
    return "seller";
  }

  return "site";
}

function inferKnownPage(source = "") {
  let bestSlug = "";
  let compareSlug = "";

  if (source.startsWith("best-product-")) {
    bestSlug = source.slice("best-product-".length);
  } else if (source.startsWith("sticky-best-")) {
    bestSlug = source.slice("sticky-best-".length);
  } else if (source.startsWith("best-")) {
    bestSlug = source.slice("best-".length);
  }

  if (source.startsWith("sticky-compare-")) {
    compareSlug = source.slice("sticky-compare-".length);
  } else if (source.startsWith("compare-")) {
    compareSlug = source.slice("compare-".length);
  }

  if (bestSlug && programmaticBestPages.some((page) => page.slug === bestSlug)) {
    return `/best/${bestSlug}`;
  }

  if (compareSlug && beautyComparePages.some((page) => page.slug === compareSlug)) {
    return `/compare/${compareSlug}`;
  }

  return "";
}

function getSellerForDestination(destination) {
  if (!destination) {
    return null;
  }

  const hostname = new URL(destination).hostname.toLowerCase();
  return sellerByHost.get(hostname) || null;
}

export function buildOutboundClickEvent({ request, destination, status, elapsedMs }) {
  const source = safeAnalyticsValue(request.nextUrl.searchParams.get("source"));
  const label = safeAnalyticsValue(request.nextUrl.searchParams.get("label"), "affiliate");
  const seller = getSellerForDestination(destination);

  return {
    eventVersion: 1,
    eventName: "outbound_affiliate_click",
    status,
    pageFamily: inferPageFamily(source),
    sourceType: inferSourceType(source),
    source,
    label,
    knownPagePath: inferKnownPage(source),
    sellerSlug: seller?.slug || "blocked",
    sellerName: seller?.name || "Blocked",
    destinationHost: destination ? new URL(destination).hostname : "blocked",
    route: "/api/outbound",
    requestId: request.headers.get("x-vercel-id") || "",
    userAgentHint: safeAnalyticsValue(request.headers.get("sec-ch-ua-platform"), "unknown"),
    elapsedMs,
  };
}

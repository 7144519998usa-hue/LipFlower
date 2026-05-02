import { beautySellers } from "./beautyData";

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

export function getOutboundLogContext(request, destination) {
  const source = safeParam(request.nextUrl.searchParams.get("source"), "unknown");
  const label = safeParam(request.nextUrl.searchParams.get("label"), "affiliate");
  const destinationHost = destination ? new URL(destination).hostname : "blocked";

  return {
    route: "/api/outbound",
    source,
    label,
    destinationHost,
    requestId: request.headers.get("x-vercel-id") || "",
  };
}

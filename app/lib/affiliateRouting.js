import { beautySellers } from "./beautyData";

const allowedAffiliateHosts = new Set(
  beautySellers.map((seller) => new URL(seller.affiliateUrl).hostname),
);

export function createAffiliateOutboundHref({ href, source = "site", label = "affiliate" }) {
  const params = new URLSearchParams({
    url: href,
    source,
    label,
  });

  return `/api/outbound?${params.toString()}`;
}

export function getSafeAffiliateDestination(rawUrl = "") {
  try {
    const destination = new URL(rawUrl);
    const isHttp = destination.protocol === "https:" || destination.protocol === "http:";

    if (!isHttp || !allowedAffiliateHosts.has(destination.hostname)) {
      return null;
    }

    return destination.toString();
  } catch {
    return null;
  }
}

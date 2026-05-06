import AffiliateLink from "./AffiliateLink";
import { createSellerSearchUrl } from "../lib/affiliateRouting.js";

export default function StickyCommerceBar({ label, query, sellers = [], source }) {
  const primarySeller = sellers.find((seller) => seller.slug === "amazon") || sellers[0];

  if (!primarySeller) {
    return null;
  }

  return (
    <aside className="sticky-commerce-bar" aria-label="Shopping shortcut">
      <div>
        <strong>{label}</strong>
        <span>Verify price, seller, shade, size, and return terms before buying.</span>
      </div>
      <AffiliateLink
        href={createSellerSearchUrl(primarySeller, query)}
        label={`Check current seller options for ${query}`}
        source={source}
      >
        Check Price
      </AffiliateLink>
    </aside>
  );
}

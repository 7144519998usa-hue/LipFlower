import AffiliateLink from "./AffiliateLink";
import { createSellerSearchUrl } from "../lib/affiliateRouting.js";

export default function ComparisonOfferBlock({ columns = [], sellers = [], source }) {
  const featuredSellers = sellers.filter((seller) => ["amazon", "sephora", "ulta"].includes(seller.slug));

  if (!columns.length || !featuredSellers.length) {
    return null;
  }

  return (
    <section className="catalog-grid-section">
      <article className="catalog-card conversion-panel">
        <span className="eyebrow">Shop carefully</span>
        <h2>Check seller availability for each option</h2>
        <p>
          Use these retailer links to verify price, shade or size availability, official seller
          signals, return terms, and current product details before buying.
        </p>
        <div className="offer-grid">
          {columns.map((column) => (
            <div key={column} className="offer-card">
              <h3>{column}</h3>
              <p className="trust-note">
                Compare this option across trusted beauty sellers before choosing.
              </p>
              <div className="catalog-stack">
                {featuredSellers.map((seller) => (
                  <AffiliateLink
                    key={`${column}-${seller.slug}`}
                    href={createSellerSearchUrl(seller, column)}
                    label={`Check ${column} at ${seller.name}`}
                    source={source}
                  >
                    Check Price
                  </AffiliateLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

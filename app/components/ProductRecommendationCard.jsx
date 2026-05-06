import AffiliateLink from "./AffiliateLink";
import { createSellerSearchUrl } from "../lib/affiliateRouting.js";

export default function ProductRecommendationCard({ product, sellers = [], source }) {
  const featuredSellers = sellers.filter((seller) => ["amazon", "sephora", "ulta"].includes(seller.slug));

  return (
    <article className="product-card">
      <div className="product-art" aria-hidden="true">
        <span>{product.brand.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="product-card-body">
        <div className="product-card-meta">
          <span className="product-badge">{product.badge}</span>
          <span className="price-tier" aria-label={`Price tier ${product.priceTier.length}`}>
            {product.priceTier}
          </span>
        </div>
        <p className="eyebrow">{product.brand}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <p className="trust-note">
          <strong>Best for:</strong> {product.bestFor}
        </p>
        <div className="product-proof-grid">
          <div>
            <strong>Why shoppers compare it</strong>
            <ul className="fact-list">
              {product.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Check before buying</strong>
            <ul className="fact-list">
              {product.cons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        {featuredSellers.length ? (
          <div className="merchant-mini-grid" aria-label={`Seller options for ${product.name}`}>
            {featuredSellers.map((seller) => (
              <AffiliateLink
                key={`${product.id}-${seller.slug}`}
                href={createSellerSearchUrl(seller, product.sellerQuery)}
                label={`Check ${product.name} at ${seller.name}`}
                source={source}
                className="merchant-mini-link"
              >
                <span>{seller.name}</span>
                <strong>Check Price</strong>
              </AffiliateLink>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

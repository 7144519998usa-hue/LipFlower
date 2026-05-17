import AffiliateLink from "./AffiliateLink";
import { createAmazonSearchUrl } from "../lib/affiliateRouting.js";

export default function AmazonStoreProductCard({ product }) {
  return (
    <article className="amazon-store-card">
      <div className={`amazon-store-art amazon-store-art-${product.categorySlug}`} aria-hidden="true">
        <span>{product.accent}</span>
      </div>
      <div className="amazon-store-card-body">
        <div className="amazon-store-meta">
          <span>{product.badge}</span>
          <span>{product.priceCue}</span>
        </div>
        <p className="eyebrow">{product.categoryLabel}</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <AffiliateLink
          href={createAmazonSearchUrl(product.searchQuery)}
          label={`Check Amazon price for ${product.title}`}
          source={`amazon-shop-${product.id}`}
          className="amazon-store-cta"
        >
          {product.amazonLabel}
        </AffiliateLink>
      </div>
    </article>
  );
}

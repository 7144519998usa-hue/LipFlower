import AffiliateLink from "./AffiliateLink";
import { createAmazonSearchUrl } from "../lib/affiliateRouting.js";

export default function AmazonStoreProductCard({ product }) {
  return (
    <article id={product.id} className="amazon-store-card">
      <div className={`amazon-store-art amazon-store-art-${product.categorySlug}`} aria-hidden="true">
        <span>{product.accent}</span>
        <div className="store-visual-kit">
          <i className="store-visual-bottle" />
          <i className="store-visual-compact" />
          <i className="store-visual-tube" />
        </div>
      </div>
      <div className="amazon-store-card-body">
        <div className="amazon-store-meta">
          <span>{product.badge}</span>
          <span>{product.priceCue}</span>
        </div>
        <p className="eyebrow">{product.categoryLabel}</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="amazon-store-signals" aria-label={`Shopping signals for ${product.title}`}>
          <span>Amazon</span>
          <span>Seller check</span>
          <span>Fast compare</span>
        </div>
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

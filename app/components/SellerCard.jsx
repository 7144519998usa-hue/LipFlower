import AffiliateLink from "./AffiliateLink";

export default function SellerCard({ seller }) {
  return (
    <article className="catalog-card">
      <span className="eyebrow">Seller</span>
      <h2>{seller.name}</h2>
      <p>{seller.description}</p>
      <p className="trust-note">{seller.trustSignal}</p>
      <ul className="fact-list">
        {seller.bestFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="hero-actions">
        <AffiliateLink href={seller.affiliateUrl} label={`Visit ${seller.name}`}>
          Check Today&apos;s Price
        </AffiliateLink>
      </div>
    </article>
  );
}

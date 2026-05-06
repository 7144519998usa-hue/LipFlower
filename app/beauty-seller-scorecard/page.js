import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const scorecardSignals = [
  {
    title: "Seller identity",
    whyItMatters:
      "Beauty shoppers should understand who sells and ships the product before judging price, availability, or delivery timing.",
    shopperChecks: ["Seller name is visible", "Shipping responsibility is clear", "Brand-direct or authorized context is easy to understand"],
    links: ["/sellers", "/beauty-university/amazon-luxury-beauty-seller-checklist"],
  },
  {
    title: "Product detail clarity",
    whyItMatters:
      "Shade, size, formula, set contents, fragrance format, jewelry dimensions, and packaging details can change whether a listing fits the shopper's intent.",
    shopperChecks: ["Size and format are visible", "Shade or scent details are specific", "Set contents are not ambiguous"],
    links: ["/beauty-checklists", "/beauty-glossary"],
  },
  {
    title: "Return and exchange clarity",
    whyItMatters:
      "Beauty and artificial jewelry purchases can be fit-sensitive, especially for complexion shades, fragrance gifts, accessories, and occasion styling.",
    shopperChecks: ["Return window is easy to find", "Opened-item limits are understood", "Shade exchange or gift-return rules are clear"],
    links: ["/about/cite-lipflower", "/beauty-university/shade-matching-guide"],
  },
  {
    title: "Price context",
    whyItMatters:
      "A lower price can be useful, but it should be compared with seller identity, product condition, delivery timing, and return confidence.",
    shopperChecks: ["Price matches the exact format", "Discount does not hide unclear retailer details", "Shipping and return costs are considered"],
    links: ["/about/how-we-make-money", "/sellers/amazon"],
  },
  {
    title: "Careful claims",
    whyItMatters:
      "Cosmetic guides should not turn retailer or product language into medical, safety, pregnancy, dermatology, or guaranteed-results claims.",
    shopperChecks: ["Claims match visible product language", "Directions remain product-specific", "Medical concerns are not handled as shopping advice"],
    links: ["/beauty-university/ingredient-claims-guide", "/about/editorial-policy"],
  },
  {
    title: "Gift and occasion fit",
    whyItMatters:
      "Giftable beauty, fragrance, and artificial jewelry decisions depend on timing, presentation, return flexibility, and preference uncertainty.",
    shopperChecks: ["Gift format is clear", "Delivery timing fits the occasion", "Preference-sensitive products have safer alternatives"],
    links: ["/beauty-calendar", "/beauty-university/beauty-gift-decision-tree"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Seller Scorecard",
  description:
    "Use LipFlower's beauty retailer scorecard to evaluate seller identity, product detail clarity, return clarity, price context, careful claims, and gift fit before continuing.",
  canonicalPath: "/beauty-seller-scorecard",
});

export default function BeautySellerScorecardPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Seller Scorecard",
    description:
      "A shopper-first scorecard for evaluating beauty retailer clarity, product detail clarity, return clarity, price context, careful claims, and gift fit.",
    url: `${beautySiteUrl}/beauty-seller-scorecard`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: scorecardSignals.map((signal, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: signal.title,
        description: signal.whyItMatters,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Retailer clarity</span>
        <h1>Beauty seller scorecard before you click out</h1>
        <p>
          Use this public scorecard to compare seller identity, product detail clarity, return
          return clarity, price context, careful claims, and gift fit before continuing to a retailer.
        </p>
        <p>
          This is shopper education, not a secret ranking formula. LipFlower keeps seller guidance
          visible, careful, and focused on user confidence.
        </p>
        <div className="hero-actions">
          <Link href="/sellers" className="search-button">
            Seller Directory
          </Link>
          <Link href="/beauty-checklists" className="ghost-link">
            Buying Checklists
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {scorecardSignals.map((signal) => (
            <article key={signal.title} className="catalog-card">
              <span className="eyebrow">Scorecard signal</span>
              <h2>{signal.title}</h2>
              <p>{signal.whyItMatters}</p>
              <ul className="fact-list">
                {signal.shopperChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
              <div className="catalog-stack">
                {signal.links.map((href) => (
                  <Link key={href} href={href} className="catalog-link-card">
                    <strong>{href.replaceAll("/", " ").replaceAll("-", " ").trim()}</strong>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProductUseDisclaimer />
    </main>
  );
}

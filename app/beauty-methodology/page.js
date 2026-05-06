import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const methodologyAreas = [
  {
    title: "Routine fit",
    description:
      "We compare what role a product appears designed to play: cleanse, treat, moisturize, protect, prep, color, scent, finish, accessorize, or gift.",
    examples: ["Moisturizer versus serum", "Lip mask versus balm", "Primer versus SPF layering"],
    links: ["/beauty-university/beauty-routine-order-chart", "/compare/luxury-serum-vs-moisturizer"],
  },
  {
    title: "Visible product attributes",
    description:
      "Pages prioritize visible product information such as format, texture, finish, shade support, scent family, set contents, size, and retailer details.",
    examples: ["Coverage and finish", "Discovery set size", "Artificial jewelry material details"],
    links: ["/beauty-glossary", "/artificial-jewelry"],
  },
  {
    title: "Retailer clarity",
    description:
      "Before continuing to a retailer, compare retailer identity, return clarity, listing detail quality, delivery details, and price context.",
    examples: ["Amazon seller checks", "Return-sensitive shade purchases", "Gift delivery timing"],
    links: ["/beauty-seller-scorecard", "/sellers"],
  },
  {
    title: "Careful claims",
    description:
      "LipFlower avoids invented efficacy, medical cure claims, guaranteed outcomes, unsupported safety claims, and hidden assumptions about sensitive skin or pregnancy suitability.",
    examples: ["Ingredient-benefit wording", "SPF directions", "Clean beauty positioning"],
    links: ["/beauty-claims-guide", "/about/editorial-policy"],
  },
  {
    title: "Comparison usefulness",
    description:
      "A useful comparison explains the practical tradeoff: who each option is for, what decision it helps with, and what to verify on the retailer site.",
    examples: ["Foundation versus skin tint", "Lip oil versus gloss", "Cream blush versus powder blush"],
    links: ["/compare", "/beauty-checklists"],
  },
  {
    title: "Disclosure and monetization clarity",
    description:
      "LipFlower may earn affiliate revenue when users continue to retailer sites, so disclosures, retailer context, and shopper-first guidance stay visible.",
    examples: ["Affiliate disclosure", "How we make money", "Retailer context"],
    links: ["/about/advertiser-disclosure", "/about/how-we-make-money"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Comparison Methodology",
  description:
    "Read LipFlower's beauty comparison methodology for routine fit, visible product attributes, retailer clarity, careful claims, comparison usefulness, and affiliate disclosure.",
  canonicalPath: "/beauty-methodology",
});

export default function BeautyMethodologyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "LipFlower Beauty Comparison Methodology",
    description:
      "Public methodology for how LipFlower frames beauty comparison, routine fit, retailer clarity, careful claims, and disclosure.",
    url: `${beautySiteUrl}/beauty-methodology`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Methodology</span>
        <h1>How LipFlower compares beauty products and retailers</h1>
        <p>
          LipFlower is a beauty research and affiliate comparison platform. Our comparison pages are
          designed to help shoppers understand fit, tradeoffs, retailer clarity, and careful
          product language before continuing to a retailer.
        </p>
        <p>
          This page explains our public editorial standards. It does not disclose private
          affiliate operations, internal scoring weights, or merchant strategy.
        </p>
        <div className="hero-actions">
          <Link href="/compare" className="search-button">
            Compare Products
          </Link>
          <Link href="/beauty-research" className="ghost-link">
            Research Library
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {methodologyAreas.map((area) => (
            <article key={area.title} className="catalog-card">
              <span className="eyebrow">Editorial standard</span>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <ul className="fact-list">
                {area.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <div className="catalog-stack">
                {area.links.map((href) => (
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

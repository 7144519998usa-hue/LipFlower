import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import ProductUseDisclaimer from "../../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "LipFlower Media Kit",
  description:
    "Media kit for LipFlower, an independent beauty research, comparison, and affiliate marketplace covering beauty, skin care, makeup, fragrance, lip care, hair care, and artificial jewelry.",
  canonicalPath: "/about/media-kit",
});

export default function MediaKitPage() {
  const pageUrl = `${beautySiteUrl}/about/media-kit`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "LipFlower Media Kit",
    description:
      "Publisher overview, coverage areas, editorial standards, and reference resources for LipFlower.",
    url: pageUrl,
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
        <span className="eyebrow">Media kit</span>
        <h1>LipFlower media and editor resources</h1>
        <p>
          LipFlower is an independent beauty research, comparison, and affiliate marketplace built
          for shoppers who want polished product education before choosing a seller.
        </p>
        <p>
          The site covers luxury beauty, skin care, makeup, fragrance, lip care, hair care, body
          care, nail care, beauty tools, and artificial jewelry with careful editorial standards.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/about/cite-lipflower" className="ghost-link">
            Citation Guidance
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Coverage areas</h2>
            <ul className="fact-list">
              <li>Luxury and prestige skin care, makeup, fragrance, lip care, and hair care.</li>
              <li>Beauty tools, body care, nail care, natural beauty, and artificial jewelry.</li>
              <li>Seller-confidence guidance for Amazon and other premium beauty retailers.</li>
              <li>Routine, ingredient, comparison, gifting, and buyer-intent education pages.</li>
            </ul>
          </article>

          <article className="catalog-card">
            <h2>Editorial standards</h2>
            <ul className="fact-list">
              <li>No medical cure claims or guaranteed-results language.</li>
              <li>No invented reviews, unsupported product details, or hidden affiliate strategy claims.</li>
              <li>Affiliate relationships are disclosed before users continue to retailer sites.</li>
              <li>Reference pages are written to help shoppers and editors understand decisions, not inflate page count.</li>
            </ul>
          </article>

          <article className="catalog-card">
            <h2>Useful pages for editors</h2>
            <div className="catalog-stack">
              <Link href="/beauty-research" className="catalog-link-card">
                <strong>Beauty Research Library</strong>
                <span>Reusable reference guides for routines, ingredients, gifts, and styling.</span>
              </Link>
              <Link href="/about/editorial-policy" className="catalog-link-card">
                <strong>Editorial policy</strong>
                <span>How LipFlower keeps content buyer-first and careful.</span>
              </Link>
              <Link href="/about/advertiser-disclosure" className="catalog-link-card">
                <strong>Affiliate disclosure</strong>
                <span>How monetized links and retailer recommendations are disclosed.</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <ProductUseDisclaimer />
    </main>
  );
}

import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import {
  beautySiteName,
  beautySiteUrl,
  beautyUniversityTopics,
  linkableBeautyReferenceSlugs,
} from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const referenceSlugSet = new Set(linkableBeautyReferenceSlugs);

export const metadata = buildBeautyMetadata({
  title: "Beauty Research Library",
  description:
    "Use LipFlower's claim-safe beauty research library for routine charts, ingredient explainers, gift decision guides, and category reference assets.",
  canonicalPath: "/beauty-research",
});

export default function BeautyResearchPage() {
  const referenceAssets = beautyUniversityTopics.filter((topic) => referenceSlugSet.has(topic.slug));
  const librarySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Research Library",
    description:
      "Claim-safe beauty reference guides for shoppers comparing routines, ingredients, gifts, fragrance, hair care, nail care, body care, and artificial jewelry.",
    url: `${beautySiteUrl}/beauty-research`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: referenceAssets.map((topic, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: topic.title,
        url: `${beautySiteUrl}/beauty-university/${topic.slug}`,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={librarySchema} />
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Research library</span>
          <h1>Beauty reference assets for careful shoppers and editors</h1>
          <p>
            LipFlower keeps its most reusable beauty education assets here: routine maps,
            ingredient explainers, gift decision guides, fragrance references, and styling
            checklists that support confident shopping without medical or guaranteed-result claims.
          </p>
          <div className="hero-actions">
            <Link href="/beauty-university" className="search-button">
              Browse Beauty University
            </Link>
            <Link href="/about/cite-lipflower" className="ghost-link">
              Cite LipFlower
            </Link>
            <Link href="/beauty-glossary" className="ghost-link">
              Beauty Glossary
            </Link>
            <Link href="/beauty-calendar" className="ghost-link">
              Beauty Calendar
            </Link>
            <Link href="/beauty-checklists" className="ghost-link">
              Buying Checklists
            </Link>
            <Link href="/beauty-seller-scorecard" className="ghost-link">
              Seller Scorecard
            </Link>
            <Link href="/beauty-claims-guide" className="ghost-link">
              Claims Guide
            </Link>
            <Link href="/beauty-methodology" className="ghost-link">
              Methodology
            </Link>
          </div>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Reference assets</h2>
            <div className="catalog-stack">
              {referenceAssets.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/beauty-university/${topic.slug}`}
                  className="catalog-link-card"
                >
                  <strong>{topic.title}</strong>
                  <span>{topic.description}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="catalog-card">
            <h2>How to use this library</h2>
            <ul className="fact-list">
              <li>Start with a reference guide when a buying decision depends on routine order.</li>
              <li>Use ingredient guides as shopping context, not medical or dermatology advice.</li>
              <li>Move from education into category, comparison, seller, or gift-finder pages.</li>
              <li>Use the glossary when a term needs a short, claim-safe definition.</li>
              <li>Use the calendar when seasonal timing, giftability, or occasion styling matters.</li>
              <li>Use buying checklists before high-intent comparison or seller pages.</li>
              <li>Use the seller scorecard when retailer confidence is part of the decision.</li>
              <li>Use the claims guide when beauty wording touches sensitive skin, SPF, clean beauty, or safety-adjacent topics.</li>
              <li>Use the methodology page when comparison logic or editorial standards need context.</li>
              <li>Prefer claim-safe language such as may help, designed for, supports, and commonly used for.</li>
            </ul>
            <div className="hero-actions">
              <Link href="/about/cite-lipflower" className="ghost-link">
                Citation guidance
              </Link>
            </div>
          </article>

          <article className="catalog-card">
            <h2>High-value next paths</h2>
            <div className="catalog-stack">
              <Link href="/skin-care" className="catalog-link-card">
                <strong>Skin care</strong>
                <span>Compare serums, moisturizers, SPF, and routine-led shopping paths.</span>
              </Link>
              <Link href="/makeup" className="catalog-link-card">
                <strong>Makeup</strong>
                <span>Use shade, finish, coverage, and seller trust before choosing complexion products.</span>
              </Link>
              <Link href="/artificial-jewelry" className="catalog-link-card">
                <strong>Artificial jewelry</strong>
                <span>Match fashion jewelry to occasion, makeup finish, gifting, and seller confidence.</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <ProductUseDisclaimer />
    </main>
  );
}

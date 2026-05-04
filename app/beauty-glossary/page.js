import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautyGlossaryTerms, beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Beauty Glossary",
  description:
    "A claim-safe LipFlower glossary for beauty, skin care, makeup, fragrance, lip care, artificial jewelry, and shopping terms.",
  canonicalPath: "/beauty-glossary",
});

export default function BeautyGlossaryPage() {
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "LipFlower Beauty Glossary",
    description:
      "Claim-safe definitions for beauty shopping, routine, ingredient, makeup, fragrance, lip care, and artificial jewelry terms.",
    url: `${beautySiteUrl}/beauty-glossary`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    hasDefinedTerm: beautyGlossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
      termCode: item.slug,
      inDefinedTermSet: `${beautySiteUrl}/beauty-glossary`,
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={glossarySchema} />
      <section className="hero-panel">
        <span className="eyebrow">Beauty glossary</span>
        <h1>Claim-safe beauty terms for smarter shopping</h1>
        <p>
          Use this glossary to understand common beauty, skin care, makeup, fragrance, lip care,
          artificial jewelry, and seller-confidence language before comparing products.
        </p>
        <p>
          Definitions are written as shopping context, not medical advice, efficacy promises, or
          guarantees about individual product results.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/beauty-university" className="ghost-link">
            Beauty University
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {beautyGlossaryTerms.map((item) => (
            <article key={item.slug} id={item.slug} className="catalog-card">
              <span className="eyebrow">{item.category}</span>
              <h2>{item.term}</h2>
              <p>{item.definition}</p>
              <div className="catalog-stack">
                {item.relatedLinks.map((href) => (
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

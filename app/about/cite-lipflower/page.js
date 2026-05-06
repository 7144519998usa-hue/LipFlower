import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import ProductUseDisclaimer from "../../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Cite LipFlower",
  description:
    "Citation and editor guidance for referencing LipFlower's beauty research library, routine guides, ingredient explainers, and shopping education pages.",
  canonicalPath: "/about/cite-lipflower",
});

export default function CiteLipFlowerPage() {
  const pageUrl = `${beautySiteUrl}/about/cite-lipflower`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Cite LipFlower",
    description:
      "Guidance for editors, bloggers, and shoppers referencing LipFlower beauty education and research pages.",
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
        <span className="eyebrow">Editor resource</span>
        <h1>Cite LipFlower beauty research</h1>
        <p>
          LipFlower publishes claim-safe beauty reference pages for shoppers and editors comparing
          routines, ingredients, gift decisions, retailers, and beauty-adjacent accessories.
        </p>
        <p>
          Editors, bloggers, and creators may reference LipFlower pages when a guide is useful to
          readers. Please cite the original page URL and avoid copying full page text.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Open Research Library
          </Link>
          <Link href="/about/editorial-policy" className="ghost-link">
            Editorial Policy
          </Link>
          <Link href="/about/media-kit" className="ghost-link">
            Media Kit
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Recommended citation format</h2>
            <p>
              LipFlower, "{`{Guide Title}`}," LipFlower Beauty Research Library, accessed{" "}
              {`{Month Day, Year}`}, {beautySiteUrl}/beauty-university/{`{guide-slug}`}.
            </p>
          </article>

          <article className="catalog-card">
            <h2>Good reference uses</h2>
            <ul className="fact-list">
              <li>Linking to a routine map from a beauty shopping article.</li>
              <li>Referencing ingredient-claim guidance in a product comparison.</li>
              <li>Sharing a gift decision guide for seasonal beauty shopping context.</li>
              <li>Using artificial jewelry styling guidance alongside makeup or fragrance content.</li>
            </ul>
          </article>

          <article className="catalog-card">
            <h2>Use boundaries</h2>
            <ul className="fact-list">
              <li>Do not copy full articles or reproduce large sections of LipFlower content.</li>
              <li>Do not present LipFlower shopping guidance as medical or dermatology advice.</li>
              <li>Do not imply that LipFlower verifies every live seller, price, or product listing.</li>
              <li>Use the current page URL so readers can review the full context and disclosures.</li>
            </ul>
          </article>
        </div>
      </section>

      <ProductUseDisclaimer />
    </main>
  );
}

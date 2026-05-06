import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const claimRules = [
  {
    claimArea: "Ingredient benefits",
    saferLanguage: "may help, commonly used for, designed to support, positioned for",
    avoidLanguage: "cures, fixes, guarantees, medically repairs, works for everyone",
    guidance:
      "Ingredient guidance works best when it explains shopping context and visible product details without inventing concentration, efficacy, or results.",
    links: ["/beauty-university/ingredient-claims-guide", "/beauty-university/ingredient-compatibility-cheat-sheet"],
  },
  {
    claimArea: "Sensitive skin",
    saferLanguage: "sensitive-skin shoppers may want to compare, fragrance-free positioning, patch-test according to directions",
    avoidLanguage: "safe for all sensitive skin, irritation-free, allergy-proof, dermatologist guaranteed",
    guidance:
      "Sensitive-skin language should be cautious and tied to visible product details such as fragrance, format, and product directions.",
    links: ["/skin-care/barrier-repair-moisturizers", "/beauty-checklists"],
  },
  {
    claimArea: "Clean beauty",
    saferLanguage: "brand-positioned as clean, formulated without listed ingredients, shopper preference signal",
    avoidLanguage: "non-toxic, chemical-free, safer than all alternatives, toxin-free",
    guidance:
      "Clean-beauty language should be treated as brand positioning unless a defined standard and visible product claim support it.",
    links: ["/natural-beauty", "/about/editorial-policy"],
  },
  {
    claimArea: "SPF and sun care",
    saferLanguage: "follow product directions, compare SPF label, texture, tint, layering feel",
    avoidLanguage: "complete protection, all-day protection without reapplication, medical sun advice",
    guidance:
      "SPF guidance should point users to current product directions and avoid turning cosmetic layering tips into medical advice.",
    links: ["/skin-care/sunscreen-for-makeup-prep", "/beauty-university/makeup-prep-routine"],
  },
  {
    claimArea: "Pregnancy-safe and dermatologist-recommended",
    saferLanguage: "only mention if visibly supported, consult a qualified professional for personal concerns",
    avoidLanguage: "pregnancy safe by default, dermatologist approved without evidence, doctor guaranteed",
    guidance:
      "High-trust claims require visible support. LipFlower should not infer pregnancy, dermatologist, or clinical suitability from product category alone.",
    links: ["/beauty-seller-scorecard", "/beauty-university/ingredient-claims-guide"],
  },
  {
    claimArea: "Artificial jewelry materials",
    saferLanguage: "check material details, closure type, weight, dimensions, seller policy",
    avoidLanguage: "hypoallergenic, nickel-free, safe for sensitive ears unless visibly supported",
    guidance:
      "Fashion jewelry pages can discuss styling and product details, but material or sensitivity claims should only appear when the product listing supports them.",
    links: ["/artificial-jewelry", "/beauty-university/artificial-jewelry-styling-guide"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Claims Guide",
  description:
    "Use LipFlower's Beauty Claims Guide to understand safer wording for ingredient benefits, sensitive skin, clean beauty, SPF, pregnancy-safe, dermatologist, and artificial jewelry material claims.",
  canonicalPath: "/beauty-claims-guide",
});

export default function BeautyClaimsGuidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Claims Guide",
    description:
      "Careful guidance for beauty content covering ingredients, sensitive skin, clean beauty, SPF, pregnancy-safe language, dermatologist claims, and artificial jewelry materials.",
    url: `${beautySiteUrl}/beauty-claims-guide`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: claimRules.map((rule, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: rule.claimArea,
        description: rule.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Careful beauty claims</span>
        <h1>Beauty claims guide for safer shopping language</h1>
        <p>
          LipFlower uses careful language across beauty, skin care, makeup, fragrance, lip care,
          body care, hair care, and artificial jewelry pages.
        </p>
        <p>
          This guide explains how shoppers and editors should read product language without treating
          cosmetic content as medical advice, guaranteed results, or unsupported safety claims.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/about/editorial-policy" className="ghost-link">
            Editorial Policy
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {claimRules.map((rule) => (
            <article key={rule.claimArea} className="catalog-card">
              <span className="eyebrow">Claim area</span>
              <h2>{rule.claimArea}</h2>
              <p>{rule.guidance}</p>
              <p>
                <strong>Safer language:</strong> {rule.saferLanguage}
              </p>
              <p>
                <strong>Avoid:</strong> {rule.avoidLanguage}
              </p>
              <div className="catalog-stack">
                {rule.links.map((href) => (
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

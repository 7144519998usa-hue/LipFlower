import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const finishGroups = [
  {
    title: "Complexion finishes",
    terms: ["Dewy", "Satin", "Natural", "Soft matte", "Radiant"],
    guidance:
      "For foundation, concealer, skin tint, and powder, compare finish as a visible look and texture preference, not as a guaranteed skin outcome.",
    links: ["/makeup/luxury-foundation", "/makeup/setting-powder", "/beauty-university/shade-matching-guide"],
  },
  {
    title: "Cheek and color textures",
    terms: ["Cream", "Powder", "Liquid", "Gel", "Balm"],
    guidance:
      "Color products should be compared by blendability, pigment style, layering behavior, and finish rather than universal wear claims.",
    links: ["/makeup/cream-blush", "/compare/cream-blush-vs-powder-blush", "/beauty-checklists"],
  },
  {
    title: "Lip finishes",
    terms: ["Glossy", "Tinted", "Balm-shine", "Matte", "Oil-slick"],
    guidance:
      "For lip products, separate treatment feel from makeup finish while keeping fragrance, flavor, stickiness, and reapplication expectations visible.",
    links: ["/lip-care/lip-oils", "/lip-care/tinted-lip-balms", "/compare/lip-oil-vs-lip-gloss"],
  },
  {
    title: "Skin care textures",
    terms: ["Gel cream", "Rich cream", "Oil", "Serum", "Balm"],
    guidance:
      "Skin-care texture helps shoppers understand comfort, layering, and makeup compatibility without promising medical repair or visible transformation.",
    links: ["/skin-care/barrier-repair-moisturizers", "/skin-care/anti-aging-serums", "/beauty-routines"],
  },
  {
    title: "Fragrance and body-care feel",
    terms: ["Mist", "Oil", "Cream", "Lotion", "Exfoliating polish"],
    guidance:
      "For body care and fragrance, use texture and scent-family language as sensorial shopping context, not wellness or therapeutic claims.",
    links: ["/body-care/body-moisturizers", "/fragrance/fragrance-discovery-sets", "/beauty-university/body-care-layering-guide"],
  },
  {
    title: "Artificial jewelry finishes",
    terms: ["Gold-tone", "Silver-tone", "Pearl-like", "Crystal", "Enamel"],
    guidance:
      "Fashion jewelry finish language should describe styling and visible product details without implying fine-jewelry value, special sensitivity suitability, or material safety unless supported.",
    links: ["/artificial-jewelry", "/artificial-jewelry/fashion-earrings", "/beauty-claims-guide"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Finish and Texture Library",
  description:
    "Use LipFlower's Beauty Finish and Texture Library to compare makeup, lip care, skin care, body care, fragrance, and artificial jewelry finish language safely.",
  canonicalPath: "/beauty-finishes",
});

export default function BeautyFinishesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Finish and Texture Library",
    description:
      "Careful shopping context for beauty finishes and textures across complexion, cheek color, lip care, skin care, body care, fragrance, and artificial jewelry.",
    url: `${beautySiteUrl}/beauty-finishes`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: finishGroups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: group.title,
        description: group.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Finish and texture</span>
        <h1>Beauty finish and texture language for better product comparisons</h1>
        <p>
          Use this library to compare finish and texture language across makeup, lip care, skin
          care, fragrance, body care, and artificial jewelry without turning visible product details
          into unsupported claims.
        </p>
        <p>
          Finish and texture help narrow shopper preferences, but they do not
          guarantee individual results, wear time, comfort, or sensitivity fit.
        </p>
        <div className="hero-actions">
          <Link href="/makeup" className="search-button">
            Explore Makeup
          </Link>
          <Link href="/beauty-glossary" className="ghost-link">
            Beauty Glossary
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {finishGroups.map((group) => (
            <article key={group.title} className="catalog-card">
              <span className="eyebrow">Texture guide</span>
              <h2>{group.title}</h2>
              <p>{group.guidance}</p>
              <ul className="fact-list">
                {group.terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
              <div className="catalog-stack">
                {group.links.map((href) => (
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

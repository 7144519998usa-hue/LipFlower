import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const buyingChecklists = [
  {
    title: "Seller confidence checklist",
    intent: "Before clicking out to a retailer",
    items: [
      "Confirm who sells and ships the product.",
      "Review return and exchange terms before checkout.",
      "Compare listing photos, size, shade, and package details.",
      "Avoid relying on price alone when seller details are unclear.",
    ],
    links: ["/sellers", "/beauty-university/amazon-luxury-beauty-seller-checklist"],
  },
  {
    title: "Shade and complexion checklist",
    intent: "Foundation, concealer, powder, blush, and skin tint",
    items: [
      "Compare undertone before choosing shade depth.",
      "Check coverage and finish language.",
      "Look for return-friendly seller paths when shade fit is uncertain.",
      "Avoid assuming one brand's shade name transfers to another brand.",
    ],
    links: ["/makeup/luxury-foundation", "/beauty-university/shade-matching-guide"],
  },
  {
    title: "SPF and makeup-prep checklist",
    intent: "Sunscreen, primer, foundation, and setting products",
    items: [
      "Read current product directions for SPF use.",
      "Compare texture, tint, white-cast notes, and layering feel.",
      "Watch for pilling risk when combining SPF, primer, and complexion products.",
      "Avoid treating cosmetic guidance as medical sun-care advice.",
    ],
    links: ["/skin-care/sunscreen-for-makeup-prep", "/beauty-university/makeup-prep-routine"],
  },
  {
    title: "Fragrance gift checklist",
    intent: "Discovery sets, full bottles, minis, and seasonal gifts",
    items: [
      "Choose scent family before bottle size.",
      "Consider discovery sets when preferences are unknown.",
      "Review return restrictions for opened fragrance.",
      "Compare packaging, delivery timing, and seller confidence.",
    ],
    links: ["/fragrance/luxury-perfume-gifts", "/beauty-university/fragrance-family-reference-chart"],
  },
  {
    title: "Artificial jewelry checklist",
    intent: "Fashion earrings, necklaces, bracelets, rings, and gift sets",
    items: [
      "Check material details without assuming special sensitivity suitability claims.",
      "Compare earring weight, closure type, and dimensions.",
      "Match jewelry style to occasion, makeup finish, and gift context.",
      "Review seller return policy for jewelry sets and occasion accessories.",
    ],
    links: ["/artificial-jewelry", "/beauty-university/artificial-jewelry-styling-guide"],
  },
  {
    title: "Routine-fit checklist",
    intent: "Skin care, hair care, body care, lip care, and tools",
    items: [
      "Identify the product's routine step before comparing brands.",
      "Avoid duplicating strong or sensation-led products too quickly.",
      "Use ingredient content as shopping context, not a result guarantee.",
      "Follow product directions and introduce new products thoughtfully.",
    ],
    links: ["/beauty-university/beauty-routine-order-chart", "/beauty-university/ingredient-compatibility-cheat-sheet"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Buying Checklists",
  description:
    "Use LipFlower's claim-safe beauty buying checklists for seller confidence, shade matching, SPF layering, fragrance gifts, artificial jewelry, and routine fit.",
  canonicalPath: "/beauty-checklists",
});

export default function BeautyChecklistsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Buying Checklists",
    description:
      "Claim-safe buying checklists for beauty shoppers comparing sellers, shade fit, SPF layering, fragrance gifts, artificial jewelry, and routine decisions.",
    url: `${beautySiteUrl}/beauty-checklists`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: buyingChecklists.map((checklist, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: checklist.title,
        description: checklist.intent,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Buyer checklists</span>
        <h1>Beauty buying checklists before you compare or click out</h1>
        <p>
          Use these checklists to slow down high-intent beauty shopping just enough to compare
          seller confidence, shade fit, routine role, giftability, and product directions.
        </p>
        <p>
          LipFlower checklists are designed for shopping context and do not promise medical,
          dermatology, safety, or guaranteed cosmetic outcomes.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/beauty-glossary" className="ghost-link">
            Beauty Glossary
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {buyingChecklists.map((checklist) => (
            <article key={checklist.title} className="catalog-card">
              <span className="eyebrow">{checklist.intent}</span>
              <h2>{checklist.title}</h2>
              <ul className="fact-list">
                {checklist.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="catalog-stack">
                {checklist.links.map((href) => (
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

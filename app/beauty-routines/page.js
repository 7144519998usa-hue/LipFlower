import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const routineGuides = [
  {
    title: "Morning skin care and SPF routine",
    role: "Cleanse, treat, moisturize, protect, and prep",
    guidance:
      "Morning routines should keep SPF directions, moisturizer texture, serum fit, and makeup layering behavior in view without making medical sun-care claims.",
    links: ["/skin-care/sunscreen-for-makeup-prep", "/skin-care/barrier-repair-moisturizers", "/beauty-claims-guide"],
  },
  {
    title: "Evening comfort routine",
    role: "Cleanse, treat, moisturize, and support comfort",
    guidance:
      "Evening pages can compare richer moisturizers, masks, lip treatments, hair masks, and body care while avoiding guaranteed repair language.",
    links: ["/skin-care/barrier-repair-moisturizers", "/lip-care/lip-masks", "/hair-care/hair-masks"],
  },
  {
    title: "Makeup prep routine",
    role: "SPF, primer, complexion, concealer, powder, and finish",
    guidance:
      "Makeup prep is a compatibility decision. Compare finish, coverage, pilling risk, shade fit, and retailer return details.",
    links: ["/beauty-university/makeup-prep-routine", "/makeup/luxury-foundation", "/makeup/setting-powder"],
  },
  {
    title: "Polished lip routine",
    role: "Mask, balm, oil, liner, gloss, and lipstick",
    guidance:
      "Lip routines should separate treatment texture from makeup finish and keep fragrance, flavor, plumper sensation, and reapplication expectations visible.",
    links: ["/beauty-university/luxury-lip-care-routine", "/lip-care/lip-oils", "/compare/lip-oil-vs-lip-gloss"],
  },
  {
    title: "Hair care reset routine",
    role: "Shampoo, conditioner, mask, scalp care, styling, and tools",
    guidance:
      "Hair-care routines work best when each product is compared by routine fit rather than treated as interchangeable.",
    links: ["/beauty-university/hair-care-routine-map", "/hair-care/luxury-shampoo-conditioner", "/beauty-tools/hair-styling-tools"],
  },
  {
    title: "Fragrance and body-care layering routine",
    role: "Body care, scent family, discovery sets, and giftability",
    guidance:
      "Fragrance routines should connect scent family, body-care texture, discovery sets, and seller return limits without wellness or therapeutic claims.",
    links: ["/beauty-university/body-care-layering-guide", "/beauty-university/fragrance-family-reference-chart", "/fragrance/fragrance-discovery-sets"],
  },
  {
    title: "Event beauty and artificial jewelry styling routine",
    role: "Makeup finish, fragrance, hair, fashion jewelry, and occasion fit",
    guidance:
      "Occasion routines can connect beauty and artificial jewelry through styling, gifting, retailer clarity, and material-detail checks.",
    links: ["/beauty-university/artificial-jewelry-styling-guide", "/artificial-jewelry/fashion-earrings", "/makeup/cream-blush"],
  },
  {
    title: "Gift-ready beauty routine",
    role: "Gift finder, discovery sets, lip care, tools, fragrance, and jewelry sets",
    guidance:
      "For giftable routines, prioritize preference uncertainty, return flexibility, retailer clarity, packaging, and delivery timing.",
    links: ["/beauty-university/beauty-gift-decision-tree", "/calculators/gift-finder", "/artificial-jewelry/jewelry-gift-sets"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Routine Library",
  description:
    "Use LipFlower's Beauty Routine Library to connect skin care, makeup, lip care, hair care, fragrance, body care, artificial jewelry, and gifting decisions.",
  canonicalPath: "/beauty-routines",
});

export default function BeautyRoutinesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Routine Library",
    description:
      "Routine-led beauty reference guides for skin care, makeup prep, lip care, hair care, fragrance, body care, artificial jewelry, and gifting.",
    url: `${beautySiteUrl}/beauty-routines`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: routineGuides.map((routine, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: routine.title,
        description: routine.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Routine library</span>
        <h1>Beauty routines that connect education to product decisions</h1>
        <p>
          Use this routine library to move from broad beauty education into practical category,
          comparison, retailer, and gift guides across skin care, makeup, lip care, hair care,
          fragrance, body care, and artificial jewelry.
        </p>
        <p>
          Routine guidance is for shopping context only. LipFlower does not provide medical advice
          or guarantee product outcomes.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-university/beauty-routine-order-chart" className="search-button">
            Routine Order Chart
          </Link>
          <Link href="/beauty-research" className="ghost-link">
            Research Library
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {routineGuides.map((routine) => (
            <article key={routine.title} className="catalog-card">
              <span className="eyebrow">{routine.role}</span>
              <h2>{routine.title}</h2>
              <p>{routine.guidance}</p>
              <div className="catalog-stack">
                {routine.links.map((href) => (
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

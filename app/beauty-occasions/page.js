import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const occasionGuides = [
  {
    title: "Wedding guest beauty",
    decisionFocus: "Polished makeup, fragrance, hair, and jewelry",
    guidance:
      "Wedding guest pages should connect makeup finish, fragrance intensity, hair polish, artificial jewelry, and seller timing without overclaiming wear time.",
    links: ["/makeup/cream-blush", "/fragrance/signature-scent-guide", "/artificial-jewelry/fashion-earrings"],
  },
  {
    title: "Workday polish",
    decisionFocus: "Comfortable complexion, subtle color, lip care, and easy touch-ups",
    guidance:
      "Workday routines should prioritize comfortable texture, shade fit, low-friction reapplication, and seller confidence over dramatic product claims.",
    links: ["/beauty-routines", "/lip-care/tinted-lip-balms", "/makeup/setting-powder"],
  },
  {
    title: "Date-night beauty",
    decisionFocus: "Lip color, fragrance, glow, hair, and accessories",
    guidance:
      "Date-night pages can connect lip finish, fragrance family, cheek color, hair styling, and fashion jewelry while keeping sensitivity and preference context visible.",
    links: ["/lip-care/lip-oils", "/beauty-shades", "/artificial-jewelry/fashion-necklaces"],
  },
  {
    title: "Travel beauty",
    decisionFocus: "Compact products, routine simplicity, tools, and seller timing",
    guidance:
      "Travel beauty should favor compact formats, familiar routines, lower-risk giftable items, and clear seller delivery timing.",
    links: ["/beauty-checklists", "/beauty-tools", "/beauty-gifts"],
  },
  {
    title: "Holiday party beauty",
    decisionFocus: "Fragrance, shimmer, lip finish, body care, and jewelry sets",
    guidance:
      "Holiday party guidance should connect finish, shine, fragrance, body care, jewelry, and return-friendly gifts without forcing shoppers through repetitive event pages.",
    links: ["/beauty-calendar", "/beauty-finishes", "/artificial-jewelry/jewelry-gift-sets"],
  },
  {
    title: "Bridal beauty planning",
    decisionFocus: "Shade testing, skin care comfort, fragrance, and accessories",
    guidance:
      "Bridal planning content should stay educational and encourage shade testing, routine consistency, seller confidence, and professional support where needed.",
    links: ["/beauty-university/shade-matching-guide", "/skin-care/barrier-repair-moisturizers", "/artificial-jewelry"],
  },
  {
    title: "Graduation and celebration gifts",
    decisionFocus: "Giftable beauty, jewelry, fragrance, and tools",
    guidance:
      "Celebration gifts should favor low-risk formats, clear return details, recipient preference context, and retailer timing.",
    links: ["/beauty-gifts", "/calculators/gift-finder", "/beauty-seller-scorecard"],
  },
  {
    title: "Self-care weekend",
    decisionFocus: "Masks, body care, hair care, lip care, and fragrance comfort",
    guidance:
      "Self-care content should focus on routine comfort and product directions without wellness, therapeutic, or guaranteed-result claims.",
    links: ["/body-care/body-moisturizers", "/hair-care/hair-masks", "/lip-care/lip-masks"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Occasion Library",
  description:
      "Use LipFlower's Beauty Occasion Library to connect event makeup, fragrance, hair care, lip care, body care, artificial jewelry, and beauty gifts with practical shopping context.",
  canonicalPath: "/beauty-occasions",
});

export default function BeautyOccasionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Occasion Library",
    description:
      "Occasion-led beauty shopping guidance for wedding guests, workday polish, date night, travel, holiday parties, bridal planning, celebration gifts, and self-care weekends.",
    url: `${beautySiteUrl}/beauty-occasions`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: occasionGuides.map((occasion, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: occasion.title,
        description: occasion.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Occasion library</span>
        <h1>Beauty occasion guides for real-life shopping moments</h1>
        <p>
          Use this library to connect beauty decisions around real moments: weddings, workdays,
          date nights, travel, holiday parties, bridal planning, celebration gifts, and self-care.
        </p>
        <p>
          LipFlower treats occasions as helpful context for routines, retailers, styling, and gift fit
          rather than a reason to repeat the same advice in different packaging.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-calendar" className="search-button">
            Beauty Calendar
          </Link>
          <Link href="/beauty-gifts" className="ghost-link">
            Gift Library
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {occasionGuides.map((occasion) => (
            <article key={occasion.title} className="catalog-card">
              <span className="eyebrow">{occasion.decisionFocus}</span>
              <h2>{occasion.title}</h2>
              <p>{occasion.guidance}</p>
              <div className="catalog-stack">
                {occasion.links.map((href) => (
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

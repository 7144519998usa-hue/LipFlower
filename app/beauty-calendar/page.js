import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const calendarMoments = [
  {
    season: "January reset",
    focus: "Routine simplification",
    guidance:
      "Use the new-year moment to compare moisturizers, SPF, gentle makeup prep, hair masks, and beauty tools that support a cleaner routine.",
    links: ["/beauty-university/beauty-routine-order-chart", "/skin-care/barrier-repair-moisturizers", "/hair-care/hair-masks"],
  },
  {
    season: "Valentine gifting",
    focus: "Fragrance, lip care, and artificial jewelry",
    guidance:
      "Giftable beauty works best when shoppers compare discovery sets, lip-care sets, fashion earrings, jewelry sets, and return-friendly retailers.",
    links: ["/fragrance/luxury-perfume-gifts", "/lip-care/lip-oils", "/artificial-jewelry/jewelry-gift-sets"],
  },
  {
    season: "Spring refresh",
    focus: "Fresh makeup and lighter textures",
    guidance:
      "Spring pages should keep finish, shade flexibility, blush texture, fragrance family, and routine order visible without overpromising results.",
    links: ["/makeup/cream-blush", "/beauty-university/shade-matching-guide", "/fragrance/signature-scent-guide"],
  },
  {
    season: "Summer polish",
    focus: "SPF, body care, and event accessories",
    guidance:
      "Summer shopping often connects SPF, makeup layering, body care, fragrance, and occasion jewelry. Product directions matter especially for SPF pages.",
    links: ["/skin-care/sunscreen-for-makeup-prep", "/body-care/body-moisturizers", "/artificial-jewelry/fashion-earrings"],
  },
  {
    season: "Fall wardrobe shift",
    focus: "Warm fragrance, richer color, and hair care",
    guidance:
      "Fall comparison pages can connect richer lip color, warmer fragrance families, hair care, and artificial jewelry for polished seasonal styling.",
    links: ["/lip-care/tinted-lip-balms", "/beauty-university/fragrance-family-reference-chart", "/hair-care/luxury-shampoo-conditioner"],
  },
  {
    season: "Holiday gifting",
    focus: "Gift sets, discovery sets, and retailer clarity",
    guidance:
      "Holiday gift guides should prioritize retailer clarity, delivery timing, return rules, giftable formats, fragrance discovery sets, and artificial jewelry sets.",
    links: ["/beauty-university/beauty-gift-decision-tree", "/calculators/gift-finder", "/sellers"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Shopping Calendar",
  description:
    "Use LipFlower's beauty shopping calendar for seasonal skin care, makeup, fragrance, lip care, hair care, artificial jewelry, and gift-buying decisions.",
  canonicalPath: "/beauty-calendar",
});

export default function BeautyCalendarPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Shopping Calendar",
    description:
      "Seasonal shopping guidance for beauty routines, fragrance gifting, lip care, artificial jewelry, SPF, body care, and retailer clarity.",
    url: `${beautySiteUrl}/beauty-calendar`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: calendarMoments.map((moment, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: moment.season,
        description: moment.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Seasonal guide</span>
        <h1>Beauty shopping calendar for smarter seasonal decisions</h1>
        <p>
          Use this calendar to plan beauty, skin care, makeup, fragrance, lip care, hair care, body
          care, and artificial jewelry purchases around moments when shoppers naturally compare.
        </p>
        <p>
          LipFlower keeps seasonal guidance careful and practical: this page helps with timing,
          giftability, routine fit, and retailer clarity rather than promising product outcomes.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/beauty-university/beauty-gift-decision-tree" className="ghost-link">
            Gift Decision Tree
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {calendarMoments.map((moment) => (
            <article key={moment.season} className="catalog-card">
              <span className="eyebrow">{moment.focus}</span>
              <h2>{moment.season}</h2>
              <p>{moment.guidance}</p>
              <div className="catalog-stack">
                {moment.links.map((href) => (
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

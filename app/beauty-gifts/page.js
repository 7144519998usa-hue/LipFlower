import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const giftGuides = [
  {
    title: "Fragrance discovery gifts",
    recipientFit: "When scent preferences are unknown",
    guidance:
      "Discovery sets and travel sizes can be safer than full bottles when the shopper does not know the recipient's scent family preference.",
    links: ["/fragrance/fragrance-discovery-sets", "/beauty-university/fragrance-gifting-guide", "/beauty-university/fragrance-family-reference-chart"],
  },
  {
    title: "Lip-care gift sets",
    recipientFit: "Polished, low-risk beauty gifting",
    guidance:
      "Lip masks, oils, balms, and tinted products can work as giftable beauty when fragrance, flavor, texture, and sensitivity expectations are visible.",
    links: ["/lip-care/lip-masks", "/lip-care/lip-oils", "/beauty-university/luxury-lip-care-routine"],
  },
  {
    title: "Beauty tool gifts",
    recipientFit: "Routine-support gifts without shade matching",
    guidance:
      "Brushes, facial tools, manicure tools, and hair styling tools can be easier gifts than shade-dependent complexion products when preferences are uncertain.",
    links: ["/beauty-tools", "/beauty-tools/makeup-brushes", "/nail-care/manicure-tools"],
  },
  {
    title: "Artificial jewelry gifts",
    recipientFit: "Occasion styling and beauty-adjacent accessories",
    guidance:
      "Fashion earrings, necklaces, bracelets, rings, and jewelry sets should be compared by occasion, material details, dimensions, and retailer return policy.",
    links: ["/artificial-jewelry", "/artificial-jewelry/jewelry-gift-sets", "/beauty-university/artificial-jewelry-styling-guide"],
  },
  {
    title: "Makeup gifts for known preferences",
    recipientFit: "When shade, finish, and brand taste are known",
    guidance:
      "Foundation, concealer, blush, and powder can be strong gifts only when shade family, finish preference, and return flexibility are clear.",
    links: ["/makeup/cream-blush", "/makeup/luxury-foundation", "/beauty-university/shade-matching-guide"],
  },
  {
    title: "Skin-care comfort gifts",
    recipientFit: "When routine preferences are gentle and familiar",
    guidance:
      "Moisturizers, masks, and comfort-positioned products should be compared by texture, fragrance, directions, and careful product language.",
    links: ["/skin-care/barrier-repair-moisturizers", "/beauty-ingredients", "/beauty-claims-guide"],
  },
  {
    title: "Holiday seller-confidence gifts",
    recipientFit: "When delivery timing and returns matter",
    guidance:
      "Holiday beauty gifts should keep seller identity, delivery timing, return clarity, gift packaging, and exact product format in view.",
    links: ["/beauty-seller-scorecard", "/beauty-checklists", "/sellers"],
  },
  {
    title: "Last-minute beauty gifts",
    recipientFit: "When speed matters more than personalization",
    guidance:
      "Last-minute gifts should favor lower-risk formats, clear delivery details, discovery sets, tools, lip care, and artificial jewelry with straightforward retailer policies.",
    links: ["/beauty-calendar", "/calculators/gift-finder", "/beauty-university/beauty-gift-decision-tree"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Gift Guide Library",
  description:
    "Use LipFlower's Beauty Gift Guide Library to compare fragrance gifts, lip care sets, beauty tools, artificial jewelry, makeup gifts, skin care gifts, and retailer clarity.",
  canonicalPath: "/beauty-gifts",
});

export default function BeautyGiftsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Gift Guide Library",
    description:
      "Gift-focused beauty shopping guidance for fragrance, lip care, beauty tools, artificial jewelry, makeup, skin care, seasonal timing, and retailer confidence.",
    url: `${beautySiteUrl}/beauty-gifts`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: giftGuides.map((gift, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: gift.title,
        description: gift.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Gift guide library</span>
        <h1>Beauty gift guides for confident, lower-risk shopping</h1>
        <p>
          Use this gift library to compare fragrance discovery sets, lip-care gifts, beauty tools,
          artificial jewelry, makeup, skin care, and retailer clarity before choosing where to shop.
        </p>
        <p>
          LipFlower gift guidance favors practical fit, return clarity, giftability, and careful
          product language over hype or guaranteed outcomes.
        </p>
        <div className="hero-actions">
          <Link href="/calculators/gift-finder" className="search-button">
            Gift Finder
          </Link>
          <Link href="/beauty-university/beauty-gift-decision-tree" className="ghost-link">
            Gift Decision Tree
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {giftGuides.map((gift) => (
            <article key={gift.title} className="catalog-card">
              <span className="eyebrow">{gift.recipientFit}</span>
              <h2>{gift.title}</h2>
              <p>{gift.guidance}</p>
              <div className="catalog-stack">
                {gift.links.map((href) => (
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

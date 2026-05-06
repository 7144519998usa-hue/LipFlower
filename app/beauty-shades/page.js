import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const shadeGroups = [
  {
    title: "Complexion undertone",
    role: "Foundation, concealer, skin tint, and powder",
    guidance:
      "Undertone helps shoppers compare cool, warm, neutral, olive, and muted complexion products before narrowing shade depth and finish.",
    links: ["/beauty-university/shade-matching-guide", "/makeup/luxury-foundation", "/makeup/luxury-concealer"],
  },
  {
    title: "Coverage and shade risk",
    role: "Shade-sensitive makeup gifts and returns",
    guidance:
      "Shade-dependent products are higher-risk gifts unless the recipient's preferences are known and the retailer return policy is clear.",
    links: ["/beauty-gifts", "/beauty-checklists", "/beauty-seller-scorecard"],
  },
  {
    title: "Blush and cheek color families",
    role: "Cream blush, powder blush, bronzer, and complexion color",
    guidance:
      "Cheek color pages should compare tone family, pigment intensity, finish, and blendability without implying one shade works universally.",
    links: ["/makeup/cream-blush", "/compare/cream-blush-vs-powder-blush", "/beauty-finishes"],
  },
  {
    title: "Lip color and finish",
    role: "Tinted balm, lip oil, gloss, liner, and lipstick",
    guidance:
      "Lip shade pages should keep color payoff, finish, transfer, reapplication, fragrance, and comfort expectations visible.",
    links: ["/lip-care/tinted-lip-balms", "/lip-care/lip-oils", "/beauty-university/luxury-lip-care-routine"],
  },
  {
    title: "Artificial jewelry color and metal tone",
    role: "Gold-tone, silver-tone, pearl-like, crystal, enamel, and event styling",
    guidance:
      "Fashion jewelry color should be framed as styling context and visible product detail, not fine-jewelry value or material-safety proof.",
    links: ["/artificial-jewelry", "/beauty-university/artificial-jewelry-styling-guide", "/beauty-claims-guide"],
  },
  {
    title: "Fragrance visual gifting cues",
    role: "Packaging, bottle color, gift sets, and presentation",
    guidance:
      "Color and packaging can support fragrance gifting, but scent family, discovery format, return restrictions, and seller confidence matter more.",
    links: ["/fragrance/luxury-perfume-gifts", "/beauty-gifts", "/beauty-calendar"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Shade and Color Library",
  description:
    "Use LipFlower's Beauty Shade and Color Library for undertone, complexion shade risk, blush color, lip color, artificial jewelry color, and fragrance gifting cues.",
  canonicalPath: "/beauty-shades",
});

export default function BeautyShadesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Shade and Color Library",
    description:
      "Claim-safe shopping guidance for undertone, complexion shade risk, blush color families, lip color, artificial jewelry color, and fragrance gifting presentation.",
    url: `${beautySiteUrl}/beauty-shades`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: shadeGroups.map((group, index) => ({
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
        <span className="eyebrow">Shade and color</span>
        <h1>Beauty shade and color decisions with less guesswork</h1>
        <p>
          Use this library to compare undertone, shade risk, color family, lip color, artificial
          jewelry tones, and fragrance gifting presentation before moving into product pages.
        </p>
        <p>
          LipFlower treats shade and color as helpful shopping context, not a shortcut around
          checking swatches, undertones, return policies, and product details.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-university/shade-matching-guide" className="search-button">
            Shade Matching Guide
          </Link>
          <Link href="/makeup" className="ghost-link">
            Explore Makeup
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {shadeGroups.map((group) => (
            <article key={group.title} className="catalog-card">
              <span className="eyebrow">{group.role}</span>
              <h2>{group.title}</h2>
              <p>{group.guidance}</p>
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

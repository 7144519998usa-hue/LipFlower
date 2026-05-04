import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const ingredientGroups = [
  {
    group: "Hydration and comfort signals",
    ingredients: ["Hyaluronic acid", "Glycerin", "Squalane", "Shea butter", "Aloe vera"],
    guidance:
      "These ingredients are commonly used in formulas positioned around comfort, hydration feel, and routine support. LipFlower does not treat ingredient presence as a guaranteed result.",
    links: ["/skin-care/barrier-repair-moisturizers", "/lip-care/lip-masks", "/beauty-claims-guide"],
  },
  {
    group: "Barrier-positioned skin care",
    ingredients: ["Ceramides", "Niacinamide", "Panthenol", "Fatty acids", "Cholesterol"],
    guidance:
      "Barrier language should stay grounded in visible product claims, texture, usage directions, and shopper comfort preferences rather than medical repair promises.",
    links: ["/beauty-university/skin-barrier-basics", "/skin-care/barrier-repair-moisturizers", "/beauty-glossary"],
  },
  {
    group: "Radiance and tone-positioned products",
    ingredients: ["Vitamin C", "Niacinamide", "Licorice root", "Peptides", "Gentle acids"],
    guidance:
      "Radiance pages should compare packaging, routine timing, sensitivity context, and visible brand positioning without promising brightening or anti-aging outcomes.",
    links: ["/skin-care/vitamin-c-serums", "/skin-care/anti-aging-serums", "/beauty-university/ingredient-claims-guide"],
  },
  {
    group: "Exfoliation and texture-positioned products",
    ingredients: ["Glycolic acid", "Lactic acid", "Salicylic acid", "Enzymes", "PHA"],
    guidance:
      "Exfoliation language should be careful because personal tolerance varies. Shoppers should compare product directions, frequency guidance, and routine overlap.",
    links: ["/beauty-university/ingredient-compatibility-cheat-sheet", "/beauty-checklists", "/beauty-routines"],
  },
  {
    group: "Lip-care texture and sensation cues",
    ingredients: ["Lanolin", "Beeswax", "Menthol", "Peptides", "Plant oils"],
    guidance:
      "Lip-care ingredient pages should separate comfort texture from plumping sensation and keep fragrance, flavor, and sensitivity signals visible.",
    links: ["/lip-care/lip-oils", "/lip-care/lip-plumpers", "/beauty-university/ingredients-to-watch-in-lip-plumpers"],
  },
  {
    group: "Fragrance and botanical positioning",
    ingredients: ["Rose oil", "Citrus oils", "Vanilla notes", "Botanical extracts", "Essential-oil blends"],
    guidance:
      "Fragrance and botanical language should be framed as scent, sensorial, or brand-positioning context, not wellness or therapeutic claims.",
    links: ["/fragrance", "/beauty-university/fragrance-family-reference-chart", "/beauty-claims-guide"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty Ingredient Library",
  description:
    "Use LipFlower's Beauty Ingredient Library to compare hydration, barrier, radiance, exfoliation, lip-care, fragrance, and botanical ingredient positioning safely.",
  canonicalPath: "/beauty-ingredients",
});

export default function BeautyIngredientsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LipFlower Beauty Ingredient Library",
    description:
      "Claim-safe ingredient shopping context for hydration, barrier-positioned skin care, radiance products, exfoliation, lip care, fragrance, and botanical positioning.",
    url: `${beautySiteUrl}/beauty-ingredients`,
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ingredientGroups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: group.group,
        description: group.guidance,
      })),
    },
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Ingredient library</span>
        <h1>Beauty ingredients explained as shopping context, not promises</h1>
        <p>
          Use this library to understand ingredient-led beauty language across skin care, lip care,
          fragrance, and routine pages without treating ingredient presence as a guaranteed result.
        </p>
        <p>
          LipFlower keeps ingredient content claim-safe and encourages shoppers to compare full
          product positioning, directions, sensitivity context, and seller details.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-university/ingredient-claims-guide" className="search-button">
            Ingredient Claims Guide
          </Link>
          <Link href="/beauty-claims-guide" className="ghost-link">
            Claims Guide
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {ingredientGroups.map((group) => (
            <article key={group.group} className="catalog-card">
              <span className="eyebrow">Ingredient group</span>
              <h2>{group.group}</h2>
              <p>{group.guidance}</p>
              <ul className="fact-list">
                {group.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
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

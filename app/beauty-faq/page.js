import Link from "next/link";
import JsonLd from "../components/JsonLd";
import ProductUseDisclaimer from "../components/ProductUseDisclaimer";
import { beautySiteName, beautySiteUrl } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const faqItems = [
  {
    question: "Is LipFlower a store?",
    answer:
      "No. LipFlower is a beauty research and shopping-guide publisher. Readers use the site to compare product categories, retailers, routines, and beauty education before continuing to a store.",
    links: ["/about", "/about/advertiser-disclosure"],
  },
  {
    question: "Does LipFlower sell products directly?",
    answer:
      "No. LipFlower does not operate direct checkout. Product and seller links may lead to Amazon, specialty beauty retailers, department stores, or brand-direct pages.",
    links: ["/sellers", "/about/how-we-make-money"],
  },
  {
    question: "Can LipFlower guarantee beauty results?",
    answer:
      "No. Beauty products may support a routine, but results vary by person, formulation, usage, and product directions. LipFlower avoids medical cure claims and guaranteed-results language.",
    links: ["/beauty-claims-guide", "/about/editorial-policy"],
  },
  {
    question: "How should shoppers use ingredient pages?",
    answer:
      "Treat ingredient content as shopping context, not medical or dermatology advice. Compare visible product claims, directions, sensitivity history, and retailer clarity.",
    links: ["/beauty-university/ingredient-claims-guide", "/beauty-university/ingredient-compatibility-cheat-sheet"],
  },
  {
    question: "Does LipFlower verify every seller listing?",
    answer:
      "No. LipFlower provides retailer-check guidance, but shoppers should verify live seller identity, availability, return terms, price, and product details on the destination retailer site.",
    links: ["/beauty-seller-scorecard", "/sellers"],
  },
  {
    question: "Why does LipFlower include artificial jewelry?",
    answer:
      "Artificial jewelry supports the same beauty-adjacent occasions as makeup, fragrance, hair, and gifting: styling, event looks, retailer clarity, and giftable accessories.",
    links: ["/artificial-jewelry", "/beauty-university/artificial-jewelry-styling-guide"],
  },
  {
    question: "Can artificial jewelry pages make hypoallergenic claims?",
    answer:
      "Only if visible product details support that claim. Otherwise, LipFlower encourages shoppers to check material details, earring weight, closure type, dimensions, and retailer policies.",
    links: ["/beauty-claims-guide", "/beauty-checklists"],
  },
  {
    question: "How should editors cite LipFlower?",
    answer:
      "Editors and bloggers may cite the original page URL when a LipFlower guide is useful to readers. Please avoid copying full page text or presenting shopping guidance as medical advice.",
    links: ["/about/cite-lipflower", "/about/media-kit"],
  },
];

export const metadata = buildBeautyMetadata({
  title: "Beauty FAQ",
  description:
    "Read LipFlower's beauty FAQ for affiliate disclosure, retailer checks, product claims, ingredient guidance, artificial jewelry, and citation questions.",
  canonicalPath: "/beauty-faq",
});

export default function BeautyFaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={schema} />
      <section className="hero-panel">
        <span className="eyebrow">Beauty FAQ</span>
        <h1>Common questions about LipFlower, beauty claims, retailers, and research pages</h1>
        <p>
          Use this FAQ to understand how LipFlower handles affiliate links, beauty guidance,
          retailer checks, artificial jewelry, product claims, and editorial references.
        </p>
        <div className="hero-actions">
          <Link href="/beauty-research" className="search-button">
            Research Library
          </Link>
          <Link href="/beauty-methodology" className="ghost-link">
            Methodology
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {faqItems.map((item) => (
            <article key={item.question} className="catalog-card">
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
              <div className="catalog-stack">
                {item.links.map((href) => (
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

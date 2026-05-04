import Link from "next/link";
import AffiliateLink from "./AffiliateLink";
import JsonLd from "./JsonLd";
import ProductUseDisclaimer from "./ProductUseDisclaimer";
import { beautySellers, beautySiteUrl } from "../lib/beautyData";
import { programmaticBestPages } from "../lib/programmaticSeoData";

function sellerSearchUrl(seller, query) {
  const encodedQuery = encodeURIComponent(query);

  if (seller.slug === "amazon") {
    return `https://www.amazon.com/s?k=${encodedQuery}`;
  }

  if (seller.slug === "sephora") {
    return `https://www.sephora.com/search?keyword=${encodedQuery}`;
  }

  if (seller.slug === "ulta") {
    return `https://www.ulta.com/search?search=${encodedQuery}`;
  }

  return seller.affiliateUrl;
}

function getRelatedBestGuides(page) {
  const sameCategory = programmaticBestPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.categorySlug === page.categorySlug,
  );
  const sameIntent = programmaticBestPages.filter(
    (candidate) =>
      candidate.slug !== page.slug &&
      candidate.categorySlug !== page.categorySlug &&
      candidate.intentLabel === page.intentLabel,
  );
  const sameVertical = programmaticBestPages.filter(
    (candidate) =>
      candidate.slug !== page.slug &&
      candidate.categorySlug !== page.categorySlug &&
      candidate.intentLabel !== page.intentLabel &&
      candidate.vertical === page.vertical,
  );

  const seen = new Set();
  return [...sameCategory, ...sameIntent, ...sameVertical]
    .filter((candidate) => {
      if (seen.has(candidate.slug)) {
        return false;
      }
      seen.add(candidate.slug);
      return true;
    })
    .slice(0, 8);
}

export default function BestProgrammaticPage({ page }) {
  const pageUrl = `${beautySiteUrl}/best/${page.slug}`;
  const featuredSellers = beautySellers.filter((seller) =>
    ["amazon", "sephora", "ulta"].includes(seller.slug),
  );
  const relatedBestGuides = getRelatedBestGuides(page);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: beautySiteUrl },
      { "@type": "ListItem", position: 2, name: "Best Beauty", item: `${beautySiteUrl}/best` },
      { "@type": "ListItem", position: 3, name: page.title, item: pageUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.title,
    description: page.summary,
    url: pageUrl,
    itemListElement: page.examples.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={itemListSchema} />
      <nav className="breadcrumb-row" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/best">Best Beauty</Link>
        <span aria-hidden="true">/</span>
        <span>{page.title}</span>
      </nav>
      <section className="hero-panel">
        <span className="eyebrow">{page.vertical} buying route</span>
        <h1>{page.title}</h1>
        <p>{page.summary}</p>
        <p>{page.intro}</p>
        <div className="hero-actions">
          <Link href={page.categoryPath} className="ghost-link">
            Explore category
          </Link>
          <Link href="/sellers" className="search-button">
            Compare sellers
          </Link>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <span className="eyebrow">Product examples</span>
            <h2>Popular products shoppers compare</h2>
            <p>
              These examples are used as shopping anchors, not invented rankings or guaranteed
              recommendations.
            </p>
            <ul className="fact-list">
              {page.examples.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </article>
          <article className="catalog-card">
            <span className="eyebrow">Methodology</span>
            <h2>How LipFlower frames this route</h2>
            <p>{page.methodology}</p>
            <p>{page.buyingAngle}.</p>
          </article>
          <article className="catalog-card">
            <span className="eyebrow">Seller paths</span>
            <h2>Check availability carefully</h2>
            <div className="catalog-stack">
              {featuredSellers.map((seller) => (
                <AffiliateLink
                  key={seller.slug}
                  href={sellerSearchUrl(seller, page.seoKeyword)}
                  label={`Check ${page.categoryPlural} at ${seller.name}`}
                  source={`best-${page.slug}`}
                >
                  Check Price
                </AffiliateLink>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Helpful next routes</h2>
            <div className="catalog-stack">
              {page.relatedLinks.map((href) => (
                <Link key={href} href={href} className="catalog-link-card">
                  <strong>{href.replace(/^\//, "").replaceAll("-", " ") || "home"}</strong>
                </Link>
              ))}
            </div>
          </article>
          <article className="catalog-card">
            <h2>Quick FAQ</h2>
            <div className="catalog-stack">
              {page.faq.map((item) => (
                <div key={item.question} className="catalog-link-card">
                  <strong>{item.question}</strong>
                  <span>{item.answer}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="catalog-card">
            <h2>Related best guides</h2>
            <div className="catalog-stack">
              {relatedBestGuides.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/best/${relatedPage.slug}`}
                  className="catalog-link-card"
                >
                  <strong>{relatedPage.title}</strong>
                  <span>{relatedPage.summary}</span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
      <ProductUseDisclaimer />
    </main>
  );
}

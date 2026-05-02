import Link from "next/link";
import JsonLd from "./JsonLd";
import ProductUseDisclaimer from "./ProductUseDisclaimer";
import { beautySiteUrl } from "../lib/beautyData";

function formatRouteLabel(href) {
  return href
    .replace(/^\//, "")
    .split("/")
    .at(-1)
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export default function BeautyLandingRoutePage({ eyebrow = "Beauty route", page }) {
  const canonicalPath = `/${page.categoryPath}/${page.slug}`;
  const pageUrl = `${beautySiteUrl}${canonicalPath}`;
  const categoryLabel = page.categoryPath
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: beautySiteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryLabel,
        item: `${beautySiteUrl}/${page.categoryPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.title,
    description: page.summary,
    url: pageUrl,
    itemListElement: [...page.bestFor, ...page.watchFor].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <nav className="breadcrumb-row" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${page.categoryPath}`}>{categoryLabel}</Link>
        <span aria-hidden="true">/</span>
        <span>{page.title}</span>
      </nav>
      <section className="hero-panel">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.summary}</p>
        <p>{page.intro}</p>
      </section>
      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Best for</h2>
            <ul className="fact-list">
              {page.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="catalog-card">
            <h2>Watch before buying</h2>
            <ul className="fact-list">
              {page.watchFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="catalog-card">
            <h2>Related routes</h2>
            <div className="catalog-stack">
              {page.relatedLinks.map((href) => (
                <Link key={href} href={href} className="catalog-link-card">
                  <strong>{formatRouteLabel(href)}</strong>
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

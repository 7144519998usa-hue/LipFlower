import Link from "next/link";
import { notFound } from "next/navigation";
import ComparisonOfferBlock from "../../components/ComparisonOfferBlock";
import ComparisonTable from "../../components/ComparisonTable";
import JsonLd from "../../components/JsonLd";
import ProductUseDisclaimer from "../../components/ProductUseDisclaimer";
import { beautyComparePages, beautySellers, beautySiteUrl, getBeautyComparePage } from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

function formatRouteLabel(href) {
  return href
    .replace(/^\//, "")
    .split("/")
    .at(-1)
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export async function generateStaticParams() {
  return beautyComparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getBeautyComparePage(slug);
  if (!page) {
    return {};
  }

  return buildBeautyMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/compare/${slug}`,
  });
}

export default async function CompareDetailPage({ params }) {
  const { slug } = await params;
  const page = getBeautyComparePage(slug);
  if (!page) {
    notFound();
  }
  const pageUrl = `${beautySiteUrl}/compare/${slug}`;
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
        name: "Compare",
        item: `${beautySiteUrl}/compare`,
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
    itemListElement: page.columns.map((column, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: column,
    })),
  };

  return (
    <main className="page-shell">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <nav className="breadcrumb-row" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/compare">Compare</Link>
        <span aria-hidden="true">/</span>
        <span>{page.title}</span>
      </nav>
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Comparison</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <p>{page.verdict}</p>
        </div>
      </section>
      <section className="catalog-grid-section">
        <article className="catalog-card">
          <h2>Quick comparison</h2>
          <ComparisonTable columns={page.columns} rows={page.rows} />
        </article>
      </section>
      <ComparisonOfferBlock
        columns={page.columns}
        sellers={beautySellers}
        source={`compare-${slug}`}
      />
      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Best next pages</h2>
            <div className="catalog-stack">
              {(page.relatedLinks || []).map((href) => (
                <Link key={href} href={href} className="catalog-link-card">
                  <strong>{formatRouteLabel(href)}</strong>
                </Link>
              ))}
              <Link href="/sellers" className="catalog-link-card">
                <strong>Seller directory</strong>
              </Link>
            </div>
          </article>
        </div>
      </section>
      <ProductUseDisclaimer />
    </main>
  );
}

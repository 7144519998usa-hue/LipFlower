import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import ProductUseDisclaimer from "../../components/ProductUseDisclaimer";
import { beautyCalculators, beautySiteUrl, getBeautyCalculator } from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

const finderRoutes = [
  { href: "/skin-care", label: "Skin care" },
  { href: "/makeup", label: "Makeup" },
  { href: "/lip-care", label: "Lip care" },
  { href: "/fragrance", label: "Fragrance" },
  { href: "/hair-care", label: "Hair care" },
  { href: "/beauty-tools", label: "Beauty tools" },
];

export function generateStaticParams() {
  return beautyCalculators.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = getBeautyCalculator(slug);
  if (!tool) {
    return {};
  }

  return buildBeautyMetadata({
    title: tool.title,
    description: tool.summary,
    canonicalPath: `/calculators/${slug}`,
  });
}

export default async function BeautyCalculatorDetailPage({ params }) {
  const { slug } = await params;
  const tool = getBeautyCalculator(slug);
  if (!tool) {
    notFound();
  }
  const pageUrl = `${beautySiteUrl}/calculators/${slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: beautySiteUrl },
      { "@type": "ListItem", position: 2, name: "Beauty Finders", item: `${beautySiteUrl}/calculators` },
      { "@type": "ListItem", position: 3, name: tool.title, item: pageUrl },
    ],
  };

  return (
    <main className="page-shell">
      <JsonLd data={breadcrumbSchema} />
      <nav className="breadcrumb-row" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/calculators">Beauty Finders</Link>
        <span aria-hidden="true">/</span>
        <span>{tool.title}</span>
      </nav>
      <section className="hero-panel">
        <span className="eyebrow">Guided beauty finder</span>
        <h1>{tool.title}</h1>
        <p>{tool.summary}</p>
        <p>
          Use this finder as a routing aid: choose the closest category path, compare seller trust,
          and read product directions before adding anything new to a routine.
        </p>
      </section>
      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Start with a category</h2>
            <div className="catalog-stack">
              {finderRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="catalog-link-card">
                  <strong>{route.label}</strong>
                  <span>Compare claim-safe routes and seller options.</span>
                </Link>
              ))}
            </div>
          </article>
          <article className="catalog-card">
            <h2>Before you click out</h2>
            <ul className="fact-list">
              <li>Check whether the product format fits the routine step.</li>
              <li>Use seller and return-policy signals for premium beauty purchases.</li>
              <li>Avoid treating ingredient or trend language as a guaranteed outcome.</li>
            </ul>
          </article>
        </div>
      </section>
      <ProductUseDisclaimer />
    </main>
  );
}

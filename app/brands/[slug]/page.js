import Link from "next/link";
import { notFound } from "next/navigation";
import {
  beautyBrandCategories,
  beautyBrands,
  getBeautyBrandPage,
} from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export async function generateStaticParams() {
  return beautyBrands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = getBeautyBrandPage(slug);
  if (!brand) {
    return { title: "Brand", alternates: { canonical: `/brands/${slug}` } };
  }

  return buildBeautyMetadata({
    title: `${brand.name} Luxury Beauty`,
    description: brand.description,
    canonicalPath: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({ params }) {
  const { slug } = await params;
  const brand = getBeautyBrandPage(slug);
  const brandCategories = beautyBrandCategories.filter((page) => page.brandSlug === slug);
  if (!brand) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Luxury beauty brand</span>
          <h1>{brand.name}</h1>
          <p>{brand.description}</p>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Best next routes</h2>
            <div className="catalog-stack">
              {brandCategories.map((page) => (
                <Link key={page.categorySlug} href={`/brands/${brand.slug}/${page.categorySlug}`} className="catalog-link-card">
                  <strong>{page.title}</strong>
                  <span>{page.summary}</span>
                </Link>
              ))}
              <Link href="/luxury-beauty" className="catalog-link-card">
                <strong>Luxury beauty edit</strong>
              </Link>
              <Link href="/sellers" className="catalog-link-card">
                <strong>Seller directory</strong>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

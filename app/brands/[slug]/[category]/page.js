import Link from "next/link";
import { notFound } from "next/navigation";
import {
  beautyBrandCategories,
  getBeautyBrandCategoryPage,
  getBeautyBrandPage,
} from "../../../lib/beautyData";
import { buildBeautyMetadata } from "../../../lib/beautyMetadata";

export async function generateStaticParams() {
  return beautyBrandCategories.map((page) => ({
    slug: page.brandSlug,
    category: page.categorySlug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, category } = await params;
  const page = getBeautyBrandCategoryPage(slug, category);
  if (!page) {
    return { title: "Brand category", alternates: { canonical: `/brands/${slug}/${category}` } };
  }

  return buildBeautyMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/brands/${slug}/${category}`,
  });
}

export default async function BrandCategoryPage({ params }) {
  const { slug, category } = await params;
  const page = getBeautyBrandCategoryPage(slug, category);
  const brand = getBeautyBrandPage(slug);
  if (!page) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Brand category</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
        </div>
      </section>
      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Best next routes</h2>
            <div className="catalog-stack">
              <Link href={`/brands/${slug}`} className="catalog-link-card">
                <strong>{brand?.name || slug} brand page</strong>
                <span>Step back to the broader brand page when prestige, product role, or seller fit still needs context.</span>
              </Link>
              <Link href="/luxury-beauty" className="catalog-link-card">
                <strong>Luxury beauty edit</strong>
                <span>Move into the main luxury beauty path when the next question is category, brand, or seller fit.</span>
              </Link>
              <Link href="/sellers" className="catalog-link-card">
                <strong>Seller directory</strong>
                <span>Use retailer details when trust and return policy matter most.</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

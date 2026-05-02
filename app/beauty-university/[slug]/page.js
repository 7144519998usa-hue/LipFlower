import Link from "next/link";
import { notFound } from "next/navigation";
import { beautyUniversityTopics, getBeautyUniversityTopic } from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export async function generateStaticParams() {
  return beautyUniversityTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getBeautyUniversityTopic(slug);
  if (!topic) {
    return {};
  }

  return buildBeautyMetadata({
    title: topic.title,
    description: topic.description,
    canonicalPath: `/beauty-university/${topic.slug}`,
  });
}

export default async function BeautyUniversityTopicPage({ params }) {
  const { slug } = await params;
  const topic = getBeautyUniversityTopic(slug);
  if (!topic) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Beauty University</span>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <p>{topic.intro}</p>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <article className="catalog-card">
            <h2>Best next routes</h2>
            <div className="catalog-stack">
              <Link href="/luxury-beauty" className="catalog-link-card">
                <strong>Luxury beauty edit</strong>
              </Link>
              <Link href="/compare" className="catalog-link-card">
                <strong>Comparison hub</strong>
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

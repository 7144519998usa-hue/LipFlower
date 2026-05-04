import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import ProductUseDisclaimer from "../../components/ProductUseDisclaimer";
import {
  beautySiteName,
  beautySiteUrl,
  beautyUniversityTopics,
  getBeautyUniversityTopic,
} from "../../lib/beautyData";
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

  const pageUrl = `${beautySiteUrl}/beauty-university/${topic.slug}`;
  const relatedLinks = topic.relatedLinks?.length
    ? topic.relatedLinks
    : ["/luxury-beauty", "/compare", "/sellers"];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: beautySiteName,
    },
    publisher: {
      "@type": "Organization",
      name: beautySiteName,
      url: beautySiteUrl,
    },
  };
  const faqSchema = topic.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: topic.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main className="page-shell">
      <JsonLd data={articleSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Beauty University</span>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <p>{topic.intro}</p>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="authority-layout">
          <article className="catalog-card authority-article">
            <span className="eyebrow">Reference guide</span>
            <h2>What this guide helps you decide</h2>
            <p>{topic.intro}</p>

            {topic.sections?.map((section) => (
              <section key={section.title} className="authority-section">
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </section>
            ))}

            {topic.checklist?.length ? (
              <section className="authority-section">
                <h3>Decision checklist</h3>
                <ul className="fact-list">
                  {topic.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {topic.faqs?.length ? (
              <section className="authority-section">
                <h3>Quick answers</h3>
                <div className="faq-stack">
                  {topic.faqs.map((faq) => (
                    <details key={faq.question} className="faq-card">
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="catalog-card authority-rail">
            <h2>Best next routes</h2>
            <p className="trust-note">
              Use these related pages to move from education into comparison, seller, and category
              decisions.
            </p>
            <div className="catalog-stack">
              {relatedLinks.map((href) => (
                <Link key={href} href={href} className="catalog-link-card">
                  <strong>{href.replaceAll("/", " ").replaceAll("-", " ").trim() || "Home"}</strong>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <ProductUseDisclaimer />
    </main>
  );
}

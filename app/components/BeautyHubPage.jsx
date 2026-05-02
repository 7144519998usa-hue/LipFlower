import Link from "next/link";
import ProductUseDisclaimer from "./ProductUseDisclaimer";

export default function BeautyHubPage({
  title,
  description,
  eyebrow = "Beauty hub",
  intro,
  actions = [],
  sections = [],
}) {
  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {intro ? <p>{intro}</p> : null}
          {actions.length ? (
            <div className="hero-actions">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={action.variant === "secondary" ? "ghost-link" : "search-button"}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {sections.map((section) => (
            <article key={section.title} className="catalog-card">
              <h2>{section.title}</h2>
              <div className="catalog-stack">
                {(section.links || []).map((link) => (
                  <Link key={link.href} href={link.href} className="catalog-link-card">
                    <strong>{link.label}</strong>
                    <span>{link.description}</span>
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

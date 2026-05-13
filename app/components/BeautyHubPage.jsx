import Link from "next/link";
import ProductUseDisclaimer from "./ProductUseDisclaimer";

export default function BeautyHubPage({
  title,
  description,
  eyebrow = "Beauty hub",
  intro,
  actions = [],
  sections = [],
  compactHero = false,
}) {
  return (
    <main className="page-shell">
      {compactHero ? null : (
        <section className="hero-panel beauty-hero-panel">
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
          <div className="editorial-visual" aria-hidden="true">
            <div className="beauty-orb beauty-orb-large" />
            <div className="beauty-orb beauty-orb-small" />
            <div className="product-tower">
              <span className="bottle bottle-tall" />
              <span className="bottle bottle-short" />
              <span className="compact-case" />
            </div>
            <div className="swatch-row">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
      )}

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          {sections.map((section, sectionIndex) => (
            <article key={section.title} className="catalog-card editorial-card">
              <span className="card-kicker">0{sectionIndex + 1}</span>
              <h2>{section.title}</h2>
              <div className="catalog-stack">
                {(section.links || []).map((link, linkIndex) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="catalog-link-card elevated-link-card"
                  >
                    <span className="link-visual" aria-hidden="true">
                      {link.label.slice(0, 1)}
                    </span>
                    <span>
                      <strong>{link.label}</strong>
                      <span>{link.description}</span>
                    </span>
                    {linkIndex === 0 ? <em>Editor's path</em> : null}
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

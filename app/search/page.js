import Link from "next/link";
import { buildBeautyMetadata } from "../lib/beautyMetadata";
import { searchSite } from "../lib/searchIndex";

export const metadata = {
  ...buildBeautyMetadata({
    title: "Search LipFlower",
    description: "Search luxury beauty routes, comparisons, brands, sellers, and education pages across LipFlower.",
    canonicalPath: "/search",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage({ searchParams }) {
  const query = String(searchParams?.q || "").trim();
  const results = searchSite(query);

  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Site search</span>
          <h1>Search LipFlower</h1>
          <p>Search luxury beauty categories, comparisons, brands, sellers, and education pages without opening a crawl trap.</p>
          <form className="hero-search" action="/search" method="get">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search serums, lip masks, Dior, Amazon, shade matching..."
              aria-label="Search LipFlower"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="section-heading">
          <span className="eyebrow">Results</span>
          <h2>{query ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"` : "Start with a category, concern, brand, seller, or product keyword"}</h2>
        </div>
        <div className="catalog-grid">
          {results.length ? (
            results.map((result) => (
              <article key={result.href} className="catalog-card">
                <span className="eyebrow">{result.pageType}</span>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <Link href={result.href} className="catalog-link-card">
                  <strong>Open page</strong>
                  <span>{result.href}</span>
                </Link>
              </article>
            ))
          ) : (
            <>
              <article className="catalog-card">
                <h3>Try a broader beauty or seller query</h3>
                <p>Good searches include `serum`, `lip mask`, `foundation`, `Dior`, `Amazon`, `Sephora`, or `shade matching`.</p>
              </article>
              <article className="catalog-card">
                <h3>Useful starting points</h3>
                <div className="catalog-stack">
                  <Link href="/skin-care" className="catalog-link-card">
                    <strong>Skin care</strong>
                  </Link>
                  <Link href="/compare" className="catalog-link-card">
                    <strong>Comparison hub</strong>
                  </Link>
                  <Link href="/lip-care" className="catalog-link-card">
                    <strong>Lip care</strong>
                  </Link>
                </div>
              </article>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

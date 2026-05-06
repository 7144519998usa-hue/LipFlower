import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateLink from "../../components/AffiliateLink";
import SellerCard from "../../components/SellerCard";
import {
  beautySellers,
  getBeautySeller,
} from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export async function generateStaticParams() {
  return beautySellers.map((seller) => ({ slug: seller.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seller = getBeautySeller(slug);
  if (!seller) {
    return {};
  }

  return buildBeautyMetadata({
    title: `${seller.name} Seller Profile`,
    description: seller.description,
    canonicalPath: `/sellers/${seller.slug}`,
  });
}

export default async function SellerPage({ params }) {
  const { slug } = await params;
  const seller = getBeautySeller(slug);
  if (!seller) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="hero-panel compare-hero-reimagined">
        <div className="hero-copy">
          <span className="eyebrow">Seller profile</span>
          <h1>{seller.name}</h1>
          <p>{seller.description}</p>
          <div className="hero-actions">
            <AffiliateLink href={seller.affiliateUrl} label={`Visit ${seller.name}`}>
              Check Today&apos;s Price
            </AffiliateLink>
            <Link href="/about/advertiser-disclosure" className="ghost-link">
              Affiliate disclosure
            </Link>
          </div>
        </div>
      </section>

      <section className="catalog-grid-section">
        <div className="catalog-grid">
          <SellerCard seller={seller} />
          <article className="catalog-card">
            <h2>Best next routes</h2>
            <div className="catalog-stack">
              <Link href="/luxury-beauty" className="catalog-link-card">
                <strong>Luxury beauty edit</strong>
                <span>Step back into the main beauty guide before clicking out if category fit is still unclear.</span>
              </Link>
              <Link href="/compare" className="catalog-link-card">
                <strong>Comparison hub</strong>
                <span>Use comparisons when you still need to narrow product role, texture, finish, or brand tradeoffs.</span>
              </Link>
              <Link href="/beauty-university/amazon-luxury-beauty-seller-checklist" className="catalog-link-card">
                <strong>Amazon seller checklist</strong>
                <span>Use the checklist when seller selection matters more than product discovery.</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

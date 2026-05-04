import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for LipFlower.",
  canonicalPath: "/about/advertiser-disclosure",
});

export default function AdvertiserDisclosurePage() {
  return (
    <main className="page-shell">
      <div className="hero-panel">
        <span className="eyebrow">Disclosure</span>
        <h1>Affiliate disclosure</h1>
        <p>LipFlower may earn a commission when visitors click through to sellers or partners from this site.</p>
        <p>
          Those commercial relationships do not change the basic purpose of the site: helping shoppers compare luxury skin care, makeup, fragrance, lip care, brands, and sellers before moving to an outside retailer.
        </p>
      </div>
    </main>
  );
}

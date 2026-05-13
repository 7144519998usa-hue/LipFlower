import Link from "next/link";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "About LipFlower",
  description: "About LipFlower's luxury beauty research, shopping guides, and editorial standards.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="hero-panel">
        <span className="eyebrow">About</span>
        <h1>About LipFlower</h1>
        <p>
          LipFlower is an independent luxury beauty guide for readers exploring skin care, makeup, fragrance, hair care, lip care, and beauty accessories with more context.
        </p>
        <p>
          The site is not a checkout cart. It helps readers compare brands, categories, product roles, and seller details before choosing where to shop.
        </p>
        <div className="hero-actions">
          <Link href="/about/media-kit" className="search-button">
            Media Kit
          </Link>
          <Link href="/beauty-research" className="ghost-link">
            Research Library
          </Link>
        </div>
      </div>
    </main>
  );
}

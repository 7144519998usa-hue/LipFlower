import Link from "next/link";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "About LipFlower",
  description: "About the LipFlower luxury beauty affiliate marketplace.",
  canonicalPath: "/about",
});

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="hero-panel">
        <span className="eyebrow">About</span>
        <h1>About LipFlower</h1>
        <p>
          LipFlower is an independent luxury beauty comparison and affiliate marketplace built for affluent shoppers researching skin care, makeup, fragrance, and lip care.
        </p>
        <p>
          The site is designed as a premium decision-support engine, not a checkout cart. We help shoppers compare brands, categories, product roles, and seller paths before continuing to Amazon or another trusted retailer.
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

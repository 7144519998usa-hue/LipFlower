import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "How We Make Money",
  description: "How LipFlower monetizes affiliate beauty traffic.",
  canonicalPath: "/about/how-we-make-money",
});

export default function HowWeMakeMoneyPage() {
  return (
    <main className="page-shell">
      <div className="hero-panel">
        <span className="eyebrow">Monetization</span>
        <h1>How we make money</h1>
        <p>LipFlower earns revenue through affiliate partnerships and seller referrals for luxury beauty products.</p>
        <p>
          In practice, that means pages may send shoppers to Amazon, specialty beauty retailers, department stores, or official brand boutiques. We keep disclosures visible and only place shopping links where they add useful next-step context.
        </p>
      </div>
    </main>
  );
}

import BeautyHubPage from "../components/BeautyHubPage";
import { beautyCalculators } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Beauty Finders",
  description: "Use LipFlower beauty finders to choose routine, gift, seller, and category paths before comparing premium beauty products.",
  canonicalPath: "/calculators",
});

export default function BeautyCalculatorsPage() {
  return (
    <BeautyHubPage
      eyebrow="Beauty finders"
      title="Beauty Finders"
      description="Choose a guided route before comparing luxury skin care, makeup, lip care, fragrance, and beauty tools."
      intro="These lightweight finders are built for discovery and routing, not diagnosis or guaranteed product outcomes."
      sections={[
        {
          title: "Guided beauty tools",
          links: beautyCalculators.map((tool) => ({
            href: `/calculators/${tool.slug}`,
            label: tool.title,
            description: tool.summary,
          })),
        },
        {
          title: "Useful starting points",
          links: [
            { href: "/beauty", label: "Beauty hub", description: "Start with the full LipFlower beauty architecture." },
            { href: "/beauty-university", label: "Beauty University", description: "Read claim-safe education before product comparison." },
            { href: "/sellers", label: "Seller directory", description: "Compare seller paths before clicking through." },
          ],
        },
      ]}
      actions={[
        { href: "/beauty", label: "Explore Beauty", variant: "primary" },
        { href: "/search", label: "Search LipFlower", variant: "secondary" },
      ]}
    />
  );
}

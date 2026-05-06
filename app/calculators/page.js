import BeautyHubPage from "../components/BeautyHubPage";
import { beautyCalculators } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Beauty Finders",
  description: "Use LipFlower beauty finders to choose routines, gifts, sellers, and categories before comparing premium beauty products.",
  canonicalPath: "/calculators",
});

export default function BeautyCalculatorsPage() {
  return (
    <BeautyHubPage
      eyebrow="Beauty finders"
      title="Beauty Finders"
      description="Choose a guided starting point before comparing luxury skin care, makeup, lip care, fragrance, and beauty tools."
      intro="These lightweight finders are built for discovery and shopping clarity, not diagnosis or guaranteed product outcomes."
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
            { href: "/beauty", label: "Beauty hub", description: "Start with the full LipFlower beauty guide." },
            { href: "/beauty-university", label: "Beauty University", description: "Read claim-safe education before product comparison." },
            { href: "/sellers", label: "Seller directory", description: "Compare retailers before clicking through." },
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

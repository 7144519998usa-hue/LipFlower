import BeautyHubPage from "../components/BeautyHubPage";
import { beautySellers } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Luxury Beauty Retailers",
  description: "Review Amazon and other premium beauty retailers before continuing to external offers.",
  canonicalPath: "/sellers",
});

export default function SellersPage() {
  return (
    <BeautyHubPage
      title="Use the retailer hub to choose where to shop for luxury beauty"
      description="Different retailers fit different beauty purchases, so this hub keeps shopping links tied to retailer clarity, return policy, selection, and premium shopping expectations."
      eyebrow="Retailer hub"
      actions={[
        { href: "/about/advertiser-disclosure", label: "Read affiliate disclosure", variant: "secondary" },
      ]}
      sections={[
        {
          title: "Featured retailers",
          links: beautySellers.map((seller) => ({
            href: `/sellers/${seller.slug}`,
            label: seller.name,
            description: seller.description,
          })),
        },
        {
          title: "Best next guides",
          links: [
            {
              href: "/compare",
              label: "Comparison hub",
              description: "Move into comparisons before choosing a retailer when the product choice still is not settled.",
            },
            {
              href: "/beauty-university/amazon-luxury-beauty-seller-checklist",
              label: "Amazon retailer checklist",
              description: "Use the checklist before buying premium beauty through marketplace listings.",
            },
          ],
        },
      ]}
    />
  );
}

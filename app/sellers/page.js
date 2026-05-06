import BeautyHubPage from "../components/BeautyHubPage";
import { beautySellers } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Luxury Beauty Sellers",
  description: "Compare Amazon and other premium beauty sellers before clicking through to external offers.",
  canonicalPath: "/sellers",
});

export default function SellersPage() {
  return (
    <BeautyHubPage
      title="Use the seller hub to choose the right luxury beauty buying path"
      description="Different sellers fit different beauty purchases, so this hub keeps affiliate clicks tied to seller trust, return policy, selection, and premium shopping expectations."
      eyebrow="Seller hub"
      actions={[
        { href: "/about/advertiser-disclosure", label: "Read affiliate disclosure", variant: "secondary" },
      ]}
      sections={[
        {
          title: "Featured sellers",
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
              label: "Amazon seller checklist",
              description: "Use the checklist before buying premium beauty through marketplace listings.",
            },
          ],
        },
      ]}
    />
  );
}

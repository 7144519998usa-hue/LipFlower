import BeautyHubPage from "../components/BeautyHubPage";
import { beautyBrands } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Luxury Beauty Brands",
  description: "Explore prestige cosmetics, skin care, makeup, fragrance, and lip care brands before choosing a seller.",
  canonicalPath: "/brands",
});

export default function BrandsPage() {
  return (
    <BeautyHubPage
      title="Compare luxury beauty brands before you choose what to buy"
      description="Use brand pages when prestige, formula fit, shade range, scent identity, packaging, and retailer clarity matter more than price alone."
      eyebrow="Brand hub"
      sections={[
        {
          title: "Featured luxury beauty brands",
          links: beautyBrands.map((brand) => ({
            href: `/brands/${brand.slug}`,
            label: brand.name,
            description: brand.description,
          })),
        },
      ]}
    />
  );
}

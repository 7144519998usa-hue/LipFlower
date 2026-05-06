import BeautyHubPage from "../components/BeautyHubPage";
import { beautyComparePages } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Luxury Beauty Comparisons",
  description: "Use comparison pages to decide between premium beauty products, routines, and retailers faster.",
  canonicalPath: "/compare",
});

export default function ComparePage() {
  return (
    <BeautyHubPage
      title="Use comparison pages to narrow the right luxury beauty purchase faster"
      description="Start with product fit, finish, texture, brand, and retailer tradeoffs before you continue to Amazon or another premium retailer."
      eyebrow="Comparison hub"
      sections={[
        {
          title: "Head-to-head comparison pages",
          links: beautyComparePages.map((page) => ({
            href: `/compare/${page.slug}`,
            label: page.title,
            description: page.summary,
          })),
        },
        {
          title: "Next decision layers",
          links: [
            { href: "/skin-care", label: "Skin care", description: "Move into treatment and routine guides after the comparison narrows the shortlist." },
            { href: "/makeup", label: "Makeup", description: "Use makeup guides when finish, coverage, shade, or occasion still needs context." },
            { href: "/lip-care", label: "Lip care", description: "Use lip care when treatment, texture, and color need a focused buying guide." },
          ],
        },
      ]}
    />
  );
}

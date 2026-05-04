import BeautyHubPage from "../components/BeautyHubPage";
import { beautyUniversityTopics } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const referenceAssetSlugs = new Set([
  "beauty-routine-order-chart",
  "ingredient-compatibility-cheat-sheet",
  "artificial-jewelry-styling-guide",
  "beauty-gift-decision-tree",
  "hair-care-routine-map",
  "nail-care-tool-checklist",
  "body-care-layering-guide",
  "fragrance-family-reference-chart",
]);

export const metadata = buildBeautyMetadata({
  title: "Beauty University",
  description: "Use luxury beauty guides to understand seller trust, shade matching, lip care, and premium product tradeoffs before you buy.",
  canonicalPath: "/beauty-university",
});

export default function BeautyUniversityPage() {
  const referenceAssets = beautyUniversityTopics.filter((topic) => referenceAssetSlugs.has(topic.slug));
  const coreLearningPaths = beautyUniversityTopics.filter((topic) => !referenceAssetSlugs.has(topic.slug));

  return (
    <BeautyHubPage
      title="Use Beauty University before you click out to a seller"
      description="This education layer supports premium affiliate pages with buyer-first guidance around product fit, luxury shopping risk, and seller confidence."
      eyebrow="Education hub"
      sections={[
        {
          title: "Core learning paths",
          links: coreLearningPaths.map((topic) => ({
            href: `/beauty-university/${topic.slug}`,
            label: topic.title,
            description: topic.description,
          })),
        },
        {
          title: "Reference assets worth citing",
          links: referenceAssets.map((topic) => ({
            href: `/beauty-university/${topic.slug}`,
            label: topic.title,
            description: topic.description,
          })),
        },
        {
          title: "Support your next decision",
          links: [
            { href: "/compare", label: "Comparison hub", description: "Move into comparisons once the education layer narrows the real tradeoff." },
            { href: "/skin-care", label: "Skin care", description: "Return to premium treatment and routine-led shopping paths." },
            { href: "/lip-care", label: "Lip care", description: "Use the lip-care lane when texture, treatment, and color are the real decision." },
          ],
        },
      ]}
    />
  );
}

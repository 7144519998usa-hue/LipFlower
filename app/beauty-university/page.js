import BeautyHubPage from "../components/BeautyHubPage";
import { beautyUniversityTopics } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Beauty University",
  description: "Use luxury beauty guides to understand seller trust, shade matching, lip care, and premium product tradeoffs before you buy.",
  canonicalPath: "/beauty-university",
});

export default function BeautyUniversityPage() {
  return (
    <BeautyHubPage
      title="Use Beauty University before you click out to a seller"
      description="This education layer supports premium affiliate pages with buyer-first guidance around product fit, luxury shopping risk, and seller confidence."
      eyebrow="Education hub"
      sections={[
        {
          title: "Core learning paths",
          links: beautyUniversityTopics.map((topic) => ({
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

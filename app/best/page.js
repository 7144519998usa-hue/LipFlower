import BeautyHubPage from "../components/BeautyHubPage";
import { programmaticBestPages } from "../lib/programmaticSeoData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Best Beauty Product Guides",
  description: "Browse LipFlower's governed programmatic beauty guides across skin care, makeup, lip care, hair care, fragrance, body care, nail care, and beauty tools.",
  canonicalPath: "/best",
});

const previewLinks = programmaticBestPages.slice(0, 18).map((page) => ({
  href: `/best/${page.slug}`,
  label: page.title,
  description: page.summary,
}));

export default function BestBeautyHubPage() {
  return (
    <BeautyHubPage
      eyebrow="Best beauty guides"
      title="Best Beauty Product Guides"
      description="A clean index into LipFlower's high-intent beauty buying routes."
      intro="The full programmatic layer is governed through registry and sitemap logic, while this hub keeps the frontend calm with a small editorial sample."
      actions={[
        { href: "/beauty", label: "Explore Beauty", variant: "primary" },
        { href: "/search", label: "Search Guides", variant: "secondary" },
      ]}
      sections={[
        {
          title: "Featured high-intent routes",
          links: previewLinks,
        },
        {
          title: "Browse by pillar",
          links: [
            { href: "/skin-care", label: "Skin care", description: "Compare skin-care routines and ingredient-led routes." },
            { href: "/makeup", label: "Makeup", description: "Compare complexion, cheek, eye, and lip color routes." },
            { href: "/lip-care", label: "Lip care", description: "Compare masks, oils, balms, and plumper routes." },
            { href: "/hair-care", label: "Hair care", description: "Compare salon-inspired hair-care routes." },
            { href: "/fragrance", label: "Fragrance", description: "Compare scent discovery and luxury gifting routes." },
            { href: "/beauty-tools", label: "Beauty tools", description: "Compare brushes, facial tools, and styling tools." },
          ],
        },
      ]}
    />
  );
}

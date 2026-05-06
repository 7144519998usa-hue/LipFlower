import BeautyHubPage from "../components/BeautyHubPage";
import { programmaticBestPages } from "../lib/programmaticSeoData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

export const metadata = buildBeautyMetadata({
  title: "Best Beauty Product Guides",
  description: "Browse LipFlower's beauty buying guides across skin care, makeup, lip care, hair care, fragrance, body care, nail care, and beauty tools.",
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
      description="A clean index of beauty buying guides for shoppers comparing products, sellers, routines, and gift ideas."
      intro="Start with a few featured guides, then use search or category hubs to narrow by product type, seller, routine, or beauty concern."
      actions={[
        { href: "/beauty", label: "Explore Beauty", variant: "primary" },
        { href: "/search", label: "Search Guides", variant: "secondary" },
      ]}
      sections={[
        {
          title: "Featured shopping guides",
          links: previewLinks,
        },
        {
          title: "Browse by pillar",
          links: [
            { href: "/skin-care", label: "Skin care", description: "Compare skin-care routines and ingredient-led guides." },
            { href: "/makeup", label: "Makeup", description: "Compare complexion, cheek, eye, and lip color guides." },
            { href: "/lip-care", label: "Lip care", description: "Compare masks, oils, balms, and plumper guides." },
            { href: "/hair-care", label: "Hair care", description: "Compare salon-inspired hair-care guides." },
            { href: "/fragrance", label: "Fragrance", description: "Compare scent discovery and luxury gifting guides." },
            { href: "/beauty-tools", label: "Beauty tools", description: "Compare brushes, facial tools, and styling tools." },
          ],
        },
      ]}
    />
  );
}

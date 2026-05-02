import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("luxury-beauty");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/luxury-beauty",
});

export default function LuxuryBeautyPage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}

import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("lip-care");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/lip-care",
});

export default function LipCarePage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}

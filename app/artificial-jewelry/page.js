import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("artificial-jewelry");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/artificial-jewelry",
});

export default function ArtificialJewelryPage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}

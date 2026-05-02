import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("hair-care");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/hair-care",
});

export default function HairCarePage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}


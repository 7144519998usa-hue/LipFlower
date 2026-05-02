import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("beauty-tools");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/beauty-tools",
});

export default function BeautyToolsPage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}


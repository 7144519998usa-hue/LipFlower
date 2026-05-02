import { notFound } from "next/navigation";
import BeautyHubPage from "../components/BeautyHubPage";
import { getBeautyCategoryPage } from "../lib/beautyData";
import { buildBeautyMetadata } from "../lib/beautyMetadata";

const page = getBeautyCategoryPage("nail-care");

export const metadata = buildBeautyMetadata({
  title: page.title,
  description: page.description,
  canonicalPath: "/nail-care",
});

export default function NailCarePage() {
  if (!page) {
    notFound();
  }

  return <BeautyHubPage {...page} />;
}


import { notFound } from "next/navigation";
import BeautyLandingRoutePage from "../../components/BeautyLandingRoutePage";
import {
  getBeautyLandingPageForCategory,
  getBeautyLandingPagesForCategory,
} from "../../lib/beautyData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

const categoryPath = "nail-care";

export function generateStaticParams() {
  return getBeautyLandingPagesForCategory(categoryPath).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getBeautyLandingPageForCategory(categoryPath, slug);
  if (!page) {
    return {};
  }

  return buildBeautyMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/${categoryPath}/${page.slug}`,
  });
}

export default async function NailCareLandingPage({ params }) {
  const { slug } = await params;
  const page = getBeautyLandingPageForCategory(categoryPath, slug);
  if (!page) {
    notFound();
  }

  return <BeautyLandingRoutePage eyebrow="Nail care guide" page={page} />;
}

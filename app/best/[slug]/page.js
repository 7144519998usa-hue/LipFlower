import { notFound } from "next/navigation";
import BestProgrammaticPage from "../../components/BestProgrammaticPage";
import {
  getProgrammaticBestPage,
  programmaticBestPages,
} from "../../lib/programmaticSeoData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return programmaticBestPages
    .filter((page) => page.governance.indexabilityState === "indexable")
    .slice(0, 250)
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getProgrammaticBestPage(slug);
  if (!page) {
    return {};
  }

  return buildBeautyMetadata({
    title: page.title,
    description: page.summary,
    canonicalPath: `/best/${page.slug}`,
    index: page.governance.indexabilityState === "indexable",
  });
}

export default async function BestBeautyDetailPage({ params }) {
  const { slug } = await params;
  const page = getProgrammaticBestPage(slug);
  if (!page) {
    notFound();
  }

  return <BestProgrammaticPage page={page} />;
}

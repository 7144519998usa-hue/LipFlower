import { notFound } from "next/navigation";
import BestProgrammaticPage from "../../components/BestProgrammaticPage";
import {
  getProgrammaticBestPage,
  programmaticBestPages,
} from "../../lib/programmaticSeoData";
import { buildBeautyMetadata } from "../../lib/beautyMetadata";

export function generateStaticParams() {
  return programmaticBestPages.map((page) => ({ slug: page.slug }));
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

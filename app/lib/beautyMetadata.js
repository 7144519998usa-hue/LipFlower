import { beautySiteName, beautySiteUrl } from "./beautyData.js";

export function buildBeautyMetadata({ title, description, canonicalPath = "/" }) {
  const url = canonicalPath === "/" ? beautySiteUrl : `${beautySiteUrl}${canonicalPath}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${beautySiteName}`,
      description,
      url,
      siteName: beautySiteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${beautySiteName}`,
      description,
    },
  };
}

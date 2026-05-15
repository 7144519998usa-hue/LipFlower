import { beautySiteName, beautySiteUrl } from "./beautyData.js";

export function buildBeautyMetadata({ title, description, canonicalPath = "/", index = true }) {
  const url = canonicalPath === "/" ? beautySiteUrl : `${beautySiteUrl}${canonicalPath}`;

  const metadata = {
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

  if (!index) {
    metadata.robots = {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    };
  }

  return metadata;
}

import type { Metadata } from "next";
import config from "@/config";

interface Data {
  seo?: {
    title?: string;
    description?: string;
    ogimage?: string[];
    noIndex?: boolean;
  };

  pathname?: {
    current?: string;
  };
}

export default async function processMetadata(data: Data): Promise<Metadata> {
  const { title, description, ogimage, noIndex } = data?.seo || {};

  return {
    metadataBase: new URL(config.baseUrl),
    title: title || "No title",
    description: description || "No description",

    openGraph: {
      type: "website",
      url: config.baseUrl + (data?.pathname?.current || ""),
      title,
      description,

      images: ogimage,
    },
    alternates: {
      canonical: config.baseUrl + (data?.pathname?.current || ""),
    },
    robots: {
      index: !noIndex,
    },
  };
}

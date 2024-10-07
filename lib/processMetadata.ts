import type { Metadata } from "next";
import config from "@/config";
import { loadSite } from "@/sanity";

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
  // If no data is passed, load the default site data.
  // const defaultData = await loadSite(METADATA_QUERY);

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

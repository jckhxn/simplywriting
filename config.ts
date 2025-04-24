// For devs.

const config = {
  openGraph: {
    // OpenGraph Image Plugin Settings.
    default: {
      color: "pink",
    },
  },
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    // Not exposed to the front-end, used solely by the server
    token: process.env.SANITY_API_READ_TOKEN || "",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-21",
    revalidateSecret: process.env.SANITY_REVALIDATE_SECRET || "",
    studioUrl: "/studio",
  },
  siteName: "Starter Site",
  siteDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN || "",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
};

export default config;

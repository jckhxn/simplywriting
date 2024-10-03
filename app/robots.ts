import type { MetadataRoute } from "next";
import config from "../config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: config.sanity.studioUrl,
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: [config.sanity.studioUrl],
      },
    ],
    sitemap: `${config.baseUrl}/sitemap.xml`,
  };
}

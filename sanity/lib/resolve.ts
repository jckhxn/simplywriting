// src/sanity/presentation/resolve.ts

import {
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/posts/${doc?.slug}`,
          },
          { title: "Home", href: `/` },
        ],
      }),
    }),

    // Adding resolver for page documents
    page: defineLocations({
      select: {
        title: "title",
        pathname: "pathname.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: doc?.pathname || "/",
          },
          { title: "Home", href: `/` },
        ],
      }),
    }),
  },
};

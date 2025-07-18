import { defineField, defineType } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title for SEO & Social Media",
      description:
        "This will appear in search results and social media shares, between 15 and 70 characters",
      type: "string",
      validation: (Rule) => Rule.max(70).warning(),
    }),
    defineField({
      name: "description",
      title: "Short description for SEO & Social Media",
      description:
        "Also known as meta description, ideally between 70 and 160 characters",
      type: "string",
      validation: (Rule) => Rule.max(160).warning(),
    }),
    {
      name: "ogimage",
      title: "Open Graph image",
      type: "image",
      options: {
        sources: [
          // Select from Media
          mediaAssetSource,
          unsplashAssetSource,
        ],
      },
    },
  ],
});

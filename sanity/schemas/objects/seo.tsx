import { defineField, defineType } from "sanity";
import { GenerateIcon } from "@sanity/icons";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import brandLayout from "@/sanity/plugins/og-img/src/layouts/brandLayout";
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
          {
            // Gewnerate OG Image
            name: "image",
            title: "Generate image",
            icon: GenerateIcon,

            component: (props) => (
              <MediaEditor {...props} darkMode={true} layouts={[brandLayout]} />
            ),
          },
        ],
      },
    },
  ],
});

import { defineField, defineType } from "sanity";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
import { GenerateIcon } from "@sanity/icons";

export default defineType({
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position/Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial Text",
      type: "text",
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "image",
      title: "Client Photo",
      type: "image",
      options: {
        sources: [
          mediaAssetSource,
          unsplashAssetSource,
          {
            name: "image",
            title: "Generate image",
            icon: GenerateIcon,
            component: (props) => (
              <MediaEditor {...props} darkMode={true} />
            ),
          },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Display this testimonial prominently on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which this testimonial appears (lower numbers first)",
      initialValue: 1,
    }),
    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "work" }],
      description: "Link to the work project this testimonial refers to",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: subtitle || "Client",
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
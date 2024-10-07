import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.services",
  title: "Services Section",
  type: "object",

  options: {
    variants: [
      {
        assetUrl: "@/sanity/schemas/sections/images/header.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "title",
      title: "Title of Services section",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading of Services section",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading of Services section",
      type: "string",
    }),

    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "service" }],
    }),
  ],
  preview: {
    select: {
      title: "Services Section",
    },
  },
});

import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.benefits",
  title: "Benefits Section",
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
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "benefit" }],
    }),
  ],
  // Add the custom preview to return "About Me" as the title in the content list
  preview: {
    prepare() {
      return {
        title: "Benefits Section",
      };
    },
  },
});

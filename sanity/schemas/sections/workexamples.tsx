import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.workexamples",
  title: "Work Examples",
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
      title: "Title of Testimonials section",
      type: "string",
    }),
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
  ],
  preview: {
    prepare() {
      return {
        title: "Work Example Section",
      };
    },
  },
});

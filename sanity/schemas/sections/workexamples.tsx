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
      name: "heading",
      title: "Work Example Heading",
      type: "text",
    }),
    defineField({
      name: "subheading",
      title: "Work Example Subheading",
      type: "string",
    }),
  ],
});

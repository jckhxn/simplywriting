import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.benefits",
  title: "Benefits Section",
  type: "object",

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

import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.services",
  title: "Services Section",
  type: "object",

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
    prepare() {
      return {
        title: "Services Section",
      };
    },
  },
});

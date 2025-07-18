import { defineField } from "sanity";

export default defineField({
  name: "section.hero",
  title: "Hero",
  type: "object",

  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Hero Section",
      };
    },
  },
});

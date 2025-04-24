import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.blog.allposts",
  title: "All Blog Posts",
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
});

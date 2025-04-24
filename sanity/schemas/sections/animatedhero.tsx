import { defineField } from "sanity";

export default defineField({
  name: "section.animatedhero",
  title: "Animated Hero",
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
      name: "animate",
      type: "boolean",
    }),
    defineField({
      name: "header",
      type: "string",
      initialValue: "Welcome to our website!",
    }),
    defineField({
      name: "subline",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "ctas",
      title: "Call-To-Action Button",
      type: "array",
      of: [{ type: "cta" }],
      options: {
        layout: "grid",
      },
      validation: (Rule) => Rule.max(2),
    }),
  ],
});

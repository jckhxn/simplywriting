import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "nav.1",
  title: "navigation",
  type: "object",
  options: {
    variants: [
      {
        assetUrl: "/images/blocks/hero.png",
      },
    ],
  },
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "links",
      title: "Menu Links",
      description: "Links that appear in the navigation bar",
      type: "array",
      of: [{ type: "links" }],
    }),
    defineField({
      name: "ctas",
      title: "Call-To-Action Button",
      type: "array",
      of: [{ type: "cta" }],
    }),
  ],
});

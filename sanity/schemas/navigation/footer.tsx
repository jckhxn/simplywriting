import { defineField } from "sanity";

export const footerSection = defineField({
  name: "block.footer",
  title: "Footer",
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
      name: "footerSection",
      type: "string",
    }),
  ],
});

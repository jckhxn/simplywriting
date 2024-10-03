import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export const nav2 = defineSection({
  name: "nav.2",
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

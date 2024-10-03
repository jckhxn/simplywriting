import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.blog.allposts",
  title: "All Blog Posts",
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

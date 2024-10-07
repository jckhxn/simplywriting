import { defineField, defineType } from "sanity";

// Testimonials Section (an array of testimonials)
export default defineType({
  name: "section.testimonials",
  title: "Testimonials Section",
  type: "document",
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
      title: "Title of Testimonials section",
      type: "string",
    }),
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "section.testimonial" }], // Reference the testimonial type
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Testimonials Section",
      };
    },
  },
});

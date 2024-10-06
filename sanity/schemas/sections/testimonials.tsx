import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

// Testimonials Section (an array of testimonials)
export default defineSection({
  name: "section.testimonial",
  title: "Testimonial Section",
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
      name: "name",
      title: "Testimonial's Name",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Testimonial's Position",
      type: "string",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial Text",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

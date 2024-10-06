import { defineField, defineType } from "sanity";

// Testimonials Section (an array of testimonials)
export default defineType({
  name: "section.testimonials",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "section.testimonial" }], // Reference the testimonial type
    }),
  ],
});

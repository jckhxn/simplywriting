import { defineType, defineField } from "sanity";

// Testimonial Section
export default defineType({
  name: "section.testimonial",
  title: "Testimonial Section",
  type: "object",

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
  preview: {
    select: {
      title: "name",
      subtitle: "position",
    },
  },
});

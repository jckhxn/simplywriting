import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.scrollablecard",
  title: "Scrollable Card Section",
  description: "For testimonials, reviews, etc.",
  type: "object",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      description: "e.g. 'Our Team'",
      type: "string",
    }),
  ],
});

import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.workexamples",
  title: "Work Examples",
  type: "object",
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
  ],
  preview: {
    prepare() {
      return {
        title: "Work Example Section",
      };
    },
  },
});

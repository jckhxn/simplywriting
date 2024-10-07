import { defineField, defineType } from "sanity";

export default defineType({
  name: "benefit",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Benefit Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Benefit Description",
      type: "string",
    }),
  ],
});

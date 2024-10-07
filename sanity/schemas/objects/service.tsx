import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Service Description",
      type: "string",
    }),
  ],
});

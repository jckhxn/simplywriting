import { defineType, defineField } from "sanity";

export default defineType({
  name: "section.forms.contact",
  title: "Contact Form",
  type: "object",

  fields: [
    // A list of fields the form has and the text copy and button text
    defineField({
      name: "title",
      title: "Contact Form Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Contact Form Description",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Form  Email",
      description: "The email in which the contact form will be sent to",
      type: "string",
    }),
  ],
});

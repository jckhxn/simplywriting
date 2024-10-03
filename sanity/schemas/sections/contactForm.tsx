import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.forms.contact",
  title: "Contact Form",
  type: "object",

  options: {
    variants: [
      {
        assetUrl: "@/sanity/schemas/sections/images/header.png",
      },
    ],
  },
  fields: [
    // A list of fields the form has and the text copy and button text
    defineField({
      name: "title",
      title: "Contact Form Title",
      type: "string",
    }),
  ],
});

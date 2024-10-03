import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

// Testimonial Quote, IMG on right boolean
export default defineSection({
  name: "section.testimonialsection",
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
      fields: [
        {
          name: "isRight",
          type: "boolean",
          title: "Is image right positioned in the section?",
          description: "If false, image will appear on the left side",
          initialValue: true, // Optional: sets the default value to false
        },
      ],
    }),
  ],
});

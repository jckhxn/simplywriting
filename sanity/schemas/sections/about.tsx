import { defineField, defineType } from "sanity";

export default defineType({
  name: "section.aboutme", // Unique name for the section
  title: "About Me", // Display title for the section
  type: "object",

  options: {
    variants: [
      {
        assetUrl: "@/sanity/schemas/sections/images/header.png", // Example asset URL
      },
    ],
  },

  fields: [
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
    defineField({
      name: "description",
      title: "Description",
      description: "A brief description about yourself",
      type: "string",
    }),
    // Milestones array
    defineField({
      name: "milestones", // Array field for milestones
      title: "Milestones",
      type: "array",
      of: [
        {
          type: "object", // Each item in the array is an object
          fields: [
            defineField({
              name: "date",
              title: "Date",
              type: "date", // Date field for milestone
              options: {
                dateFormat: "MM-YYYY",
              },
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text", // Text description for the milestone
            }),
          ],
        },
      ],
    }),
    // Awards array
    defineField({
      name: "awards", // Array field for awards
      title: "Awards",
      type: "array",
      of: [
        {
          type: "object", // Each item in the array is an object
          fields: [
            defineField({
              name: "date",
              title: "Date",
              type: "date", // Date field for award
              options: {
                dateFormat: "MM-YYYY",
              },
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text", // Text description for the award
            }),
          ],
        },
      ],
    }),
  ],

  // Add the custom preview to return "About Me" as the title in the content list
  preview: {
    prepare() {
      return {
        title: "About Me",
      };
    },
  },
});

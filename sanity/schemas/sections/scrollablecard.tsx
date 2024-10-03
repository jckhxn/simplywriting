import { defineSection } from "@tinloof/sanity-studio";
import { defineField } from "sanity";

export default defineSection({
  name: "section.scrollablecard",
  title: "Scrollable Card Section",
  description: "For testimonials, reviews, etc.",
  type: "object",
  options: {
    variants: [
      {
        
        assetUrl: "/placeholder.svg",
      },
    ],
  },
  fields: [
    defineField({
      name: "header",
      title: "Header",
      description: "e.g. 'Our Team'",
      type: "string",
    }),
  ],
});

import { defineField, defineType } from "sanity";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
import { GenerateIcon } from "@sanity/icons";

export default defineType({
  name: "work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Article?",
      description: "If checked, this article will be featured on the homepage",
      type: "boolean",
    }),
    {
      name: "image",
      title: "Post image",
      type: "image",
      options: {
        sources: [
          mediaAssetSource,
          unsplashAssetSource,
          {
            name: "image",
            title: "Generate image",
            icon: GenerateIcon,
            component: (props) => (
              <MediaEditor {...props} darkMode={true} layouts={[brandLayout]} />
            ),
          },
        ],
      },
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 96)
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required().error("Author is required"),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "fileUpload",
      title: "File Upload",
      type: "file",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }], // Reference the category schema
      validation: (Rule) => Rule.required().error("Category is required"),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      description: "Name of the client or company",
    }),
    defineField({
      name: "timeline",
      title: "Project Timeline",
      type: "string",
      description: "How long the project took (e.g., '2 weeks', '1 month')",
    }),
    defineField({
      name: "results",
      title: "Project Results",
      type: "string",
      description: "Measurable results or outcomes (e.g., '$12M raised', '340% conversion increase')",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "Type of project (e.g., 'Pitch Deck', 'Website Copy', 'Annual Report')",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      description: "Industry or sector (e.g., 'Healthcare', 'Technology', 'Finance')",
    }),
  ],
});

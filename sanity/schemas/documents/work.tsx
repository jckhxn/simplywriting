import { defineField, defineType } from "sanity";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
import { EarthGlobeIcon, GenerateIcon } from "@sanity/icons";

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
  ],
});

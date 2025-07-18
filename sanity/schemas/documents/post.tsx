import { defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";
import { mediaAssetSource } from "sanity-plugin-media";
import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";
export default defineType({
  name: "post",
  type: "document",

  groups: [
    {
      name: "components",
      title: "Components",
      icon: EarthGlobeIcon,
      default: false,
    },
    {
      name: "seo",
      title: "SEO",
      icon: EarthGlobeIcon,
      default: false,
    },
  ],

  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required().error("Author is required"),
    }),
    {
      type: "string",
      name: "title",
      title: "Post Title",
    },
    {
      type: "string",
      name: "description",
      title: "Post Description (shows on site)",
    },
    {
      type: "date",
      name: "publishedDate",
      title: "Published Date",
      options: {
        dateFormat: "MM-DD-YYYY", // Customize how the date appears in the Studio
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "image",
      title: "Post image",
      type: "image",
      options: {
        sources: [
          // Select from Media
          mediaAssetSource,
          unsplashAssetSource,
        ],
      },
    },
    defineField({
      name: "content",
      title: "Post Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    }),
    {
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
    },
    defineField({
      name: "noIndex",
      description: "Prevent search engines from indexing this page.",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "seo",
      title: "SEO & Social",
      type: "seo",
      group: "seo",
    }),
  ],
});

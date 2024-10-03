import { defineField, defineType } from "sanity";
import { VscLink } from "react-icons/vsc";
import MyCustomComponent from "@/app/(site)/components/CustomComponent";

export default defineType({
  name: "link",
  title: "Link",
  icon: VscLink,
  type: "object",
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "internal", value: "internal" },
          { title: "external", value: "external" },
          { title: "section", value: "section" },
        ],
      },
      initialValue: "internal",
    }),
    defineField({
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
    defineField({
      name: "external",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
      hidden: ({ parent }) => parent?.type !== "external",
    }),

    defineField({
      name: "section",
      type: "string",
      components: {
        input: MyCustomComponent,
      },
      hidden: ({ parent }) => parent?.type !== "section",
    }),

    defineField({
      name: "params",
      title: "URL params",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
  ],
  //   preview: {
  //     select: {
  //       label: "label",
  //       _type: "internal._type",
  //       title: "internal.title",
  //       slug: "internal.metadata.slug.current",
  //       external: "external",
  //       params: "params",
  //     },
  //     prepare: ({ label, _type, title, slug, external, params }) => ({
  //       title: label || title,
  //       subtitle: [
  //         _type === "blog.post" ? "/blog" : null,
  //         external || (slug && (slug === "index" ? "/" : `/${slug}`)),
  //         params,
  //       ]
  //         .filter(Boolean)
  //         .join(""),
  //     }),
  //   },
});

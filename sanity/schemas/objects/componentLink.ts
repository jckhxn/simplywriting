import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "componentLink",
  title: "Component Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Same Page Component", value: "samePageComponent" },
          { title: "Different Page Component", value: "differentPageComponent" },
          { title: "External URL", value: "externalUrl" },
        ],
        layout: "radio",
      },
      initialValue: "samePageComponent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Link Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "componentId",
      title: "Component ID",
      type: "string",
      hidden: ({ parent }) => parent?.linkType !== "samePageComponent",
      validation: (rule) =>
        rule.custom((value, context) => {
          const { parent } = context;
          if (parent?.linkType === "samePageComponent" && !value) {
            return "Component ID is required for same page links";
          }
          return true;
        }),
    }),
    defineField({
      name: "scrollBehavior",
      title: "Scroll Behavior",
      type: "string",
      options: {
        list: [
          { title: "Smooth", value: "smooth" },
          { title: "Auto", value: "auto" },
        ],
      },
      initialValue: "smooth",
      hidden: ({ parent }) => parent?.linkType !== "samePageComponent",
    }),
    defineField({
      name: "scrollOffset",
      title: "Scroll Offset (px)",
      type: "number",
      description: "Additional offset from top when scrolling to component",
      initialValue: 0,
      hidden: ({ parent }) => parent?.linkType !== "samePageComponent",
    }),
    defineField({
      name: "targetPage",
      title: "Target Page",
      type: "reference",
      to: [
        { type: "page" },
        { type: "post" },
        { type: "work" },
      ],
      hidden: ({ parent }) => parent?.linkType !== "differentPageComponent",
      validation: (rule) =>
        rule.custom((value, context) => {
          const { parent } = context;
          if (parent?.linkType === "differentPageComponent" && !value) {
            return "Target page is required for different page links";
          }
          return true;
        }),
    }),
    defineField({
      name: "targetComponentId",
      title: "Target Component ID (Optional)",
      type: "string",
      description: "ID of component to scroll to on target page",
      hidden: ({ parent }) => parent?.linkType !== "differentPageComponent",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "externalUrl",
      validation: (rule) =>
        rule.custom((value, context) => {
          const { parent } = context;
          if (parent?.linkType === "externalUrl" && !value) {
            return "External URL is required for external links";
          }
          return true;
        }),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: true,
      hidden: ({ parent }) => parent?.linkType !== "externalUrl",
    }),
  ],
  preview: {
    select: {
      title: "text",
      linkType: "linkType",
      componentId: "componentId",
      targetPage: "targetPage.title",
      externalUrl: "externalUrl",
    },
    prepare({ title, linkType, componentId, targetPage, externalUrl }) {
      let subtitle = "";
      switch (linkType) {
        case "samePageComponent":
          subtitle = `Same page → #${componentId}`;
          break;
        case "differentPageComponent":
          subtitle = `${targetPage || "Page"} → Component`;
          break;
        case "externalUrl":
          subtitle = `External → ${externalUrl}`;
          break;
      }
      return {
        title,
        subtitle,
      };
    },
  },
});
import { defineField, defineType } from "sanity";
import { VscInspect } from "react-icons/vsc";

export default defineType({
  name: "links",
  title: "Navigation Links",
  icon: VscInspect,
  type: "object",
  fields: [
    defineField({
      name: "link",
      type: "link",
    }),
  ],
  preview: {
    select: {
      label: "link.label",
      pageTitle: "link.internal.title",
      internal: "link.internal.pathname.current",
      external: "link.external",
    },
    prepare: ({ label, pageTitle, internal, external }) => ({
      title: label || pageTitle,
      subtitle:
        external || (internal && (internal === "index" ? "/" : `${internal}`)),
    }),
  },
});

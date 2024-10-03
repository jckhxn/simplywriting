import { definePathname } from "@tinloof/sanity-studio";
import { SectionsArrayInput } from "@tinloof/sanity-studio";
import { defineField, defineType } from "sanity";
import { sections } from "../sections";

import { EarthGlobeIcon } from "@sanity/icons";

export default defineType({
  name: "page",
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
    {
      type: "string",
      name: "title",
      title: "Page Title",
    },
    definePathname({
      name: "pathname",
      title: "Relative URL to site",
    }),
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
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      initialValue: "Header Component Name",
    }),
    defineField({
      name: "sectionsBody",
      title: "Sections",
      type: "array",
      group: "components",
      of: sections.map((section) => ({
        type: section.name,
      })),
      components: {
        input: SectionsArrayInput,
      },
    }),
  ],
});

import { defineField, defineType } from "sanity";
import { MediaEditor } from "@/sanity/plugins/og-img/src/";
import { mediaAssetSource } from "sanity-plugin-media";
import brandLayout from "@/sanity/plugins/og-img/src/layouts/brandLayout";
import { GenerateIcon } from "@sanity/icons";
import { SectionsArrayInput } from "@tinloof/sanity-studio";
import { footers, nav } from "../navigation";
export default defineType({
  name: "site",
  title: "Site",
  type: "document",
  groups: [
    { name: "general", title: "General" },
    { name: "navigation", title: "Navigation" },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
    },
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
  fields: [
    defineField({
      name: "headerPicker",
      title: "Header Picker",

      description: "Choose the Header to appear across site",
      type: "array",
      of: nav.map((nav) => ({
        type: nav.name,
      })),
      components: {
        input: SectionsArrayInput,
      },
    }),
    defineField({
      name: "footerPicker",
      title: "Footer Picker",
      description: "Choose the Footer to appear across site",
      type: "array",
      of: footers.map((footer) => ({
        type: footer.name,
      })),
      components: {
        input: SectionsArrayInput,
      },
    }),
    // defineField({
    //   name: "title",
    //   type: "string",
    //   group: "general",
    // }),
    // defineField({
    //   name: "logo",
    //   type: "logo",
    //   options: {
    //     collapsable: true,
    //     collapsed: true,
    //   },
    //   group: "general",
    // }),
    // defineField({
    //   name: "announcements",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "announcement" }] }],
    //   group: "general",
    //   description: "Higher order has higher precedence",
    // }),
    // defineField({
    //   name: "ctas",
    //   title: "Call-to-action",
    //   type: "array",
    //   of: [{ type: "cta" }],
    //   group: "general",
    // }),
    // defineField({
    //   name: "copyright",
    //   type: "array",
    //   of: [
    //     {
    //       type: "block",
    //       styles: [{ title: "Normal", value: "normal" }],
    //     },
    //   ],
    //   group: "general",
    // }),
    // defineField({
    //   name: "headerMenu",
    //   type: "reference",
    //   to: [{ type: "navigation" }],
    //   group: "navigation",
    // }),
    // defineField({
    //   name: "footerMenu",
    //   type: "reference",
    //   to: [{ type: "navigation" }],
    //   group: "navigation",
    // }),
    // defineField({
    //   name: "social",
    //   type: "reference",
    //   to: [{ type: "navigation" }],
    //   group: "navigation",
    // }),
    defineField({
      name: "ogimage",
      title: "Open Graph Image (global)",
      description:
        "Used as default for social sharing previews when one is not set on a page",
      type: "image",
      group: "general",
      options: {
        sources: [
          // Select from Media
          mediaAssetSource,
          {
            // Gewnerate OG Image
            name: "image",
            title: "Generate image",
            icon: GenerateIcon,

            component: (props) => (
              <MediaEditor {...props} darkMode={true} layouts={[brandLayout]} />
            ),
          },
        ],
      },
    }),
  ],
});

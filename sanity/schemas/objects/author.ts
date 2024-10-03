import { defineField, defineType } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export default defineType({
  name: "author",
  type: "document",

  fields: [
    defineField({
      name: "name",
      description: "Author Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Author Image",
      type: "image",
      options: {
        sources: [
          // Select from Media
          mediaAssetSource,
        ],
      },
    }),
  ],
});

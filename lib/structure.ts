import type {
  Divider,
  ListItem,
  ListItemBuilder,
  StructureBuilder,
} from "sanity/structure";

export const singleton = (
  S: StructureBuilder,
  title: string,
  id: string
): ListItemBuilder =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(id).documentId(id));

export const group = (
  S: StructureBuilder,
  title: string,
  items: (ListItemBuilder | ListItem | Divider)[]
): ListItemBuilder =>
  S.listItem().title(title).child(S.list().title(title).items(items));

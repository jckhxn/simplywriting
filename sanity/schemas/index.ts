import { type SchemaTypeDefinition } from "sanity";
import post from "./documents/post";
import page from "./documents/page";
import site from "./documents/site";
import seo from "./objects/seo";
import { sections } from "./sections";
import { nav } from "./navigation";
import { footers } from "./navigation";
import cta from "./objects/cta";
import link from "./objects/link";
import links from "./navigation/links";
import author from "./objects/author";
import work from "./documents/work";
import categories from "./objects/categories";
import service from "./objects/service";

import benefit from "./objects/benefit";

export const schemas: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    post,
    seo,
    site,
    page,
    cta,
    link,
    links,
    work,

    benefit,

    service,
    categories,
    ...sections,
    ...nav,
    ...footers,
  ],
};

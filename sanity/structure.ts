import { group, singleton } from "@/lib/structure";
import type { StructureResolver } from "sanity/structure";

import { VscServerProcess } from "react-icons/vsc";

const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "Site Settings", "site").icon(VscServerProcess),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("author").title("Author"),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("work").title("Examples of Work"),
      S.documentTypeListItem("section.testimonials").title("Testimonials"),
      //   S.documentTypeListItem("announcement").title("Announcements"),
      //   S.documentTypeListItem("redirect").title("Redirects"),
      //   S.divider(),

      //   S.documentTypeListItem("blog.post").title("Blog posts"),
      //   S.documentTypeListItem("blog.category").title("Blog categories"),
      //   S.divider(),

      //   group(S, "Miscellaneous", [
      //     S.documentTypeListItem("logo").title("Logos"),
      //     S.documentTypeListItem("testimonial").title("Testimonials"),
      //   ]).icon(BsDatabaseAdd),
    ]);

export default structure;

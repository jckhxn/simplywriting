// app/page.tsx

import { loadPage } from "@/sanity";
import processMetadata from "@/lib/processMetadata";
import { notFound } from "next/navigation";
import AllPosts from "../components/sections/blog/posts";
import { loadQuery } from "@/sanity/loadQuery";
import { PAGE_QUERY } from "@/sanity/queries";

export async function generateMetadata() {
  const data = await loadQuery({
    query: PAGE_QUERY,
    params: { pathname: "/blog" },
  });
  if (!data) notFound();

  return processMetadata(data);
}

// Instead of using Sanity to handle the page data, we can use the AllPosts component so we can pass the query param properly.

export default async function IndexRoute({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const page = parseInt(searchParams["page"] as string, 10) || 1; // Defaults to 1 if not provided
  const category = searchParams["category"] as string || "";

  return <AllPosts page={page} category={category} />;
}

import { loadPost } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";
import { PostPage } from "@/app/(site)/components/sections/blog/post";
import { loadQuery } from "@/sanity/loadQuery";
import { POST_QUERY } from "@/sanity/queries";

export default async function DynamicRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Join slug parts without leading '/'

  const slug = `${(await params).slug.join("/")}`;

  const data = await loadQuery({ query: POST_QUERY, params: { slug } });

  return (
    <>
      <PostPage data={data} />;
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  // Join slug parts without leading '/'
  const slug = `${(await params).slug.join("/")}`;
  const data = await loadPost(slug);

  if (!data) notFound();

  return processMetadata(data);
}

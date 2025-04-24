import { loadPost } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";
import { PostPage } from "@/app/(site)/components/sections/blog/post";
import { loadQuery } from "@/sanity/loadQuery";
import { PagePayload } from "@/types";
import { GENERATE_DOC_QUERY } from "../../data/queries";

export default async function DynamicRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  // Join slug parts without leading '/'
  const slug = params.slug.join("/");
  // const data = await loadPost(slug);
  const data = await loadQuery<PagePayload | null>({
    query: GENERATE_DOC_QUERY({ documentType: "post" }),
  });
  console.log(data);

  return (
    <>
      {/* @ts-ignore */}
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
  const slug = params.slug.join("/");
  const data = await loadPost(slug);

  if (!data) notFound();
  // @ts-ignore
  return processMetadata(data);
}

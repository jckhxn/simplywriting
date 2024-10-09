import { loadPost } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";
import { PostPage } from "@/app/(site)/components/sections/blog/post";

export default async function DynamicRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  // Join slug parts without leading '/'
  const slug = params.slug.join("/");
  const data = await loadPost(slug);

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

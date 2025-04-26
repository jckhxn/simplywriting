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

  const slug = `${(await params).slug.join("/")}`;
  const data = await loadPost(slug);

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

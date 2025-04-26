import { Page } from "@/app/(site)/components/Page";
import { loadPage } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";

export default async function DynamicRoute({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `/${(await params).path.join("/")}`;
  const data = await loadPage(pathname);

  return <Page data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `/${(await params).path.join("/")}`;
  const data = await loadPage(pathname);

  if (!data) notFound();

  return processMetadata(data);
}

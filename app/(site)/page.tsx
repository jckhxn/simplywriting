import { Page } from "@/app/(site)/components/Page";
import { loadPage } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";

export async function generateMetadata() {
  const data = await loadPage("/");

  if (!data) notFound();
  return processMetadata(data);
}
export default async function IndexRoute() {
  const data = await loadPage("/");

  return <Page data={data} />;
}

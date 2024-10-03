import { loadPage, loadWork } from "@/sanity";
import { notFound } from "next/navigation";
import processMetadata from "@/lib/processMetadata";
import WritingWorkPage from "../../components/sections/work/allwork";
import SingleDocumentPreview from "../../components/sections/work/work";

export default async function DynamicRoute({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `${params.path.join("")}`;
  const data = await loadWork(pathname);

  return <SingleDocumentPreview data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: { path: string[] };
}) {
  const pathname = `/${params.path.join("/")}`;
  const data = await loadPage(pathname);

  // if (!data) notFound();
  return processMetadata(data);
}

import { loadPage } from "@/sanity";
import processMetadata from "@/lib/processMetadata";
import { notFound } from "next/navigation";
import WritingWorkPage from "../components/sections/work/allwork";

export async function generateMetadata() {
  const data = await loadPage("/");
  if (!data) notFound();
  return processMetadata(data);
}

// Pass page number AND category to WritingWorkPage component.
export default async function IndexRoute({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const page = parseInt(searchParams["page"] as string, 10) || 1; // Defaults to 1 if not provided
  const category = (searchParams["category"] as string) || ""; // Defaults to 'All' if not provided

  return <WritingWorkPage page={page} category={category} />;
}

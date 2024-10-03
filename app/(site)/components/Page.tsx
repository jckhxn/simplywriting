import type { PagePayload } from "@/types";
import { SectionRenderer } from "./sections";
import { SanityDocument } from "next-sanity";
import StructuredData from "./StructuredData";
import processMetadata from "@/lib/processMetadata";
import processStructuredData from "@/lib/processStructuredData";
import { loadSite } from "@/sanity";

export interface PageProps {
  data: PagePayload | SanityDocument;
}
// Prepare structured data for component.
const structuredData = processStructuredData();
// Prepare metadata for component.
export async function generateMetadata() {
  const page = await loadSite();
  return processMetadata(page);
}

export function Page({ data }: PageProps) {
  return (
    <div>
      <StructuredData data={structuredData} />

      {data?.sectionsBody?.map((section) => {
        return <SectionRenderer key={section._key} section={section} />;
      })}
    </div>
  );
}

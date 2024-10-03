import config from "@/config";
import { Metadata } from "next";
import Studio from "./Studio";

export const metadata: Metadata = {
  title: `${config.siteName} - CMS`,
};

export default function StudioPage() {
  return <Studio />;
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeString(str: string) {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, "");
}
export const formatPublishedDate = (date: string) => {
  return moment(date).format("MMMM DD, YYYY");
};
export const formatSanityDate = (date: string, format: string) => {
  return moment(date).format(format);
};

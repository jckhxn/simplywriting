"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { sanitizeString } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Button({
  link,
  style,
  className,
  children,
  // @ts-ignore
}: Sanity.CTA & React.HTMLAttributes<HTMLAnchorElement>) {
  if (!link?.type) return null;

  const pathname = usePathname();
  
  // Check if this link is active (matches current pathname)
  const isActive = link.type === "internal" && 
    link.internal?.pathname?.current === pathname;

  const props = {
    className: cn(
      style, 
      className,
      isActive && "text-primary font-semibold border-b-2 border-primary"
    ),
    children: children || link.label || link.internal?.title,
  };

  switch (link.type) {
    case "internal":
      if (!link.internal) return null;

      return <Link href={link?.internal?.pathname?.current || ""} {...props} />;

    case "external":
      return <a href={link.external} {...props} />;

    case "section":
      // Remove zero-width characters
      const sanitizedSection = sanitizeString(link?.section || "");
      return <Link href={`#${sanitizedSection}`} {...props} />;
    default:
      return null;
  }
}

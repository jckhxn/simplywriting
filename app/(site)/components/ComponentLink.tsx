"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface ComponentLinkProps {
  data: {
    linkType: "samePageComponent" | "differentPageComponent" | "externalUrl";
    text: string;
    componentId?: string;
    scrollBehavior?: "smooth" | "auto";
    scrollOffset?: number;
    targetPage?: {
      pathname?: { current?: string };
      title?: string;
    };
    targetComponentId?: string;
    externalUrl?: string;
    openInNewTab?: boolean;
  };
  className?: string;
  children?: React.ReactNode;
}

export default function ComponentLink({ 
  data, 
  className, 
  children 
}: ComponentLinkProps) {
  const {
    linkType,
    text,
    componentId,
    scrollBehavior = "smooth",
    scrollOffset = 0,
    targetPage,
    targetComponentId,
    externalUrl,
    openInNewTab = true,
  } = data;

  const handleSamePageScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!componentId) return;

    const targetElement = document.getElementById(componentId);
    if (targetElement) {
      const elementTop = targetElement.offsetTop;
      const offsetPosition = elementTop - scrollOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: scrollBehavior,
      });
    }
  };

  const displayText = children || text;

  switch (linkType) {
    case "samePageComponent":
      return (
        <a
          href={`#${componentId}`}
          onClick={handleSamePageScroll}
          className={cn(
            "text-primary hover:text-primary/80 transition-colors cursor-pointer",
            className
          )}
        >
          {displayText}
        </a>
      );

    case "differentPageComponent":
      if (!targetPage?.pathname?.current) return null;
      
      const targetUrl = targetComponentId 
        ? `${targetPage.pathname.current}#${targetComponentId}`
        : targetPage.pathname.current;

      return (
        <Link
          href={targetUrl}
          className={cn(
            "text-primary hover:text-primary/80 transition-colors",
            className
          )}
        >
          {displayText}
        </Link>
      );

    case "externalUrl":
      if (!externalUrl) return null;
      
      return (
        <a
          href={externalUrl}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className={cn(
            "text-primary hover:text-primary/80 transition-colors",
            className
          )}
        >
          {displayText}
        </a>
      );

    default:
      return null;
  }
}
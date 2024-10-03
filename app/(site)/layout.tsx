import { draftMode } from "next/headers";
import { LiveVisualEditing } from "./components/LiveVisualEditing";
import { loadSite } from "@/sanity";
import React from "react";
import { NavRenderer } from "./components/navigation";

const data = await loadSite();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          {/* Header is rendered from global document. */}
          {data?.headerPicker?.map((nav) => {
            return <NavRenderer key={nav._key} nav={nav} />;
          })}

          {children}
          {/* Footer is rendered from global document. */}
          {data?.footerPicker?.map((nav) => {
            return <NavRenderer key={nav._key} nav={nav} />;
          })}
          {draftMode().isEnabled && <LiveVisualEditing />}
        </body>
      </html>
    </>
  );
}

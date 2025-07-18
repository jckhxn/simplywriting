import React from "react";

import { VisualEditing } from "next-sanity";
import { revalidatePath, revalidateTag } from "next/cache";

import { draftMode } from "next/headers";
import { loadSite } from "@/sanity";
import { Navbar2 } from "@/app/(site)/components/navigation/navbar2";
import Footer from "@/app/(site)/components/navigation/Footer";
import { SanityLive } from "@/sanity/live";
import type { SitePayload } from "@/types";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await loadSite() as SitePayload;
  
  const isDraftModeEnabled = (await draftMode()).isEnabled;
  return (
    <>
      <html lang="en">
        <body>
          {/* Header is rendered from global document. */}
          {data?.navigation && <Navbar2 navigation={data.navigation} />}

          {children}
          {/* Footer is rendered from global document. */}
          {data && <Footer site={data} />}

          {/* <SanityLive />  */}
          {isDraftModeEnabled && (
            <VisualEditing
              refresh={async (payload) => {
                "use server";
                if (!isDraftModeEnabled) {
                  console.debug(
                    "Skipped manual refresh because draft mode is not enabled"
                  );
                  return;
                }
                if (payload.source === "mutation") {
                  if (payload.document.slug?.current) {
                    const tag = `${payload.document._type}:${payload.document.slug.current}`;
                    console.log("Revalidate slug", tag);
                    await revalidateTag(tag);
                  }
                  console.log("Revalidate tag", payload.document._type);
                  return revalidateTag(payload.document._type);
                }
                await revalidatePath("/", "layout");
              }}
            />
          )}
        </body>
      </html>
    </>
  );
}

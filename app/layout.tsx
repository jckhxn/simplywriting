import { Rufina, PT_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/cn";

const rufina = Rufina({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});
const ptSerif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        className={cn("antialiased", rufina.variable, ptSerif.variable)}
      >
        <body>{children}</body>
      </html>
    </>
  );
}

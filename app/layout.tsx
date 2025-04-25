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

// Define class names consistently to avoid hydration issues
const htmlClasses = cn(`antialiased ${rufina.variable} ${ptSerif.variable}`);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

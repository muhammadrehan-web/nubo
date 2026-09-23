import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SiteEffects from "@/components/SiteEffects";
import "@/styles/nubo.css";

export const metadata: Metadata = {
  title: "Nubo — AI that works for you",
  description: "Nubo AI assistant — Framer site clone in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <SiteEffects />
      </body>
    </html>
  );
}

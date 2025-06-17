import type { Metadata } from "next";
import "./globals.css";
import Seo from "@/seo/Seo";
import { siteConfig } from "@/lib/config";
import ClientProvider from "@/components/custom/providers/ClientLayoutProvider";

export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  openGraph: {
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    images: siteConfig.site.ogImage,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo />
      <body
        suppressHydrationWarning={true}
        className={`font-cobane antialiased`}
      >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}

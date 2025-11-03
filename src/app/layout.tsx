// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav"; 
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-plus-jakarta", 
});

const siteUrl = "https://iryna-portfolio.vercel.app";
const ogImage = `${siteUrl}/og-v3.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Iryna Sofiian — Senior Product Designer",
  description:
    "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Vienna.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Iryna Sofiian — Senior Product Designer",
    title: "Iryna Sofiian — Senior Product Designer",
    description:
      "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Vienna.",
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Iryna Sofiian — Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iryna Sofiian — Senior Product Designer",
    description:
      "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Vienna.",
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white text-neutral-900 antialiased">
        <SiteNav />            
        {children}
      </body>
    </html>
  );
}

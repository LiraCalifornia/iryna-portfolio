// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://iryna-portfolio.vercel.app";
const ogImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Iryna Sofiian — Senior Product Designer",
  description:
    "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Austria.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Iryna Sofiian — Senior Product Designer",
    title: "Iryna Sofiian — Senior Product Designer",
    description:
      "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Austria.",
    images: [
      {
        url: ogImage,           // абсолютний URL
        secureUrl: ogImage,     // для FB/WA
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
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}

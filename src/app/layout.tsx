// рядок 1
import "./globals.css";
// рядок 2
import type { Metadata } from "next";

// рядки 4–13
export const metadata: Metadata = {
  title: "Iryna Sofiian — Senior Product Designer",
  description:
    "B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Austria.",
};

// рядки 15–24
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

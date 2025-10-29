export const metadata: Metadata = {
  metadataBase: new URL("https://iryna-portfolio.vercel.app"),
  openGraph: {
    title: "Iryna Sofiian — Senior Product Designer",
    description:
      "Product & UX design for B2B SaaS · Based in Vienna · Open to EU remote",
    url: "https://iryna-portfolio.vercel.app",
    images: [
      {
        // абсолютний URL
        url: "https://iryna-portfolio.vercel.app/og.png",
        // дублюємо для старих парсерів
        secureUrl: "https://iryna-portfolio.vercel.app/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Iryna Sofiian — Senior Product Designer",
      },
    ],
    siteName: "iryna-portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iryna Sofiian — Senior Product Designer",
    description:
      "Product & UX design for B2B SaaS · Based in Vienna · Open to EU remote",
    images: ["https://iryna-portfolio.vercel.app/og.png"],
  },
  robots: { index: true, follow: true },
};

// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Iryna Sofiian",
  description:
    "About Iryna Sofiian: story, work philosophy, values, and links.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Iryna Sofiian",
    description:
      "Senior Product Designer crafting calm, conversion-driven experiences.",
    url: "/about",
    type: "profile",
  },
};

// Фото для сімейного блоку
const familyPhotos = [
  {
    src: "/me-with-marshal.jpg",
    alt: "Iryna with Marshal",
    caption: "Walks with Marshal",
  },
  {
    src: "/me-with-maiko.jpeg",
    alt: "Iryna with Maiko",
    caption: "Coffee breaks with Maiko",
  },
  {
    src: "/marshal.jpeg",
    alt: "Marshal enjoying nature",
    caption: "Marshal — the heart of our family",
  },
];


const mosaicPhotos = [
  {
    src: "/about-1.jpg",
    alt: "Workshop moment",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/about-2.jpg",
    alt: "Team collaboration",
  },
  {
    src: "/about-3.jpg",
    alt: "Sticky notes & structure",
  },
  {
    src: "/about-4.jpg",
    alt: "Quiet observation",
  },
  {
    src: "/about-5.jpg",
    alt: "Speaking & facilitation",
  },
  {
    src: "/about-6.jpg",
    alt: "Another fragment from worklife",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-24 py-24">
        <div className="max-w-3xl">
          {/* HERO */}
          <header className="mb-20">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900">
              About Iryna Sofiian
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
              My design is, first and foremost, about solving problems for users
              and for business. That alone determines my methods and tools,
              never the other way around. I adapt to corporations, startups, and
              each specific domain or team individually.
            </p>
          </header>

          {/* STORY */}
          <section className="mb-20">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Story
            </h2>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              <p>
                I was born in 1994 in Lviv, Ukraine, with a clear sense that I
                wanted to solve people’s problems not only efficiently, but
                beautifully. That’s how I began exploring design.
              </p>
              <p>
                I first studied interior design for two years, but soon realized
                it wasn’t my path. Then I turned to print and graphic design,
                which became my formal education. While studying, I discovered
                the world of digital products and started learning interface
                design.
              </p>
              <p>
                Fate brought me together with programmers, and during my first
                year I was immersed in code. By graduation I was already
                creating Android and iOS apps, then moved into web products.
                That enthusiasm became a strong foundation.
              </p>
            </div>
          </section>

          {/* WORK + МОЗАЙКА */}
          <section className="mb-20">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Work
            </h2>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              <p>
                The key value I bring is a broad kaleidoscope of experience.
                I’ve practiced many well-known frameworks and learned that lots
                of them are beautiful theory. There are no perfect companies for
                perfect methodologies.
              </p>
              <p>
                I’ve developed flexible, effective ways to solve problems —
                through design and beyond it. AI has transformed the process,
                yet real experience remains the foundation while AI is the
                catalyst.
              </p>
              <p className="text-sm text-slate-500">
                Below is a small mosaic of moments that shape how I work,
                facilitate, and notice patterns inside teams and products.
              </p>
            </div>

            {/* Мозайка всередині Work */}
            <div
              className="
                mt-6 grid gap-4
                grid-cols-2 grid-rows-3
                sm:grid-cols-3 sm:grid-rows-3
                md:grid-cols-3 md:grid-rows-3
              "
            >
              {mosaicPhotos.map((photo, index) => (
                <div
                  key={photo.src}
                  className={[
                    "relative overflow-hidden rounded-none bg-slate-100",
                    "min-h-[90px] sm:min-h-[110px] md:min-h-[140px]",
                    photo.span ?? "",
                    // на мобайлі — без span'ів, всі просто йдуть послідовно
                    index === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    // auto-size + scale всередині контейнера
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* FAMILY */}
          <section className="mb-20">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Family
            </h2>
            <p className="mb-8 text-base leading-7 text-slate-700">
              There are three of us: two imperfect humans and one perfect dog —
              Marshal. Our home is the cozy, safe place that gives balance and
              strength. I’m deeply grateful to Lyubomyr for unwavering support.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {familyPhotos.map(({ src, alt, caption }) => (
                <figure
                  key={src}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      width={800}
                      height={600}
                      className="h-56 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-sm text-slate-600">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-20">
            <h2 className="mb-8 text-2xl font-semibold text-slate-900">
              Values
            </h2>
            <ul className="grid gap-4">
              <li className="rounded-none border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  People
                </h3>
                <p className="text-base leading-7 text-slate-700">
                  Users, businesses, technologies — all are about people. I
                  start by listening and understanding.
                </p>
              </li>
              <li className="rounded-none border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Continuous Learning
                </h3>
                <p className="text-base leading-7 text-slate-700">
                  Tools and methods must adapt. Today’s AI trick may be
                  irrelevant tomorrow. Problems evolve.
                </p>
              </li>
              <li className="rounded-none border border-slate-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  Partnership
                </h3>
                <p className="text-base leading-7 text-slate-700">
                  The best work comes when you care like an owner. All-in or not
                  at all.
                </p>
              </li>
            </ul>
          </section>

          {/* FIND ME */}
          <section className="mb-20">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Find me
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li>
                <Link
                  href="https://www.linkedin.com/in/iryna-sofiian/"
                  className="block rounded-none border border-slate-200 p-4 hover:bg-slate-50"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.strava.com/athletes/32493473"
                  className="block rounded-none border border-slate-200 p-4 hover:bg-slate-50"
                >
                  Strava
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/sofiian.iryna/"
                  className="block rounded-none border border-slate-200 p-4 hover:bg-slate-50"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/iryna.sofiyan"
                  className="block rounded-none border border-slate-200 p-4 hover:bg-slate-50"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2015–2025 Iryna Sofiian
          </footer>
        </div>
      </div>
    </main>
  );
}

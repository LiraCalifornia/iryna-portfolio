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

// три фото для секції Story
const photos = [
  { src: "/me-with-marshal.jpg", alt: "Iryna with Marshal" },
  { src: "/me-with-maiko.jpeg", alt: "Iryna with Maiko" },
  { src: "/marshal.jpeg", alt: "Marshal enjoying nature" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0 py-20">
      {/* HERO */}
      <header className="mb-20">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          About Iryna Sofiian
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
          My design is, first and foremost, about solving problems for users and
          for business. That alone determines my methods and tools, never the
          other way around. I adapt to corporations, startups, and each specific
          domain or team individually.
        </p>
      </header>

      {/* STORY */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Story</h2>
        <div className="space-y-4 text-base leading-7 text-slate-700 mb-8">
          <p>
            I was born in 1994 in Lviv, Ukraine, with a clear sense that I wanted
            to solve people’s problems not only efficiently, but beautifully.
            That’s how I began exploring design.
          </p>
          <p>
            I first studied interior design for two years, but soon realized it
            wasn’t my path. Then I turned to print and graphic design, which
            became my formal education. While studying, I discovered the world of
            digital products and started learning interface design.
          </p>
          <p>
            Fate brought me together with programmers, and during my first year I
            was immersed in code. By graduation I was already creating Android
            and iOS apps, then moved into web products. That enthusiasm became a
            strong foundation.
          </p>
        </div>

        {/* PHOTO STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map(({ src, alt }) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-[1.03]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Work</h2>
        <div className="space-y-4 text-base leading-7 text-slate-700">
          <p>
            The key value I bring is a broad kaleidoscope of experience. I’ve
            practiced many well-known frameworks and learned that lots of them
            are beautiful theory. There are no perfect companies for perfect
            methodologies.
          </p>
          <p>
            I’ve developed flexible, effective ways to solve problems — through
            design and beyond it. AI has transformed the process, yet real
            experience remains the foundation while AI is the catalyst.
          </p>
        </div>
      </section>

      {/* FAMILY */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Family</h2>
        <p className="text-base leading-7 text-slate-700">
          There are three of us: two imperfect humans and one perfect dog —
          Marshal. Our home is the cozy, safe place that gives balance and
          strength. I’m deeply grateful to Lyubomyr for unwavering support.
        </p>
      </section>

      {/* VALUES */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Values</h2>
        <ul className="grid gap-4">
          <li className="rounded-2xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">People</h3>
            <p className="text-base leading-7 text-slate-700">
              Users, businesses, technologies — all are about people. I start by
              listening and understanding.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              Continuous Learning
            </h3>
            <p className="text-base leading-7 text-slate-700">
              Tools and methods must adapt. Today’s AI trick may be irrelevant
              tomorrow. Problems evolve.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-200 p-5">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              Partnership
            </h3>
            <p className="text-base leading-7 text-slate-700">
              The best work comes when you care like an owner. All-in or not at
              all.
            </p>
          </li>
        </ul>
      </section>

      {/* LINKS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Find me</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <Link
              href="https://www.linkedin.com/in/iryna-sofiian/"
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://www.strava.com/athletes/32493473"
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              Strava
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/sofiian.iryna/"
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/iryna.sofiyan"
              className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        © 2015 – 2025 Iryna Sofiian
      </footer>
    </main>
  );
}

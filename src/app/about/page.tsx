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
  { src: "/about-2.jpg", alt: "Team collaboration" },
  { src: "/about-3.jpg", alt: "Sticky notes & structure" },
  { src: "/about-4.jpg", alt: "Quiet observation" },
  { src: "/about-5.jpg", alt: "Speaking & facilitation" },
  { src: "/about-6.jpg", alt: "Another fragment from worklife" },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Container perfectly centered at 768px with NO horizontal padding */}
      <div className="mx-auto w-full max-w-3xl py-24">
        <div className="w-full">
          {/* HERO */}
          <header className="mb-20">
            <h1 className="mb-6 font-semibold tracking-tight text-slate-900 text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]">
              About Iryna Sofiian
            </h1>
            <p className="text-slate-700 text-[18px] leading-[32px] md:text-[24px] md:leading-[40px]">
              My design is, first and foremost, about solving problems for users
              and for business. That alone determines my methods and tools,
              never the other way around. I adapt to corporations, startups, and
              each specific domain or team individually.
            </p>
          </header>

          {/* STORY */}
          <section className="mb-20">
            <h2 className="mb-4 font-semibold text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
              Story
            </h2>

            <p className="text-slate-700 text-[16px] leading-[28px] md:text-[20px] md:leading-[36px]">
              I was born in 1994 in Lviv, Ukraine, with a clear sense that I
              wanted to solve people’s problems not only efficiently, but
              beautifully. That’s how I began exploring design.
              <br />
              <br />
              I first studied interior design for two years, but soon realized
              it wasn’t my path. Then I turned to print and graphic design,
              which became my formal education. While studying, I discovered the
              world of digital products and started learning interface design.
              <br />
              <br />
              Fate brought me together with programmers, and during my first
              year I was immersed in code. By graduation I was already creating
              Android and iOS apps, then moved into web products. That
              enthusiasm became a strong foundation.
            </p>
          </section>

          {/* WORK */}
          <section className="mb-20">
            <h2 className="mb-4 font-semibold text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
              Work
            </h2>

            <p className="text-slate-700 text-[16px] leading-[28px] md:text-[20px] md:leading-[36px]">
              The key value I bring is a broad kaleidoscope of experience. I’ve
              practiced many well-known frameworks and learned that lots of them
              are beautiful theory. There are no perfect companies for perfect
              methodologies.
              <br />
              <br />
              I’ve developed flexible, effective ways to solve problems —
              through design and beyond it. AI has transformed the process, yet
              real experience remains the foundation while AI is the catalyst.
            </p>

            {/* MOSAIC */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3">
              {mosaicPhotos.map((photo, index) => (
                <div
                  key={photo.src}
                  className={[
                    "relative overflow-hidden bg-slate-100",
                    "min-h-[90px] sm:min-h-[110px] md:min-h-[140px]",
                    photo.span ?? "",
                    index === 0
                      ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2"
                      : "",
                  ].join(" ")}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                </div>
              ))}
            </div>

            <p className="mt-3 text-center text-slate-500 text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]">
              A small mosaic of moments that shape how I work and facilitate
            </p>
          </section>

          {/* FAMILY */}
          <section className="mb-20">
            <h2 className="mb-4 font-semibold text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
              Family
            </h2>

            <p className="mb-8 text-slate-700 text-[16px] leading-[28px] md:text-[20px] md:leading-[36px]">
              There are three of us: two imperfect humans and one perfect dog —
              Marshal. Our home is the cozy, safe place that gives balance and
              strength. I’m deeply grateful to Lyubomyr for unwavering support.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {familyPhotos.map(({ src, alt, caption }) => (
                <figure key={src}>
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

                  <figcaption className="mt-3 text-center text-[14px] leading-[22px] text-slate-600 md:text-[16px] md:leading-[24px]">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-20">
            <h2 className="mb-8 font-semibold text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
              Values
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 md:px-10">
                <p className="mb-[10px] flex items-center">
                  <span className="mr-2 text-[16px] leading-[24px] font-semibold text-blue-600">
                    &gt;_
                  </span>
                  <span className="text-[13px] leading-[20px] tracking-[0.18em] font-semibold uppercase text-slate-500">
                    People
                  </span>
                </p>

                <p className="text-[16px] leading-[28px] text-slate-900 md:text-[20px] md:leading-[32px]">
                  <strong className="font-semibold">
                    Users, businesses, technologies
                  </strong>{" "}
                  — all are about people. I start by listening and understanding.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 md:px-10">
                <p className="mb-[10px] flex items-center">
                  <span className="mr-2 text-[16px] leading-[24px] font-semibold text-blue-600">
                    &gt;_
                  </span>
                  <span className="text-[13px] leading-[20px] tracking-[0.18em] font-semibold uppercase text-slate-500">
                    Continuous Learning
                  </span>
                </p>

                <p className="text-[16px] leading-[28px] text-slate-900 md:text-[20px] md:leading-[32px]">
                  <strong className="font-semibold">
                    Tools and methods must adapt.
                  </strong>{" "}
                  Today’s AI trick may be irrelevant tomorrow. Problems evolve.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 md:px-10">
                <p className="mb-[10px] flex items-center">
                  <span className="mr-2 text-[16px] leading-[24px] font-semibold text-blue-600">
                    &gt;_
                  </span>
                  <span className="text-[13px] leading-[20px] tracking-[0.18em] font-semibold uppercase text-slate-500">
                    Partnership
                  </span>
                </p>

                <p className="text-[16px] leading-[28px] text-slate-900 md:text-[20px] md:leading-[32px]">
                  <strong className="font-semibold">
                    The best work comes when you care like an owner.
                  </strong>{" "}
                  All-in or not at all.
                </p>
              </div>
            </div>
          </section>

          {/* FIND ME */}
          <section className="mb-20">
            <h2 className="mb-4 font-semibold text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
              Find me
            </h2>

            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li>
                <Link
                  href="https://www.linkedin.com/in/iryna-sofiian/"
                  className="block rounded-none border border-slate-200 p-4 text-[15px] leading-[22px] text-slate-800 hover:bg-slate-50 md:text-[16px] md:leading-[24px]"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.strava.com/athletes/32493473"
                  className="block rounded-none border border-slate-200 p-4 text-[15px] leading-[22px] text-slate-800 hover:bg-slate-50 md:text-[16px] md:leading-[24px]"
                >
                  Strava
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/sofiian.iryna/"
                  className="block rounded-none border border-slate-200 p-4 text-[15px] leading-[22px] text-slate-800 hover:bg-slate-50 md:text-[16px] md:leading-[24px]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/iryna.sofiyan"
                  className="block rounded-none border border-slate-200 p-4 text-[15px] leading-[22px] text-slate-800 hover:bg-slate-50 md:text-[16px] md:leading-[24px]"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 pt-6 text-[13px] leading-[20px] text-slate-500">
            © 2015–2025 Iryna Sofiian
          </footer>
        </div>
      </div>
    </main>
  );
}

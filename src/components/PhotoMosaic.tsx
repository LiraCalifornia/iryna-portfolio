// src/components/PhotoMosaic.tsx
"use client";

import Image from "next/image";

const IMAGES = [
  { src: "/about-1.jpg", alt: "Iryna outdoor", span: "col-span-2 row-span-2" },
  { src: "/about-2.jpg", alt: "Detail", span: "col-span-2 row-span-1" },
  { src: "/about-3.jpg", alt: "City", span: "col-span-1 row-span-2" },
  { src: "/about-4.jpg", alt: "Studio", span: "col-span-1 row-span-1" },
  { src: "/about-5.jpg", alt: "Coffee", span: "col-span-1 row-span-1" },
  { src: "/about-6.jpg", alt: "Running or travel", span: "col-span-2 row-span-1" },
];

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function PhotoMosaic() {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-900">
          A few fragments from outside of work
        </h2>
        <p className="hidden text-[13px] text-slate-500 md:block">
          Small things that keep me curious & balanced.
        </p>
      </div>

      {/* Мозайка */}
      <div
        className="
          grid gap-3
          grid-cols-2 grid-rows-3
          sm:grid-cols-4 sm:grid-rows-3
          md:grid-cols-6 md:grid-rows-3
        "
      >
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={cn(
              "relative overflow-hidden rounded-2xl bg-slate-100",
              // базові розміри
              "min-h-[90px] sm:min-h-[110px] md:min-h-[120px]",
              // контроль span'ів на десктопі
              "md:" + img.span
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

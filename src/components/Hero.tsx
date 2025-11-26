// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Activity } from "lucide-react";

const MAILTO =
  "mailto:irasofiian@gmail.com" +
  "?subject=" +
  encodeURIComponent("Hi Iryna — Let's talk about your design work") +
  "&body=" +
  encodeURIComponent(
    "Hi Iryna,%0D%0A%0D%0AI came across your portfolio and wanted to connect.%0D%0A%0D%0A— "
  );

const HERO_IMAGE_SRC = "/hero-portrait.jpg";
const LINKEDIN = "https://www.linkedin.com/in/iryna-sofiian/";
const STRAVA = "https://www.strava.com/athletes/32493473";

export default function Hero() {
  return (
    <section className="bg-white section-y">
      {/* ЖОДНИХ px тут — шириною керує PageContainer */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Hero-блок: центрований, max 768px */}
        <div className="mx-auto max-w-[768px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          {/* LEFT: текстовий блок max 524px */}
          <div className="w-full max-w-[524px]">
            <h1 className="font-semibold tracking-tight">
              <span className="block text-slate-400 text-[48px] leading-[56px] tracking-[-0.01em]">
                Servus!
              </span>
              <span className="block text-slate-900 text-[48px] leading-[56px] tracking-[-0.01em]">
                I’m Iryna Sofiian,
                <br />
                Product Designer
              </span>
            </h1>

            {/* Відступ між заголовком і описом 28px */}
            <p className="mt-[28px] text-slate-600 text-[20px] leading-[32px] tracking-[0.01em]">
              I design calm, conversion-driven product experiences for
              data-dense B2B SaaS &amp; FinTech, focused on clarity and
              measurable impact. Working hybrid in{" "}
              <span className="underline">Vienna</span> and remote across the EU.
            </p>

            {/* Лінія-акцент */}
            <div className="mt-6 h-[2px] w-20 rounded-full bg-slate-900" />

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white text-[16px] leading-[24px] font-semibold tracking-[0.01em] hover:bg-slate-800 transition-all"
              >
                Send email <span className="text-lg leading-none">↗</span>
              </a>

              <Link
                href={LINKEDIN}
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-900 hover:border-slate-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href={STRAVA}
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-900 hover:border-slate-900 transition-colors"
                aria-label="Strava"
              >
                <Activity size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT: фото 190px */}
          <div className="relative w-[190px] aspect-[190/237] rounded-3xl overflow-hidden bg-slate-100">
            <Image
              src={HERO_IMAGE_SRC}
              alt="Iryna Sofiian portrait"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

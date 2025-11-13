// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Activity, MapPin } from "lucide-react"; // 👈 додано MapPin

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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="w-full max-w-[720px]">
            {/* tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 tracking-[0.01em]">
                Open to EU remote & hybrid
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 tracking-[0.01em]">
                <MapPin size={14} strokeWidth={1.75} className="text-slate-600" />
                Vienna
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-semibold tracking-tight">
              <span className="block text-slate-400 leading-[1.05] tracking-[-0.005em] text-[26px] sm:text-[32px] lg:text-[34px]">
                Servus!
              </span>
              <span className="block text-slate-900 leading-[1.05] tracking-[-0.015em] text-[32px] sm:text-[46px] lg:text-[54px] max-w-[720px]">
                I’m Iryna Sofiian, Product Designer
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed tracking-[0.01em] max-w-prose">
              I design calm, conversion-driven product experiences for data-dense
              B2B SaaS & FinTech. Focused on clarity, usability, and measurable
              impact for complex products.
            </p>

            {/* Accent line */}
            <div className="mt-6 h-[2px] w-20 rounded-full bg-slate-900" />

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white text-sm font-medium hover:bg-slate-800 transition-all tracking-[0.01em]"
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

          {/* RIGHT: Photo */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-slate-100 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-[480px] justify-self-end">
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

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
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-24 py-16 sm:py-20">
        {/* 🔧 збільшено gap і дозволено тексту розтягуватись на середніх екранах */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* LEFT: text */}
          <div className="w-full max-w-none md:max-w-2xl lg:max-w-none">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                Senior Product Designer
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                Open to EU remote & hybrid
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                Vienna • CET
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Iryna Sofiian
            </h1>

            {/* 🧩 прибрано обмеження max-w-xl, щоб на середніх екранах текст розтягувався */}
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              I design calm, conversion-driven product experiences for data-dense
              B2B SaaS &amp; FinTech. Focused on clarity, usability, and measurable
              impact for complex products.
            </p>

            <div className="mt-6 h-[2px] w-24 rounded-full bg-slate-900" />

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-white text-sm font-medium hover:bg-slate-800 transition-all"
              >
                Send email
                <span className="text-lg leading-none">↗</span>
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

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>AI-assisted flows</span>
              <span>Data-heavy dashboards</span>
              <span>Research → delivery</span>
            </div>
          </div>

          {/* RIGHT: hero image */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-slate-100 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src={HERO_IMAGE_SRC}
              alt="Iryna Sofiian portrait"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 48vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

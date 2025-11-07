// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background: clean paper + spotlight + hairline keyline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* very soft spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
        {/* keyline */}
        <div className="absolute left-0 right-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        {/* neutral dots field */}
        <div className="absolute -right-12 top-32 h-48 w-48 opacity-25 [mask-image:radial-gradient(black,transparent_70%)]">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern
                id="dots"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="0.6" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      {/* Спільний контейнер: max-w-6xl + px-6 / lg:px-24 */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT — Type-first copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* status chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for senior product roles
            </div>

            {/* typographic stack */}
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-6xl">
              Iryna Sofiian
            </h1>
            <p className="mt-2 text-xl font-medium tracking-tight text-slate-700">
              Senior Product Designer
            </p>

            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-slate-700">
              I design calm, conversion-driven product experiences for data-dense
              B2B SaaS &amp; FinTech. Vienna-based. Open to EU remote / hybrid.
            </p>

            {/* underline accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 h-[2px] w-28 origin-left bg-slate-900/90"
            />

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="group inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-base font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                <ArrowRight className="mr-2 h-4 w-4 -translate-x-0 transition group-hover:translate-x-0.5" />
                View selected work
              </Link>
              <Link
                href="mailto:hello@iryna.design"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-base font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Contact
              </Link>
            </div>

            {/* tiny trust signals */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <li>AI-assisted flows</li>
              <li>Data-heavy dashboards</li>
              <li>Research → delivery</li>
            </ul>
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/hero-portrait.jpg"
                  alt="Iryna Sofiian portrait"
                  width={900}
                  height={1125}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* sticky meta pill */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="pointer-events-none sticky bottom-4 z-10 mx-auto w-full max-w-6xl px-6 lg:px-24"
      >
        <div className="ml-auto w-fit rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
          Vienna • CET
        </div>
      </motion.div>
    </section>
  );
}

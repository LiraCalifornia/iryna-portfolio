"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(2,6,23,0.06),transparent_60%)]" />
      </div>

      {/* Main container */}
      <div className="mx-auto max-w-6xl px-6 lg:px-24 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            {/* Tags: role / availability / location */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-700">
              <span className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/90 px-3 py-1">
                Senior Product Designer
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to EU remote &amp; hybrid
              </span>

              <span className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/90 px-3 py-1">
                Vienna • CET
              </span>
            </div>

            {/* Name */}
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-6xl">
              Iryna Sofiian
            </h1>

            {/* Intro */}
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-slate-700">
              I design calm, conversion-driven product experiences for data-dense
              B2B SaaS &amp; FinTech. Focused on clarity, usability, and measurable
              impact for complex products.
            </p>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 h-[2px] w-28 origin-left bg-slate-900/90"
            />

            {/* CTA BLOCK */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary email CTA */}
              <Link
                href="mailto:hello@iryna.design"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Send email
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/iryna-sofiian/"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.strava.com/athletes/32493473"
                  aria-label="Strava"
                  target="_blank"
                  className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-orange-500 hover:text-white transition"
                >
                  <Activity className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Supporting tags */}
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <li>AI-assisted flows</li>
              <li>Data-heavy dashboards</li>
              <li>Research → delivery</li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm">
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
    </section>
  );
}

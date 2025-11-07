// src/components/ProjectShortcuts.tsx
"use client";

import Link from "next/link";

export default function ProjectShortcuts() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      {/* Спільний контейнер */}
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-24">
        {/* Заголовок секції */}
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Featured work
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
          Design that gets results
        </h2>

        {/* Список проектів */}
        <div className="mt-10 space-y-8">
          {/* Project 1 */}
          <Link
            href="/work/provenance"
            className="block rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Designing a Gen AI app ecosystem
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  Led product &amp; UX for a Gen-AI writing suite — built MVP,
                  validated flows and scaled onboarding.
                </p>
                <div className="mt-5 flex flex-wrap items-baseline gap-4 text-sm text-slate-600">
                  <span className="text-2xl font-semibold text-slate-900">
                    70+
                  </span>
                  <span>NPS score (world-class)</span>
                </div>
              </div>

              {/* Placeholder image */}
              <div className="h-52 w-full rounded-2xl bg-emerald-700/90 flex items-center justify-center text-sm font-medium text-emerald-50">
                Provenance%20AI
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/work/website-boost"
            className="block rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Placeholder image */}
              <div className="h-52 w-full rounded-2xl bg-amber-800/90 flex items-center justify-center text-sm font-medium text-amber-50">
                Website
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Website that boosted startup revenue
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  Rebuilt and optimized marketing site — improved acquisition
                  and conversion through CI experiments.
                </p>
                <div className="mt-5 flex flex-wrap items-baseline gap-4 text-sm text-slate-600">
                  <span className="text-2xl font-semibold text-slate-900">
                    $250k+
                  </span>
                  <span>Worth of organic traffic</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3 */}
          <Link
            href="/work/flows"
            className="block rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Text */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  Operational tools &amp; AI-assisted flows
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  Product design for complex B2B workflows: permissions, data
                  density, edge cases and smooth adoption.
                </p>
              </div>

              {/* Placeholder status */}
              <div className="flex items-center gap-3 justify-start lg:justify-end text-sm text-slate-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>Selected case studies coming soon</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

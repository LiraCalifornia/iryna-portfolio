// src/components/ProjectShortcuts.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectShortcuts() {
  return (
    /* FULL-BLEED SECTION */
    <section
      className="
        bg-slate-50 
        pt-[64px] pb-20

        relative left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw] 
        w-screen
      "
    >
      {/* INNER CONTAINER (centered, max 768px) */}
      <div
        className="
          mx-auto 
          w-full 
          max-w-[768px]

          px-4           /* mobile */
          bp-756:px-6    /* tablet */
          bp-896:px-0    /* desktop */

        "
      >

        {/* HEADER */}
        <p className="text-[13px] leading-[20px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Featured work
        </p>

        <h2 className="mt-1 text-[32px] leading-[40px] font-semibold tracking-tight text-slate-900">
          Design that gets results
        </h2>

        {/* PROJECT LIST */}
        <div className="mt-10 space-y-8">

          {/* Project 1 */}
          <Link
            href="/work/allocations"
            className="block rounded-xl border border-slate-200 bg-white p-[40px] hover:border-slate-900 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* IMAGE */}
              <div className="order-1 lg:order-1 relative w-full lg:max-w-[280px] overflow-hidden rounded-xl aspect-[16/9]">
                <Image
                  src="/allocations-test.png"
                  alt="Allocations project preview"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
              </div>

              {/* TEXT */}
              <div className="order-2 lg:order-2">
                <h3 className="text-[24px] leading-[32px] font-semibold text-slate-900">
                  Allocations AI engine
                </h3>

                <p className="mt-3 text-[16px] leading-[24px] text-slate-700">
                  Designing an institutional-grade allocation platform that makes
                  complex portfolios clear, navigable, and fast to configure.
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-4">
                  <span className="text-[32px] leading-[40px] font-semibold text-slate-900">
                    +42%
                  </span>
                  <span className="text-[16px] leading-[24px] text-slate-600">
                    Faster allocation decisions
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2 */}
          <Link
            href="/work/website-boost"
            className="block rounded-xl border border-slate-200 bg-white p-[40px] hover:border-slate-900 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* IMAGE RIGHT */}
              <div className="order-1 lg:order-2 relative w-full lg:max-w-[280px] overflow-hidden rounded-xl aspect-[16/9]">
                <Image
                  src="/educator-test.png"
                  alt="Website that boosted startup revenue — project preview"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
              </div>

              {/* TEXT LEFT */}
              <div className="order-2 lg:order-1">
                <h3 className="text-[24px] leading-[32px] font-semibold text-slate-900">
                  Website that boosted startup revenue
                </h3>

                <p className="mt-3 text-[16px] leading-[24px] text-slate-700">
                  Rebuilt and optimized marketing site — improved acquisition
                  and conversion through continuous experiments.
                </p>

                <div className="mt-5 flex flex-wrap items-baseline gap-4">
                  <span className="text-[32px] leading-[40px] font-semibold text-slate-900">
                    $250k+
                  </span>
                  <span className="text-[16px] leading-[24px] text-slate-600">
                    Worth of organic traffic
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3 */}
          <Link
            href="/work/flows"
            className="block rounded-xl border border-slate-200 bg-white p-[40px] hover:border-slate-900 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* PLACEHOLDER IMAGE */}
              <div className="order-1 lg:order-1 relative w-full lg:max-w-[280px] overflow-hidden rounded-xl aspect-[16/9] bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 text-[16px] leading-[24px]">
                  Image coming soon
                </span>
              </div>

              {/* TEXT */}
              <div className="order-2 lg:order-2">
                <h3 className="text-[24px] leading-[32px] font-semibold text-slate-900">
                  Operational tools &amp; AI-assisted flows
                </h3>

                <p className="mt-3 text-[16px] leading-[24px] text-slate-700">
                  Selected case studies on complex internal tools, workflows,
                  permissions and AI-assisted operations.
                </p>

                <div className="mt-5 flex items-center gap-3 text-[16px] leading-[24px] text-slate-600">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Full case study coming soon</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}

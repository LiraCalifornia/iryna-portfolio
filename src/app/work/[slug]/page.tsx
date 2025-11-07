// src/app/work/provenance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Provenance — Case Study | Iryna Sofiian",
  description:
    "Case study: Provenance. Short description of scope, role, outcomes, and product impact.",
  alternates: { canonical: "/work/provenance" },
};

export default function ProvenancePage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      {/* Головний консистентний wrapper */}
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-24">
        {/* Back link */}
        <Link
          href="/work"
          className="text-sm text-slate-500 hover:text-slate-700 transition"
        >
          ← Back to Work
        </Link>

        {/* Header */}
        <header className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Provenance
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Company
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600">
              Domain
            </span>
            <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600">
              Platform
            </span>
          </div>
        </header>

        {/* Hero image card */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <Image
            src="/hero-portrait.jpg" // placeholder, заміниш на скрін продукту
            alt="Product UI (placeholder)"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
          <p className="px-6 py-3 text-center text-sm text-slate-500 border-t border-slate-100">
            Product UI (placeholder)
          </p>
        </section>

        {/* Summary + meta */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10">
          <p className="text-sm sm:text-base leading-relaxed text-slate-700">
            Short description of the project: scope, role, outcomes. Replace
            this text with the real summary that explains what Provenance is,
            who it serves, and how your work changed key metrics or workflows.
          </p>

          <dl className="space-y-3 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-900">Period</dt>
              <dd>2024</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">Role</dt>
              <dd>Senior Product Designer (end-to-end)</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">Tools</dt>
              <dd>Figma, FigJam, Notion, React, Tailwind CSS</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-900">Keywords</dt>
              <dd>UX, UI, Design system, Flows, B2B, AI-assisted</dd>
            </div>
          </dl>
        </section>

        {/* Problem */}
        <section className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            &gt;_ Problem
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
            State the key problem succinctly. What blocked users or business
            outcomes? Describe the friction: data complexity, low adoption,
            unclear flows, missing trust, or whatever fits your actual case.
          </p>
        </section>

        {/* Context & Constraints */}
        <section className="mt-12">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            Context &amp; constraints
          </h2>
          <ul className="mt-3 space-y-2 text-sm sm:text-base leading-relaxed text-slate-700 list-disc list-inside">
            <li>Briefly outline target users and their environment.</li>
            <li>Mention technical, regulatory, or timeline constraints.</li>
            <li>
              Clarify expectations from stakeholders and what “success” meant.
            </li>
          </ul>
        </section>

        {/* Approach / Process */}
        <section className="mt-12">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            Approach
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
            Summarize how you approached the problem. You can mention discovery
            interviews, mapping existing flows, ideation workshops, quick
            experiments, or collaboration with engineering and product.
          </p>
          <ul className="mt-3 space-y-2 text-sm sm:text-base leading-relaxed text-slate-700 list-disc list-inside">
            <li>Research steps and key insights.</li>
            <li>How hypotheses were formed and validated.</li>
            <li>
              How you balanced usability, visual clarity, and technical limits.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section className="mt-12">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            Solution
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
            Describe the final experience: structure, navigation, key screens,
            interaction patterns, and how they help users achieve their goals
            faster and with more confidence.
          </p>
          <ul className="mt-3 space-y-2 text-sm sm:text-base leading-relaxed text-slate-700 list-disc list-inside">
            <li>Clarified information hierarchy for complex data.</li>
            <li>Reduced cognitive load with consistent patterns.</li>
            <li>
              Designed states for edge cases, errors, and empty data to keep UX
              resilient.
            </li>
          </ul>
        </section>

        {/* Impact */}
        <section className="mt-12">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
            Replace these placeholders with real numbers or qualitative
            outcomes.
          </p>
          <ul className="mt-3 space-y-2 text-sm sm:text-base leading-relaxed text-slate-700 list-disc list-inside">
            <li>↑ Conversion / activation / task completion.</li>
            <li>↓ Time-to-value or onboarding friction.</li>
            <li>
              Feedback from users or stakeholders that proves the new experience
              works.
            </li>
          </ul>
        </section>

        {/* Learnings / Closing */}
        <section className="mt-12 mb-8">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900">
            What I took from this project
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
            One or two concise reflections: about working with complex systems,
            collaboration style, or how this case shaped your approach to future
            B2B / AI-heavy products.
          </p>
        </section>
      </div>
    </main>
  );
}

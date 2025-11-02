// src/components/ProjectShortcuts.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  slug: string;
  title: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  // we will use inline SVG data-uri placeholders so no extra files needed
  imgDataUrl: string;
};

const projects: Project[] = [
  {
    slug: "provenance-ai",
    title: "Designing a Gen AI app ecosystem",
    blurb:
      "Led product & UX for a Gen-AI writing suite — built MVP, validated flows and scaled onboarding.",
    metric: "70+",
    metricLabel: "NPS score (world-class)",
    imgDataUrl: makePlaceholderDataUrl("green", "Provenance AI"),
  },
  {
    slug: "startup-website",
    title: "Website that boosted startup revenue",
    blurb:
      "Rebuild and optimize marketing site — improved acquisition and conversion through CI experiments.",
    metric: "$250k+",
    metricLabel: "Worth of organic traffic",
    imgDataUrl: makePlaceholderDataUrl("warm", "Website"),
  },
  {
    slug: "navigator-redesign",
    title: "Agent allocation navigator redesign",
    blurb:
      "Simplified allocation flows and added AI suggestions — reduced decision time by 60% for agents.",
    metric: "60%",
    metricLabel: "Faster decision time",
    imgDataUrl: makePlaceholderDataUrl("teal", "Navigator"),
  },
  {
    slug: "dashboard-scaling",
    title: "Data-dense dashboard for power users",
    blurb:
      "Designed high-density tables + micro-interactions for analysts, improving task speed & accuracy.",
    metric: "3×",
    metricLabel: "Faster reporting",
    imgDataUrl: makePlaceholderDataUrl("slate", "Dashboard"),
  },
  {
    slug: "portfolio-system",
    title: "Editorial portfolio system",
    blurb:
      "Componentized case publishing flow: editorial layouts, responsive media and simple CMS integration.",
    metric: "90%",
    metricLabel: "Dev time saved",
    imgDataUrl: makePlaceholderDataUrl("indigo", "Portfolio"),
  },
];

// helper — returns SVG data URL placeholder (inline, no external assets)
function makePlaceholderDataUrl(colorName: string, label: string) {
  const colors: Record<string, string> = {
    green: "#2f855a",
    warm: "#774936",
    teal: "#0d9488",
    slate: "#475569",
    indigo: "#4f46e5",
  };
  const bg = colors[colorName] ?? "#1f2937";
  const text = encodeURIComponent(label);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
    <rect width='100%' height='100%' fill='${bg}' rx='24'/>
    <g fill='rgba(255,255,255,0.12)'>
      <rect x='48' y='48' width='270' height='160' rx='12'/>
      <rect x='48' y='232' width='520' height='28' rx='6'/>
      <rect x='48' y='272' width='380' height='28' rx='6'/>
    </g>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, ui-sans-serif, system-ui' font-size='44' fill='rgba(255,255,255,0.9)'>${text}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function ProjectShortcuts() {
  return (
    <section aria-labelledby="featured-work" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm font-medium tracking-wide text-slate-600">FEATURED WORK</p>
        <h2 id="featured-work" className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Design that gets results
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((p, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group block"
              aria-label={`Open project ${p.title}`}
            >
              <motion.article
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md group-hover:border-slate-800"
              >
                <div className={`flex flex-col gap-6 md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center`}>
                  {/* Text column */}
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 max-w-prose">{p.blurb}</p>

                    <div className="mt-6 flex items-start gap-4">
                      <div className="text-4xl font-extrabold text-slate-900">{p.metric}</div>
                      <div className="text-sm text-slate-600 mt-1">{p.metricLabel}</div>
                    </div>
                  </div>

                  {/* Image column */}
                  <div className="md:w-1/2">
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <Image
                        src={p.imgDataUrl}
                        alt={p.title}
                        width={1200}
                        height={800}
                        className="h-44 w-full object-cover md:h-56 lg:h-64 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// src/app/work/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import {
  DesignProcess,
  type DesignProcessStep,
} from "@/components/DesignProcess";

/* ---------- Types ---------- */

type ProjectConfig = {
  title: string;
  subtitle?: string;
  image?: string;
  period?: string;
  tools?: string;
  keywords?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  impact?: string[];
  designProcessSteps?: DesignProcessStep[];
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ---------- Projects data ---------- */

const allocationsDesignProcess: DesignProcessStep[] = [
  {
    title: "Insurance story begins",
    description:
      "The journey begins when I became an insurance agent. I quickly saw the imperfections in the industry, with agents often prioritizing their profits over the client's best interests. This led me to develop a personal annuities quoting system that would offer transparency and fairness.",
    // заміни шлях на свій реальний файл у /public
    image: "/design-process/insurance-story-begins.jpg",
  },
  {
    title: "The Birth of AnnuitiesGenius",
    description:
      "The idea to share this fair and transparent annuities system with the entire industry was born. Agata Global Tech LLC was registered, the team was assembled, and the first prototype of AnnuitiesGenius was created.",
  },
  {
    title: "Launch & Early Adoption",
    description:
      "The vision started to materialize. The first version (V1.0) of the AnnuitiesGenius platform was launched, bringing transparency to annuity recommendations. By the end of the year, approximately 50 agents were using the system, helping ensure fair annuity choices for clients.",
  },
];

const allocationsCase: ProjectConfig = {
  title: "Allocations AI engine",
  subtitle:
    "Designing an institutional-grade allocation platform that makes complex portfolios clear, navigable, and fast to configure.",
  image: "/allocations-test.png",
  period: "2025",
  tools: "Figma, FigJam",
  keywords: "FinTech, B2B SaaS, Data visualization, Complex flows",
  problem:
    "Unclear Value Proposition. The startup’s original website didn’t clearly show its unique product or explain how it solved user problems.",
  solution:
    "Visual Product Walkthrough. Created a three-step 3D animation to show how the product works, making it easy for non-technical users to understand.",
  challenges: [
    "Tight Timeline and Team Coordination. Had two months to plan and deliver a large project, including a 3D animation that needed quick client approval.",
    "Designing intuitive, safe interactions for advanced allocation logic.",
    "Aligning product, quant, legal and sales on one mental model.",
  ],
  impact: [
    "42% faster allocation decisions in moderated tests.",
    "Higher completion rate of complex workflows after redesign.",
    "Clear UX foundation for future AI features across the product suite.",
  ],
  designProcessSteps: allocationsDesignProcess,
};

const websiteBoostCase: ProjectConfig = {
  title: "Website that boosted startup revenue",
  subtitle:
    "Rebuilt and optimized marketing site — improved acquisition and conversion through continuous experiments.",
  image: "/educator-test.png",
  period: "2024",
  tools: "Figma, Webflow, Google Analytics, Hotjar",
  keywords: "Marketing website, Conversion, Experimentation, UX writing",
  problem:
    "Low Conversion from Existing Traffic. The startup had strong organic and paid traffic, but the old website did not clearly communicate value or guide visitors to sign up.",
  solution:
    "Focused Narrative & Experiment Framework. Reworked structure and messaging, highlighted proof points, and set up an experiment backlog for continuous A/B testing.",
  challenges: [
    "Balancing modern visual style with clarity and performance.",
    "Preserving SEO equity while restructuring pages and content.",
    "Aligning founders, marketing, and engineering around one clear story.",
  ],
  impact: [
    "$250k+ Worth of organic traffic generated.",
    "1554% Increase in monthly organic search traffic in 8 months.",
    "66% Increase in signup conversion rate.",
    "70+ NPS score maintained after redesign.",
  ],
  // designProcessSteps можна буде додати пізніше, зараз секція не показується
};

const flowsPlaceholder: ProjectConfig = {
  title: "Operational tools & AI-assisted flows",
  subtitle:
    "Full case study coming soon. Deep dive into complex internal workflows.",
};

const projects: Record<string, ProjectConfig> = {
  allocations: allocationsCase,
  "website-boost": websiteBoostCase,
  flows: flowsPlaceholder,
};

/* ---------- Route segment config ---------- */

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}
export const dynamicParams = true;

/* ---------- Helpers ---------- */

const splitText = (text: string) => {
  const [first, ...rest] = text.split(". ");
  return { first, rest: rest.join(". ") };
};

/* ---------- Page ---------- */

export default function WorkDetailPage(props: PageProps) {
  const { slug } = use(props.params);
  const project = projects[slug];
  if (!project) notFound();

  const {
    title,
    subtitle,
    image,
    period,
    tools,
    keywords,
    problem,
    solution,
    challenges,
    impact,
    designProcessSteps,
  } = project;

  const hasFullCase = Boolean(problem && solution);
  const toolsTags = tools
    ? tools.split(",").map((t) => t.trim()).filter(Boolean)
    : [];
  const keywordTags = keywords
    ? keywords.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      {/* головний контентний контейнер */}
      {/* px-8 = 32px на мобайлі, з sm і вище повертаємось до 0, щоб лишилась чиста колона 768px */}
      <div className="mx-auto w-full max-w-[768px] px-8 sm:px-0 pt-16 pb-20">
        {/* Hero image */}
        {image && (
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Header */}
        <header className="mt-8">
          {/* H2: 48/56 */}
          <h1 className="text-[48px] leading-[56px] tracking-[-0.01em] font-semibold text-slate-900">
            {title}
          </h1>

          {/* Subtitle 4: 24/40, відступ 24 */}
          {subtitle && (
            <p className="mt-6 text-[24px] leading-[40px] text-slate-700 tracking-[0.01em]">
              {subtitle}
            </p>
          )}

          {/* Meta badges: mt 32, text M 16/24 */}
          <div className="mt-8 flex flex-wrap gap-2 text-[16px] leading-[24px]">
            {period && (
              <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 tracking-[0.01em]">
                <span>🗓</span>
                {period}
              </span>
            )}

            {toolsTags.map((tag, index) => (
              <span
                key={`tool-${index}`}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 tracking-[0.01em]"
              >
                {tag}
              </span>
            ))}

            {keywordTags.map((tag, index) => (
              <span
                key={`kw-${index}`}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 tracking-[0.01em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {hasFullCase ? (
          <>
            {/* Problem / Solution / Challenges */}
            <section className="mt-16 space-y-6 sm:space-y-7">
              {/* Problem */}
              {problem && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-10 py-5 sm:px-10 sm:py-5">
                  {/* >_ (L bold) + CUPS 14 */}
                  <h2 className="flex items-center gap-2">
                    <span className="text-[20px] leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[14px] leading-[20px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Problem
                    </span>
                  </h2>

                  {(() => {
                    const { first, rest } = splitText(problem);
                    return (
                      <p className="mt-[10px] text-[20px] leading-[32px] tracking-[0.01em] text-slate-700">
                        <span className="font-semibold text-slate-900">
                          {first}.
                        </span>{" "}
                        {rest}
                      </p>
                    );
                  })()}
                </div>
              )}

              {/* Solution */}
              {solution && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-10 py-5 sm:px-10 sm:py-5">
                  <h2 className="flex items-center gap-2">
                    <span className="text-[20px] leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[14px] leading-[20px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Solution
                    </span>
                  </h2>

                  {(() => {
                    const { first, rest } = splitText(solution);
                    return (
                      <p className="mt-[10px] text-[20px] leading-[32px] tracking-[0.01em] text-slate-700">
                        <span className="font-semibold text-slate-900">
                          {first}.
                        </span>{" "}
                        {rest}
                      </p>
                    );
                  })()}
                </div>
              )}

              {/* Challenges */}
              {challenges && challenges.length > 0 && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-10 py-5 sm:px-10 sm:py-5">
                  <h2 className="flex items-center gap-2">
                    <span className="text-[20px] leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[14px] leading-[20px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Challenges
                    </span>
                  </h2>

                  <ul className="mt-[10px] space-y-3">
                    {challenges.map((item, index) => {
                      const { first, rest } = splitText(item);
                      return (
                        <li key={index}>
                          <p className="text-[20px] leading-[32px] tracking-[0.01em] text-slate-700">
                            <span className="font-semibold text-slate-900">
                              {first}.
                            </span>{" "}
                            {rest}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>

            {/* Impact */}
            <section className="mt-16">
              {/* H5: 24/36 */}
              <h2 className="text-[24px] leading-[36px] font-semibold tracking-tight text-slate-900">
                Impact
              </h2>

              {/* text L custom: 20/36 */}
              <p className="mt-3 text-[20px] leading-[36px] text-slate-600 tracking-[0.01em]">
                Both the initial launch and further iterations delivered
                measurable results and created a solid foundation for long-term,
                scalable growth.
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                {impact?.map((item, index) => {
                  const [stat, ...rest] = item.split(" ");
                  const label = rest.join(" ");
                  return (
                    <div key={index} className="space-y-1.5">
                      {/* H4: 32/40 */}
                      <div className="text-[32px] leading-[40px] font-semibold text-slate-900">
                        {stat}
                      </div>
                      {/* text M: 16/24 */}
                      <p className="text-[16px] leading-[24px] text-slate-600 tracking-[0.01em]">
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Design Process — останній блок перед футером */}
            {designProcessSteps && designProcessSteps.length > 0 && (
              <DesignProcess steps={designProcessSteps} />
            )}
          </>
        ) : (
          <section className="mt-16">
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-5 sm:px-6 sm:py-7">
              <p className="text-[16px] leading-[24px] text-slate-600 tracking-[0.01em]">
                Full case study for this project is coming soon. If you&apos;d
                like details now, please{" "}
                <Link
                  href="/contact"
                  className="underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </section>
        )}

        {/* Footer — text S 13/20, відступ 64 зверху */}
        <footer className="mt-16 border-t border-slate-100 pt-5 text-[13px] leading-[20px] text-slate-500 tracking-[0.01em]">
          © 2015–2025 Iryna Sofiian
        </footer>
      </div>
    </main>
  );
}

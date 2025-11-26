// src/app/work/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { DesignProcess } from "@/components/DesignProcess";
import { projects, type ProjectConfig } from "@/data/projects";

/* ---------- Types ---------- */

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ---------- Helpers ---------- */

const splitText = (text: string) => {
  const [first, ...rest] = text.split(". ");
  return { first, rest: rest.join(". ") };
};

/* ---------- Route segment config ---------- */

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export const dynamicParams = true;

/* ---------- Page ---------- */

export default function WorkDetailPage(props: PageProps) {
  const { slug } = use(props.params);
  const project: ProjectConfig | undefined = projects[slug];

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
      {/* головний контентний контейнер — тільки центрування, без локальних падінгів */}
      <div className="mx-auto w-full max-w-[768px]">
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
          {/* H2: адаптація для мобайлу */}
          <h1 className="font-semibold tracking-[-0.01em] text-slate-900 text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px]">
            {title}
          </h1>

          {/* Subtitle 4: адаптація */}
          {subtitle && (
            <p className="mt-6 text-slate-700 tracking-[0.01em] text-[18px] leading-[32px] sm:text-[20px] sm:leading-[36px] md:text-[24px] md:leading-[40px]">
              {subtitle}
            </p>
          )}

          {/* Meta badges */}
          <div className="mt-8 flex flex-wrap gap-2 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
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
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 sm:px-10 sm:py-5">
                  <h2 className="flex items-center gap-2">
                    <span className="text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[13px] leading-[20px] sm:text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Problem
                    </span>
                  </h2>

                  {(() => {
                    const { first, rest } = splitText(problem);
                    return (
                      <p className="mt-[10px] text-slate-700 tracking-[0.01em] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[32px]">
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
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 sm:px-10 sm:py-5">
                  <h2 className="flex items-center gap-2">
                    <span className="text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[13px] leading-[20px] sm:text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Solution
                    </span>
                  </h2>

                  {(() => {
                    const { first, rest } = splitText(solution);
                    return (
                      <p className="mt-[10px] text-slate-700 tracking-[0.01em] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[32px]">
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
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 sm:px-10 sm:py-5">
                  <h2 className="flex items-center gap-2">
                    <span className="text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] font-semibold text-blue-600">
                      {">_"}
                    </span>
                    <span className="text-[13px] leading-[20px] sm:text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Challenges
                    </span>
                  </h2>

                  <ul className="mt-[10px] space-y-3">
                    {challenges.map((item, index) => {
                      const { first, rest } = splitText(item);
                      return (
                        <li key={index}>
                          <p className="text-slate-700 tracking-[0.01em] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[32px]">
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
              <h2 className="font-semibold tracking-tight text-slate-900 text-[20px] leading-[30px] md:text-[24px] md:leading-[36px]">
                Impact
              </h2>

              <p className="mt-3 text-slate-600 tracking-[0.01em] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[36px]">
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
                      <div className="font-semibold text-slate-900 text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px]">
                        {stat}
                      </div>
                      <p className="text-slate-600 tracking-[0.01em] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px]">
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
              <p className="text-slate-600 tracking-[0.01em] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
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

        {/* Footer — тільки глобальні верт. відступи зверху працюють з контейнера */}
        <footer className="mt-16 border-t border-slate-100 pt-5 text-[13px] leading-[20px] text-slate-500 tracking-[0.01em]">
          © 2015–2025 Iryna Sofiian
        </footer>
      </div>
    </main>
  );
}

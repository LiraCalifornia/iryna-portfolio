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

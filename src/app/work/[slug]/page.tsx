import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
};

const allocationsCase: ProjectConfig = {
  title: "Allocations AI engine",
  subtitle:
    "Designing an institutional-grade allocation platform that makes complex portfolios clear, navigable, and fast to configure.",
  image: "/allocations-test.png",
  period: "2025",
  tools: "Figma, FigJam",
  keywords:
    "FinTech, B2B SaaS, Data visualization, Complex flows",
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
};

const projects: Record<string, ProjectConfig> = {
  allocations: allocationsCase,
  "website-boost": {
    title: "Marketing Website Optimization",
    subtitle:
      "Full case study coming soon. Focused on structure, messaging and experiments that moved revenue.",
  },
  flows: {
    title: "Operational Tools & AI-assisted Flows",
    subtitle:
      "Full case study coming soon. Deep dive into complex internal workflows.",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

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
  } = project;

  const hasFullCase = Boolean(problem && solution);

  const splitText = (text: string) => {
    const [first, ...rest] = text.split(". ");
    return { first, rest: rest.join(". ") };
  };

  const toolsTags = tools
    ? tools.split(",").map((t) => t.trim()).filter(Boolean)
    : [];
  const keywordTags = keywords
    ? keywords.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Back link */}
        <div className="mb-4">
          <Link
            href="/work"
            className="inline-flex items-center text-xs sm:text-sm text-slate-500 hover:text-slate-900 transition"
          >
            ← Back to Work
          </Link>
        </div>

        {/* Hero image */}
        {image && (
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">
              {subtitle}
            </p>
          )}

          {/* Meta badges */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs sm:text-sm">
            {period && (
              <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                <span>🗓</span>
                {period}
              </span>
            )}

            {toolsTags.map((tag, index) => (
              <span
                key={`tool-${index}`}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700"
              >
                {tag}
              </span>
            ))}

            {keywordTags.map((tag, index) => (
              <span
                key={`kw-${index}`}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {hasFullCase ? (
          <>
            {/* Problem / Solution / Challenges */}
            <section className="mt-10 space-y-6 sm:space-y-7">
              {/* Problem */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 sm:px-6 sm:py-6">
                <h2 className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-700">
                  <span className="text-blue-600 text-base font-mono">
                    {">_"}
                  </span>
                  Problem
                </h2>
                {problem && (
                  <p className="mt-2 text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold text-slate-900">
                      {splitText(problem).first}.
                    </span>{" "}
                    <span className="text-slate-500">
                      {splitText(problem).rest}
                    </span>
                  </p>
                )}
              </div>

              {/* Solution */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 sm:px-6 sm:py-6">
                <h2 className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-700">
                  <span className="text-blue-600 text-base font-mono">
                    {">_"}
                  </span>
                  Solution
                </h2>
                {solution && (
                  <p className="mt-2 text-sm sm:text-base leading-relaxed">
                    <span className="font-semibold text-slate-900">
                      {splitText(solution).first}.
                    </span>{" "}
                    <span className="text-slate-500">
                      {splitText(solution).rest}
                    </span>
                  </p>
                )}
              </div>

              {/* Challenges */}
              {challenges && challenges.length > 0 && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-4 sm:px-6 sm:py-6">
                  <h2 className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-700">
                    <span className="text-blue-600 text-base font-mono">
                      {">_"}
                    </span>
                    Challenges
                  </h2>
                  <ul className="mt-2 space-y-1.5 text-sm sm:text-base leading-relaxed">
                    {challenges.map((item, index) => {
                      const { first, rest } = splitText(item);
                      return (
                        <li key={index}>
                          <span className="font-semibold text-slate-900">
                            {first}.
                          </span>{" "}
                          <span className="text-slate-500">{rest}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>

            {/* Impact — окремий блок, без сірого боксу */}
            {impact && impact.length > 0 && (
              <section className="mt-14 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  Impact
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl">
                  Both the initial launch and further iterations delivered
                  measurable results and created a solid foundation for
                  long-term, scalable growth.
                </p>

                <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                  {impact.map((item, index) => {
                    const [stat, ...rest] = item.split(" ");
                    const label = rest.join(" ");
                    return (
                      <div key={index} className="space-y-1">
                        <div className="text-2xl sm:text-3xl font-semibold text-slate-900">
                          {stat}
                        </div>
                        <p className="text-sm sm:text-base text-slate-600">
                          {label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </>
        ) : (
          // Coming soon layout
          <section className="mt-10">
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-5 sm:px-6 sm:py-7">
              <p className="text-sm sm:text-base leading-relaxed text-slate-800">
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

        <footer className="mt-14 sm:mt-16 border-t border-slate-100 pt-5 text-[10px] sm:text-xs text-slate-500">
          © 2015–2025 Iryna Sofiian
        </footer>
      </div>
    </main>
  );
}

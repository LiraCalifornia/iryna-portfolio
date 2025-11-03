// src/app/work/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────────────────────
   Data model + demo registry
   ──────────────────────────────────────────────────────────── */
type ProjectData = {
  title: string;
  company: { name: string; logo: string };
  domain: string;       // e.g., "FinTech"
  platform: string;     // e.g., "B2B SaaS · Web"
  heroImage: string;    // product UI image
  summary: string;      // short paragraph about scope/role
  period: string;
  tools: string[];
  keywords: string[];
  problems: string;
  solution: string;
  challenges: string;
  impact: Array<{ value: string; label: string; sublabel?: string }>;
};

const PROJECTS: Record<string, ProjectData> = {
  "provenance-ai": {
    title: "Provenance AI — Allocation & Reporting",
    company: { name: "Annuities Genius", logo: "/next.svg" }, // заміниш на реальне лого
    domain: "FinTech",
    platform: "B2B SaaS · Web",
    heroImage: "/hero-portrait.jpg", // тимчасовий плейсхолдер
    summary:
      "Led product design for AI-driven allocation and reporting modules. Focused on decision workflows, explainability, and speed to quote.",
    period: "2023–Present",
    tools: ["Figma", "Plus Jakarta Sans", "Miro", "Rive"],
    keywords: [
      "product strategy",
      "BRD",
      "user flows",
      "design system",
      "behavioral UX",
      "design critique",
    ],
    problems:
      "Agents struggled to compare thousands of product permutations and justify allocation choices to clients. Existing tools were slow and opaque.",
    solution:
      "Built AI-assisted flows that surface 3 best mixes instantly, with transparent rationales and exportable reports. Reduced clicks and time-to-quote.",
    challenges:
      "Complex compliance constraints and rapidly changing product catalogs; need for clear ‘why’ behind each recommendation.",
    impact: [
      { value: "66%", label: "Increase in signup conversion rate" },
      { value: "63.9%", label: "Increase in purchase conversion rate" },
      { value: "460%", label: "Increase in ranked keywords" },
      { value: "200,000+", label: "New users added" },
      { value: "1554%", label: "Organic search growth (8 months)" },
      { value: "$250k+", label: "Added organic traffic value" },
    ],
  },
};

const FALLBACK = (slug: string): ProjectData => ({
  title: slugToTitle(slug),
  company: { name: "Company", logo: "/file.svg" },
  domain: "Domain",
  platform: "Platform",
  heroImage: "/hero-portrait.jpg",
  summary:
    "Short description of the project: scope, role, outcomes. Replace this text with the real summary.",
  period: "2024",
  tools: ["Figma", "React", "TailwindCSS"],
  keywords: ["UX", "UI", "Design system", "Flows"],
  problems:
    "State the key problem succinctly. What blocked users or business outcomes?",
  solution:
    "Explain the high-level solution. What did you design / ship and why it worked?",
  challenges:
    "Call out constraints (time, data, stakeholders, compliance) and how you navigated them.",
  impact: [
    { value: "50%", label: "Metric improvement", sublabel: "conversion" },
    { value: "-30%", label: "Cost to serve" },
    { value: "NPS +12", label: "User satisfaction" },
  ],
});

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */
function slugToTitle(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] leading-[18px] font-medium text-slate-700">
      {children}
    </span>
  );
}

function Stat({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="text-[36px] md:text-[44px] leading-[1.1] font-semibold text-slate-900">
        {value}
      </div>
      <div className="text-[16px] leading-[26px] text-slate-700">{label}</div>
      {sublabel && (
        <div className="text-[14px] leading-[22px] text-slate-500">{sublabel}</div>
      )}
    </div>
  );
}

function CardBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <div className="text-[20px] md:text-[22px] leading-[1.3] font-semibold text-slate-900">
        {title}
      </div>
      <p className="mt-3 text-[18px] leading-[28px] text-slate-800">{body}</p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Page (Next 16 / React 19: params — Promise)
   ──────────────────────────────────────────────────────────── */
export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // важливо: params — Promise
  const data = PROJECTS[slug] ?? FALLBACK(slug);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Back link */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-slate-600 hover:underline">
            ← Back to Work
          </Link>
        </div>

        {/* 1–3. Title + company + domain/platform */}
        <section className="flex flex-wrap items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <Image
              src={data.company.logo}
              alt={`${data.company.name} logo`}
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="mr-auto">
            <h1 className="text-[42px] md:text-[48px] leading-[1.15] tracking-[-0.01em] font-semibold text-slate-900">
              {data.title}
            </h1>
            <p className="text-[14px] leading-[22px] text-slate-500">
              {data.company.name}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Pill>{data.domain}</Pill>
            <Pill>{data.platform}</Pill>
          </div>
        </section>

        {/* 4. Product UI placeholder */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="grid place-items-center py-16">
            <div className="relative aspect-[16/9] w-full max-w-5xl">
              <Image
                src={data.heroImage}
                alt={`${data.title} — product UI`}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <p className="mt-2 text-[14px] leading-[22px] text-slate-500 text-center">
              Product UI (placeholder)
            </p>
          </div>
        </section>

        {/* 5. Summary + Parameters */}
        <section className="mt-10 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 md:max-w-[60ch]">
            <p className="text-[18px] leading-[28px] text-slate-800">
              {data.summary}
            </p>
          </div>

          <div className="md:col-span-2">
            <dl className="grid gap-4">
              <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                <dt className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-slate-500">
                  Period
                </dt>
                <dd className="text-[16px] leading-[26px] text-slate-700">
                  {data.period}
                </dd>
              </div>

              <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                <dt className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-slate-500">
                  Tools
                </dt>
                <dd className="text-[16px] leading-[26px] text-slate-700">
                  {data.tools.join(", ")}
                </dd>
              </div>

              <div className="grid grid-cols-[110px_1fr] items-start gap-2">
                <dt className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-slate-500">
                  Keywords
                </dt>
                <dd className="text-[16px] leading-[26px] text-slate-700">
                  {data.keywords.join(", ")}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 6. Problem / Solution / Challenges */}
        <section className="mt-12 grid gap-6">
          <CardBlock title=">_ Problem" body={data.problems} />
          <CardBlock title=">_ Solution" body={data.solution} />
          <CardBlock title=">_ Challenges" body={data.challenges} />
        </section>

        {/* 7. Impact */}
        <section className="mt-12">
          <h2 className="text-[28px] md:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold text-slate-900">
            Impact
          </h2>
          <p className="mt-2 text-[16px] leading-[26px] text-slate-700">
            Both the initial launch and further iterations produced meaningful results.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.impact.map((s, i) => (
              <Stat key={i} value={s.value} label={s.label} sublabel={s.sublabel} />
            ))}
          </div>
        </section>

        <div className="h-20" />
      </div>
    </main>
  );
}

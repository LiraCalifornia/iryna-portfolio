// src/app/work/[slug]/page.tsx
import Link from "next/link";

type Props = { params: { slug: string } };

export default function WorkDetail({ params }: Props) {
  const { slug } = params;
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/work">
          <span className="text-sm text-slate-600 hover:underline">← Back</span>
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-slate-900 capitalize">
          {slug.replace("-", " ")}
        </h1>

        <p className="mt-4 text-slate-700">
          Placeholder for the detailed case study of <strong>{slug}</strong>.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">
          Screenshot / assets will go here
        </div>
      </div>
    </main>
  );
}

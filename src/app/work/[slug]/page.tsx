// src/app/work/[slug]/page.tsx
import Link from "next/link";

export default async function WorkDetail({
  params,
}: {
  // У React 19/Next 16 params – це Promise
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // <-- обовʼязково розпаковуємо
  const title = decodeURIComponent(slug).replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/" className="text-sm text-slate-600 hover:underline">
          ← Back to Work
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-slate-900 capitalize">
          {title}
        </h1>

        <p className="mt-4 text-slate-700">
          Placeholder case page for <strong>{slug}</strong>. Replace with real
          content later.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-400">
          Screenshot / assets will go here
        </div>
      </div>
    </main>
  );
}

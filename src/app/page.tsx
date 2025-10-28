import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl text-center">
        <p className="text-sm tracking-wide text-neutral-500 uppercase">Portfolio</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight text-neutral-900">
          Iryna Sofiian · Senior Product Designer
        </h1>
        <p className="mt-4 text-neutral-700 text-lg">
          B2B SaaS and FinTech. Based in Vienna. Open to EU remote or hybrid in Austria.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/work" className="rounded-xl bg-black text-white px-4 py-2">View work</Link>
          <Link href="/contact" className="rounded-xl border px-4 py-2">Contact</Link>
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/researches", label: "Researches" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        {/* Лого + імʼя */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-[15px] font-semibold text-slate-900"
          >
            IS
          </Link>
          <Link href="/" className="text-[17px] font-medium tracking-tight text-slate-900">
            Iryna Sofiian
          </Link>
        </div>

        {/* ПРАВОРУЧ: текстові таби; активний має liquid-glass бульбашку */}
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <li key={href} className="relative">
                {/* Бульбашка скляна — рендеримо ПЕРЕД текстом, але під ним */}
                {active && (
                  <motion.span
                    layoutId="nav-bubble"
                    transition={{ type: "spring", stiffness: 600, damping: 40 }}
                    className="
                      absolute -inset-1 -z-10 rounded-full
                      bg-white/40 backdrop-blur-md
                      ring-1 ring-white/70
                      shadow-[0_1px_2px_rgba(15,23,42,.04),0_8px_20px_rgba(2,6,23,.05)]
                    "
                    aria-hidden
                  >
                    {/* внутрішній вертикальний хайлайт (зверху світліше) */}
                    <span className="
                      pointer-events-none absolute inset-[1px] rounded-full
                      bg-[linear-gradient(to_bottom,rgba(255,255,255,.85),rgba(255,255,255,.35))]
                      shadow-[inset_0_1px_0_rgba(255,255,255,.7)]
                    " />
                    {/* рефракційна смуга (легка «лінза») */}
                    <span className="
                      pointer-events-none absolute left-1/4 top-0 h-full w-[38%]
                      rounded-full bg-white/45 blur-md
                      [mask-image:linear-gradient(90deg,transparent,black,transparent)]
                      opacity-70
                    " />
                    {/* ніжна падаюча тінь під піллею */}
                    <span className="
                      pointer-events-none absolute -bottom-1 left-2 right-2 h-2
                      rounded-full bg-slate-900/6 blur-md
                    " />
                  </motion.span>
                )}

                <Link
                  href={href}
                  className={cn(
                    "relative z-10 block px-4 py-1.5 text-[16px] font-medium transition-colors",
                    active ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

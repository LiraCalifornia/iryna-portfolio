"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/researches", label: "Researches" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-24">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo + name */}
          <Link href="/" aria-label="Home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
              IS
            </div>
            <span className="text-[17px] font-medium tracking-tight text-slate-900">
              Iryna Sofiian
            </span>
          </Link>

          {/* Nav links */}
          <ul className="flex items-center gap-8 text-sm font-medium">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className={`transition-colors ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-slate-900"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

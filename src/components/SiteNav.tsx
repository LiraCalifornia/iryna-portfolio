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
      {/* ЗОВНІШНІЙ контейнер з такими ж падінгами, як у всіх сторінок */}
      <div className="w-full px-4 mobile:px-4 bp-756:px-6 bp-1150:px-8">
        {/* ВНУТРІШНІЙ max-width — без падінгів, тут завжди 0 */}
        <div className="mx-auto w-full max-w-3xl">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo / avatar */}
            <Link href="/" aria-label="Home" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                IS
              </div>

              {/* Імʼя приховане на мобайлі */}
              <span className="hidden sm:inline-block text-[16px] leading-[24px] font-black tracking-tight text-slate-900">
                Iryna Sofiian
              </span>
            </Link>

            {/* Навігаційні пункти */}
            <ul className="flex items-center gap-8">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <li key={href} className="relative">
                    <Link
                      href={href}
                      className={
                        isActive
                          ? "text-[16px] leading-[24px] font-normal text-slate-900 transition-colors"
                          : "text-[16px] leading-[24px] font-normal text-slate-700 hover:text-slate-900 transition-colors"
                      }
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
      </div>
    </header>
  );
}

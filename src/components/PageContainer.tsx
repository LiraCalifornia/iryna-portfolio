// src/components/PageContainer.tsx
"use client";

import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full

        /* Mobile <756px — 16px padding */
        px-4

        /* Tablet 756–895px — 24px padding, no max-width */
        bp-756:px-6
        bp-756:max-w-none

        /* Desktop ≥896px — центрований, max-width, без горизонтальних падінгів */
        bp-896:max-w-[768px]
        bp-896:mx-auto
        bp-896:px-0     /* важливо: тепер немає падінгів на великих екранах */
      "
    >
      {children}
    </div>
  );
}

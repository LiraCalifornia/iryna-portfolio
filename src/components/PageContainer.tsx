// src/components/PageContainer.tsx
"use client";

import { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full
        px-4                /* mobile <756px: 16px */

        bp-756:px-6         /* tablet 756–895px: 24px */
        bp-756:max-w-none   /* без max-width */

        bp-896:max-w-[768px]/* desktop ≥896px: 768px по центру */
        bp-896:mx-auto
        bp-896:px-0         /* без горизонтальних падінгів */
      "
    >
      {children}
    </div>
  );
}

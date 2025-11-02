// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import ProjectShortcuts from "@/components/ProjectShortcuts"; 

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <ProjectShortcuts /> 
    </main>
  );
}

// src/data/projects/allocations.ts
import { type ProjectConfig } from "./types";
import { type DesignProcessStep } from "@/components/DesignProcess";

const allocationsDesignProcess: DesignProcessStep[] = [
  {
    title: "Insurance story begins",
    description:
      "The journey begins when I became an insurance agent. I quickly saw the imperfections in the industry, with agents often prioritizing their profits over the client's best interests. This led me to develop a personal annuities quoting system that would offer transparency and fairness.",
    image: "/design-process/insurance-story-begins.jpg",
  },
  {
    title: "The Birth of AnnuitiesGenius",
    description:
      "The idea to share this fair and transparent annuities system with the entire industry was born. Agata Global Tech LLC was registered, the team was assembled, and the first prototype of AnnuitiesGenius was created.",
  },
  {
    title: "Launch & Early Adoption",
    description:
      "The vision started to materialize. The first version (V1.0) of the AnnuitiesGenius platform was launched, bringing transparency to annuity recommendations. By the end of the year, approximately 50 agents were using the system, helping ensure fair annuity choices for clients.",
  },
];

export const allocationsCase: ProjectConfig = {
  title: "Allocations AI engine",
  subtitle:
    "Designing an institutional-grade allocation platform that makes complex portfolios clear, navigable, and fast to configure.",
  image: "/allocations-test.png",
  period: "2025",
  tools: "Figma, FigJam",
  keywords: "FinTech, B2B SaaS, Data visualization, Complex flows",
  problem:
    "Unclear Value Proposition. The startup’s original website didn’t clearly show its unique product or explain how it solved user problems.",
  solution:
    "Visual Product Walkthrough. Created a three-step 3D animation to show how the product works, making it easy for non-technical users to understand.",
  challenges: [
    "Tight Timeline and Team Coordination. Had two months to plan and deliver a large project, including a 3D animation that needed quick client approval.",
    "Designing intuitive, safe interactions for advanced allocation logic.",
    "Aligning product, quant, legal and sales on one mental model.",
  ],
  impact: [
    "42% faster allocation decisions in moderated tests.",
    "Higher completion rate of complex workflows after redesign.",
    "Clear UX foundation for future AI features across the product suite.",
  ],
  designProcessSteps: allocationsDesignProcess,
};

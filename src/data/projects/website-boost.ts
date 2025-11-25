// src/data/projects/website-boost.ts
import { type ProjectConfig } from "./types";
import { type DesignProcessStep } from "@/components/DesignProcess";

const websiteBoostDesignProcess: DesignProcessStep[] = [
  {
    title: "Analytics & funnel audit",
    description:
      "Started with a quantitative and qualitative audit of existing traffic, funnels, and user behavior. Mapped drop-off points, checked scroll depth, and reviewed session recordings to see where people got confused or lost intent.",
    image: "/design-process/website-boost-analytics.jpg",
  },
  {
    title: "Narrative & information architecture",
    description:
      "Reframed the story of the product: clarified who it is for, what outcomes it delivers, and why it’s different. Rebuilt the page structure to surface proof points earlier and shorten the path from curiosity to signup.",
  },
  {
    title: "Visual system & interaction patterns",
    description:
      "Defined a clean, performant visual system — typography, color, spacing, and component patterns — that could scale across pages. Designed interaction details that guide attention to the right CTAs without feeling pushy.",
    image: "/design-process/website-boost-visual-system.jpg",
  },
  {
    title: "Experimentation & ongoing optimisation",
    description:
      "Shipped the new site with clearly defined hypotheses and an experiment backlog. Ran A/B tests on hero variants, social proof placement, and pricing layout to steadily lift conversion while preserving SEO.",
  },
];

export const websiteBoostCase: ProjectConfig = {
  title: "Website that boosted startup revenue",
  subtitle:
    "Rebuilt and optimized marketing site — improved acquisition and conversion through continuous experiments.",
  image: "/educator-test.png",
  period: "2024",
  tools: "Figma, Webflow, Google Analytics, Hotjar",
  keywords: "Marketing website, Conversion, Experimentation, UX writing",
  problem:
    "Low Conversion from Existing Traffic. The startup had strong organic and paid traffic, but the old website did not clearly communicate value or guide visitors to sign up.",
  solution:
    "Focused Narrative & Experiment Framework. Reworked structure and messaging, highlighted proof points, and set up an experiment backlog for continuous A/B testing.",
  challenges: [
    "Balancing modern visual style with clarity and performance.",
    "Preserving SEO equity while restructuring pages and content.",
    "Aligning founders, marketing, and engineering around one clear story.",
  ],
  impact: [
    "$250k+ Worth of organic traffic generated.",
    "1554% Increase in monthly organic search traffic in 8 months.",
    "66% Increase in signup conversion rate.",
    "70+ NPS score maintained after redesign.",
  ],
  designProcessSteps: websiteBoostDesignProcess,
};

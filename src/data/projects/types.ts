// src/data/projects/types.ts
import { type DesignProcessStep } from "@/components/DesignProcess";

export type ProjectConfig = {
  title: string;
  subtitle?: string;
  image?: string;
  period?: string;
  tools?: string;
  keywords?: string;
  problem?: string;
  solution?: string;
  challenges?: string[];
  impact?: string[];
  designProcessSteps?: DesignProcessStep[];
};

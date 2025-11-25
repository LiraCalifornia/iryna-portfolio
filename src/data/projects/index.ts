// src/data/projects/index.ts
import type { ProjectConfig } from "./types";
import { allocationsCase } from "./allocations";
import { websiteBoostCase } from "./website-boost";
import { flowsPlaceholder } from "./flows";

export const projects: Record<string, ProjectConfig> = {
  allocations: allocationsCase,
  "website-boost": websiteBoostCase,
  flows: flowsPlaceholder,
};

export type { ProjectConfig } from "./types";

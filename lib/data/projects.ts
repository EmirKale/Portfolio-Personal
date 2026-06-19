export type Locale = "tr" | "en";

export interface Localized {
  tr: string;
  en: string;
}

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  category: Localized;
  tags: Localized[];
  description: Localized;
  longDescription: Localized;
  tech: string[];
  cover: string;
  gallery: string[];
  links: ProjectLink;
  // Case-study fields
  problem: Localized;
  solution: Localized;
  results: Localized[];
}

import projectsData from '../../data/projects.json';

export const projects: Project[] = projectsData as Project[];

export const featuredProjectIds = ["vicareerai", "askbase", "yummy", "virasure"];

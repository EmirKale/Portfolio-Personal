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
  titleEn?: string;
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

const projectTitleTranslations: Record<string, string> = {
  vitransport: "Vitransport Logistics",
  mvcadmin: "MVC Writer Platform",
  portfolio: "Personal Portfolio Website",
  "Kişisel Portfolio Sitesi": "Personal Portfolio Website",
  "Vitransport Lojistik": "Vitransport Logistics",
  "MVC Yazar Platformu": "MVC Writer Platform",
};

export function getProjectTitle(project: Project, locale: Locale): string {
  if (locale === "en") {
    if (project.titleEn && project.titleEn.trim().length > 0) {
      return project.titleEn;
    }
    return (
      projectTitleTranslations[project.id] ||
      projectTitleTranslations[project.title] ||
      project.title
    );
  }
  return project.title;
}

import { supabaseAdmin } from '../supabase/admin';
import fallbackProjects from '../../data/projects.json';

export const featuredProjectIds = ["vicareerai", "askbase", "yummy", "virasure"];

export async function getProjectsFromDB(): Promise<Project[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from('projects')
      .select('id, content');

    if (error || !data || data.length === 0) {
      console.warn('Using local fallback projects data:', error?.message);
      return fallbackProjects as unknown as Project[];
    }

    return data.map(row => ({
      id: row.id,
      ...(row.content as Omit<Project, 'id'>)
    })) as Project[];
  } catch (err) {
    console.warn('Network exception while fetching projects, using fallback data:', err);
    return fallbackProjects as unknown as Project[];
  }
}

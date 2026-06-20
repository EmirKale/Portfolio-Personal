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

import { supabaseAdmin } from '../supabase/admin';

export const featuredProjectIds = ["vicareerai", "askbase", "yummy", "virasure"];

export async function getProjectsFromDB(): Promise<Project[]> {
  const { data, error } = await supabaseAdmin
    .from('projects')
    .select('id, content');

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data.map(row => ({
    id: row.id,
    ...(row.content as Omit<Project, 'id'>)
  })) as Project[];
}

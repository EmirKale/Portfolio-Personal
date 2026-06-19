'use server';

import fs from 'fs';
import path from 'path';
import { Project } from '@/lib/data/projects';
import { revalidatePath } from 'next/cache';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

const getProjects = (): Project[] => {
  if (!fs.existsSync(dataFilePath)) return [];
  const fileData = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileData) as Project[];
};

const saveProjects = (projects: Project[]) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
};

export async function createProjectAction(project: Project) {
  try {
    const projects = getProjects();
    // basic collision check
    if (projects.find(p => p.id === project.id)) {
      return { success: false, error: 'Bu ID ile bir proje zaten var.' };
    }
    projects.push(project);
    saveProjects(projects);
    revalidatePath('/'); // revalidate UI
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateProjectAction(project: Project) {
  try {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === project.id);
    if (index === -1) {
      return { success: false, error: 'Proje bulunamadı.' };
    }
    projects[index] = project;
    saveProjects(projects);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteProjectAction(id: string) {
  try {
    let projects = getProjects();
    const initialLength = projects.length;
    projects = projects.filter(p => p.id !== id);
    if (projects.length === initialLength) {
      return { success: false, error: 'Silinecek proje bulunamadı.' };
    }
    saveProjects(projects);
    revalidatePath('/');
    revalidatePath('/admin/projects');
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

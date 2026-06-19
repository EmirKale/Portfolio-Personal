import fs from 'fs';
import path from 'path';
import { Project } from '@/lib/data/projects';
import ProjectsClient from './ProjectsClient';

export default function AdminProjectsPage() {
  const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');
  let projects: Project[] = [];
  
  if (fs.existsSync(dataFilePath)) {
    projects = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  }

  return <ProjectsClient initialProjects={projects} />;
}

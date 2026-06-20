import { getProjectsFromDB } from '@/lib/data/projects';
import ProjectsClient from './ProjectsClient';

export default async function AdminProjectsPage() {
  const projects = await getProjectsFromDB();

  return <ProjectsClient initialProjects={projects} />;
}

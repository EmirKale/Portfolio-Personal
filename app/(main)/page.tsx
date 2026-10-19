import TerminalPortfolio from '@/components/sections/TerminalPortfolio';
import { getProjectsFromDB } from '@/lib/data/projects';

export default async function Home() {
  const projectsList = await getProjectsFromDB();

  return <TerminalPortfolio projects={projectsList} />;
}

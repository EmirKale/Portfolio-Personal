import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Marquee from '@/components/Marquee';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { getProjectsFromDB } from '@/lib/data/projects';

export default async function Home() {
  const projectsList = await getProjectsFromDB();

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <TechStack />
      <Projects projects={projectsList} />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

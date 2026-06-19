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

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <TechStack />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

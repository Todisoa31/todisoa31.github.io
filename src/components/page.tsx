import Accueil from './accueil';
import About from './about';
import Experience from './experience';
import Projects from './project/projects';
import Background from './background';
import Contact from './contact';
import Footer from './footer';
import CaseStudies from './case-studies';
import Stats from './stats';
import Divider from './ui/divider';
import SkillsSection from './skills/skillsSection';

export default function PageAccueil() {
  return (
    <>
      <Background />

      <main>
        <Accueil />

        <Stats />
        <Divider />

        <About />
        <Divider />

        <Experience />
        <Divider />

        <SkillsSection />
        <Divider />

        <Projects />
        <Divider />

        <CaseStudies />
        <Divider />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

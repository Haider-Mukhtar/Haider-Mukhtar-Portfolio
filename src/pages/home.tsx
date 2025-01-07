import ExperienceCards from "@/components/experience-cards.tsx";
import Footer from "@/components/footer.tsx";
import Hero from "@/components/hero.tsx";
import LetsTalk from "@/components/lets-talk.tsx";
import Navbar from "@/components/navbar.tsx";
import Projects from "@/components/projects.tsx";
import Skills from "@/components/skills.tsx";
import Testimonials from "@/components/testimonials.tsx";
import YearOfExperience from "@/components/year-of-experience.tsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <YearOfExperience />
      <ExperienceCards />
      <Testimonials />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default Home;

import ExperienceCards from "@/components/experience-cards.tsx";
import Footer from "@/components/footer.tsx";
import LetsTalk from "@/components/lets-talk.tsx";
import Navbar from "@/components/navbar.tsx";
import Testimonials from "@/components/testimonials.tsx";

const Experience = () => {
  return (
    <>
      <Navbar />
      <ExperienceCards />
      <Testimonials />
      <LetsTalk />
      <Footer />
    </>
  );
};

export default Experience;

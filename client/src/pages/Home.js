import Hero from "../sections/Hero";
import AboutPreview from "../sections/AboutPreview";
import FeaturedProjects from "../sections/FeaturedProjects";
import CTA from "../sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <CTA />
    </>
  );
}

export default Home;
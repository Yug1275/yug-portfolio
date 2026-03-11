import Hero from "../sections/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import CTA from "../sections/CTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <CTA />
    </>
  );
}

export default Home;
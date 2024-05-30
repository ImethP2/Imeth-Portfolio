import React, { useRef } from "react";
import Navbar from "../sections/navbar";
import Hero from "../sections/Home/Hero";
import AboutMe from "../sections/Home/aboutme";
import Projects from "../sections/Home/Projects";
import Contact from "../sections/Home/Contact";
import Footer from "../sections/Footer";

const Portfolio = () => {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigate = (section) => {
    if (section === "aboutMe" && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <Hero />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;

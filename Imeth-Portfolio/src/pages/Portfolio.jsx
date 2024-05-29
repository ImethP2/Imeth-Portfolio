import React from "react";
import Navbar from "../sections/navbar";
import Hero from "../sections/Home/Hero";
import Aboutme from "../sections/Home/aboutme";
import Projects from "../sections/Home/Projects";
import Contact from "../sections/Home/Contact";
import Footer from "../sections/Footer";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Portfolio;

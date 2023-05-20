import React from "react";
import Navbar from "./components/Navbar";
import HeroSection1 from "./components/HeroSection1";
import HeroSection2 from "./components/HeroSection2";
import TeamSections from "./components/TeamSections";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection1 />
      <HeroSection2 />
      <TeamSections />
      <Testimonials />
      <Contact />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;

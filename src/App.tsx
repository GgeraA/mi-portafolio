
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#F4F4F7]">
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
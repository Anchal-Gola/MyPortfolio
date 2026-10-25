
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <BackToTop />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
      </main>

      <Contact />
    </div>
  );
}

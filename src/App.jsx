import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastProvider } from "./context/ToastContext";
import useTheme from "./hooks/useTheme";
import useCursorSpotlight from "./hooks/useCursorSpotlight";
import portfolioData from "./data/portfolioData";

function AppInner() {
  const [theme, toggleTheme] = useTheme();
  const [view, setView] = useState({ type: "home" });
  useCursorSpotlight();

  const data = portfolioData;

  const navigate = (id) => {
    setView({ type: "home" });
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 30);
    });
  };

  const openProject = (id) => {
    setView({ type: "project", id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const project = view.type === "project" ? data.projects.find((p) => p.id === view.id) : null;

  return (
    <div className="app-root" data-theme={theme}>
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-[background] duration-150"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(75,178,211,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={navigate} />

      <AnimatePresence mode="wait">
        {view.type === "home" ? (
          <div key="home">
            <Hero data={data} onNavigate={navigate} />
            <Stats data={data} />
            <About data={data} />
            <Skills data={data} />
            <Education data={data} />
            <Experience data={data} />
            <Projects data={data} onOpen={openProject} />
            <Contact data={data} />
          </div>
        ) : (
          <ProjectDetail key="project" project={project} onBack={() => setView({ type: "home" })} />
        )}
      </AnimatePresence>

      <Footer data={data} />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppInner />
    </ToastProvider>
  );
}

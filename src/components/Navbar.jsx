import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-lg border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg)_78%,transparent)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <button
          className="flex items-center gap-2 bg-transparent border-none font-display font-bold text-[17px] tracking-wide"
          style={{ color: "var(--text)" }}
          onClick={() => go("home")}
        >
          <span className="w-[9px] h-[9px] rounded-full bg-gradient-to-br from-brand-1 to-brand-2 shadow-[0_0_12px_theme(colors.brand.2)] animate-pulse-dot" />
          Shahariat
        </button>

        <nav className="hidden md:flex gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              className="group relative bg-transparent border-none px-3.5 py-2 rounded-full text-sm font-medium transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => go(l.id)}
            >
              <span className="group-hover:text-[color:var(--text)] transition-colors relative z-10">
                {l.label}
              </span>
              <span className="absolute left-3.5 right-3.5 bottom-1.5 h-0.5 rounded bg-gradient-to-r from-brand-1 to-brand-2 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <motion.button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            whileTap={{ scale: 0.88, rotate: 20 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -60 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 60 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          <button
            className="icon-btn md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden flex flex-col px-6 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                className="text-left bg-transparent border-none py-3 px-2 border-b text-[15px]"
                style={{ color: "var(--text)", borderColor: "var(--border)" }}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const INITIAL_COUNT = 3;

export default function Projects({ data, onOpen }) {
  const [expanded, setExpanded] = useState(false);
  const projects = data.projects;
  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section section-alt">
      <Reveal className="section-head">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
          {visible.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: i >= INITIAL_COUNT ? (i - INITIAL_COUNT) * 0.08 : 0 }}
            >
              <ProjectCard project={p} onOpen={onOpen} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center mt-11">
          <motion.button
            className="btn btn-outline"
            onClick={() => setExpanded((e) => !e)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show more projects <ChevronDown size={16} />
              </>
            )}
          </motion.button>
        </div>
      )}
    </section>
  );
}

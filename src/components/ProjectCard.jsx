import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, onOpen, index }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal delay={(index % 3) * 90} style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        className="card overflow-hidden flex flex-col h-full hover:shadow-[0_20px_44px_rgba(15,150,212,0.2)] hover:border-brand-1/50"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6 }}
      >
        <div className="aspect-[16/10] overflow-hidden group">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
        <div className="p-5 flex flex-col gap-3 flex-1">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.stack.slice(0, 5).map((s) => (
              <TechBadge key={s} tech={s} size={30} />
            ))}
          </div>
          <button className="btn btn-outline btn-sm mt-auto self-start" onClick={() => onOpen(project.id)}>
            View Details <ChevronRight size={15} />
          </button>
        </div>
      </motion.div>
    </Reveal>
  );
}

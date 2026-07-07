import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import TechBadge from "./TechBadge";
import { getTech } from "./techIcons";

export default function ProjectDetail({ project, onBack }) {
  if (!project) return null;
  return (
    <motion.section
      className="section max-w-[980px]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="btn btn-ghost btn-sm mb-7" onClick={onBack}>
        <ArrowLeft size={15} /> Back to all projects
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
        <img src={project.image} alt={project.name} className="rounded-2xl w-full aspect-[16/10] object-cover" />
        <div>
          <h2 className="text-[28px] font-bold mb-3">{project.name}</h2>
          <p className="mb-2">{project.description}</p>

          <div className="flex gap-2 flex-wrap my-[18px]">
            {project.stack.map((s) => (
              <div key={s} className="flex items-center gap-2 rounded-full border py-1.5 px-3.5 text-[13px]" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <TechBadge tech={s} size={22} />
                <span>{getTech(s).label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-5 flex-wrap">
            {project.liveUrl ? (
              <a className="btn btn-primary btn-sm" href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={15} /> Live Project
              </a>
            ) : (
              <span className="btn btn-primary btn-sm btn-disabled">
                <ExternalLink size={15} /> Live link coming soon
              </span>
            )}
            {project.githubUrl ? (
              <a className="btn btn-outline btn-sm" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={15} /> Client Repo
              </a>
            ) : (
              <span className="btn btn-outline btn-sm btn-disabled">
                <Github size={15} /> Repo coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      {project.features && project.features.length > 0 && (
        <div className="card p-[22px] mt-10">
          <h4 className="mb-2.5 text-[15px] font-semibold" style={{ color: "var(--blue-1)" }}>
            Key features
          </h4>
          <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "var(--blue-1)" }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
        <div className="card p-[22px]">
          <h4 className="mb-2.5 text-[15px] font-semibold" style={{ color: "var(--blue-1)" }}>
            Challenges faced
          </h4>
          <p>{project.challenges}</p>
        </div>
        <div className="card p-[22px]">
          <h4 className="mb-2.5 text-[15px] font-semibold" style={{ color: "var(--blue-1)" }}>
            Future improvements
          </h4>
          <p>{project.improvements}</p>
        </div>
      </div>
    </motion.section>
  );
}

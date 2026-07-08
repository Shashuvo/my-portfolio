import { useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, FolderGit2, GitCommit, Trophy, Sparkles } from "lucide-react";
import useCountUp from "../hooks/useCountUp";
import Reveal from "./Reveal";

const STAT_ICONS = {
  clock: Clock,
  projects: FolderGit2,
  commits: GitCommit,
  trophy: Trophy,
};

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(stat.value, 1600, inView);
  const Icon = STAT_ICONS[stat.icon] || Sparkles;

  return (
    <Reveal
      delay={index * 90}
      className="group relative overflow-hidden card flex flex-col items-center text-center gap-3 py-9 px-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-1/50 hover:shadow-[0_20px_45px_rgba(15,150,212,0.18)]"
    >
      {/* ambient glow blob, brighter on hover */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-brand-1/25 blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(15,150,212,0.35)]">
        <Icon size={20} />
      </div>

      <div
        ref={ref}
        className="relative text-[clamp(30px,4vw,42px)] font-extrabold gradient-text drop-shadow-[0_0_20px_rgba(75,178,211,0.45)]"
      >
        {count}
        {stat.suffix || ""}
      </div>
      <p className="relative text-sm font-medium" style={{ color: "var(--text-muted)" }}>
        {stat.label}
      </p>
    </Reveal>
  );
}

export default function Stats({ data }) {
  if (!data.stats || data.stats.length === 0) return null;
  return (
    <section className="section pt-10 pb-10">
      <Reveal className="flex justify-center mb-8">
        <span
          className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full border"
          style={{ color: "var(--blue-1)", background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <Sparkles size={14} /> By The Numbers
        </span>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.stats.map((s, i) => (
          <StatItem key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
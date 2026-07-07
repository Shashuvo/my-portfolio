import { Code2 } from "lucide-react";
import Reveal from "./Reveal";
import TechBadge from "./TechBadge";
import { getTech } from "./techIcons";

export default function Skills({ data }) {
  return (
    <section id="skills" className="section section-alt">
      <Reveal className="section-head">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Tools I reach for</h2>
      </Reveal>

      <div className="flex flex-col gap-9">
        {data.skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 90}>
            <h3 className="flex items-center gap-2 text-lg mb-[18px]" style={{ color: "var(--blue-1)" }}>
              <Code2 size={16} /> {group.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="card flex items-center gap-3 py-4 px-[22px] text-[15px] font-semibold min-w-[168px] transition-transform hover:-translate-y-1.5 hover:border-[color:var(--blue-1)] hover:shadow-[0_14px_30px_rgba(15,150,212,0.16)]"
                >
                  <TechBadge tech={item} size={52} />
                  <span>{getTech(item).label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

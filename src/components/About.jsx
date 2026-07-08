import { Compass, Code2, Heart, Palette, Rocket, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const ABOUT_ICONS = {
  compass: Compass,
  code: Code2,
  heart: Heart,
  palette: Palette,
  rocket: Rocket,
};

export default function About({ data }) {
  return (
    <section id="about" className="section pt-16">
      <Reveal className="section-head">
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">The person behind the code</h2>
        <p className="section-desc">{data.about.intro}</p>
      </Reveal>

      {/* Always a single row: desktop divides width evenly across however
          many cards exist (3 or 4+), mobile becomes a snap-scroll strip. */}
      <div className="flex gap-5 items-stretch -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 md:pb-0">
        {data.about.cards.map((c, i) => {
          const Icon = ABOUT_ICONS[c.icon] || Sparkles;
          return (
            <Reveal
              key={i}
              delay={i * 100}
              y={30}
              className="card flex-[0_0_82%] sm:flex-[0_0_60%] md:flex-1 min-w-0 snap-start p-7 flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1.5 hover:border-[color:var(--blue-1)] hover:shadow-[0_16px_36px_rgba(15,150,212,0.14)]"
            >
              {/* icon centered like a modern feature card */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white flex items-center justify-center shrink-0">
                <Icon size={24} />
              </div>
              <h3 className="text-[17px] font-bold">{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function Timeline({ id, title, eyebrow, icon, items, renderItem }) {
  if (!items || items.length === 0) return null;
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      <div
        className="relative pl-7 flex flex-col gap-9 before:content-[''] before:absolute before:left-[11px] before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-gradient-to-b before:from-brand-1 before:to-brand-2 before:opacity-40"
      >
        {items.map((item, i) => (
          <Reveal key={i} className="relative" delay={i * 100}>
            <div
              className="absolute -left-7 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-1 to-brand-2 text-white flex items-center justify-center"
              style={{ boxShadow: "0 0 0 4px var(--bg)" }}
            >
              {icon}
            </div>
            <div>{renderItem(item)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

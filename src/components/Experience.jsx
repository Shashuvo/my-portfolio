import { Briefcase } from "lucide-react";
import Timeline from "./Timeline";

export default function Experience({ data }) {
  return (
    <Timeline
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      icon={<Briefcase size={16} />}
      items={data.experience}
      renderItem={(e) => (
        <>
          <h3 className="text-lg font-bold">{e.role}</h3>
          <p className="text-sm font-semibold mt-1" style={{ color: "var(--blue-1)" }}>
            {e.company} · {e.duration}
          </p>
          {e.details && <p className="mt-2">{e.details}</p>}
        </>
      )}
    />
  );
}

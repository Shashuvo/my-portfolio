import { GraduationCap } from "lucide-react";
import Timeline from "./Timeline";

export default function Education({ data }) {
  return (
    <Timeline
      id="education"
      eyebrow="Education"
      title="Educational background"
      icon={<GraduationCap size={16} />}
      items={data.education}
      renderItem={(e) => (
        <>
          <h3 className="text-lg font-bold">{e.degree}</h3>
          <p className="text-sm font-semibold mt-1" style={{ color: "var(--blue-1)" }}>
            {e.institute} · {e.duration}
          </p>
          {e.details && <p className="mt-2">{e.details}</p>}
        </>
      )}
    />
  );
}

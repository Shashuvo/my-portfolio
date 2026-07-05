import Reveal from './Reveal';

export function EducationTimeline({ items }) {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">Education</div>
        <h2 className="sec-title">Academic background</h2>
        <Reveal>
          <div className="timeline">
            {items.map((e) => (
              <div className="tl-item" key={e.id}>
                <div className="tl-date">{e.duration}</div>
                <div>
                  <div className="tl-title">{e.degree}</div>
                  <div className="tl-sub">{e.institution}</div>
                  {e.details ? <div className="tl-desc">{e.details}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceTimeline({ items }) {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="eyebrow">Experience</div>
        <h2 className="sec-title">Where I've worked</h2>
        <Reveal>
          <div className="timeline">
            {items.map((x) => (
              <div className="tl-item" key={x.id}>
                <div className="tl-date">{x.duration}</div>
                <div>
                  <div className="tl-title">{x.role}</div>
                  <div className="tl-sub">{x.company}</div>
                  <ul className="tl-desc">
                    {(x.points || []).map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

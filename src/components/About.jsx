import Reveal from './Reveal';

export default function About({ profile }) {
  const paragraphs = (profile.about || '').split('\n\n');

  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">About</div>
        <h2 className="sec-title">A little about me</h2>
        <Reveal>
          <div className="about-grid">
            <div className="about-text">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="about-card">
              <h3>Quick facts</h3>
              <div className="fact-row"><span className="k">Based in</span><span className="v">Chattogram, BD</span></div>
              <div className="fact-row"><span className="k">Role</span><span className="v">{profile.designation}</span></div>
              <div className="fact-row"><span className="k">Experience</span><span className="v">3+ years</span></div>
              <div className="fact-row"><span className="k">Open to</span><span className="v">Freelance &amp; full-time</span></div>
              <div className="hobby-chips">
                {(profile.hobbies || []).map((h, i) => <span className="chip" key={i}>{h}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

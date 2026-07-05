import { Icons } from './Icons';

export default function Hero({ profile }) {
  return (
    <section className="hero">
      <div className="blob blob-1" aria-hidden="true"></div>
      <div className="blob blob-2" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div>
          <div className="badge">{profile.designation}</div>
          <h1>Hi, I'm <span>{profile.name}</span></h1>
          <p className="tagline">{profile.tagline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={profile.resumeUrl || '#'} download>⬇ Download Resume</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <div className="social-row">
            <a className="social-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">{Icons.github}</a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{Icons.linkedin}</a>
            <a className="social-btn" href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">{Icons.twitter}</a>
            <a className="social-btn" href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">{Icons.facebook}</a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="photo-ring">
            <div className="inner">
              {profile.photo ? <img src={profile.photo} alt={profile.name} /> : Icons.person}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

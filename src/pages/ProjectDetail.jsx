import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useStore } from '../hooks/useStore';
import { placeholderThumb } from '../data/defaultData';

export default function ProjectDetail() {
  const { id } = useParams();
  const [profile] = useStore('profile');
  const [projects] = useStore('projects');
  const pj = projects.find((p) => p.id === id) || projects[0];

  useEffect(() => {
    if (pj) document.title = `${pj.name} — Project Details`;
  }, [pj]);

  return (
    <>
      <Navbar resumeUrl={profile.resumeUrl} sections={false} />
      <main>
        <section className="detail-hero">
          <div className="wrap">
            {!pj ? (
              <p>No projects found yet. <Link to="/">Go back home →</Link></p>
            ) : (
              <>
                <Link className="back-link" to="/#projects">← Back to all projects</Link>
                <h1>{pj.name}</h1>
                <div className="detail-tags">
                  {(pj.techStack || []).map((t, i) => <span className="chip" key={i}>{t}</span>)}
                </div>
                <div className="detail-links">
                  {pj.liveLink && <a className="btn btn-primary" href={pj.liveLink} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}
                  {pj.githubLink && <a className="btn btn-ghost" href={pj.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>}
                </div>
                <div className="detail-thumb">
                  <img src={pj.image || placeholderThumb(pj.name, pj.color)} alt={pj.name} />
                </div>

                <div className="detail-block">
                  <h2>Overview</h2>
                  <p>{pj.description}</p>
                </div>

                <div className="detail-block">
                  <h2>Tech Stack</h2>
                  <div className="stack-pills">
                    {(pj.techStack || []).map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                </div>

                <div className="detail-block">
                  <h2>Challenges Faced</h2>
                  <p>{pj.challenges}</p>
                </div>

                <div className="detail-block">
                  <h2>Future Improvements</h2>
                  <p>{pj.improvements}</p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer name={profile.name} />
    </>
  );
}

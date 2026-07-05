import { Link } from 'react-router-dom';
import { placeholderThumb } from '../data/defaultData';
import Reveal from './Reveal';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Projects</div>
        <h2 className="sec-title">Things I've built</h2>
        <Reveal>
          <div className="project-grid">
            {projects.map((pj) => (
              <div className="pcard" key={pj.id}>
                <div className="thumb">
                  <img src={pj.image || placeholderThumb(pj.name, pj.color)} alt={pj.name} />
                </div>
                <div className="body">
                  <h3>{pj.name}</h3>
                  <p className="desc">{pj.shortDesc}</p>
                  <div className="tags">
                    {(pj.techStack || []).slice(0, 4).map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <Link className="btn btn-ghost btn-sm" to={`/project/${pj.id}`}>View Details →</Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

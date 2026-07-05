import { useState } from 'react';
import { getTechIconUrl } from '../data/techIcons';
import { Icons } from './Icons';
import Reveal from './Reveal';

const CATEGORY_ORDER = ['Frontend', 'Backend', 'Tools'];

function TechTile({ skill }) {
  const iconUrl = getTechIconUrl(skill.name);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="tech-tile">
      {iconUrl && !imgFailed ? (
        <img src={iconUrl} alt={skill.name} loading="lazy" onError={() => setImgFailed(true)} />
      ) : (
        <div className="fallback-icon">{Icons.code}</div>
      )}
      <div className="tname">{skill.name}</div>
      <div className="bar-track"><div className="bar-fill" style={{ width: `${skill.level}%` }} /></div>
    </div>
  );
}

export default function Skills({ skills }) {
  const available = ['All', ...CATEGORY_ORDER.filter((c) => skills.some((s) => s.category === c))];
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Skills</div>
        <h2 className="sec-title">My tech stack</h2>
        <div className="tech-filter">
          {available.map((c) => (
            <button
              key={c}
              className={filter === c ? 'active' : ''}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <Reveal>
          <div className="tech-grid">
            {visible.map((s) => (
              <TechTile skill={s} key={s.id} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

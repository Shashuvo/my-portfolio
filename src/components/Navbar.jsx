import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import { Icons } from './Icons';

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark/light mode" title="Toggle dark/light mode">
      {theme === 'dark' ? Icons.sun : Icons.moon}
    </button>
  );
}

export default function Navbar({ resumeUrl, sections = true }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <div className="logo">
          <Link to="/">Shahariat<span>.dev</span></Link>
        </div>
        {sections ? (
          <>
            <ul className={`nav-links${open ? ' open' : ''}`}>
              <li><a href="/#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="/#skills" onClick={() => setOpen(false)}>Skills</a></li>
              <li><a href="/#education" onClick={() => setOpen(false)}>Education</a></li>
              <li><a href="/#experience" onClick={() => setOpen(false)}>Experience</a></li>
              <li><a href="/#projects" onClick={() => setOpen(false)}>Projects</a></li>
              <li><a href="/#contact" onClick={() => setOpen(false)}>Contact</a></li>
              <li><a className="nav-cta" href={resumeUrl || '#'} download>Resume</a></li>
            </ul>
            <div className="nav-right-mobile">
              <ThemeToggle />
              <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
                <span></span><span></span><span></span>
              </button>
            </div>
          </>
        ) : (
          <div className="nav-right-mobile">
            <ThemeToggle />
            <Link className="btn btn-ghost btn-sm" to="/">← Back to site</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

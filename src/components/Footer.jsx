import { Link } from 'react-router-dom';

export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-note">© {new Date().getFullYear()} {name}. Built with React.</div>
        <div className="footer-note"><Link to="/dashboard">Manage content →</Link></div>
      </div>
    </footer>
  );
}

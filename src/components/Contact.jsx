import { Icons } from './Icons';
import Reveal from './Reveal';

export default function Contact({ profile }) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2 className="sec-title">Let's talk</h2>
        <Reveal>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="icon-wrap">{Icons.email}</div>
              <div className="label">Email</div>
              <a className="value" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-card">
              <div className="icon-wrap">{Icons.phone}</div>
              <div className="label">Phone</div>
              <a className="value" href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="contact-card">
              <div className="icon-wrap">{Icons.whatsapp}</div>
              <div className="label">WhatsApp</div>
              <a className="value" href={`https://wa.me/${(profile.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">Chat now</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

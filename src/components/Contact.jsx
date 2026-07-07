import { Mail, Phone, MessageCircle, Copy, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { useToast } from "../context/ToastContext";

export default function Contact({ data }) {
  const toast = useToast();

  const copy = (value, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(() => toast(`${label} copied to clipboard!`, "success"));
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal className="section-head">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Let's build something together</h2>
        <p className="section-desc">
          Have a project in mind, a question, or just want to say hi? Send a message below and I'll get
          back to you.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-7 items-start">
        <div className="flex flex-col gap-4">
          <Reveal
            className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1 hover:border-[color:var(--blue-1)]"
            style={{ color: "var(--blue-1)" }}
            delay={0}
          >
            <Mail size={20} />
            <div className="flex flex-col flex-1">
              <span className="text-xs uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                Email
              </span>
              <span className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>
                {data.contact.email}
              </span>
            </div>
            <button className="icon-btn" onClick={() => copy(data.contact.email, "Email")} aria-label="Copy email">
              <Copy size={15} />
            </button>
          </Reveal>

          <Reveal
            className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1 hover:border-[color:var(--blue-1)]"
            style={{ color: "var(--blue-1)" }}
            delay={90}
          >
            <Phone size={20} />
            <div className="flex flex-col flex-1">
              <span className="text-xs uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                Phone
              </span>
              <span className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>
                {data.contact.phone}
              </span>
            </div>
            <button className="icon-btn" onClick={() => copy(data.contact.phone, "Phone number")} aria-label="Copy phone">
              <Copy size={15} />
            </button>
          </Reveal>

          {data.contact.whatsapp && (
            <Reveal
              className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1 hover:border-[color:var(--blue-1)]"
              style={{ color: "var(--blue-1)" }}
              delay={180}
            >
              <MessageCircle size={20} />
              <div className="flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                  WhatsApp
                </span>
                <span className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>
                  {data.contact.whatsapp}
                </span>
              </div>
              <a
                className="icon-btn"
                href={`https://wa.me/${data.contact.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Open WhatsApp"
              >
                <ExternalLink size={15} />
              </a>
            </Reveal>
          )}
        </div>

        <Reveal delay={120}>
          <ContactForm formspreeId={data.contact.formspreeId} fallbackEmail={data.contact.email} />
        </Reveal>
      </div>
    </section>
  );
}

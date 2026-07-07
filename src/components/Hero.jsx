import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Sparkles, Download, ArrowRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import useTypewriter from "../hooks/useTypewriter";
import { useToast } from "../context/ToastContext";

export default function Hero({ data, onNavigate }) {
  const typed = useTypewriter(data.profile.designations);
  const toast = useToast();

  const handleResume = (e) => {
    if (!data.profile.resumeUrl) {
      e.preventDefault();
      toast("Resume isn't uploaded yet — check back soon!", "info");
    }
  };

  const socials = [
    { key: "github", href: data.profile.social.github, Icon: Github, label: "GitHub" },
    { key: "linkedin", href: data.profile.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { key: "instagram", href: data.profile.social.instagram, Icon: Instagram, label: "Instagram" },
    { key: "facebook", href: data.profile.social.facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.href);

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-[72px] pb-[60px] z-[1]">
      <motion.div
        className="absolute rounded-full blur-[90px] opacity-35 pointer-events-none w-[420px] h-[420px] bg-brand-1 -top-[120px] -right-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full blur-[90px] opacity-35 pointer-events-none w-[340px] h-[340px] bg-brand-2 -bottom-[140px] -left-[80px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center min-h-[66vh] text-center md:text-left">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Reveal
            className="inline-flex items-center gap-2 text-[13px] font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md border"
            style={{ color: "var(--blue-1)", background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <Sparkles size={14} /> Welcome to my portfolio
          </Reveal>
          <Reveal as="h1" className="font-bold leading-[1.1] text-[clamp(32px,5vw,52px)]" delay={80}>
            Hi, I'm <span className="gradient-text">{data.profile.name}</span>
          </Reveal>
          <Reveal
            as="p"
            className="font-semibold text-[clamp(18px,2.4vw,24px)] min-h-[30px]"
            style={{ color: "var(--blue-2)" }}
            delay={140}
          >
            <span>{typed}</span>
            <span className="animate-blink" style={{ color: "var(--blue-1)" }}>|</span>
          </Reveal>
          <Reveal as="p" className="max-w-[480px] text-base" delay={200}>
            {data.profile.tagline}
          </Reveal>

          <Reveal className="flex gap-3.5 flex-wrap mt-2" delay={260}>
            <motion.a
              className="btn btn-primary"
              href={data.profile.resumeUrl || "#"}
              onClick={handleResume}
              download={!!data.profile.resumeUrl}
              target={data.profile.resumeUrl ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -3, boxShadow: "0 14px 30px rgba(15,150,212,0.45)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} /> Download Resume
            </motion.a>
            <motion.button
              className="btn btn-ghost"
              onClick={() => onNavigate("projects")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects <ArrowRight size={16} />
            </motion.button>
          </Reveal>

          <Reveal className="flex gap-2.5 mt-2" delay={320}>
            {socials.map(({ key, href, Icon, label }) => (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full inline-flex items-center justify-center border backdrop-blur-md transition-colors hover:text-[color:var(--blue-1)] hover:border-[color:var(--blue-1)]"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </Reveal>
        </div>

        <Reveal className="flex justify-center order-first md:order-none" delay={160}>
          <div className="relative w-[min(340px,80vw)] aspect-square flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full blur-[1px] bg-[conic-gradient(from_0deg,var(--blue-1),var(--blue-2),transparent,var(--blue-1))]"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <div
              className="relative w-[calc(100%-12px)] aspect-square rounded-full overflow-hidden border-4 shadow-[0_0_60px_rgba(75,178,211,0.35)]"
              style={{ borderColor: "var(--bg)" }}
            >
              <img src={data.profile.photo} alt={data.profile.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>

      <motion.div
        className="absolute bottom-[22px] left-1/2 -translate-x-1/2 w-[26px] h-[42px] rounded-[14px] border cursor-pointer flex justify-center pt-2"
        style={{ borderColor: "var(--border)" }}
        onClick={() => onNavigate("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="w-1 h-2 rounded-sm bg-brand-1" />
      </motion.div>
    </section>
  );
}

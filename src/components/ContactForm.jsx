import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useToast } from "../context/ToastContext";

const EMPTY = { name: "", email: "", message: "" };

export default function ContactForm({ formspreeId, fallbackEmail }) {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const toast = useToast();

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) {
      toast("Please fill in every field before sending.", "error");
      return;
    }

    // No Formspree ID configured yet — fall back to opening the visitor's
    // email client with everything pre-filled so the message still reaches you.
    if (!formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      toast("Opening your email client — Formspree isn't configured yet.", "info");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
        toast("Message sent — thanks for reaching out!", "success");
        setTimeout(() => setStatus("idle"), 2500);
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      setStatus("error");
      toast("Something went wrong sending that. Try again?", "error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const inputClasses =
    "text-[14.5px] rounded-xl py-3 px-3.5 resize-y outline-none border transition-colors focus:border-[color:var(--blue-1)] focus:shadow-[0_0_0_3px_rgba(75,178,211,0.22)]";

  return (
    <form className="card flex flex-col gap-[18px] p-8" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={values.name}
            onChange={onChange}
            className={inputClasses}
            style={{ color: "var(--text)", background: "var(--surface-2)", borderColor: "var(--border)" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@email.com"
            value={values.email}
            onChange={onChange}
            className={inputClasses}
            style={{ color: "var(--text)", background: "var(--surface-2)", borderColor: "var(--border)" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me a bit about what you're working on..."
          value={values.message}
          onChange={onChange}
          className={inputClasses}
          style={{ color: "var(--text)", background: "var(--surface-2)", borderColor: "var(--border)" }}
        />
      </div>

      <motion.button
        className="btn btn-primary self-start min-w-[160px] justify-center"
        type="submit"
        disabled={status === "sending"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "sending" ? (
            <motion.span
              key="sending"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 size={16} className="animate-spin" /> Sending...
            </motion.span>
          ) : status === "sent" ? (
            <motion.span
              key="sent"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle2 size={16} /> Sent!
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Send size={16} /> Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {!formspreeId && (
        <p className="text-[13px]">
          Message form isn't wired to Formspree yet — this will open your email app instead. Add a
          Formspree ID in{" "}
          <code className="rounded-md py-0.5 px-1.5 text-xs" style={{ background: "var(--surface-2)" }}>
            src/data/portfolioData.js
          </code>
          .
        </p>
      )}
    </form>
  );
}

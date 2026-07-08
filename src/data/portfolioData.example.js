/**
 * TEMPLATE — copy this file to "portfolioData.js" (same folder) and fill
 * in your real info there. "portfolioData.js" is git-ignored, so your
 * real details never get pushed, but this template stays in the repo.
 */
import projects from "./projects";

const portfolioData = {
  profile: {
    name: "Your Name",
    designations: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=600&fit=crop&q=80",
    tagline: "I build fast, accessible, and beautifully-crafted web experiences.",
    resumeUrl: "",
    location: "Your City, Country",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      facebook: "https://facebook.com/yourusername",
    },
  },

  about: {
    intro: "A few things about how I got here and what I enjoy building.",
    cards: [
      { icon: "compass", title: "My Journey", text: "..." },
      { icon: "code", title: "What I Love Building", text: "..." },
      { icon: "heart", title: "Beyond the Code", text: "..." },
      { icon: "palette", title: "My Personality", text: "..." },
    ],
  },

  stats: [
    { label: "Years Learning", value: 3, suffix: "+" },
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "GitHub Commits", value: 250, suffix: "+" },
    { label: "Codeforces Problems Solved", value: 250, suffix: "" },
  ],

  skills: [
    { category: "Frontend", items: ["react", "javascript", "typescript", "html5", "css3", "tailwind"] },
    { category: "Backend", items: ["nodejs", "express", "mongodb", "postgresql"] },
    { category: "Tools", items: ["git", "github", "figma", "docker"] },
  ],

  education: [
    { degree: "B.Sc. in Computer Science", institute: "Your University", duration: "2021 — 2025", details: "" },
  ],

  experience: [
    { role: "Frontend Developer Intern", company: "Company Name", duration: "2025 — Present", details: "" },
  ],

  projects,

  contact: {
    email: "you@example.com",
    phone: "+880 1XXXXXXXXX",
    whatsapp: "+880 1XXXXXXXXX",
    formspreeId: "",
  },
};

export default portfolioData;
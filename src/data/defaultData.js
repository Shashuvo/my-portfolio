export const STORAGE_KEYS = {
  profile: 'pf_profile',
  skills: 'pf_skills',
  education: 'pf_education',
  experience: 'pf_experience',
  projects: 'pf_projects'
};

export const DEFAULTS = {
  profile: {
    name: 'Shahariat Hossen',
    designation: 'Full Stack Developer',
    tagline:
      "I design and build web applications end to end — from database schema to the pixels you click on. Currently focused on React, Node.js, and cloud-native backends.",
    email: 'alex.rivera@example.com',
    phone: '+880 1XXX-XXXXXX',
    whatsapp: '8801XXXXXXXXX',
    photo: '',
    resumeUrl: 'assets/resume.pdf',
    github: 'https://github.com/alexrivera',
    linkedin: 'https://linkedin.com/in/alexrivera',
    twitter: 'https://twitter.com/alexrivera',
    facebook: 'https://facebook.com/alexrivera',
    about:
      "I wrote my first program — a clunky calculator in Python — during my second year of university, and I was hooked by how fast an idea could turn into something real. That curiosity turned into a full stack career: I enjoy the moments where a messy backend problem meets a clean UI and everything just clicks into place.\n\nI care most about building things that are actually usable — fast, accessible, and easy to maintain. On any given project I'm equally happy untangling a database schema or polishing a button's hover state.\n\nOutside of code, I play football on weekends, dabble in landscape photography, and I'm slowly working through a very long backlog of sci-fi novels.",
    hobbies: ['Football', 'Photography', 'Sci-fi novels', 'Chess', 'Hiking']
  },
  skills: [
    { id: 's1', category: 'Frontend', name: 'React', level: 90 },
    { id: 's2', category: 'Frontend', name: 'JavaScript', level: 88 },
    { id: 's3', category: 'Frontend', name: 'TypeScript', level: 82 },
    { id: 's4', category: 'Frontend', name: 'Tailwind CSS', level: 85 },
    { id: 's5', category: 'Backend', name: 'Node.js', level: 85 },
    { id: 's6', category: 'Backend', name: 'Express', level: 80 },
    { id: 's7', category: 'Backend', name: 'Python', level: 75 },
    { id: 's8', category: 'Backend', name: 'PostgreSQL', level: 80 },
    { id: 's9', category: 'Backend', name: 'MongoDB', level: 75 },
    { id: 's10', category: 'Tools', name: 'Git', level: 90 },
    { id: 's11', category: 'Tools', name: 'GitHub', level: 88 },
    { id: 's12', category: 'Tools', name: 'Docker', level: 70 },
    { id: 's13', category: 'Tools', name: 'AWS', level: 65 }
  ],
  education: [
    {
      id: 'e1',
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'International Islamic University Chittagong',
      duration: '2013 — 2026',
      details: 'Focused on software engineering and databases. Final year project: a real-time collaborative note-taking app.'
    },
    {
      id: 'e2',
      degree: 'Higher Secondary Certificate (HSC), Science',
      institution: 'Halishahar Cantonment Public School & College',
      duration: '2019 — 2021',
      details: ''
    }
  ],
  experience: [
    {
      id: 'x1',
      role: 'Frontend Developer',
      company: 'Northwind Systems',
      duration: '2023 — Present',
      points: [
        'Built and shipped the customer-facing dashboard used by 10k+ monthly users',
        'Cut page load time by 35% through code-splitting and caching',
        'Mentored two junior developers'
      ]
    },
    {
      id: 'x2',
      role: 'Junior Web Developer',
      company: 'Fieldstone Data',
      duration: '2022 — 2023',
      points: [
        'Built internal tools with React and Node.js',
        'Collaborated directly with designers to implement pixel-accurate UI'
      ]
    }
  ],
  projects: [
    {
      id: 'p1',
      name: 'TaskFlow',
      shortDesc: 'A drag-and-drop project management tool for small teams.',
      description:
        'TaskFlow is a Kanban-style project management app built to help small teams plan sprints without the bloat of enterprise tools. It supports real-time updates across users, custom boards, and deadline reminders.',
      techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/alexrivera/taskflow',
      challenges:
        'Keeping drag-and-drop state in sync across multiple connected clients in real time was the hardest part — solved with an operational-transform-style conflict resolution layer on top of Socket.io.',
      improvements: 'Planning to add offline support with local-first sync, and a mobile app using the same API.',
      color: '#0F96D4'
    },
    {
      id: 'p2',
      name: 'MarketPulse',
      shortDesc: 'A dashboard that tracks live stock and crypto prices.',
      description:
        'MarketPulse pulls live market data and renders it into clean, glanceable charts, with custom watchlists and price alerts delivered by email.',
      techStack: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/alexrivera/marketpulse',
      challenges: 'Handling high-frequency price updates without overwhelming the UI thread — solved with throttled websocket batching.',
      improvements: 'Add a backtesting mode and support for more asset classes.',
      color: '#4BB2D3'
    },
    {
      id: 'p3',
      name: 'RecipeBox',
      shortDesc: 'A recipe organizer with smart grocery list generation.',
      description:
        'RecipeBox lets users save recipes, plan weekly meals, and automatically generates a consolidated grocery list, merging duplicate ingredients across recipes.',
      techStack: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/alexrivera/recipebox',
      challenges: 'Parsing free-text ingredient quantities (e.g. "1 cup", "2 tbsp") into a common unit system for merging.',
      improvements: 'Add barcode scanning for pantry inventory and nutrition tracking.',
      color: '#2E7DA6'
    }
  ]
};

export function genId(prefix) {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

/** Simple gradient SVG placeholder thumbnail for projects without a custom image */
export function placeholderThumb(name, color) {
  const initials = (name || 'PJ').trim().slice(0, 2).toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='375'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${color || '#0F96D4'}' />
        <stop offset='1' stop-color='#182338' />
      </linearGradient>
    </defs>
    <rect width='600' height='375' fill='url(#g)' />
    <text x='50%' y='53%' font-family='Poppins, sans-serif' font-size='90' fill='rgba(255,255,255,0.85)' text-anchor='middle' dominant-baseline='middle'>${initials}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

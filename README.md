# My Portfolio

A modern, animated developer portfolio built with React + Vite + Tailwind
CSS. Clean project structure, one file to edit for all your content, real
brand logos for your tech stack, and a working contact form.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for production / deploy:

```bash
npm run build
```

This creates a `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages,
or any static host.

## Where to edit things

You almost never need to touch component files. Everything you'll want to
change lives in **one place**:

```
src/data/portfolioData.js
```

Open it and edit:
- `profile` → your name, role titles, photo, tagline, resume link, socials
- `about.cards` → the "About Me" cards (works with 3, 4, or more — always
  stays on a single row, with the icon centered at the top of each card)
- `skills` → your tech stack, grouped by category (see below for adding a
  new technology)
- `education` / `experience` → your timeline entries
- `projects` → your project showcase + detail pages. The grid only shows
  the first 3 up front with a "Show more projects" button underneath —
  add as many projects as you want to the array and they'll appear there,
  animating in when the button is clicked.
- `contact` → your email/phone/WhatsApp + the Formspree ID for your message
  form (see next section)

## Styling: Tailwind CSS

All styling is Tailwind utility classes — there are no separate `.css`
files per component anymore. Two things worth knowing:

- **Theme colors** (background, surface, text, borders, and the accent
  blue) are still driven by CSS custom properties, defined once in
  `src/index.css` under `.app-root[data-theme="dark"]` /
  `[data-theme="light"]`. Components reference them with Tailwind's
  arbitrary-value syntax, e.g. `bg-[color:var(--surface)]`. Change the hex
  values in that one file to re-theme the whole site (dark and light mode
  both, plus the `brand.1` / `brand.2` accent colors in
  `tailwind.config.js`).
- **Shared classes** like `.btn`, `.card`, `.section`, `.icon-btn` are
  defined once in `src/index.css` under `@layer components` using
  Tailwind's `@apply`, so buttons and cards look consistent without
  retyping the same dozen utility classes everywhere. Everything else is
  inline utility classes directly in the JSX.

## Getting the contact form to email you

The "Send Message" form on the Contact section needs somewhere to deliver
messages to, without you having to run your own backend. It uses
[Formspree](https://formspree.io) (free tier is plenty):

1. Go to https://formspree.io and sign up.
2. Create a new form, and copy its **Form ID** (the part after `/f/` in your
   form's endpoint, e.g. `abcdwxyz`).
3. Open `src/data/portfolioData.js` and paste it in:
   ```js
   contact: {
     ...
     formspreeId: "abcdwxyz",
   }
   ```
4. That's it — every submission is emailed straight to your inbox.

Until you add a Formspree ID, the form falls back to opening the visitor's
email app with the message pre-filled, so it still works out of the box.

## Adding a new technology badge

Tech badges use real brand logos (via `react-icons/si`, the Simple Icons
set), not hand-drawn icons.

1. Open `src/components/techIcons.js`.
2. Import the icon you need, e.g. `import { SiRust } from "react-icons/si"`.
3. Add an entry: `rust: { label: "Rust", color: "#000000", Icon: SiRust }`.
4. Use the key `"rust"` anywhere in `portfolioData.js`'s `skills` or a
   project's `stack` array.

Browse available icons at https://simpleicons.org — most tools/languages
have one. If one doesn't (a few are missing due to trademark reasons, like
VS Code), leave `Icon: null` and it'll fall back to a text badge with the
tech's initials, same as it does for `vscode` here.

## Project structure

```
src/
  data/portfolioData.js     ← all your content lives here
  components/                ← one component per section (Tailwind, no .css files)
    Hero.jsx
    About.jsx                 ← icon-centered cards, single row
    Skills.jsx                ← bigger tech cards with real logos
    techIcons.js                ← real logo + brand color registry
    TechBadge.jsx
    Timeline.jsx                  ← shared by Education + Experience
    Education.jsx
    Experience.jsx
    Projects.jsx                    ← "Show more projects" + staggered animation
    ProjectCard.jsx                   ← 3D tilt hover effect
    ProjectDetail.jsx
    Contact.jsx
    ContactForm.jsx
    Navbar.jsx
    Footer.jsx
    Reveal.jsx                          ← scroll-reveal animation wrapper
  context/ToastContext.jsx                ← corner notifications (copy-to-clipboard etc.)
  hooks/
    useTheme.js                            ← dark/light mode, persisted to localStorage
    useTypewriter.js                         ← hero role-title typing effect
    useCursorSpotlight.js                      ← the cursor-reactive glow effect
  App.jsx                                       ← wires all sections together
  index.css                                      ← Tailwind entry + theme tokens + shared classes
tailwind.config.js                                ← accent colors, fonts, custom animations
postcss.config.js
```

## Tech used

- React 18 + Vite
- Tailwind CSS (all styling)
- Framer Motion (animations, page transitions, scroll reveals)
- react-icons (real brand logos for the Skills/Projects sections)
- lucide-react (UI icons)
- Formspree (contact form delivery, no backend needed)

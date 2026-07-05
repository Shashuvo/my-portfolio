# Alex Rivera — Portfolio (React)

A React + Vite rebuild of the portfolio site: same design (blue theme, hero,
about, skills, education, experience, projects, contact) plus a project detail
page and an in-browser admin dashboard, now built as proper components with
client-side routing.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Pages

- `/` — the public portfolio (dark/light mode toggle in the navbar, tech-stack
  logos in the Skills section)
- `/project/:id` — detail page for a single project (tech stack, description,
  live/GitHub links, challenges, future plans)
- `/dashboard` — password-protected admin panel to add/edit/delete Skills,
  Education, Experience, and Projects, and to edit your Profile (name, bio,
  resume link, socials, contact info)

## Dashboard password

The first time you visit `/dashboard`, you'll be asked to set a password —
after that, every visit requires it. It's hashed (SHA-256) before being stored,
so it isn't sitting in plain text, but **this is a deterrent, not real
security**: everything lives in your own browser's `localStorage`, so someone
with enough technical know-how could clear it and set a new password. If you
need real access control, that requires a small backend with proper
authentication — happy to help wire that up if you get there.

Forgot your password? Open devtools → Console and run
`localStorage.removeItem('pf_dash_pwhash')`, then refresh to set a new one.

## Tech stack logos

The Skills section pulls real brand logos from [Simple Icons](https://simpleicons.org)
via `cdn.simpleicons.org` (free, no API key, no attribution required). The
mapping from skill name → logo lives in `src/data/techIcons.js` — add an entry
there if you add a skill whose logo isn't showing up. Unmapped skills fall
back to a generic icon automatically.

## How content storage works

There's no backend. All content (profile, skills, education, experience,
projects) is defined in `src/data/defaultData.js` as sensible starter/placeholder
content, and is read into `localStorage` the first time each page loads.
Editing anything in `/dashboard` writes straight to `localStorage`, and the
public pages read from the same storage — so edits show up immediately.

**Important limitations to know before you rely on this in production:**

1. **Per-browser, not per-visitor.** Edits you make in the dashboard only show
   up in *that browser*. If you open the site in a different browser or
   device, you'll see the original placeholder data again, not your edits.
2. **No authentication.** `/dashboard` is not password protected. Don't link
   to it publicly, and consider adding auth (or removing the route entirely)
   before deploying if this matters to you.
3. **If you want edits to persist for every visitor** (the normal expectation
   for a real portfolio site), you'll eventually want a small backend/database
   instead of `localStorage` — happy to help wire that up later.

## Customizing your real content

Easiest path: run the app, go to `/dashboard`, and fill in your real profile,
skills, education, experience, and projects. Alternatively, edit the
placeholder values directly in `src/data/defaultData.js` before your first
run — anything not yet touched by the dashboard falls back to those defaults.

## Resume & photo

- Drop your resume PDF into `public/assets/resume.pdf` (or update the
  "Resume file URL" field in the dashboard to point elsewhere).
- Set a "Photo URL" in the dashboard's Profile tab to replace the placeholder
  avatar with your real photo.

## Deploying

This is a static site after `npm run build` — the `dist/` folder can be
deployed to Vercel, Netlify, GitHub Pages, or any static host. Since routing
uses `react-router-dom`'s `BrowserRouter`, make sure your host redirects all
paths to `index.html` (a "SPA fallback" / rewrite rule) so `/project/p1` and
`/dashboard` work on direct load and refresh.

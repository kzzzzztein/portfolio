# Kyle Santos — Portfolio

A static, frontend-only portfolio built with React, Vite, and Tailwind CSS,
made to be deployed for free on GitHub Pages at
`https://USERNAME.github.io/portfolio/`.

No backend, database, or paid hosting is required.

## Before you start: things to replace

The project ships with honest placeholders instead of invented content.
Search and update these before you consider it done:

| What | Where |
|---|---|
| Email, LinkedIn, GitHub URLs | `src/data/contact.js` |
| Live demo / repo links per project | `src/data/projects.js` (`liveUrl`, `repoUrl`) |
| Project screenshots | `public/images/` — see `public/images/README.md` for exact filenames |
| GitHub username in the repo URL | `vite.config.js`, `package.json` (`homepage`), and every command below |
| Social preview image | `public/og-image.png` (referenced in `index.html`, not included by default) |

Until real screenshots are added, each project card shows a clearly labeled
"Screenshot pending" placeholder instead of a broken image, so the site never
looks broken while you're filling things in.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the project locally

```bash
npm run dev
```

This starts a local dev server (usually `http://localhost:5173/portfolio/`)
with hot reload. Leave it running while you edit.

## 3. Build the project

```bash
npm run build
```

This produces a static, production-ready site in the `dist/` folder. You can
preview that exact build locally with:

```bash
npm run preview
```

## 4. Deploy to GitHub Pages

First, update the repository name in two places if you name your repo
something other than `portfolio`:

- `vite.config.js` → `BASE_PATH`
- `package.json` → `homepage`

Then push this project to a GitHub repository named `portfolio` (or your
chosen name) and choose one of the two deploy methods below.

### Option A — GitHub Actions (recommended, fully automatic)

This repo already includes `.github/workflows/deploy.yml`. It builds and
deploys the site automatically on every push to `main`.

1. Push this project to GitHub.
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit to `main` (or re-run the workflow from the **Actions** tab).
5. After the workflow finishes, your site is live at
   `https://USERNAME.github.io/portfolio/`.

From then on, every push to `main` redeploys automatically.

### Option B — Manual deploy with `gh-pages`

If you'd rather deploy by hand from your machine:

```bash
npm run deploy
```

This builds the project and pushes `dist/` to a `gh-pages` branch (via the
`gh-pages` package, already configured in `package.json`). Then in your
repository go to **Settings → Pages** and set the source branch to
`gh-pages`.

## 5. Update the portfolio after making changes

1. Edit the relevant files (see the project structure below).
2. Preview locally with `npm run dev`.
3. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
   - **GitHub Actions setup:** that's it, the workflow rebuilds and
     redeploys automatically.
   - **Manual `gh-pages` setup:** also run `npm run deploy` after pushing.

## Routing on GitHub Pages

This site uses React Router with real URL paths (e.g.
`/portfolio/projects/resort-booking-platform`) rather than hash-based
routing, so links look clean and are shareable.

GitHub Pages has no server-side rewrites, so a hard refresh on a route other
than the homepage would normally 404. This is handled with the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect
pattern:

- `public/404.html` catches any unknown path and redirects to `index.html`
  with the original path encoded in the query string.
- A small inline script in `index.html` decodes that query string back into
  the real URL before React Router mounts.

You don't need to do anything for this to work, it's already wired up. If
you ever move the site to a custom domain served from the root (instead of
a `/portfolio/` sub-path), change `pathSegmentsToKeep` from `1` to `0` in
`public/404.html`.

## Project structure

```
src/
  components/       Reusable UI (Navbar, Footer, BrowserFrame, section blocks)
  pages/            Home.jsx, CaseStudy.jsx, NotFound.jsx
  data/
    projects.js     Single source of truth for all 4 project case studies
    contact.js      Email / LinkedIn / GitHub placeholders
  index.css         Design tokens (color, type, radius) + Tailwind
public/
  images/           Project screenshots go here (see images/README.md)
  404.html          GitHub Pages SPA redirect (see above)
  favicon.svg
.github/workflows/
  deploy.yml        GitHub Actions build + deploy workflow
```

To add a fifth project, add one object to the `projects` array in
`src/data/projects.js` and drop matching images in `public/images/`. The
homepage and its case-study page update automatically.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- React Router (real URL paths, not hashes)
- Motion (scroll-reveal animation, respects `prefers-reduced-motion`)
- lucide-react (icons)
- Self-hosted Plus Jakarta Sans + JetBrains Mono (no external font requests)

## Before sending this to a client

- [ ] Replace every placeholder in `src/data/contact.js`
- [ ] Add real screenshots to `public/images/`
- [ ] Fill in `liveUrl` / `repoUrl` for any projects that have them
- [ ] Update `USERNAME` in `vite.config.js`, `package.json`, and this README
- [ ] Add a real `public/og-image.png` (1200×630px) for link previews
- [ ] Run `npm run build` once more and check the console for warnings

# Shiv Jhalani — personal site

Docs-inspired Next.js site for Shiv’s portfolio. It includes a fully themed UI system, expandable content routes, and live data for the "GitHub Snapshot" section that is refreshed every day.

## Development

```bash
npm install
npm run dev
```

The app uses the `/src` directory structure with the App Router. Theme tokens are defined in `src/app/globals.css`, and shared components live under `src/components`.

### Static builds (GitHub Pages)

`next.config.mjs` is set to `output: "export"`, so `npm run build` produces an `out/` folder with static assets. Deploy that folder directly to GitHub Pages (e.g., via `peaceiris/actions-gh-pages` or the new Pages Deploy workflow). If you host at `https://<username>.github.io/<repo>/`, configure the Pages workflow to copy everything from `out/`.

### Assets to replace

- `public/images/headshot.jpg` – hero photo on the home page.
- `public/images/INRIXlogo.png` and `public/images/ntt.png` – swap in company logos (add more next to them if needed).
- `public/images/projects/*`, `public/images/research/*`, and `public/images/hobbies/*` – drop in real project/award/personal photos.
- `public/docs/resume.pdf` – the navbar’s Resume link points here.

### Updating the GitHub snapshot locally

The GitHub panel reads from `src/data/githubSummary.json`. Run the following to refresh it:

```bash
GITHUB_TOKEN=<personal-access-token> npm run update:github-summary
```

Environment variables:

- `GITHUB_USERNAME` (default: `shivjhalani`)
- `GITHUB_ACTIVITY_TIMEZONE` (default: `America/Los_Angeles`)
- `GITHUB_ACTIVITY_TZ_LABEL` (default: `PT`)

The script looks at the latest 100 public events + repositories for that user and rewrites the JSON file.

### Automated refresh

`.github/workflows/update-github-summary.yml` runs every day at 07:00 UTC (plus manual `workflow_dispatch`). It executes the same script with the built-in `GITHUB_TOKEN`, commits `src/data/githubSummary.json` when changes occur, and pushes back to `main`.

### Agent-ready feed

`GET /api/agent-feed` returns a structured JSON snapshot of everything shown on the site (hero text, learning focus areas, work/projects/research entries, etc.). Use it to let AI agents or other tools consume the portfolio data without scraping the UI.

## Linting

```bash
npm run lint
```

## Deployment

Deploy anywhere that supports Next.js 13 App Router (Vercel, Netlify, custom Node server, etc.).

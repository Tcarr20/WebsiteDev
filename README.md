# Anthony Carr portfolio

A TypeScript Angular resume site for Anthony Carr, Lead Software Engineer.

## Requirements

- Node.js 24 LTS (24.15.0 or later)
- npm 10 or later

## Local development

```bash
npm ci
npm start
```

Visit `http://localhost:4200`.

## Production build

```bash
npm run build
```

The static output is written to `dist/anthony-carr-portfolio/browser`.

## Production deployment and rollback

The `Deploy production site` workflow deploys only when it is manually run from GitHub Actions. It defaults to deploying `master`.

To roll back, run the same workflow and enter the commit SHA or tag to restore in the **ref** input. Before the first deployment, configure **Settings → Pages → Build and deployment → Source** to **GitHub Actions** in the repository.

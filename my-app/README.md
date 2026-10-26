# Anthony Carr portfolio

A TypeScript Angular resume site for Anthony Carr, Lead Software Engineer.

## Requirements

- Node.js 24 LTS (24.15.0 or later)
- npm 10 or later

## Local development

```bash
cd my-app
npm ci
npm start
```

Visit `http://localhost:4200`.

## Production build

```bash
npm run build
```

The static output is written to `dist/anthony-carr-portfolio/browser`.

## Staging deployment

The `Deploy staging site` workflow deploys commits pushed to the `staging` branch to GitHub Pages. Before the first deployment, configure **Settings → Pages → Build and deployment → Source** to **GitHub Actions** in the repository.

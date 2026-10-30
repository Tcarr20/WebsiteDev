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

The `Deploy production site` workflow automatically builds and publishes the Angular site to the `master` branch of `Tcarr20/tcarr20.github.io` whenever a commit is pushed to this repository's `master` branch. It also supports manual deployments and rollbacks by commit SHA or tag.

Before the first deployment, add a `PAGES_DEPLOY_TOKEN` repository secret in **Settings → Secrets and variables → Actions**. Use a fine-grained personal access token that grants **Contents: Read and write** access to the `Tcarr20/tcarr20.github.io` repository. Do not put the token in source code or workflow files. The destination repository's GitHub Pages settings should publish from the `master` branch and root folder.

To roll back, run **Deploy production site** from GitHub Actions and enter the commit SHA or tag to restore in the **ref** input. To create a reviewable rollback instead, run **Create rollback pull request** and provide a known-good commit SHA or tag plus a reason. After merging that pull request, the automatic deployment runs when the change reaches `master`.

# AGENTS.md

## Project

This is a Vite + React + TypeScript homepage project for the Monet data site.

Use `pnpm` for package management.

Important scripts:

```bash
pnpm build
pnpm dev
pnpm preview
```

## Development Notes

- Keep source changes in `src/`.
- Keep design and deployment notes in `docs/`.
- Do not commit `dist/`, `.firebase/`, local env files, reports, or cache directories.
- Run `pnpm build` before opening a PR when code or deployment config changes.

## Firebase Hosting

Read `docs/firebase-hosting-deployment.md` before deploying.

The active Monet Hosting target is:

- Firebase project: `nexi-lab-888`
- Hosting target: `monet`
- Hosting site: `monet-data-ai`
- URL: `https://monet-data-ai.web.app`

Deploy with:

```bash
FIREBASE_HOSTING_UPLOAD_CONCURRENCY=1 firebase deploy --only hosting:monet --project nexi-lab-888
```

On the current local machine, include the local proxy exports first:

```bash
export HTTPS_PROXY=http://127.0.0.1:7897
export HTTP_PROXY=http://127.0.0.1:7897
export ALL_PROXY=http://127.0.0.1:7897
```

Do not run broad Hosting deploys such as `firebase deploy --only hosting` unless the target mapping has been checked immediately beforehand.

## Cloud Safety

- Do not deploy to or overwrite the legacy `nexi-lab-888` Hosting site.
- Do not delete Hosting sites, rollback releases, change custom domains, or edit DNS-related settings without explicit user approval.
- Custom domains require DNS control. If DNS is unavailable, keep using the `.web.app` URL.

## Git Workflow

- Work on a branch, not directly on `main`.
- Stage only files related to the requested change.
- Use short commit messages.
- Prefer draft PRs unless the user asks for ready review.

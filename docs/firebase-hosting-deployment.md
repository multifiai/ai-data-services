# Firebase Hosting Deployment

This project is deployed to Firebase Hosting in the Firebase project `nexi-lab-888`.

## Hosting Sites

- Production Monet site: `monet-data-ai`
- Production URL: `https://monet-data-ai.web.app`
- Local Firebase target: `monet`
- Legacy site to avoid overwriting: `nexi-lab-888`

Do not deploy this project to the legacy `nexi-lab-888` Hosting site. Use the `monet` target explicitly.

## Prerequisites

Install dependencies:

```bash
pnpm install
```

Make sure Firebase auth works:

```bash
firebase projects:list --project nexi-lab-888
```

On the current local machine, Firebase CLI needs the local proxy environment because direct Google API requests time out:

```bash
export HTTPS_PROXY=http://127.0.0.1:7897
export HTTP_PROXY=http://127.0.0.1:7897
export ALL_PROXY=http://127.0.0.1:7897
```

If running from a network that can reach Google APIs directly, these proxy exports are not needed.

## Manual Deploy

Build first:

```bash
pnpm build
```

Deploy only the Monet Hosting target:

```bash
FIREBASE_HOSTING_UPLOAD_CONCURRENCY=1 firebase deploy --only hosting:monet --project nexi-lab-888
```

Keep `FIREBASE_HOSTING_UPLOAD_CONCURRENCY=1` on this machine. The default Firebase Hosting upload concurrency is high and failed behind the local proxy during setup.

Expected output includes:

```text
hosting[monet-data-ai]: release complete
Hosting URL: https://monet-data-ai.web.app
```

Verify the live site:

```bash
curl -I -L https://monet-data-ai.web.app
```

The response should be `HTTP/2 200`.

## Useful Checks

List Hosting sites:

```bash
firebase hosting:sites:list --project nexi-lab-888
```

Show local target mapping:

```bash
cat .firebaserc
```

The `monet` target should map only to `monet-data-ai`.

## Rollback

Rollback is done from the Firebase Console Hosting release history:

1. Open the Firebase project `nexi-lab-888`.
2. Go to Build > Hosting.
3. Select the `monet-data-ai` site.
4. Choose the desired previous release and restore it.

Do not rollback or delete Hosting sites without explicit owner approval.

## Future CI/CD

The recommended long-term flow is:

1. Open a pull request.
2. Merge to `main`.
3. GitHub Actions builds with `pnpm build`.
4. GitHub Actions deploys with `firebase deploy --only hosting:monet --project nexi-lab-888`.

For CI, prefer a service account or workload identity setup instead of user ADC credentials.

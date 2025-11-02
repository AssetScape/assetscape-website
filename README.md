# AssetScape Website – updated

## One-time setup
1. Ensure your repo default branch is `main` (or edit the workflow to match).
2. Repo Settings → Pages → Source: GitHub Actions.

## Deploy steps (each time)
1. Upload the contents of this ZIP (not the ZIP itself) to the repo root.
2. Commit to `main`. The GitHub Action will build and publish.

## Documents
- Place PDFs in `public/docs/`. Links use `${import.meta.env.BASE_URL}docs/<file>.pdf` to work on GitHub Pages.

# BWM source synchronization runbook

**Current topology:** Lovable is the authoring source of truth for the Benjamin Mayes website at https://benmayes.lovable.app. This public repository is a **manually maintained source mirror**. Merging a GitHub pull request does **not** update Lovable, publish a release, or establish bidirectional sync. Do not assume a GitHub merge is a website deployment.

## 1. Freeze and identify the source

1. Confirm the latest Lovable source is tested and its project/commit identifier is recorded. The project is `48d19147-4435-4f58-894e-ecab0345cb7c` in https://lovable.dev/projects/48d19147-4435-4f58-894e-ecab0345cb7c.
2. Record the live site's current revision and a known-good rollback reference. Record the approved copy boundary, especially speculative research and client-confidentiality limits.
3. Export the actual source tree from Lovable's project download control or another verified, read-only source export. **Never** rebuild the project by scraping the published website; this omits React source, configuration, tests, and assets.
4. Confirm binary assets such as `public/favicon.ico` remain byte-for-byte valid. Capture size and SHA-256 as needed.
5. Keep separate private backups of the Lovable project's internal editorial and governance records. A public GitHub mirror is **not** a backup of private workspace data or service credentials.

## 2. Prepare a reviewed public snapshot

1. Clone https://github.com/ud-tetra/BWM and create a new branch named `sync/lovable-YYYY-MM-DD` from the current `main`.
2. Compare the downloaded `src/`, `public/`, `package.json`, `bun.lock`, configuration and test files with the repository. Import additions, modifications **and** deletions intentionally; never blindly replace the GitHub workflow, public README, provenance documents, or this runbook.
3. Do not import `.lovable/`, `AGENTS.md`, `EDITORIAL_APPROVAL.md`, `docs/EDITORIAL_PROOF_ARCHIVE.md`, `PRODUCTION_READINESS.md`, `PRODUCTION_RELEASE_*.md`, `roadmap.md`, `.env*`, keys, certificates, tokens or unpublished confidential materials. Review **content**, not only filenames, before exposing it in this public repository.
4. Run `python3 scripts/check_public_mirror.py`. This checks known forbidden file **paths**, not secrets embedded in allowed files. Use a proper secret scanner and human review for content-level disclosure.
5. Update `SOURCE_PROVENANCE.md` with a dated entry: Lovable project ID and source commit, file/asset completeness checks, excluded material, BWM PR, and any differences from production. Preserve historical provenance entries.
6. Inspect `git status`, `git diff --check`, `git diff --stat`, and the full diff. A source export without a recorded provenance/QA trail is not release-ready.

## 3. Verify and merge

From the repository root:

```sh
bun install --frozen-lockfile
python3 scripts/check_public_mirror.py
bunx vitest run
bunx eslint . --max-warnings 6
bun run build
```

The warning allowance documents the six existing React Refresh warnings as of the initial import; reducing that allowance later is encouraged. Any **new** warning must be reviewed. GitHub Actions runs the same checks for pull requests.

Open a pull request against `main` describing what changed, source commit, publication/claim boundaries, excluded records, results, and rollback plan. Review its **public diff** for secrets and sensitive client/patent details. Merge only when the expected check succeeds and the changes are approved. A merged snapshot is a recoverable *source version*, not a deployment.

## 4. Deploy separately from Lovable

Only after explicit approval to deploy, use Lovable's deployment controls. Record the resulting deployment ID and live URL; verify live page status, `/sitemap.xml`, `/robots.txt`, absolute canonical/OG URLs, 404 for `/proof`, and `noindex,follow` on unpublished Journal essays. See [RELEASE_RUNBOOK.md](RELEASE_RUNBOOK.md).

If a change starts in GitHub rather than Lovable, do not presume Lovable can pull it from BWM. Reconcile and verify the changed code in Lovable before deploying. Avoid divergent, simultaneous edits in both systems.

## Initial snapshot

The initial source import (PR #1) captured Lovable commit `4ed690fb6d3156a33c37f76c3d937175ce8a8180`, including all 97 eligible text files and original binary favicon, and excluding internal records. CI passed and PR #1 was merged November 6, 2026.

# BWM — Benjamin Mayes Website

Source mirror for the [Benjamin Mayes professional portfolio](https://benmayes.lovable.app).

Built with **React, TypeScript, TanStack Start and Tailwind CSS**. The authoritative authoring workspace is the [Lovable project](https://lovable.dev/projects/48d19147-4435-4f58-894e-ecab0345cb7c); this GitHub repository is a manually maintained snapshot and does not automatically sync to Lovable or deploy to the live site.

## Local development
With Bun installed:

```sh
bun install --frozen-lockfile
bun run dev
```

## Verification
```sh
bunx vitest run
bunx eslint .
bun run build
```
Six React Refresh warnings were recorded in the original workspace. Treat test results and evidence boundaries independently.

## Operating procedures

- [Lovable-to-BWM source sync](docs/SOURCE_SYNC_RUNBOOK.md)
- [Release and rollback checklist](docs/RELEASE_RUNBOOK.md)
- [Public-source path guard](scripts/check_public_mirror.py) — checks sensitive **filenames/paths** only, not file content.

## Workflow
Propose changes in a branch and review via pull request. Reconcile any changes back to Lovable explicitly. Refer to [SOURCE_PROVENANCE.md](SOURCE_PROVENANCE.md).

No license is granted by this repository's contents.

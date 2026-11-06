# BWM release and rollback runbook

The public site is **https://benmayes.lovable.app**. The Lovable project is the application authoring/deployment source; `ud-tetra/BWM` is a manually maintained, public source backup. A GitHub commit or merge **does not publish** the website.

## Release gates

| Stage | Required check | Evidence |
|---|---|---|
| Content | Owner-approved biography, capability descriptions, six anonymized cases, and research claim boundaries | Dated Lovable editorial approval record (private) |
| Public source | BWM snapshot matches intended Lovable source, with binary assets and all routes | Source SHA, reviewed PR, provenance record |
| Confidentiality | No internal editorial documents, credentials, private client/patent details | Public diff review plus path guard and secret scan |
| Engineering | TypeScript/build, unit/route tests, lint, keyboard/mobile and link checks | CI run and QA notes |
| Search | Sitemap, robots, absolute canonical/OG, draft noindex and valid 404 | Preview and post-deployment checks |
| Authorization | Explicit owner approval for production deployment | Recorded authorization |
| Rollback | Known-good Lovable source and deployment reference | Dated release record |

## Before deployment

1. Snapshot the current Lovable production SHA and any live deployment identifier.
2. Confirm required tests and build passed; a pending CI job is not a pass. Do not waive security or new semantic failures as mere formatting.
3. Confirm `/proof` and private approval archives are **not routable**. A `noindex` directive alone does not restrict public access.
4. Keep Journal drafts marked `noindex` and excluded from the sitemap until the owner explicitly changes their publication status.
5. Confirm canonical origin `https://benmayes.lovable.app` (or a separately approved custom domain) matches `src/lib/seo.ts`, `public/sitemap.xml` and `public/robots.txt`.
6. Review public project-site links and performance claims; a verified source-control hash does not establish scientific or performance validity.

## Deployment and smoke tests

Deploy **from Lovable**, not this GitHub repository, after explicit owner authorization. Record the Lovable deployment ID, source SHA, date/time and rollback reference.

Check the actual public endpoint (not only the Lovable preview):

- `/`, `/about`, `/expertise`, `/work`, `/innovation`, `/research`, `/publications`, and `/contact` return HTTP 200.
- `/sitemap.xml` returns a valid XML sitemap with indexable routes only; `/robots.txt` references it.
- Canonical and `og:url` metadata use the approved absolute HTTPS origin.
- `/proof` and unknown paths return **HTTP 404**.
- Journal drafts remain reachable for editorial review but `noindex,follow`.
- Navigation, mobile layout, mailto/LinkedIn, external research links and visible page content are checked in a normal browser.
- Where available, check error reports, accessibility and performance; do not claim audit completion without results.

## Incident / rollback

1. If the live site regresses, document symptoms, affected pages and last known-good deployment.
2. Restore the **previous Lovable source/revision** using Lovable project history and explicitly deploy it. Restoring GitHub alone does not affect production.
3. Recheck live HTTP responses and key user journeys. Document the rollback action and the outcome.
4. Reconcile any rolled-back code with BWM via a reviewed PR; do not silently overwrite later work.

## Current release reference (historical)

Production hardening release of November 6, 2026: Lovable source `732018f45a0aacd04bd6bc5d0f36a75b828073c2`; deployment ID `eb0b2c9d-4938-4e96-9291-a8235152a233`. Its documented earlier rollback baseline is `0bf3fabb127fa93842802ee9589c5256ef02a05f`. These are historical references, **not** a claim that future deployments have been checked.

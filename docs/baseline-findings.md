# Baseline Findings

Status: Open investigation  
Observed: 2026-09-18  
Baseline commit: `8c6df98`

## Environment

- Ubuntu 24.04.4 LTS under WSL 2
- Repository: `/home/jnthn/GitHub/sams-allowance-tracker`
- Node 24.21.0 through NVM 0.40.7
- npm 11.19.0
- Locked dependencies installed successfully
- Development server responds at `http://localhost:5173/`
- Git clean on `main`, aligned with `origin/main`

## Finding 1 — Remembered Prototype Mismatch

The local `main` application does not fully match the prototype remembered by the product owner.

Next evidence:

- compare current source with any deployed Site;
- inspect available Git branches and commits;
- identify whether another local checkout contains different source;
- do not overwrite any environment during reconciliation.

## Finding 2 — Database Query Failure

Visible error:

```text
Failed query: select "id", "kind", "amount_cents", "description", "status", "occurred_on", "created_at" from "transactions" order by "transactions"."occurred_on" desc, "transactions"."id" desc limit ? params: 100
```

Known facts:

- the HTML route returns HTTP 200;
- the client’s allowance data request reaches database query code;
- the fresh WSL local database contains no known prior family data;
- the error alone does not yet prove whether the table is missing, the migration is unapplied, or another local binding/configuration problem exists.

Acceptance criteria:

- initialize the local development schema through the repository’s supported migration path;
- load the app without the error banner;
- verify empty-state behavior against an initialized but empty database;
- record commands and evidence without importing private hosted data.

## Finding 3 — Large Mascot Cropping

The sitting capybara/piggy-bank image loses part of its head at the tile boundary.

Acceptance criteria:

- intended head, face, and identifying features remain visible;
- image is not stretched;
- supported phone, tablet, and desktop widths are checked.

## Finding 4 — Thumbnail Cropping

The small mascot thumbnail crops the face incorrectly.

Acceptance criteria:

- complete intended face is visible;
- thumbnail remains legible at its final size;
- crop is stable across supported widths.

## Finding 5 — Fresh Local Data

The WSL local database is empty, while the product owner remembers previously created chores in another environment.

Rules:

- do not describe the prior records as deleted without evidence;
- do not import hosted/private data casually;
- identify the previous environment and decide whether its data is prototype-only, should be exported, or should be preserved;
- create fictional synthetic seed data for repeatable development.

## Recommended Investigation Order

1. Inspect migration and local D1 initialization instructions.
2. Confirm table existence and applied migrations.
3. Initialize a clean local schema.
4. Verify no-error empty state.
5. Add synthetic seed data through a documented path.
6. Reconcile source/deployment differences.
7. Diagnose and correct image fitting with viewport evidence.


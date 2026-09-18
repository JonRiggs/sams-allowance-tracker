# Product Roadmap

Status: Working sequence; dates intentionally uncommitted until measured delivery velocity exists

## Milestone 0 — Baseline Reconciliation and Local Reliability

Exit criteria:

- identify why local `main` differs from the remembered prototype;
- initialize local D1 schema through the supported migration path;
- eliminate the database error on a clean local load;
- document prior-data provenance without casually copying private records;
- create synthetic development data;
- correct both capybara cropping defects;
- preserve a clean, reproducible baseline.

## Milestone 1 — Product and Domain Foundation

Exit criteria:

- product owner reviews and accepts vision and MVP boundary;
- parent and child roles are resolved sufficiently for schema design;
- pay-period, due, overdue, payout, adjustment, and allocation rules are defined;
- open rules that block implementation are decided;
- architecture decisions are current.

## Milestone 2 — Household and Identity Foundation

Exit criteria:

- household tenancy model exists;
- parent membership and child profiles exist;
- server-enforced authorization exists;
- household-scoped data access is the default;
- tests prove unauthorized parent/child actions and cross-household access are rejected.

## Milestone 3 — Chore and Earning Model

Exit criteria:

- configurable chores, values, assignments, and frequency limits work;
- completion submission and parent review work;
- approved earnings snapshot the correct historical rules;
- duplicate and boundary behavior has focused tests.

## Milestone 4 — Payday and Ledger Model

Exit criteria:

- earning periods and due times are derived in household time zone;
- not-yet-due, due, overdue, paid, rejected, and corrected states are explainable;
- late payday keeps prior and current periods separate;
- cash payouts reconcile to included earnings;
- adjustments preserve history;
- partial-payment behavior is either implemented or explicitly deferred.

## Milestone 5 — Parent and Child Experiences

Exit criteria:

- parent dashboard spans all children;
- child experience exposes only allowed information and actions;
- setup workflow covers household, children, chores, schedules, and themes;
- Capybara Meadow and neutral theme work responsively;
- empty, loading, error, and success states are clear and accessible.

## Milestone 6 — Riggs Family Pilot

Exit criteria:

- several weekly allowance cycles are completed;
- friction and missing behavior are logged as evidence;
- no unexplained balance reconciliation occurs outside the app;
- product owner decides which pilot findings enter MVP versus later scope.

## Milestone 7 — Outside-Family Readiness

Exit criteria:

- security and qualified legal/privacy review;
- retention, export, and deletion verified;
- account recovery and operational monitoring defined;
- public/demo materials use fictional data;
- limited invitation pilot completed before public marketing or subscription work.

## Scheduling Method

Calendar estimates follow evidence:

1. Break only the current milestone into ready issues.
2. Complete several issues and measure actual cycle time.
3. Forecast remaining work from observed velocity and known dependencies.
4. Revise forecasts when scope changes; never hide scope growth inside the original date.


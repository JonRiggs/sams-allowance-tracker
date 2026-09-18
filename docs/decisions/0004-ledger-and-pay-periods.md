# ADR 0004 — Ledger, Pay Periods, and Traceable Payouts

Status: Accepted in principle; partial-payment and overdue-threshold rules remain open  
Date: 2026-09-18

## Context

The application must distinguish completed work, approved earnings, money not yet due, money due or overdue, and money actually paid. A late Wednesday payout for the prior Sunday–Saturday period must not include new work from the current period.

## Decision

Use explicit chore-completion, earning, pay-period, payout, payout-item, and adjustment concepts. Store money as integer cents. Derive due state from household schedule, time zone, and payout linkage. Preserve historical amounts and use linked adjustments rather than silently rewriting consequential history.

## Consequences

- Payday becomes a first-class workflow rather than a balance reset.
- Current and prior periods remain distinguishable during late payment.
- Displayed balances must be reproducible from authoritative records.
- Schema and tests must cover time-zone and period boundaries.
- Partial payout and early payout behavior must be explicitly designed before implementation.


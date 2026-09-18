# ADR 0003 — Cash-First Manual Payments

Status: Accepted  
Date: 2026-09-18

## Context

The intended family practice is a weekly conversation and cash payment. Bank connections, card issuance, transfers, custody, and payment processing would materially increase regulatory, security, privacy, support, and operational scope.

## Decision

The MVP calculates and records allowance obligations and manual cash payouts. It does not connect to financial institutions, move money, hold funds, or issue cards.

## Consequences

- The product remains focused on family teaching and accountability.
- Payout records document external cash events but do not prove bank settlement.
- Future payment providers may be considered behind an explicit payment-method boundary.
- No current architecture decision should imply that external payment integration is promised.


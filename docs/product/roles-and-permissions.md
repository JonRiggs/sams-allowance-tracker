# Roles and Permissions

Status: Proposed for product-owner review

## Principle

The interface may hide unavailable actions for clarity, but authorization is enforced by server-side checks on every protected operation. Hidden buttons are not security.

## Parent or Guardian

May:

- create and rename the household;
- configure time zone, earning period, and payday;
- add, edit, deactivate, and archive child profiles;
- create and change chore definitions;
- assign chores and frequency limits;
- review, approve, and reject completions;
- see all child dashboards and histories;
- create and record payouts;
- issue traceable corrections;
- manage approved themes;
- export and request deletion of household data;
- invite or remove another adult if multi-adult membership is included.

Must not:

- silently rewrite paid history without an adjustment record;
- access another household without an explicit membership;
- expose private child information in public demos or portfolio materials.

## Child

May:

- enter only an authorized child experience;
- view chores assigned or available to that child;
- submit eligible chore completions;
- see completion and approval status;
- see personal earnings, due status, payout history, balances, and goals;
- make allowed spending/saving/giving requests;
- select among themes allowed for that profile.

Must not:

- create or alter chore definitions or values;
- change completion limits;
- approve or reject earnings;
- mark a payout paid;
- issue adjustments;
- manage household membership or settings;
- access another child’s private data unless a deliberately limited family view permits it;
- gain parent powers by changing a URL, request body, or visible page state.

## Service/System

The service may:

- calculate period and due states from stored household rules and time zone;
- validate frequency limits and permissions;
- retain audit metadata required to explain financial state;
- create derived views from authoritative records.

The service must:

- derive household scope from authenticated membership;
- reject unauthorized cross-household identifiers;
- minimize collection and retention of child information;
- avoid treating client-supplied roles or household identifiers as trusted authorization.

## Open Decisions

- Child access mechanism: device profile, household PIN, passkey, or another constrained method
- Whether second-adult membership is MVP or pilot scope
- Whether children may see sibling summary information
- Whether parents can delegate approval without full administrative access


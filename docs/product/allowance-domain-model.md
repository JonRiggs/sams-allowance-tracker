# Allowance Domain Model

Status: Working foundation

## Core Terms

### Household

The tenancy and governance boundary. Every adult membership, child profile, chore, completion, earning, allocation, goal, adjustment, and payout belongs to exactly one household.

### Adult Membership

The relationship between an authenticated adult and a household, including the adult’s allowed parent/guardian actions.

### Child Profile

A household-managed profile for one child. A child profile does not initially require an email address or independent general-purpose account.

### Theme

Presentation configuration associated with a child profile or household. Themes may change colors, approved typography, decorative imagery, icons, and mascot assets without changing permissions, calculations, or financial records.

### Chore Definition

Parent-authored work with a name, description, value, active state, eligibility, and completion-frequency policy.

### Chore Assignment

The relationship that makes a chore available to one or more child profiles.

### Chore Completion

A claim or parent record that a child completed a chore at a specific time. It begins as submitted unless the authorized parent records an approved completion directly.

### Approved Earning

An obligation created when a parent approves eligible completed work. It stores the applicable amount and rule snapshot so later chore changes do not rewrite history.

### Earning Period

A household-time-zone interval used to group approved earnings. The initial rule is Sunday 12:00 a.m. through Saturday 11:59:59 p.m.

### Payday

The configured date and time when a completed earning period becomes payable. The initial household example is the following Sunday afternoon.

### Payout

A recorded act of paying one child for a defined set of earnings. Initial payment method is cash/manual. A payout stores when payment occurred, who recorded it, amount paid, included earnings, and any note.

### Ledger Adjustment

A traceable correction that changes the financial result without erasing the original event.

## Lifecycle States

### Completion review state

- `submitted`
- `approved`
- `rejected`
- `corrected` through linked adjustment rather than silent overwrite

### Earning settlement state

- `not_yet_due`: approved and owed, but scheduled payday has not arrived
- `due`: scheduled payday has arrived and the earning is unpaid
- `overdue`: configured overdue threshold has passed and the earning is unpaid
- `paid`: linked to a completed payout
- `adjusted`: financial effect changed through traceable adjustment

`due` and `overdue` should normally be derived from due time, household time zone, payout links, and the configured threshold rather than stored as manually toggled truth.

## Late Payday Example

Rules:

- earning period: Sunday through Saturday;
- payday: following Sunday afternoon.

If work completed October 4–10 is not paid until Wednesday, October 14:

- October 4–10 earnings remain together as the prior payable period;
- they become due on Sunday, October 11 and later overdue under the configured rule;
- work completed October 11–14 belongs to the new October 11–17 period;
- current-period work is not included in the late payout unless the parent deliberately chooses a separately supported early-payment action;
- the Wednesday payout records its actual payment date and the prior-period earnings it settled.

## Calculation Rules

1. Store money as integer cents.
2. Determine period membership from completion time and household time zone.
3. Snapshot the approved earning amount; do not recalculate history from the current chore value.
4. Calculate balances from authoritative ledger entries, allocations, adjustments, and payouts.
5. Prevent duplicate completion/earning creation through defined idempotency rules.
6. Never trust the browser to determine authorization or final balances.
7. Preserve rejected records as review history according to the retention policy.
8. Define partial payout behavior before implementation; do not infer it from amount mismatch.

## Preliminary Entities

- households
- adult_memberships
- child_profiles
- themes
- chore_definitions
- chore_assignments
- chore_completions
- earnings
- allocations
- savings_goals
- payouts
- payout_items
- ledger_adjustments
- audit_events where justified

Entity names are conceptual until the schema milestone approves them.

## Open Rules

- Exact Sunday payday time
- Due-to-overdue transition rule
- Partial payouts
- Early payouts
- Whether unapproved Saturday work reviewed Sunday can join the prior period
- How chore-frequency limits treat rejected or corrected completions
- How spending/saving/giving allocation changes interact with cash already paid


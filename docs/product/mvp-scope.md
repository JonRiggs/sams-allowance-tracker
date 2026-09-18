# MVP Scope

Status: Proposed for product-owner review

## Definition

The MVP is the smallest safe and coherent product that a real household can use through repeated allowance cycles. It is more than a visual prototype and less than a banking platform.

## Included

### Household and access

- Parent-owned household
- At least one authenticated parent
- Multiple child profiles without requiring child email addresses
- Server-enforced parent and child permissions
- Household data isolation
- Parent dashboard across all children
- Individual child experiences

### Chores

- Create, edit, deactivate, and view chore definitions
- Store chore value in integer cents
- Assign chores to selected children
- Define completion-frequency limits
- Submit or record chore completion
- Parent approve or reject completion
- Preserve the value and rule snapshot used for historical earnings

### Pay periods and payouts

- Initial Sunday-through-Saturday earning period
- Configurable household time zone
- Initial Sunday-afternoon scheduled payday
- Distinguish submitted, approved/not-yet-due, due, overdue, paid, rejected, and corrected states
- Keep current-period work separate from an unpaid prior period
- Record manual/cash payouts and their included earnings
- Support traceable corrections; define partial-payment behavior before implementation

### Money learning

- Spending, saving, and giving categories
- Understandable balances and history
- Savings goals
- Family-friendly payday review

### Experience and operations

- Responsive phone and desktop interface
- Capybara Meadow as an original configurable theme
- At least one neutral/default theme before an outside-family pilot
- Clear loading, empty, error, and success states
- Local development initialization and synthetic seed data
- Basic household data export and deletion before outside-family use
- Focused tests for permissions, household isolation, pay-period boundaries, and money calculations

## Explicitly Not in MVP

- Bank-account synchronization
- Debit cards or custodial accounts
- Real-money transfers or payment custody
- Subscription billing
- Native iOS or Android applications
- Public child profiles or child-to-child social features
- Targeted advertising
- Behavioral profiling of children
- Third-party franchise skins without licensing
- Theme marketplace
- School, location, or contact-list data
- Broad financial planning beyond the allowance workflow

## Candidate Pilot Enhancements

- Second adult/guardian invitation
- More original themes
- Installable PWA refinements
- Optional reminders
- Additional pay schedules
- Recurring base allowance
- Reports and improved exports
- Import of family-created chore templates

## MVP Exit Criteria

1. The Riggs household completes several weekly cycles without balance reconstruction outside the app.
2. A child cannot perform parent-only actions through the interface or direct server requests.
3. One household cannot access another household’s records.
4. Late payday correctly separates overdue prior-period earnings from current-period earnings.
5. Every displayed balance is reproducible from ledger records.
6. Parent can review, correct, export, and delete household information through defined processes.
7. The application is usable at supported phone and desktop widths.
8. The repository contains current setup, architecture, test, and verification documentation.


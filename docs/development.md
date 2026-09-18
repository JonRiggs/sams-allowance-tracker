# Development Workflow

## Purpose

Use a professional, teachable workflow that keeps product intent, code changes, and verification connected.

## Sources of Truth

- Product requirements and architecture: repository `docs/`
- Actionable work: GitHub Issues
- Work status and roadmap views: GitHub Project
- Implementation history: Git commits and pull requests
- Personal/business continuity: Jon’s vault project note

## Ready-to-Work Standard

An issue is ready when it has:

- a clear user or system outcome;
- rationale;
- bounded scope and explicit exclusions;
- acceptance criteria;
- known dependencies or blockers;
- security/privacy notes when relevant;
- a verification plan.

## Change Loop

1. Select one ready issue.
2. Confirm acceptance criteria.
3. Create a short-lived branch from current `main`.
4. Explain relevant concepts before editing.
5. Make the smallest coherent change.
6. Run focused checks.
7. Review the diff for unrelated edits and sensitive information.
8. Demonstrate behavior against acceptance criteria.
9. Commit with a meaningful message.
10. Open a pull request linked to the issue.
11. Review, merge, and record evidence.
12. Update docs when behavior or decisions changed.

## Suggested Branch Names

- `fix/local-d1-initialization`
- `fix/capybara-image-cropping`
- `feat/household-domain-model`
- `feat/late-payday-ledger`
- `docs/product-foundation`

## Suggested Commit Style

Use imperative, scoped summaries:

- `docs: define allowance product foundation`
- `fix: initialize local D1 schema`
- `fix: preserve mascot focal point across viewports`
- `feat: add household-scoped child profiles`

## Issue Types and Labels

Suggested issue types or labels:

- `type:bug`
- `type:feature`
- `type:security`
- `type:privacy`
- `type:documentation`
- `type:infrastructure`
- `area:database`
- `area:parent-experience`
- `area:child-experience`
- `area:payday`
- `area:themes`
- `priority:high`, `priority:medium`, `priority:low`

Do not create labels merely to decorate the repository. Add them when they support filtering or decisions.

## Suggested GitHub Project Fields

- Status: Ideas, Ready, In Progress, Review, Done
- Milestone: 0–7 roadmap milestone
- Priority: High, Medium, Low
- Type: Bug, Feature, Security, Privacy, Documentation, Infrastructure
- Effort: XS, S, M, L; split work rather than accepting XL
- Target: MVP, Pilot, Future

## Pull Request Evidence

A strong pull request explains:

- problem and user impact;
- chosen approach and tradeoffs;
- files/areas changed;
- how acceptance criteria were verified;
- screenshots for meaningful visual changes using fictional data;
- tests and known limitations;
- follow-up work intentionally excluded.

## Learning Notes

For each milestone, capture:

- concept learned;
- decision Jon made;
- mistake or failure encountered;
- how evidence changed the implementation;
- what Jon could now explain in an interview.

Avoid presenting AI output as unsupported personal expertise. Portfolio material should accurately distinguish Jon’s product decisions, review, testing, and learned understanding from agent-assisted implementation.


# User Journeys

Status: Working foundation

## 1. Household Setup

1. Parent authenticates.
2. Parent names the household and selects time zone.
3. Parent selects earning-period and payday rules.
4. Parent adds child profiles.
5. Parent selects an initial theme for each child.
6. Parent creates chores, values, eligibility, and frequency limits.
7. Parent reviews and activates the setup.

Success: every created record belongs to the household and each child sees only an authorized experience.

## 2. Complete and Approve a Chore

1. Child sees an eligible chore.
2. System confirms the frequency rule allows another completion.
3. Child submits completion.
4. Parent sees the pending item.
5. Parent approves or rejects it.
6. Approval creates an earning with child, amount snapshot, completion time, period, and due time.

Success: the child cannot approve the item, and later changes to the chore do not change the earning.

## 3. On-Time Payday

1. Prior earning period closes.
2. Scheduled payday arrives.
3. Parent opens payday review for one child.
4. App shows the closed period’s unpaid approved earnings.
5. Family reviews spending, saving, and giving decisions.
6. Parent hands over cash and records the payout.
7. App links included earnings to the payout and shows them as paid.

Success: payout total and included earnings reconcile exactly.

## 4. Late Payday

1. Prior period becomes due Sunday afternoon but remains unpaid.
2. New Sunday–Wednesday chores are completed in the current period.
3. On Wednesday the parent opens payday review.
4. App shows prior-period earnings as due/overdue.
5. App shows current-period earnings separately as not yet due.
6. Parent records cash payment for the prior period.
7. Current-period earnings remain unpaid and scheduled for their own payday.

Success: no current-period earning is silently included in the late prior-period payout.

## 5. Correct a Mistake

1. Parent identifies an incorrect approved or paid amount.
2. App shows the original record and its consequences.
3. Parent enters a reason and correction.
4. App creates a linked adjustment.
5. Balances and relevant payout context reflect the adjustment without erasing history.

Success: a reviewer can reconstruct the original event, correction, reason, actor, and final balance.

## 6. Multiple Children

1. Parent views a household dashboard summarizing each child.
2. Parent opens one child’s pending approvals or payday review.
3. Chores shared by multiple children preserve each child’s separate assignment and completion record.
4. Each child enters only their authorized view and theme.

Success: data, limits, balances, and payouts never cross children accidentally.

## 7. Change a Theme

1. Parent enables a set of original or licensed themes for a child.
2. Child or parent selects an allowed theme.
3. Appearance changes without changing data, permissions, financial rules, or readable status presentation.

Success: the complete intended mascot image remains visible across supported viewports and the theme meets accessibility requirements.


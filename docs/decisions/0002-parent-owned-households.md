# ADR 0002 — Parent-Owned Households and Child Profiles

Status: Accepted in principle; child access mechanism remains open  
Date: 2026-09-18

## Context

The prototype combines child and parent controls and has no server-enforced role boundary. The intended product supports multiple children under one parent dashboard while minimizing personal information collected from children.

## Decision

An authenticated adult owns or joins a household. Children are household-managed profiles and do not initially require email addresses. Parent and child permissions are enforced on the server for every protected action.

## Consequences

- The schema must include households, adult memberships, child profiles, and household scope on dependent records.
- A child cannot gain parent permissions through client manipulation.
- One household must not access another household’s records.
- The exact child-entry mechanism requires a later decision and threat review.
- Multiple children and one combined parent dashboard are core requirements.


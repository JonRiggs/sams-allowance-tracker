# ADR 0001 — Continue the Existing Web Stack

Status: Accepted  
Date: 2026-09-18

## Context

The repository already contains a working TypeScript, React, Next-style Vinext, Vite, Cloudflare Workers/Sites, D1, and Drizzle foundation. The product needs responsive interfaces, server behavior, persistence, authorization, and eventual multi-household isolation.

## Decision

Continue the existing stack for the MVP while separating business rules from framework- and hosting-specific data access.

Develop in Ubuntu WSL because the repository’s supported scripts require Linux utilities and syntax.

## Consequences

- Existing useful work and hosting identity are preserved.
- The product can run across common browsers without separate native applications.
- D1/Workers constraints must be respected.
- Business logic and repository interfaces should limit avoidable hosting lock-in.
- Reconsideration requires evidence of a concrete capability, reliability, cost, or portability failure—not general preference for another framework.


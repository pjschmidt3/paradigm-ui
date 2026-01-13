# Paradigm UI

## What This Is

A freemium React component library and shadcn registry for developers. Free tier provides basic atomic components; paid tier offers advanced composite components. Distributed via shadcn CLI for seamless installation.

## Core Value

Best-in-class component quality and DX — composable, type-safe, and production-ready components that developers actually want to use and pay for.

## Requirements

### Validated

- [x] Atomic UI components wrapping Radix UI primitives (53+ components) — existing
- [x] Composite layout components (Box, Flex, FlexRow, FlexCol, Grid) — existing
- [x] Shared type system with responsive value support — existing
- [x] Design token system with CSS custom properties — existing
- [x] TailwindCSS v4 integration — existing
- [x] TypeScript with strict mode — existing
- [x] Storybook documentation — existing
- [x] Rollup build producing CJS + ESM + type definitions — existing
- [x] shadcn registry distribution (CLI-compatible) — v1.0
- [x] Free/premium component tier separation (58 free, 9 premium) — v1.0
- [x] Marketing site with component showcase — v1.0
- [x] Registry JSON schema and metadata — v1.0
- [x] Component documentation (Storybook stories) — v1.0
- [x] Unit test coverage (56 tests) — v1.0

### Active

- [ ] Payment/checkout integration (Stripe or Lemon Squeezy)
- [ ] Premium component expansion
- [ ] SEO optimization for marketing site

### Out of Scope

- Payment/checkout processing — v2, need to validate demand first
- User accounts and authentication — v2, not needed for initial launch
- License management dashboard — v2, manual process initially
- Mobile apps — web-focused component library

## Context

Brownfield project with established codebase:
- Production components in `src/components/ui/`
- Composite components in `registry/new-york/ui/`
- Shared utilities in `src/lib/utils.ts`
- Type definitions in `src/types/`
- Storybook already configured for development

Target customers are React developers using shadcn/ui who want higher-quality or more advanced components than the default registry provides.

## Constraints

- **Tech stack**: TailwindCSS v4 only — no v3 compatibility needed
- **Distribution**: Must work with official shadcn CLI — registry JSON format compliance required
- **Framework**: React 18/19 — peer dependency requirement
- **Build**: Dual ESM/CJS output — npm package compatibility

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Freemium model | Lower barrier to entry, prove value before asking for payment | ✓ Good — 58 free components drive adoption |
| Complexity-based tiers | Basic (free) vs advanced/composite (paid) — clear value differentiation | ✓ Good — clear tier separation |
| Components + registry first | Get the product right before marketing push | ✓ Good — solid foundation before marketing |
| TailwindCSS v4 only | Forward-looking, simpler maintenance, cleaner CSS | ✓ Good — clean implementation |
| Separate type files as lib | Register box-types and helper-types as registry:lib items | ✓ Good — proper type installation |
| CodeBlock as premium | Elevated from site-only to premium registry component | ✓ Good — adds premium value |

## Current State

**v1.0 MVP shipped 2026-01-13**

- 67 registered components (58 free, 9 premium)
- 23,013 lines of TypeScript
- Marketing site live with component showcase
- 56 unit tests passing
- Storybook documentation complete

---
*Last updated: 2026-01-13 after v1.0 milestone*

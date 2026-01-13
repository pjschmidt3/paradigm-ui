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

### Active

- [ ] shadcn registry distribution (CLI-compatible)
- [ ] Free/premium component tier separation
- [ ] Marketing site with component showcase
- [ ] Registry JSON schema and metadata
- [ ] Component documentation (usage, props, examples)

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
| Freemium model | Lower barrier to entry, prove value before asking for payment | — Pending |
| Complexity-based tiers | Basic (free) vs advanced/composite (paid) — clear value differentiation | — Pending |
| Components + registry first | Get the product right before marketing push | — Pending |
| TailwindCSS v4 only | Forward-looking, simpler maintenance, cleaner CSS | — Pending |

---
*Last updated: 2026-01-13 after initialization*

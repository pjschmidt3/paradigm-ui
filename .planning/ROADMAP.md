# Roadmap: Paradigm UI

## Overview

Transform the existing component library into a distributable shadcn registry with free/premium tiers.

## Milestones

- [v1.0 MVP](milestones/v1.0-ROADMAP.md) (Phases 1-4 + 3.1) — SHIPPED 2026-01-13
- 🚧 **v0.2.0 Library Expansion** - Phases 5-9 (in progress)

## Completed Milestones

<details>
<summary>v1.0 MVP (Phases 1-4 + 3.1) — SHIPPED 2026-01-13</summary>

- [x] Phase 1: Registry Foundation (1/1 plans) — completed 2026-01-13
- [x] Phase 2: Component Tiering (4/4 plans) — completed 2026-01-13
- [x] Phase 3: Documentation & Polish (2/2 plans) — completed 2026-01-13
- [x] Phase 3.1: Unit Test Coverage (3/3 plans) — completed 2026-01-13 (INSERTED)
- [x] Phase 4: Marketing Site (4/4 plans) — completed 2026-01-13

**Total:** 5 phases, 14 plans
**Delivered:** shadcn-compatible registry with 67 components, free/premium tiering, tests, and marketing site

See [v1.0-ROADMAP.md](milestones/v1.0-ROADMAP.md) for full details.

</details>

### 🚧 v0.2.0 Library Expansion (In Progress)

**Milestone Goal:** Expand component library with building blocks, hooks, utilities, and aesthetic components before monetization

**Tiering Strategy:** Simple/building blocks = free, Composed blocks = premium

#### Phase 5: Building Blocks & Utilities

**Goal**: Add hooks (useDisclosure, useToggle, useMediaQuery, useClickOutside, useScrollLock, useFocusTrap), utility helpers, and primitive components
**Depends on**: v1.0 MVP complete
**Research**: Unlikely (internal patterns)
**Plans**: 4

Plans:
- [x] 05-01: Simple State Hooks (useDisclosure, useToggle) — completed 2026-01-13
- [x] 05-02: Media & Responsive Hooks (useMediaQuery, refactor useIsMobile) — completed 2026-01-13
- [x] 05-03: DOM Interaction Hooks (useClickOutside, useScrollLock, useFocusTrap) — completed 2026-01-13
- [x] 05-04: Registry Integration (register hooks, finalize exports) — completed 2026-01-13

#### Phase 6: Enhanced Components

**Goal**: Improve existing components with variants not in shadcn (Button with inset icon, etc.)
**Depends on**: Phase 5
**Research**: Unlikely (internal patterns)
**Plans**: 2

Plans:
- [x] 06-01: Button & Badge Enhancements (loading, pill, sizes) — completed 2026-01-13
- [x] 06-02: Avatar & Badge Polish (sizes, status, closable) — completed 2026-01-13

#### Phase 7: Free Aesthetic Components — Complete

**Goal**: Add simple aesthetic components — cards, navigation, content display (free tier)
**Depends on**: Phase 6
**Research**: Unlikely (internal patterns)
**Plans**: 3/3

Plans:
- [x] 07-01: Card Variants (ProfileCard, StatsCard, TestimonialCard, FeatureCard) — completed 2026-01-13
- [x] 07-02: Content Display (Blockquote, List, Callout) — completed 2026-01-13
- [x] 07-03: Navigation Helpers (LinkButton, NavLink, StepIndicator) — completed 2026-01-13

#### Phase 8: Premium Blocks

**Goal**: Add composed blocks — marketing sections, portfolio components, page-level layouts (premium tier)
**Depends on**: Phase 7
**Research**: Unlikely (internal patterns)
**Plans**: 1/3

Plans:
- [x] 08-01: Marketing Blocks (PricingTable, CTASection) — completed 2026-01-13
- [ ] 08-02: Portfolio Blocks (ProjectCard, Timeline)
- [ ] 08-03: Page Layout Blocks (PageHeader, SectionWrapper)

#### Phase 9: Polish & Documentation

**Goal**: Storybook stories, README updates, tests for all new components
**Depends on**: Phase 8
**Research**: Unlikely (internal patterns)
**Plans**: TBD

Plans:
- [ ] 09-01: TBD

## Progress

| Milestone | Phases | Plans | Status | Shipped |
|-----------|--------|-------|--------|---------|
| v1.0 MVP | 1-4 + 3.1 | 14/14 | Complete | 2026-01-13 |
| v0.2.0 Library Expansion | 5-9 | 10/12 | In progress | - |

# Roadmap: Paradigm UI

## Overview

Transform the existing component library into a distributable shadcn registry with free/premium tiers.

## Milestones

- [v1.0 MVP](milestones/v1.0-ROADMAP.md) (Phases 1-4 + 3.1) — SHIPPED 2026-01-13
- 🚧 **v0.2.0 Library Expansion** - Phases 5-11 (in progress)

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

#### Phase 8: Premium Blocks — Complete

**Goal**: Add composed blocks — marketing sections, portfolio components, page-level layouts (premium tier)
**Depends on**: Phase 7
**Research**: Unlikely (internal patterns)
**Plans**: 3/3

Plans:
- [x] 08-01: Marketing Blocks (PricingTable, CTASection) — completed 2026-01-13
- [x] 08-02: Portfolio Blocks (ProjectCard, Timeline) — completed 2026-01-13
- [x] 08-03: Page Layout Blocks (PageHeader, SectionWrapper) — completed 2026-01-13

#### Phase 9: Polish & Documentation — Complete

**Goal**: Storybook stories, README updates, tests for all new components
**Depends on**: Phase 8
**Research**: Unlikely (internal patterns)
**Plans**: 1/1

Plans:
- [x] 09-01: CodeBlock tests/stories, Hook stories, README update — completed 2026-01-13

#### Phase 10: Update Marketing Site — Complete

**Goal**: Update marketing site with new components, blocks, and hooks from v0.2.0
**Depends on**: Phase 9
**Research**: Unlikely (internal patterns)
**Plans**: 1/1

Plans:
- [x] 10-01: Site Exports, HooksSection, Component Previews, Pricing Update — completed 2026-01-14

#### Phase 11: Marketing Site Sidebar

**Goal**: Add `/docs` route with sidebar navigation (shadcn-style) — categorized sections for Getting Started, Components, Hooks, etc.
**Depends on**: Phase 10
**Research**: Unlikely (uses existing Sidebar component)
**Plans**: 2

Plans:
- [x] 11-01: Docs Shell & Navigation (layout, sidebar, nav config) — completed 2026-01-14
- [x] 11-02: Documentation Content Pages (getting started, components, hooks, blocks) — completed 2026-01-14

#### Phase 12: Fix Sidebar

**Goal**: Fix sidebar component import paths and dependencies for proper monorepo resolution
**Depends on**: Phase 11
**Research**: Unlikely (bug fix)
**Plans**: 0 plans

Plans:
- [ ] TBD (run /gsd:plan-phase 12 to break down)

**Details:**
[To be added during planning]

#### Phase 13: Component Landing Pages — Complete

**Goal**: Create individual landing pages for each component, hook, and utility in paradigm-ui with description, installation instructions, ComponentPreview, and props documentation
**Depends on**: Phase 12
**Research**: Unlikely (internal patterns)
**Plans**: 4/4

Plans:
- [x] 13-01: Layout Component Pages (Box, Flex, FlexRow, FlexCol, Grid, Section) — completed 2026-01-14
- [x] 13-02: Typography Component Pages (Heading, Paragraph, Blockquote, List, Callout) — completed 2026-01-14
- [x] 13-03: Card Component Pages (FeatureCard, ProfileCard, StatsCard, TestimonialCard) — completed 2026-01-14
- [x] 13-04: Hook Pages (useToggle, useMediaQuery, useClickOutside) — completed 2026-01-14

**Details:**
Each landing page includes:
- Brief description of the component
- Installation instructions:
  1. Add `"@paradigm-ui": "https://paradigm-ui.com/r"` to components.json
  2. Run `npx shadcn@latest add @paradigm-ui/{componentName}`
- ComponentPreview showing the component in action (components) or code examples (hooks)
- Props/API documentation table

## Progress

| Milestone | Phases | Plans | Status | Shipped |
|-----------|--------|-------|--------|---------|
| v1.0 MVP | 1-4 + 3.1 | 14/14 | Complete | 2026-01-13 |
| v0.2.0 Library Expansion | 5-13 | 16/? | In Progress | — |

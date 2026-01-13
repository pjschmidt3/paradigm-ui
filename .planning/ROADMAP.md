# Roadmap: Paradigm UI

## Overview

Transform the existing component library into a distributable shadcn registry with free/premium tiers. Starting with registry infrastructure, then organizing components by tier, adding documentation, and finally building a marketing site to showcase the library.

## Domain Expertise

None

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Registry Foundation** - Set up shadcn registry structure and JSON schema
- [x] **Phase 2: Component Tiering** - Separate free vs premium components with metadata
- [x] **Phase 3: Documentation & Polish** - Component docs, examples, and production readiness
- [x] **Phase 3.1: Unit Test Coverage** - Add comprehensive unit tests for all registry components (INSERTED)
- [ ] **Phase 4: Marketing Site** - Landing page with component showcase

## Phase Details

### Phase 1: Registry Foundation
**Goal**: Establish shadcn-compatible registry infrastructure with proper JSON schema and endpoint structure
**Depends on**: Nothing (first phase)
**Research**: Likely (external integration)
**Research topics**: shadcn registry JSON schema format, CLI compatibility requirements, registry endpoint structure
**Plans**: 1

Plans:
- [x] 01-01: Registry Infrastructure — Complete registry.json with all component items

### Phase 2: Component Tiering
**Goal**: Organize existing components into free/premium tiers with appropriate metadata
**Depends on**: Phase 1
**Research**: Unlikely (internal patterns)
**Plans**: 4

Plans:
- [x] 02-01: Tier Metadata — Add tier and category metadata to existing 14 registry items
- [x] 02-02: Atomic Components A-D — Register 19 atomic components from src/components/ui
- [x] 02-03: Atomic Components E-P — Register 18 atomic components (15 + 3 dependencies)
- [x] 02-04: Atomic Components R-T — Register 17 atomic components, complete phase

### Phase 3: Documentation & Polish
**Goal**: Create comprehensive component documentation with usage examples and prop references
**Depends on**: Phase 2
**Research**: Unlikely (established patterns)
**Plans**: 2

Plans:
- [x] 03-01: Storybook Stories — Create stories for heading, paragraph, social-links, hero, appear
- [x] 03-02: Production Readiness — Registry validation, README update, build verification

### Phase 3.1: Unit Test Coverage (INSERTED)
**Goal**: Add comprehensive unit tests for all registry components
**Depends on**: Phase 3
**Research**: Unlikely (established patterns)
**Plans**: 3

Plans:
- [x] 3.1-01: Typography Tests — Unit tests for Heading and Paragraph components
- [x] 3.1-02: Animation Tests — Unit tests for SocialLinks and Appear components (with motion mocks)
- [x] 3.1-03: Composite & Verification — Unit tests for Hero component + full suite verification

### Phase 4: Marketing Site
**Goal**: Build landing page showcasing components with live demos and tier comparison
**Depends on**: Phase 3.1
**Research**: Unlikely (internal UI work)
**Plans**: 4

Plans:
- [x] 04-01: Project Foundation — Next.js setup + Paradigm UI integration
- [x] 04-02: Hero Section — Landing hero with interactive demo
- [x] 04-03: Component Showcase — Live demos with code tabs
- [ ] 04-04: Tier & CTA — Free/premium comparison + getting started

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 3.1 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Registry Foundation | 1/1 | Complete | 2026-01-13 |
| 2. Component Tiering | 4/4 | Complete | 2026-01-13 |
| 3. Documentation & Polish | 2/2 | Complete | 2026-01-13 |
| 3.1. Unit Test Coverage | 3/3 | Complete | 2026-01-13 |
| 4. Marketing Site | 3/4 | In progress | - |

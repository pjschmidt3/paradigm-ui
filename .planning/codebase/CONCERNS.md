# Codebase Concerns

**Analysis Date:** 2026-01-13

## Tech Debt

**Malformed TypeScript Path Alias:**
- Issue: Path alias `@hooks/*` has syntax error with leading comma: `",./src/hooks/*"`
- File: `tsconfig.json` line 45
- Why: Likely copy-paste error during configuration
- Impact: Breaks module resolution for any code using `@hooks` alias
- Fix approach: Remove leading comma from path value

**Inconsistent Import Paths in Registry:**
- Issue: Registry components use `@/src/` prefix while main codebase uses `@/`
- Files: `registry/new-york/ui/button.tsx`, `registry/new-york/ui/flex-row.tsx`, `registry/new-york/ui/hero.tsx`, `registry/new-york/ui/heading.tsx`
- Why: Different path conventions evolved during development
- Impact: Confusion about import patterns, harder to maintain
- Fix approach: Standardize on `@/` prefix (matches shadcn convention)

**Dual Component Directories:**
- Issue: Two parallel component directories: `/components/ui/` and `/src/components/ui/`
- Files: Both directories contain similar components (button, dialog, input, etc.)
- Why: Unclear - possibly legacy vs active development
- Impact: Confusion about source of truth, DRY violation
- Fix approach: Consolidate to single directory, remove duplicate

**Unused Path Aliases:**
- Issue: `@styles/*` path defined but `/src/styles/` directory doesn't exist
- File: `tsconfig.json`
- Why: Placeholder for future use or removed directory
- Impact: Confusion about project structure
- Fix approach: Remove unused aliases or create directory

## Known Bugs

No known bugs detected. Codebase is clean.

## Security Considerations

**No Security Concerns Detected:**
- No hardcoded secrets
- No environment variable usage
- No API calls or external service connections
- Component library has minimal attack surface

## Performance Bottlenecks

**Dynamic Tailwind Class Generation:**
- Problem: Classes generated from props without validation
- Files: `registry/new-york/ui/flex.tsx`, `registry/new-york/ui/grid.tsx`
- Cause: Object iteration builds classes dynamically
- Impact: Invalid values could generate non-functional classes
- Improvement path: Add runtime validation or type guards

## Fragile Areas

**Responsive Value Processing:**
- Files: `src/lib/utils.ts` (processSpacingProp, getResponsiveClasses)
- Why fragile: Complex nested object processing with multiple code paths
- Common failures: Incorrect breakpoint handling, missing edge cases
- Safe modification: Add comprehensive unit tests before changes
- Test coverage: Not directly tested (tested via component tests)

## Scaling Limits

No scaling concerns - component library has no runtime scaling requirements.

## Dependencies at Risk

**react-hook-form + zod:**
- Risk: Major version updates may introduce breaking changes
- Impact: Form component compatibility
- Migration plan: Pin versions, test thoroughly before updates

**Radix UI:**
- Risk: 17+ packages with potential for inconsistent updates
- Impact: UI primitive behavior changes
- Migration plan: Update packages together, test all affected components

**TailwindCSS v4:**
- Risk: v4 is relatively new, may have undiscovered issues
- Impact: Styling system
- Migration plan: Monitor changelogs, have fallback to v3 patterns

## Missing Critical Features

**No CI/CD Pipeline:**
- Problem: No automated testing or deployment
- Current workaround: Manual npm scripts
- Blocks: Automated quality gates, consistent releases
- Implementation complexity: Low - add GitHub Actions workflow

**Registry Not in Build Output:**
- Problem: Registry components not included in npm distribution
- File: `rollup.config.js` only builds from `src/index.ts`
- Current workaround: Consumers can't use registry components
- Blocks: Full component library distribution
- Implementation complexity: Medium - update rollup config

## Test Coverage Gaps

**Registry Component Tests:**
- What's not tested: 11 of 17 registry components lack tests (appear, heading, hero, paragraph, social-links, etc.)
- Files: Only `button.test.tsx`, `box.test.tsx`, `flex.test.tsx`, `flex-col.test.tsx`, `flex-row.test.tsx`, `grid.test.tsx` exist
- Risk: Regressions in untested components
- Priority: Medium
- Difficulty to test: Low - follow existing test patterns

**Utility Function Tests:**
- What's not tested: `src/lib/utils.ts` functions not directly tested
- Risk: Utility regressions affect all components
- Priority: High
- Difficulty to test: Low - pure functions, easy to unit test

**src/components/ui/ Components:**
- What's not tested: 53 shadcn/ui components have no tests
- Risk: Component behavior regressions
- Priority: Medium (Radix handles most logic)
- Difficulty to test: Medium - many components with various states

---

## Summary

**Total Issues:** 7 actionable items

| Severity | Count | Issues |
|----------|-------|--------|
| Critical | 1 | Malformed tsconfig path alias |
| High | 2 | Inconsistent imports, dual directories |
| Medium | 3 | Unused aliases, registry not in build, test gaps |
| Low | 1 | Dynamic class generation |

**Positive Notes:**
- No TODO/FIXME/HACK comments (clean codebase)
- TypeScript strict mode enabled
- Comprehensive Button component tests (46+ cases)
- Well-documented component patterns
- Proper use of cn() for class merging

---

*Concerns audit: 2026-01-13*
*Update as issues are fixed or new ones discovered*

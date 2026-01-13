# Codebase Structure

**Analysis Date:** 2026-01-13

## Directory Layout

```
paradigm-ui/
├── src/                          # Production source code
│   ├── index.ts                 # Main entry point
│   ├── index.css                # Global styles, design tokens
│   ├── setupTests.ts            # Jest test setup
│   ├── components/
│   │   └── ui/                  # 53 shadcn/ui components
│   ├── hooks/
│   │   └── use-mobile.ts        # Mobile breakpoint hook
│   ├── types/
│   │   ├── index.ts             # Type exports barrel
│   │   └── shared/              # Shared type definitions
│   └── lib/
│       └── utils.ts             # Core utilities (cn, spacing, etc.)
│
├── registry/                     # Showcase/documentation components
│   └── new-york/
│       └── ui/                  # 23 composite components
│           ├── __tests__/       # Component tests
│           └── *.stories.tsx    # Storybook stories
│
├── components/                   # Alternative UI components (untracked)
│   └── ui/                      # Parallel component set
│
├── .storybook/                  # Storybook configuration
│   ├── main.ts                  # Build config
│   ├── preview.ts               # Runtime decorators
│   └── preview.css              # Storybook styles
│
├── dist/                        # Build output (gitignored)
├── storybook-static/            # Storybook build (gitignored)
│
├── package.json                 # npm package manifest
├── tsconfig.json                # TypeScript configuration
├── rollup.config.js             # Build configuration
├── components.json              # shadcn/ui configuration
├── eslint.config.js             # Linting rules
├── .prettierrc                  # Code formatting
└── CLAUDE.md                    # Project guidelines
```

## Directory Purposes

**src/**
- Purpose: Production source code for npm distribution
- Contains: Components, hooks, types, utilities, styles
- Key files: `index.ts` (entry), `index.css` (tokens), `lib/utils.ts` (core utils)

**src/components/ui/**
- Purpose: shadcn/ui-style atomic components
- Contains: 53 `.tsx` component files (button, dialog, input, etc.)
- Key files: All standard UI primitives wrapping Radix UI

**src/types/shared/**
- Purpose: Reusable type definitions
- Contains: `box.ts` (spacing/sizing types), `helpers.ts` (component types)
- Key files: `BoxProps`, `ResponsiveValue`, `ComponentSize`, `FlexContainerProps`

**src/lib/**
- Purpose: Shared utility functions
- Contains: `utils.ts` (262 lines)
- Key files: `cn()`, `buildSizingClass()`, `processSpacingProp()`, responsive handlers

**registry/new-york/ui/**
- Purpose: Composite/layout components for documentation
- Contains: 23 `.tsx` files + stories + tests
- Key files: `box.tsx`, `flex.tsx`, `button.tsx`, `grid.tsx`, `hero.tsx`, `appear.tsx`
- Subdirectories: `__tests__/` for unit tests

**.storybook/**
- Purpose: Component documentation and development
- Contains: `main.ts`, `preview.ts`, `preview.css`
- Key files: Vite builder config, TailwindCSS integration

## Key File Locations

**Entry Points:**
- `src/index.ts` - Package entry (exports all public API)
- `rollup.config.js` - Build entry
- `.storybook/main.ts` - Storybook entry

**Configuration:**
- `tsconfig.json` - TypeScript config with path aliases
- `components.json` - shadcn/ui paths
- `.prettierrc` - Formatting (single quotes, no semicolons)
- `eslint.config.js` - Linting rules

**Core Logic:**
- `src/lib/utils.ts` - Class utilities, spacing/sizing processors
- `src/types/shared/box.ts` - Responsive value types, sizing types
- `src/types/shared/helpers.ts` - Component size types, flex types

**Testing:**
- `src/setupTests.ts` - Jest environment setup
- `registry/new-york/ui/__tests__/*.test.tsx` - Component tests

**Documentation:**
- `CLAUDE.md` - Development guidelines
- `registry/new-york/ui/BUTTON_README.md` - Button documentation

## Naming Conventions

**Files:**
- `kebab-case.tsx` - Component files (button.tsx, flex-col.tsx)
- `*.test.tsx` - Test files (button.test.tsx)
- `*.stories.tsx` - Storybook stories (button.stories.tsx)
- `kebab-case.ts` - Type/utility files (helpers.ts, utils.ts)

**Directories:**
- `kebab-case` - All directories (new-york, shared)
- `__tests__` - Test directories (Jest convention)
- Singular for single-purpose (lib, types)
- Plural for collections (components, hooks)

**Special Patterns:**
- `index.ts` - Barrel exports
- `use-*.ts` - React hooks (use-mobile.ts)
- `UPPER_CASE.md` - Important docs (CLAUDE.md, BUTTON_README.md)

## Where to Add New Code

**New UI Component:**
- Implementation: `src/components/ui/{component}.tsx`
- Types: Add to component file or `src/types/shared/`
- Tests: `registry/new-york/ui/__tests__/{component}.test.tsx`

**New Layout/Composite Component:**
- Implementation: `registry/new-york/ui/{component}.tsx`
- Story: `registry/new-york/ui/{component}.stories.tsx`
- Tests: `registry/new-york/ui/__tests__/{component}.test.tsx`

**New Hook:**
- Implementation: `src/hooks/use-{name}.ts`
- Export from: `src/index.ts`

**New Shared Type:**
- Definition: `src/types/shared/{domain}.ts`
- Export from: `src/types/index.ts`

**New Utility Function:**
- Implementation: `src/lib/utils.ts`
- Export from: `src/index.ts`

## Special Directories

**dist/**
- Purpose: Build output
- Source: Generated by `npm run build` (Rollup)
- Committed: No (gitignored)

**storybook-static/**
- Purpose: Storybook production build
- Source: Generated by `npm run build-storybook`
- Committed: No (gitignored)

**node_modules/**
- Purpose: Dependencies
- Source: npm install
- Committed: No (gitignored)

**.rollup.cache/**
- Purpose: Rollup build cache
- Source: Rollup incremental builds
- Committed: No (gitignored)

---

*Structure analysis: 2026-01-13*
*Update when directory structure changes*

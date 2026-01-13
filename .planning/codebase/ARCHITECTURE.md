# Architecture

**Analysis Date:** 2026-01-13

## Pattern Overview

**Overall:** Component Library (Monolithic)

A composable React component library built as a single npm-publishable package following the shadcn/ui registry pattern.

**Key Characteristics:**
- Single source of truth (`src/`) for production code
- Registry pattern (`registry/new-york/`) for showcase/documentation
- Dual distribution: CommonJS and ES Modules
- Full TypeScript with strict mode enabled
- Token-based CSS custom properties for theming

## Layers

**UI Components Layer:**
- Purpose: Atomic, single-responsibility components wrapping Radix UI primitives
- Contains: Button, Input, Dialog, Accordion, Select, etc. (53 components)
- Location: `src/components/ui/*.tsx`
- Depends on: Radix UI primitives, shared utilities
- Used by: Consumer applications, registry components

**Composite/Layout Components Layer:**
- Purpose: Multi-element layouts and higher-level compositions
- Contains: Box, Flex, FlexRow, FlexCol, Grid, Hero, Appear (animations)
- Location: `registry/new-york/ui/*.tsx`
- Depends on: UI components, shared types, utilities
- Used by: Storybook documentation, consumer applications

**Shared Utilities & Types Layer:**
- Purpose: Reusable class builders, type definitions, responsive value processors
- Contains: `cn()`, `buildSizingClass()`, `getSizingClasses()`, `processSpacingProp()`
- Location: `src/lib/utils.ts`, `src/types/shared/`
- Depends on: clsx, tailwind-merge, csstype
- Used by: All component layers

**Design Tokens & Styling Layer:**
- Purpose: Centralized CSS variables with semantic naming
- Contains: CSS custom properties (`--primary`, `--destructive`, etc.), dark mode support
- Location: `src/index.css`
- Depends on: TailwindCSS v4
- Used by: All components via Tailwind classes

## Data Flow

**Component Props Flow:**

1. User Props (e.g., `ButtonProps`) received
2. Props destructured: variant, size, disabled, custom colors, etc.
3. CVA variant selection: `buttonVariants({ size, variant })`
4. Custom class builders: `colorToClass()` for hex/semantic names
5. `cn()` merges and deduplicates all Tailwind classes
6. Final className assigned to HTML element

**Responsive Props Flow (Box, Flex):**
```
Props: px={{ base: 'sm', md: 'lg', xl: '2xl' }}
    ↓
getResponsiveClasses() processes breakpoint values
    ↓
buildSpacingClass() converts 'md' → 'md:px-4'
    ↓
Classes: 'px-2 md:px-6 xl:px-12'
```

**State Management:**
- No global state (component library)
- Local React state via hooks where needed
- State management is consumer responsibility

## Key Abstractions

**`cn()` Utility:**
- Purpose: Class name merging with Tailwind deduplication
- Location: `src/lib/utils.ts`
- Pattern: Combines `clsx()` + `tailwind-merge`
- Examples: Used in every component for className composition

**CVA (Class Variance Authority):**
- Purpose: Declarative component variant definitions
- Location: `registry/new-york/ui/button.tsx`
- Pattern: `cva([base], { variants: {...} })` → typed variant props
- Examples: Button sizes (xs-4xl), variants (default, ghost, link, etc.)

**Responsive Value Transformation:**
- Purpose: Mobile-first responsive prop handling
- Type: `ResponsiveValue<T> = T | Partial<Record<ResponsiveBreakpoint, T>>`
- Location: `src/types/shared/box.ts`, `src/lib/utils.ts`
- Pattern: Maps semantic sizes to Tailwind tokens per breakpoint

**Polymorphic Component Type:**
- Purpose: Render components as different HTML elements
- Type: `PolymorphicBoxProps<T extends ElementType>`
- Location: `src/types/shared/box.ts`
- Examples: `<Box as="section">`, `<Heading as="h1">`

**Design Token System:**
- Purpose: Semantic color and spacing values
- Location: `src/index.css` with CSS custom properties
- Pattern: `--primary`, `--destructive`, `--muted` → `bg-primary`, `text-destructive`

## Entry Points

**Package Entry:**
- Location: `src/index.ts`
- Triggers: npm import by consumers
- Responsibilities: Export all components, hooks, types, utilities; import base CSS

**Build Entry:**
- Location: `rollup.config.js` → `src/index.ts`
- Triggers: `npm run build`
- Responsibilities: Bundle to `dist/index.{js,mjs,d.ts}`

**Storybook Entry:**
- Location: `.storybook/main.ts`
- Triggers: `npm run dev`
- Responsibilities: Scan `registry/**/*.stories.*` for component documentation

**Test Entry:**
- Location: `src/setupTests.ts`
- Triggers: `npm test`
- Responsibilities: Configure Jest environment, mock browser APIs

## Error Handling

**Strategy:** Defensive defaults, no explicit error boundaries (consumer responsibility)

**Patterns:**
- Default prop values prevent undefined errors
- TypeScript strict mode catches type errors at compile time
- CVA provides type-safe variant selection
- Invalid values generally result in no-op classes (fail silently)

## Cross-Cutting Concerns

**Logging:**
- No logging in production code (component library)
- Console mocked in test setup (`src/setupTests.ts`)

**Validation:**
- TypeScript for compile-time validation
- CVA for variant validation
- No runtime validation (performance, minimal bundle)

**Theming:**
- CSS custom properties in `src/index.css`
- Dark mode via `.dark` class selector
- Consumer applies theme class to root element

**Accessibility:**
- Radix UI primitives provide ARIA attributes
- Keyboard navigation built into Radix components
- Focus management handled by primitives

---

*Architecture analysis: 2026-01-13*
*Update when major patterns change*

# Coding Conventions

**Analysis Date:** 2026-01-13

## Naming Patterns

**Files:**
- `kebab-case.tsx` for all component files (button.tsx, flex-col.tsx)
- `*.test.tsx` for test files alongside components
- `*.stories.tsx` for Storybook stories
- `index.ts` for barrel exports

**Functions:**
- camelCase for all functions
- No special prefix for async functions
- Verb prefixes: `build*`, `get*`, `process*`, `is*` for utilities

**Variables:**
- camelCase for variables (spacingClasses, tailwindClasses)
- UPPER_SNAKE_CASE for constants (not commonly used)
- No underscore prefix for private members

**Types:**
- PascalCase for interfaces, no I prefix (ButtonProps, not IButtonProps)
- PascalCase for type aliases (ButtonVariant, ComponentSize)
- Props suffix for component prop interfaces (ButtonProps, FlexProps)
- Use `interface` for prop types, `type` for unions

## Code Style

**Formatting (.prettierrc):**
- Print width: 80 characters
- Tab width: 2 spaces
- Single quotes for strings
- No semicolons
- No trailing commas
- Bracket spacing enabled
- Uses `prettier-plugin-tailwindcss` for class ordering

**Linting (eslint.config.js):**
- TypeScript plugin: `@typescript-eslint/eslint-plugin`
- Storybook plugin: `eslint-plugin-storybook`
- Extends from shared config: `@paradigmui/eslint-config-global`

## Import Organization

**Order:**
1. React imports (react, react-dom)
2. External packages (clsx, radix-ui, class-variance-authority)
3. Internal modules (@/lib, @/types)
4. Relative imports (./utils, ../types)
5. Type imports last (import type { ... })

**Grouping:**
- Blank line between groups
- Type imports can be combined with regular imports

**Path Aliases (tsconfig.json):**
- `@/*` - Root src directory
- `@components/*` - `src/components/`
- `@shadcn/*` - `src/components/ui/`
- `@hooks/*` - `src/hooks/`
- `@lib/*` - `src/lib/`
- `@types/*` - `src/types/`
- `@registry/*` - `registry/new-york/ui/`

## Error Handling

**Patterns:**
- Defensive defaults: provide fallback values
- TypeScript strict mode catches type errors at compile time
- No try/catch in component code (component library)

**Error Types:**
- Type errors caught at compile time
- Invalid props result in no-op (fail silently)

## Logging

**Framework:**
- No logging in production code (component library)
- Console mocked in test setup

**Patterns:**
- Console.log only for development debugging
- Remove before committing

## Comments

**When to Comment:**
- Explain why, not what
- Document complex utility functions with JSDoc
- Use `@example` blocks for usage examples

**JSDoc/TSDoc:**
- Required for exported utility functions
- Optional for components (prefer Storybook)
- Use `@example` for code samples

**TODO Comments:**
- Not present in codebase (clean)
- Use format: `// TODO: description` if needed

## Function Design

**Size:**
- Keep under 50 lines
- Extract helpers for complex logic

**Parameters:**
- Max 3-4 parameters
- Use options object for more (common in components)
- Destructure in parameter list

**Return Values:**
- Explicit returns
- Return early for guard clauses
- Use `satisfies` for type validation

## Module Design

**Exports:**
- Named exports preferred for all exports
- No default exports
- Re-export from index.ts barrel files

**Barrel Files:**
- `src/index.ts` - Main package exports
- `src/types/index.ts` - Type exports
- `registry/new-york/ui/index.tsx` - Registry exports

## Critical Convention: cn() Utility

**ALWAYS use `cn()` for className composition:**

```typescript
// Correct - uses cn() for dynamic classes
className={cn(
  buttonVariants({ size, variant }),
  bgClass,
  colorClass,
  className
)}

// Wrong - manual concatenation
className={`${buttonVariants({ size })} ${className}`}
```

Location: `src/lib/utils.ts`
Uses: clsx + tailwind-merge for proper class deduplication

## Component Pattern

**Standard Structure:**

```typescript
// 1. Imports
import { forwardRef, type ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// 2. Types
type ButtonVariant = 'default' | 'ghost' | 'link'

// 3. CVA variants
const buttonVariants = cva([...], { variants: {...} })

// 4. Props interface
export interface ButtonProps extends ... {...}

// 5. Component implementation
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

// 6. Display name
Button.displayName = 'Button'
```

## DRY Principle

**From CLAUDE.md:**

When creating types, utilities, and features:
- Consider if it's specific to the component or should be shared
- Extract reusable types to `src/types/shared/`
- Extract reusable utilities to `src/lib/utils.ts`

**Example from codebase:**
- `ComponentSize` defined once in `src/types/shared/helpers.ts`
- Used by Button, Box, Flex, and other components

---

*Convention analysis: 2026-01-13*
*Update when patterns change*

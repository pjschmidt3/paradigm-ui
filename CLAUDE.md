``## Project Overview
A shadui registry of reusable, highly composible react components. Includes low level utility components like flexbox and grid helpers as well as many commonly used cosmetic components such as a hero and social sharing links.

## Tech Stack
 - shadui
 - TailwindCSS v4
 - TypeScript
 - Storybook

## Coding Standards
### Keep it DRY
When creating types, interfaces, utilities, and features in general, consider whether it is logically specific to the component you are working on or if it should made into a reusable version.

**Critical**: Always use `cn()` when combining dynamic className props:
```ts filename="utils.tsx"
// Correct - reusable type, defined in 
type SizingProperty = 'w' | 'h' | 'min-w' | 'max-w' | 'min-h' | 'max-h'
```

```ts filename="box.tsx"
// Wrong - should be extracted to a shared file and referenced
type BoxWidthProperty =  'w' | 'h' | 'min-w' | 'max-w' | 'min-h' | 'max-h'
```

### Imports & Quotes
- **Individual React imports**: Import hooks and utilities individually, not the entire React namespace
  ```ts
  // Correct
  import { useEffect, useState, useRef } from 'react'

  // Wrong
  import React from 'react'
  React.useEffect(...)
  ```
- **Single quotes** in JS/TS code: `const foo = 'bar'`
- **Double quotes** for JSX attributes: `<div className="container">`

### Component Completion Checklist

**CRITICAL: Every new component MUST include:**

1. **Unit tests** (`component-name.test.tsx`)
   - Test all props and variants
   - Test accessibility basics (roles, labels)
   - Test edge cases (empty props, missing optional props)

2. **Storybook stories** (`component-name.stories.tsx`)
   - Default story showing basic usage
   - Stories for each variant/prop combination
   - Interactive controls via args

**Do NOT consider a component complete without tests and stories.**

Example file structure for a new component:
```
registry/new-york/ui/my-component/
├── index.ts              # Barrel export
├── my-component.tsx      # Component implementation
├── my-component.test.tsx # Unit tests
└── my-component.stories.tsx # Storybook stories
```

### File Structure/Code Arrangement
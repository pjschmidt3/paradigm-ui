# Paradigm UI - Shared Types

This directory contains shared TypeScript types used across all paradigm-ui components.

## Files

### `helpers.ts`
Core utility types including sizing scales, flex props, and polymorphic component types.

### `box.ts`
Box component types including spacing, visual properties, and responsive values.

## Sizing Type Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                       BaseSize                          │
│         'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'       │
│                                                         │
│  The fundamental size scale for all sizing in the lib  │
└─────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
        ┌───────▼────────┐     ┌───────▼────────┐
        │   GapSize      │     │  SpacingSize   │
        │   (Alias)      │     │    (Alias)     │
        │                │     │                │
        │  For: gap      │     │  For: padding  │
        │  properties    │     │  & margin      │
        └────────────────┘     └────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    ComponentSize                        │
│   'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |   │
│                        '4xl'                            │
│                                                         │
│    Extended scale for larger component sizes           │
│            (includes all BaseSize values)              │
└─────────────────────────────────────────────────────────┘
```

## Usage Examples

### For Gap Properties
```typescript
import { GapSize } from '@/types/shared/helpers'

interface FlexProps {
  gap?: GapSize  // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
```

### For Spacing (Padding/Margin)
```typescript
import { SpacingSize } from '@/types/shared/helpers'

interface BoxProps {
  padding?: SpacingSize  // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  margin?: SpacingSize
}
```

### For Component Sizing
```typescript
import { ComponentSize } from '@/types/shared/helpers'

interface ButtonProps {
  size?: ComponentSize  // Includes 'xs' through '4xl'
}
```

### Type-Safe Variant Records
```typescript
import { ComponentSize } from '@/types/shared/helpers'
import { cva } from 'class-variance-authority'

const variants = cva('base-classes', {
  variants: {
    size: {
      xs: ['h-6'],
      sm: ['h-8'],
      md: ['h-10'],
      lg: ['h-11'],
      xl: ['h-12'],
      '2xl': ['h-14'],
      '3xl': ['h-16'],
      '4xl': ['h-20']
    } satisfies Record<ComponentSize, string[]>
    // ↑ Type error if any size is missing!
  }
})
```

## Tailwind Spacing Map

The sizing types map to Tailwind's spacing scale:

| Size  | Tailwind | Rem   | Pixels |
|-------|----------|-------|--------|
| `xs`  | 1        | 0.25  | 4px    |
| `sm`  | 2        | 0.5   | 8px    |
| `md`  | 4        | 1     | 16px   |
| `lg`  | 6        | 1.5   | 24px   |
| `xl`  | 8        | 2     | 32px   |
| `2xl` | 12       | 3     | 48px   |

For `ComponentSize` only (extends BaseSize):

| Size  | Height    | Padding     | Font Size |
|-------|-----------|-------------|-----------|
| `3xl` | h-16 (64px) | px-12 (48px) | text-2xl  |
| `4xl` | h-20 (80px) | px-16 (64px) | text-3xl  |

## Components Using Shared Types

### Using `ComponentSize`
- Button (`registry/new-york/ui/button.tsx`)

### Using `GapSize`
- Flex (`registry/new-york/ui/flex.tsx`)
- FlexRow (`registry/new-york/ui/flex-row.tsx`)
- FlexCol (`registry/new-york/ui/flex-col.tsx`)
- Grid (`registry/new-york/ui/grid.tsx`)

### Using `SpacingSize`
- Box (`registry/new-york/ui/box.tsx`)
- All components via Box utilities

## Adding New Sizes

To add a new size to all components at once:

```typescript
// In types/shared/helpers.ts
export type BaseSize =
  | '3xs'  // ← New size
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
```

Then update the spacing maps in `lib/box-utils.ts`:

```typescript
const spacingMap: Record<SpacingSize, number> = {
  '3xs': 0.5,  // ← Add mapping
  xs: 1,
  sm: 2,
  // ...
}
```

All components using `GapSize` or `SpacingSize` will automatically support the new size!

## Type Safety Benefits

### Compile-Time Checks
```typescript
// ✅ GOOD - All sizes defined
const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-11',
  xl: 'h-12',
  '2xl': 'h-14'
} satisfies Record<GapSize, string>

// ❌ ERROR - Missing 'xl' size
const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-11',
  '2xl': 'h-14'
} satisfies Record<GapSize, string>
// Type error: Property 'xl' is missing
```

### Auto-Complete
All IDEs with TypeScript support will provide auto-complete for size values:

```typescript
<Button size="   // ← Auto-complete shows: xs | sm | md | lg | xl | 2xl | 3xl | 4xl
```

## Best Practices

1. **Use Semantic Aliases**: Prefer `GapSize` over `BaseSize` for gap properties
2. **Type Constraints**: Use `satisfies Record<Size, ...>` for variant definitions
3. **Import from Helpers**: Always import from `@/types/shared/helpers` for new code
4. **Backward Compatibility**: `box.ts` re-exports are maintained for existing code

## Related Documentation

- [Sizing Types Refactoring Guide](../../../SIZING_TYPES_REFACTOR.md)
- [Box Component Documentation](../../../registry/new-york/ui/box.tsx)
- [Button Component Documentation](../../../registry/new-york/ui/BUTTON_README.md)

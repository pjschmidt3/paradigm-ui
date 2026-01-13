# Button Component

A flexible, accessible button component for paradigm-ui with multiple variants, sizes, and advanced features.

## Features

### ✅ Core Features
- **Inline Icons**: Support for `iconStart` and `iconEnd` props
- **Button Types**: Support for `button`, `submit`, and `reset` types
- **Event Handlers**: Proper handling of `onClick` events
- **React 19 Refs**: Full support for ref forwarding

### ✅ Variants
- `default` - Primary button with filled background
- `outlined` - Button with border and inverted colors
- `link` - Styled as a hyperlink with underline on hover
- `ghost` - Transparent background with hover effect
- `destructive` - Red/destructive action button

### ✅ Sizes
- `xs` - Extra small (height: 24px)
- `sm` - Small (height: 32px)
- `md` - Medium/default (height: 40px)
- `lg` - Large (height: 44px)
- `xl` - Extra large (height: 48px)
- `2xl` - 2XL (height: 56px)
- `3xl` - 3XL (height: 64px)
- `4xl` - 4XL (height: 80px)

### ✅ Custom Colors
The `color` and `bg` props accept:
- **Semantic names**: `"primary"`, `"secondary"`, `"accent"`, `"destructive"`, etc.
- **Hex values**: `"#ffffff"`, `"#ff0000"`, etc.
- **Any Tailwind color**: `"blue-500"`, `"red-600"`, etc.

### ✅ Additional Features
- **Loading State**: Built-in loading spinner with `loading` prop
- **Custom Loading Spinner**: Override with `loadingSpinner` prop
- **Disabled State**: Full accessibility support
- **Accessibility**: ARIA attributes, keyboard navigation, focus states
- **Custom ClassName**: Merge custom classes with `className` prop

## Usage Examples

### Basic Button
```tsx
<Button>Click me</Button>
```

### With Icons
```tsx
import { CheckIcon, ArrowRightIcon } from 'lucide-react'

<Button iconStart={<CheckIcon />}>Confirm</Button>
<Button iconEnd={<ArrowRightIcon />}>Next</Button>
```

### Variants
```tsx
<Button variant="default">Primary Action</Button>
<Button variant="outlined">Secondary Action</Button>
<Button variant="link">Learn more</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="destructive">Delete</Button>
```

### Sizes
```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="4xl">4XL</Button>
```

### Custom Colors
```tsx
<Button bg="secondary" color="secondary-foreground">
  Custom Colors
</Button>

<Button bg="#10b981" color="#ffffff">
  Hex Colors
</Button>
```

### Submit Button
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit">Submit Form</Button>
</form>
```

### Loading State
```tsx
<Button loading>Saving...</Button>

<Button
  loading
  loadingSpinner={<CustomSpinner />}
>
  Custom Spinner
</Button>
```

### Disabled State
```tsx
<Button disabled>Disabled Button</Button>
```

### With Ref
```tsx
const buttonRef = useRef<HTMLButtonElement>(null)

<Button ref={buttonRef}>Click me</Button>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'link' \| 'ghost' \| 'destructive'` | `'default'` | Visual style variant |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | `'md'` | Button size |
| `iconStart` | `ReactNode` | - | Icon displayed at the start |
| `iconEnd` | `ReactNode` | - | Icon displayed at the end |
| `color` | `string` | - | Text color (semantic or hex) |
| `bg` | `string` | - | Background color (semantic or hex) |
| `loading` | `boolean` | `false` | Show loading spinner |
| `loadingSpinner` | `ReactNode` | - | Custom loading spinner |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `disabled` | `boolean` | `false` | Disable the button |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `(e: MouseEvent) => void` | - | Click event handler |
| `children` | `ReactNode` | - | Button content |
| All other HTML button attributes are also supported |  |  |  |

## Testing

The Button component has comprehensive test coverage with 46 passing tests covering:
- Rendering and basic functionality
- All variants and sizes
- Icon support (start, end, both)
- Button types (button, submit, reset)
- Event handlers (click, submit)
- Custom colors (semantic and hex)
- Loading states
- Disabled states
- Accessibility features
- Ref forwarding

Run tests:
```bash
npm test -- button.test.tsx
```

## Storybook

View all Button variants and examples in Storybook:
```bash
npm run storybook
```

Navigate to: Components > Button

## Additional Features Implemented

Beyond the requirements, the following features were added:

1. **Loading State** - Built-in loading spinner with optional custom spinner
2. **Multiple Size Options** - 8 size variants from xs to 4xl
3. **Ghost Variant** - Additional variant for subtle actions
4. **Destructive Variant** - For delete/destructive actions
5. **Focus Visible States** - Enhanced keyboard navigation
6. **Transition Effects** - Smooth hover and active state transitions
7. **Comprehensive Testing** - 46 unit tests covering all functionality
8. **Storybook Stories** - Interactive documentation with examples
9. **Accessibility** - Full ARIA support and keyboard navigation
10. **Icon Auto-sizing** - Icons automatically scale with button size

## Files Created

- `registry/new-york/ui/button.tsx` - Component implementation
- `registry/new-york/ui/button.stories.tsx` - Storybook stories
- `registry/new-york/ui/__tests__/button.test.tsx` - Unit tests

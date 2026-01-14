# Paradigm UI

A shadcn registry of reusable, highly composable React components. Extends shadcn/ui with layout primitives, typography, animations, and marketing blocks.

## Installation

Install components directly via the shadcn CLI:

```bash
# Install a free component
npx shadcn@latest add https://paradigm-ui.dev/r/heading.json

# Install a premium component
npx shadcn@latest add https://paradigm-ui.dev/r/flex.json

# Install a hook
npx shadcn@latest add https://paradigm-ui.dev/r/use-disclosure.json
```

Dependencies are automatically resolved - installing `hero` will also install `heading`, `paragraph`, and `social-links`.

## What's Included

Paradigm UI provides components that **extend** shadcn/ui - not replacements for what shadcn already offers. If you need standard components like Dialog, Dropdown, or Tabs, use shadcn directly.

### Layout Primitives (Premium)

Semantic layout components with Tailwind props:

| Component | Description |
|-----------|-------------|
| `Box` | Flexible container with spacing, sizing, and polymorphic rendering |
| `Flex` | Flexbox container with gap, alignment, and direction props |
| `FlexRow` | Horizontal flex container (convenience wrapper) |
| `FlexCol` | Vertical flex container (convenience wrapper) |
| `Grid` | CSS Grid container with cols, rows, and gap props |

### Typography (Free)

Consistent text styling components:

| Component | Description |
|-----------|-------------|
| `Heading` | Semantic heading (h1-h5) with consistent typography |
| `Paragraph` | Body text with consistent styling |
| `Blockquote` | Styled quotes with variants |
| `List` | Bullet, numbered, check, and plain list variants |

### Cards (Free)

Pre-built card variants for common use cases:

| Component | Description |
|-----------|-------------|
| `ProfileCard` | User profile with avatar, name, title, bio |
| `StatsCard` | Statistics display with value, label, trend indicator |
| `TestimonialCard` | Customer testimonials with quote, rating, author |
| `FeatureCard` | Feature highlight with icon, title, description |

### Animation (Premium)

Motion-powered animation components:

| Component | Description |
|-----------|-------------|
| `Appear` | Fade-in/slide-up entrance animation on scroll |
| `SocialLinks` | Animated social media icons with hover effects |

### Navigation (Free)

Enhanced navigation components:

| Component | Description |
|-----------|-------------|
| `LinkButton` | Anchor styled as button with icon support |
| `NavLink` | Navigation link with active states and badges |
| `Steps` | Multi-step progress indicator (dots, numbers, icons) |

### Page Layout (Premium)

Page-level layout components:

| Component | Description |
|-----------|-------------|
| `PageHeader` | Title, breadcrumbs, description, actions |
| `Section` | Page section with title, spacing, background variants |
| `Hero` | Hero section with heading, description, social links |

### Data Display (Premium)

| Component | Description |
|-----------|-------------|
| `CodeBlock` | Syntax highlighting with copy-to-clipboard |
| `Timeline` | Chronological display with status indicators |
| `ProjectCard` | Portfolio card with image, tech stack, links |

### Feedback (Free)

| Component | Description |
|-----------|-------------|
| `Callout` | Alert-style callout (info, warning, success, error) |

### Button (Premium)

Enhanced button with additional variants (outlined, loading state, icons).

### Marketing Blocks (Premium)

| Block | Description |
|-------|-------------|
| `PricingTable` | Responsive pricing tiers with feature lists |
| `CTASection` | Call-to-action with layout variants (centered, split) |

### Hooks (Free)

Reusable React hooks for common UI patterns:

| Hook | Description |
|------|-------------|
| `useDisclosure` | Boolean open/close state with callbacks |
| `useToggle` | Simple boolean toggle |
| `useMediaQuery` | Responsive behavior based on CSS media queries |
| `useIsMobile` | Detects mobile viewport (< 768px) |
| `useClickOutside` | Detects clicks outside an element |
| `useScrollLock` | Prevents body scroll |
| `useFocusTrap` | Traps keyboard focus within a container |

## Quick Start

```tsx
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export function MyPage() {
  return (
    <div>
      <Heading level="h1">Welcome</Heading>
      <Paragraph>Get started with Paradigm UI components.</Paragraph>
    </div>
  )
}
```

### Using Layout Components (Premium)

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { FlexRow } from '@/components/ui/flex-row'

export function Layout() {
  return (
    <FlexCol gap="4" alignItems="center">
      <FlexRow justifyContent="between" className="w-full">
        <h1>Title</h1>
        <button>Action</button>
      </FlexRow>
    </FlexCol>
  )
}
```

### Using Animations (Premium)

```tsx
import { Appear } from '@/components/ui/appear'

export function AnimatedSection() {
  return (
    <Appear duration={0.6} delay={0.2}>
      <h2>Fades in when scrolled into view</h2>
    </Appear>
  )
}
```

### Using Hooks

```tsx
import { useDisclosure } from '@/hooks/use-disclosure'
import { useFocusTrap } from '@/hooks/use-focus-trap'
import { useScrollLock } from '@/hooks/use-scroll-lock'

export function Modal() {
  const { isOpen, open, close } = useDisclosure()
  const modalRef = useRef<HTMLDivElement>(null)

  useFocusTrap(modalRef, isOpen)
  useScrollLock(isOpen)

  return (
    <>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div ref={modalRef} role="dialog">
          <h2>Modal Content</h2>
          <button onClick={close}>Close</button>
        </div>
      )}
    </>
  )
}
```

## Interactive Documentation

View all components with live examples:

```bash
npm run storybook
```

Then open http://localhost:6006

## Requirements

- React 18+
- Tailwind CSS 4+
- TypeScript 5+

## Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Validate registry
node scripts/validate-registry.js

# Build library
npm run build
```

## License

MIT - see LICENSE file for details.

## Credits

Built with:
- [shadcn/ui](https://ui.shadcn.com) - Component architecture
- [Radix UI](https://radix-ui.com) - Accessibility patterns
- [Tailwind CSS](https://tailwindcss.com) - Utility-first styling
- [Motion](https://motion.dev) - Animations

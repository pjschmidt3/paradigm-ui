# Paradigm UI

A modern, composable React component library built on Flexbox primitives and shadcn/ui architecture. 67 production-ready components with free and premium tiers.

## Installation

Install components directly via the shadcn CLI:

```bash
# Install a free component
npx shadcn@latest add https://paradigm-ui.dev/registry.json/heading

# Install a premium component
npx shadcn@latest add https://paradigm-ui.dev/registry.json/flex
```

Dependencies are automatically resolved - installing `hero` will also install `heading`, `paragraph`, and `social-links`.

## Available Components

### Free Tier (58 components)

All standard UI components are free:

**Layout**: accordion, aspect-ratio, card, collapsible, resizable, scroll-area, separator
**Form**: checkbox, input, input-otp, label, radio-group, select, slider, switch, textarea, toggle, toggle-group
**Data Display**: avatar, badge, calendar, carousel, chart, kbd, table
**Feedback**: alert, alert-dialog, dialog, drawer, empty, progress, skeleton, sonner, spinner
**Navigation**: breadcrumb, menubar, navigation-menu, pagination, sidebar, tabs
**Overlay**: command, context-menu, dropdown-menu, hover-card, popover, sheet, tooltip
**Typography**: heading, paragraph

### Premium Tier (9 components)

Enhanced components with advanced features:

**Layout**: box, flex, flex-row, flex-col, grid
**Animation**: appear, social-links
**Composite**: hero, button (advanced)

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
- [Framer Motion](https://www.framer.com/motion/) - Animations

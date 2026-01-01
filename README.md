# Paradigm UI

A modern, composable React component library built on Flexbox primitives and shadcn/ui architecture. Designed for developers who want maximum flexibility without sacrificing developer experience.

## Philosophy

Paradigm UI takes a different approach to component libraries:

- **Composability First**: Low-level primitives that combine into complex UIs
- **Flexbox Mapping**: Intuitive props that map directly to CSS Flexbox properties
- **Type-Safe**: Full TypeScript support with strict mode
- **Tailwind-Native**: Built for Tailwind CSS with class merging utilities
- **shadcn-Compatible**: Works seamlessly with shadcn/ui registry system

## Features

### Layout Primitives
- `<Flex>`, `<FlexRow>`, `<FlexCol>` - Flexbox components with prop-to-class mapping
- `<Box>` - Universal container with layout props
- Supports all Flexbox properties: `alignItems`, `justifyContent`, `gap`, etc.

### Typography Components
- `<Hero>` - Large display text with animations
- `<Heading>` - Semantic heading component with size variants
- `<Paragraph>` - Body text with consistent styling

### Animation Utilities
- `<Appear>` - Viewport-triggered entrance animations
- Built on Framer Motion with sensible defaults
- Supports stagger animations for children

### Social Components
- `<SocialLinks>` - Configurable social media icon links
- Accessible and keyboard-navigable

## Installation

### As a shadcn Registry

Add to your `components.json`:

```json
{
  "registries": {
    "paradigm": "https://raw.githubusercontent.com/yourusername/paradigm-ui/main/registry/{name}.json"
  }
}
```

Then install components:

```bash
npx shadcn@latest add paradigm:flex
npx shadcn@latest add paradigm:appear
```

### Manual Installation

Copy components directly from `registry/new-york/ui/` into your project.

## Usage Examples

### Layout with Flexbox Props

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'

export function Example() {
  return (
    <FlexCol alignItems="center" className="gap-8 p-8">
      <FlexRow justifyContent="between" alignItems="center" className="w-full">
        <h1>Title</h1>
        <button>Action</button>
      </FlexRow>

      <FlexRow className="gap-4">
        <Card>Item 1</Card>
        <Card>Item 2</Card>
      </FlexRow>
    </FlexCol>
  )
}
```

### Entrance Animations

```tsx
import { Appear } from '@/components/ui/appear'

export function AnimatedSection() {
  return (
    <Appear as="section" duration={0.6} delay={0.2}>
      <h2>Fades in when scrolled into view</h2>
      <p>With smooth Y-axis translation</p>
    </Appear>
  )
}
```

### Typography System

```tsx
import { Hero } from '@/components/ui/hero'
import { Paragraph } from '@/components/ui/paragraph'

export function Content() {
  return (
    <>
      <Hero>Build Faster</Hero>
      <Paragraph variant="muted">
        With composable primitives that just work.
      </Paragraph>
    </>
  )
}
```

## Component API

### Flex Components

All flex components accept these props:

| Prop | Type | Maps To |
|------|------|---------|
| `justifyContent` | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `justify-*` |
| `alignItems` | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | `items-*` |
| `alignContent` | Same as `justifyContent` | `content-*` |
| `gap` | Tailwind spacing | `gap-*` |
| `className` | `string` | Additional Tailwind classes |

### Appear Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'div'` | HTML element to render |
| `duration` | `number` | `0.5` | Animation duration in seconds |
| `delay` | `number` | `0` | Delay before animation starts |
| `children` | `ReactNode` | - | Content to animate |

## Requirements

- React 18+
- Tailwind CSS 3+
- TypeScript 5+
- Framer Motion (for animations)

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Contributing

This is a personal component library, but suggestions and issues are welcome! Please open an issue to discuss before submitting PRs.

## License

MIT - see LICENSE file for details

## Credits

Built with inspiration from:
- [shadcn/ui](https://ui.shadcn.com) - Component architecture
- [Radix UI](https://radix-ui.com) - Accessibility patterns
- [Tailwind CSS](https://tailwindcss.com) - Utility-first styling

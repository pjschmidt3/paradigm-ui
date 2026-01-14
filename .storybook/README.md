# Paradigm UI Storybook Configuration

This directory contains the Storybook configuration for paradigm-ui component library.

## Overview

Storybook 8.6.15 is configured with:
- **React + Vite** for fast development
- **TypeScript** support with strict mode
- **Tailwind CSS 4** integration
- **Auto-generated documentation** from component props

## Configuration Files

### `main.ts`
Main Storybook configuration:
- Story file patterns: `registry/**/*.stories.tsx`
- Addons: essentials, interactions, links
- Framework: react-vite
- Path aliases configured for `@/` imports

### `preview.ts`
Preview configuration:
- Tailwind CSS imported
- Light/dark background themes
- Auto-docs enabled for all stories

### `preview.css`
Tailwind CSS imports using `@import 'tailwindcss'` directive.

## Running Storybook

### Development Mode
```bash
npm run storybook
```
Starts Storybook on http://localhost:6006

### Build for Production
```bash
npm run build-storybook
```
Creates a static Storybook build in `storybook-static/`

## Available Stories

### Layout Components

**Grid** (`registry/new-york/ui/grid.stories.tsx`)
- Default
- Two Columns
- Four Columns
- Centered Items
- Asymmetric Gaps
- With Auto Flow
- Defined Rows and Columns
- Responsive Grid
- Playground

**Flex** (`registry/new-york/ui/flex.stories.tsx`)
- Default
- Row
- Column
- Centered Content
- Space Between
- Space Around
- Space Evenly
- Wrapping Items
- Align Stretch
- Column Centered
- Navbar Example
- Playground

**FlexRow** (`registry/new-york/ui/flex-row.stories.tsx`)
- Default
- Navigation Bar
- Card Row
- Centered Content

**FlexCol** (`registry/new-york/ui/flex-col.stories.tsx`)
- Default
- Sidebar Menu
- Form Layout
- Centered Content
- Card Stack

## Writing New Stories

Follow the Component Story Format 3 (CSF3) pattern:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite'
import { YourComponent } from './your-component'

const meta = {
  title: 'Category/ComponentName',
  component: YourComponent,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for component props
  }
} satisfies Meta<typeof YourComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // Default prop values
  }
}
```

## Path Aliases

The following path aliases are configured in `main.ts`:
- `@/` → `/registry/new-york/`
- `@lib` → `/registry/new-york/lib/`
- `@/types` → `/types/`

## Tailwind Integration

Tailwind CSS 4 is fully integrated:
1. `tailwind.config.ts` scans all registry files
2. `preview.css` imports Tailwind
3. All Tailwind utilities available in stories

## TypeScript Configuration

TypeScript is configured via `tsconfig.json` with:
- Strict mode enabled
- Path mappings for `@/` aliases
- React DocGen for automatic prop documentation

## Adding New Components

1. Create your component in `registry/new-york/ui/`
2. Create a `.stories.tsx` file next to it
3. Add comprehensive examples
4. Storybook will auto-discover the stories

## Best Practices

1. **Use Controls**: Define `argTypes` for interactive props
2. **Multiple Stories**: Show different use cases
3. **Playground Story**: Include a playground with all controls
4. **Documentation**: Add JSDoc comments to components
5. **Examples**: Show real-world usage patterns

## Troubleshooting

### Port Already in Use
If port 6006 is occupied:
```bash
npx storybook dev -p 6007
```

### Import Errors
Ensure all components use relative imports (e.g., `./flex`) rather than absolute package imports.

### Tailwind Classes Not Working
1. Check `tailwind.config.ts` content paths
2. Verify `preview.css` is importing Tailwind
3. Restart Storybook dev server

## Upgrading

To upgrade to the latest Storybook version:
```bash
npx storybook@latest upgrade
```

Current version: 8.6.15
Latest available: 10.1.10
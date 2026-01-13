import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid } from './grid'

const meta = {
  argTypes: {
    alignContent: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly']
    },
    alignItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline']
    },
    autoColumns: {
      control: 'select',
      options: ['auto', 'min', 'max', 'fr']
    },
    autoFlow: {
      control: 'select',
      options: ['row', 'col', 'dense', 'row-dense', 'col-dense']
    },
    autoRows: {
      control: 'select',
      options: ['auto', 'min', 'max', 'fr']
    },
    cols: {
      control: 'select',
      description: 'Number of grid columns',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid']
    },
    gap: {
      control: 'select',
      description: 'Gap size between grid items',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    gapX: {
      control: 'select',
      description: 'Horizontal gap size',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    gapY: {
      control: 'select',
      description: 'Vertical gap size',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    justifyContent: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly']
    },
    justifyItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline']
    },
    placeContent: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly']
    },
    placeItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch']
    },
    rows: {
      control: 'select',
      description: 'Number of grid rows',
      options: [1, 2, 3, 4, 5, 6, 'none', 'subgrid']
    }
  },
  component: Grid,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/Grid'
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

// Story helper component for grid items
const GridItem = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-blue-500 text-white p-4 rounded ${className}`}>
    {children}
  </div>
)

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md'
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  )
}

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'lg'
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 3</GridItem>
      <GridItem>Column 4</GridItem>
    </Grid>
  )
}

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'sm'
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 12 }, (_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  )
}

export const CenteredItems: Story = {
  args: {
    cols: 3,
    gap: 'md',
    placeItems: 'center'
  },
  render: (args) => (
    <Grid {...args} className="min-h-[300px]">
      <GridItem>Centered</GridItem>
      <GridItem>Items</GridItem>
      <GridItem>Here</GridItem>
    </Grid>
  )
}

export const AsymmetricGaps: Story = {
  args: {
    cols: 2,
    gapX: 'xl',
    gapY: 'xs'
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Large horizontal gap</GridItem>
      <GridItem>Small vertical gap</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
  )
}

export const WithAutoFlow: Story = {
  args: {
    autoFlow: 'dense',
    cols: 3,
    gap: 'md'
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem className="col-span-2">Wide Item</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem className="col-span-2">Another Wide Item</GridItem>
      <GridItem>Item 5</GridItem>
    </Grid>
  )
}

export const DefinedRowsAndColumns: Story = {
  args: {
    cols: 3,
    gap: 'lg',
    placeItems: 'center',
    rows: 2
  },
  render: (args) => (
    <Grid {...args} className="min-h-[400px]">
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
    </Grid>
  )
}

export const ResponsiveGrid: Story = {
  args: {
    cols: 2,
    gap: 'md'
  },
  render: (args) => (
    <Grid {...args} className="md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i}>
          <div className="text-sm">Item {i + 1}</div>
          <div className="text-xs opacity-75">Responsive</div>
        </GridItem>
      ))}
    </Grid>
  )
}

export const FixedWidthPixels: Story = {
  args: {
    cols: 3,
    gap: 'md',
    width: 600
  },
  name: 'Fixed Width (Pixels)',
  render: (args) => (
    <Grid
      {...args}
      className="border-2 border-dashed border-blue-300">
      <GridItem>600px wide</GridItem>
      <GridItem>Grid container</GridItem>
      <GridItem>Using integer</GridItem>
      <GridItem>Prop value</GridItem>
      <GridItem>width={600}</GridItem>
      <GridItem>Example</GridItem>
    </Grid>
  )
}

export const FixedHeightPixels: Story = {
  args: {
    alignContent: 'center',
    cols: 2,
    gap: 'lg',
    height: 350
  },
  name: 'Fixed Height (Pixels)',
  render: (args) => (
    <Grid
      {...args}
      className="border-2 border-dashed border-blue-300">
      <GridItem>350px height</GridItem>
      <GridItem>Grid container</GridItem>
    </Grid>
  )
}

export const FixedDimensionsPixels: Story = {
  args: {
    cols: 4,
    gap: 'sm',
    height: 400,
    placeContent: 'center',
    placeItems: 'center',
    width: 700
  },
  name: 'Fixed Width & Height (Pixels)',
  render: (args) => (
    <Grid
      {...args}
      className="border-2 border-dashed border-blue-300">
      <GridItem>700 × 400px</GridItem>
      <GridItem>Fixed</GridItem>
      <GridItem>Size</GridItem>
      <GridItem>Grid</GridItem>
    </Grid>
  )
}

export const MixedSizing: Story = {
  args: {
    cols: 3,
    gap: 'md',
    width: 500
  },
  name: 'Mixed String & Integer Sizing',
  render: (args) => (
    <Grid
      {...args}
      className="border-2 border-dashed border-purple-300">
      <GridItem className="min-h-[150px]">width: 500 (pixels)</GridItem>
      <GridItem className="min-h-[150px]">className: min-h-[150px]</GridItem>
      <GridItem className="min-h-[150px]">Mixed approach</GridItem>
    </Grid>
  )
}

export const Playground: Story = {
  args: {
    alignItems: 'stretch',
    cols: 3,
    gap: 'md',
    justifyItems: 'stretch'
  },
  render: (args) => (
    <Grid {...args}>
      <GridItem>Use controls →</GridItem>
      <GridItem>To customize</GridItem>
      <GridItem>This grid</GridItem>
      <GridItem>Play around</GridItem>
      <GridItem>With the props</GridItem>
      <GridItem>Live!</GridItem>
    </Grid>
  )
}

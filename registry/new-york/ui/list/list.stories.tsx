import type { Meta, StoryObj } from '@storybook/react-vite'

import { List } from './list'

const meta = {
  argTypes: {
    spacing: {
      control: 'select',
      description: 'Spacing between items',
      options: ['tight', 'normal', 'relaxed']
    },
    variant: {
      control: 'select',
      description: 'List marker style',
      options: ['bullet', 'numbered', 'check', 'none']
    }
  },
  component: List,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/List'
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

const sampleItems = [
  'First item in the list',
  'Second item with more content',
  'Third item for demonstration'
]

const featureItems = [
  'Fully typed with TypeScript',
  'Tree-shakeable and lightweight',
  'Compatible with shadcn/ui',
  'Dark mode support included'
]

export const Bullet: Story = {
  args: {
    items: sampleItems,
    variant: 'bullet'
  }
}

export const Numbered: Story = {
  args: {
    items: sampleItems,
    variant: 'numbered'
  }
}

export const Check: Story = {
  args: {
    items: featureItems,
    variant: 'check'
  }
}

export const None: Story = {
  args: {
    items: sampleItems,
    variant: 'none'
  }
}

export const TightSpacing: Story = {
  args: {
    items: sampleItems,
    spacing: 'tight',
    variant: 'bullet'
  },
  name: 'Spacing: Tight'
}

export const NormalSpacing: Story = {
  args: {
    items: sampleItems,
    spacing: 'normal',
    variant: 'bullet'
  },
  name: 'Spacing: Normal'
}

export const RelaxedSpacing: Story = {
  args: {
    items: sampleItems,
    spacing: 'relaxed',
    variant: 'bullet'
  },
  name: 'Spacing: Relaxed'
}

export const WithRichContent: Story = {
  args: {
    items: [
      <span key="1">
        <strong>Bold text</strong> with regular text
      </span>,
      <span key="2">
        <em>Italic text</em> for emphasis
      </span>,
      <span key="3">
        <code className="rounded bg-muted px-1 py-0.5 text-sm">inline code</code>{' '}
        in a list item
      </span>
    ],
    variant: 'bullet'
  },
  name: 'With Rich Content'
}

export const FeatureList: Story = {
  args: {
    items: [
      'Zero dependencies beyond React',
      'Accessible by default',
      'Customizable with Tailwind CSS',
      'Production ready'
    ],
    spacing: 'relaxed',
    variant: 'check'
  },
  name: 'Feature List Example'
}

export const VariantComparison: Story = {
  args: {
    items: []
  },
  name: 'Variant Comparison',
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="mb-2 font-semibold">Bullet</h3>
        <List
          items={sampleItems}
          variant="bullet"
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Numbered</h3>
        <List
          items={sampleItems}
          variant="numbered"
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Check</h3>
        <List
          items={sampleItems}
          variant="check"
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">None</h3>
        <List
          items={sampleItems}
          variant="none"
        />
      </div>
    </div>
  )
}

export const SpacingComparison: Story = {
  args: {
    items: []
  },
  name: 'Spacing Comparison',
  render: () => (
    <div className="flex gap-12">
      <div>
        <h3 className="mb-2 font-semibold">Tight</h3>
        <List
          items={sampleItems}
          spacing="tight"
          variant="bullet"
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Normal</h3>
        <List
          items={sampleItems}
          spacing="normal"
          variant="bullet"
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Relaxed</h3>
        <List
          items={sampleItems}
          spacing="relaxed"
          variant="bullet"
        />
      </div>
    </div>
  )
}

export const Playground: Story = {
  args: {
    items: sampleItems,
    spacing: 'normal',
    variant: 'bullet'
  }
}

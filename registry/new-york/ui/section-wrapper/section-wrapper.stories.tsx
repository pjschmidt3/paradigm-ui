import type { Meta, StoryObj } from '@storybook/react-vite'

import { SectionWrapper } from './section-wrapper'
import { Button } from '@registry/button'

const meta = {
  argTypes: {
    background: {
      control: 'select',
      description: 'Background color variant',
      options: ['default', 'muted', 'accent']
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    description: {
      control: 'text',
      description: 'Optional section description'
    },
    divider: {
      control: 'select',
      description: 'Border divider position',
      options: ['none', 'top', 'bottom', 'both']
    },
    id: {
      control: 'text',
      description: 'Section ID for anchor links'
    },
    spacing: {
      control: 'select',
      description: 'Vertical padding size',
      options: ['sm', 'md', 'lg', 'xl']
    },
    title: {
      control: 'text',
      description: 'Optional section title'
    },
    variant: {
      control: 'select',
      description: 'Layout variant',
      options: ['default', 'card', 'inset']
    }
  },
  component: SectionWrapper,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/SectionWrapper'
} satisfies Meta<typeof SectionWrapper>

export default meta
type Story = StoryObj<typeof meta>

const PlaceholderContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-muted rounded-lg p-6 h-32 flex items-center justify-center">
      <span className="text-muted-foreground">Item 1</span>
    </div>
    <div className="bg-muted rounded-lg p-6 h-32 flex items-center justify-center">
      <span className="text-muted-foreground">Item 2</span>
    </div>
    <div className="bg-muted rounded-lg p-6 h-32 flex items-center justify-center">
      <span className="text-muted-foreground">Item 3</span>
    </div>
  </div>
)

export const Default: Story = {
  args: {
    children: <PlaceholderContent />,
    description: 'Browse through our collection of components.',
    title: 'Featured Components'
  }
}

export const CardVariant: Story = {
  args: {
    children: <PlaceholderContent />,
    description: 'This section is wrapped in a card for visual separation.',
    title: 'Card Section',
    variant: 'card'
  },
  name: 'Card Variant'
}

export const InsetVariant: Story = {
  args: {
    background: 'muted',
    children: <PlaceholderContent />,
    description: 'This section breaks out of the container for full-width effect.',
    title: 'Full Width Section',
    variant: 'inset'
  },
  name: 'Inset Variant'
}

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button size="sm" variant="outlined">View All</Button>
        <Button size="sm">Add New</Button>
      </>
    ),
    children: <PlaceholderContent />,
    description: 'Manage your team members and their access levels.',
    title: 'Team Members'
  },
  name: 'With Actions'
}

export const MutedBackground: Story = {
  args: {
    background: 'muted',
    children: <PlaceholderContent />,
    description: 'This section has a muted background for visual contrast.',
    title: 'Highlighted Section'
  },
  name: 'Muted Background'
}

export const AccentBackground: Story = {
  args: {
    background: 'accent',
    children: <PlaceholderContent />,
    description: 'This section uses the accent color as background.',
    title: 'Accent Section'
  },
  name: 'Accent Background'
}

export const WithDividers: Story = {
  args: {
    children: <PlaceholderContent />,
    description: 'This section has dividers above and below.',
    divider: 'both',
    title: 'Bordered Section'
  },
  name: 'With Dividers'
}

export const SmallSpacing: Story = {
  args: {
    children: <PlaceholderContent />,
    description: 'Compact section with reduced padding.',
    spacing: 'sm',
    title: 'Compact Section'
  },
  name: 'Small Spacing'
}

export const LargeSpacing: Story = {
  args: {
    children: <PlaceholderContent />,
    description: 'Section with generous padding.',
    spacing: 'xl',
    title: 'Spacious Section'
  },
  name: 'Large Spacing'
}

export const ContentOnly: Story = {
  args: {
    children: <PlaceholderContent />
  },
  name: 'Content Only (No Header)'
}

export const FullFeatured: Story = {
  args: {
    actions: (
      <>
        <Button size="sm" variant="outlined">Export</Button>
        <Button size="sm">Add Product</Button>
      </>
    ),
    children: <PlaceholderContent />,
    description: 'View and manage all products in your inventory.',
    divider: 'bottom',
    id: 'products-section',
    spacing: 'lg',
    title: 'Products',
    variant: 'default'
  },
  name: 'Full Featured'
}

export const CardWithActions: Story = {
  args: {
    actions: <Button size="sm">Edit Settings</Button>,
    children: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Configure your notification preferences below.
        </p>
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span>Email notifications</span>
          <span className="text-green-500">Enabled</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span>Push notifications</span>
          <span className="text-muted-foreground">Disabled</span>
        </div>
      </div>
    ),
    description: 'Manage how you receive notifications.',
    title: 'Notification Settings',
    variant: 'card'
  },
  name: 'Card With Actions'
}

export const Playground: Story = {
  args: {
    background: 'default',
    children: <PlaceholderContent />,
    description: 'Customize this section to see different configurations.',
    divider: 'none',
    spacing: 'md',
    title: 'Playground Section',
    variant: 'default'
  }
}

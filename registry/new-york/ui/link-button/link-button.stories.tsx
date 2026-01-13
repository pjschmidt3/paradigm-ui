import type { Meta, StoryObj } from '@storybook/react-vite'
import { Download, Settings } from 'lucide-react'

import { LinkButton } from './link-button'

const meta = {
  argTypes: {
    external: {
      control: 'boolean',
      description: 'Opens link in new tab with security attributes'
    },
    iconPosition: {
      control: 'select',
      description: 'Position of the icon relative to text',
      options: ['left', 'right']
    },
    showExternalIcon: {
      control: 'boolean',
      description: 'Show external link icon when external is true'
    },
    size: {
      control: 'select',
      description: 'Button size',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']
    },
    variant: {
      control: 'select',
      description: 'Visual style variant',
      options: ['default', 'destructive', 'ghost', 'link', 'outlined']
    }
  },
  component: LinkButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/LinkButton'
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Learn More',
    href: '/about'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Settings',
    href: '/settings',
    icon: Settings
  }
}

export const IconRight: Story = {
  args: {
    children: 'Download',
    href: '/download',
    icon: Download,
    iconPosition: 'right'
  },
  name: 'Icon on Right'
}

export const ExternalLinkStory: Story = {
  args: {
    children: 'Visit Website',
    external: true,
    href: 'https://example.com'
  },
  name: 'External Link'
}

export const ExternalNoIcon: Story = {
  args: {
    children: 'External (No Icon)',
    external: true,
    href: 'https://example.com',
    showExternalIcon: false
  },
  name: 'External Without Icon'
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Link',
    href: '/ghost',
    variant: 'ghost'
  }
}

export const Outlined: Story = {
  args: {
    children: 'Outlined Link',
    href: '/outlined',
    variant: 'outlined'
  }
}

export const LinkVariant: Story = {
  args: {
    children: 'Text Link',
    href: '/link',
    variant: 'link'
  },
  name: 'Link Style'
}

export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    href: '/delete',
    variant: 'destructive'
  }
}

export const Sizes: Story = {
  args: {
    children: '',
    href: '#'
  },
  name: 'Size Comparison',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <LinkButton href="#" size="xs">
        Extra Small
      </LinkButton>
      <LinkButton href="#" size="sm">
        Small
      </LinkButton>
      <LinkButton href="#" size="md">
        Medium
      </LinkButton>
      <LinkButton href="#" size="lg">
        Large
      </LinkButton>
      <LinkButton href="#" size="xl">
        Extra Large
      </LinkButton>
    </div>
  )
}

export const VariantComparison: Story = {
  args: {
    children: '',
    href: '#'
  },
  name: 'Variant Comparison',
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <LinkButton href="#" variant="default">
        Default
      </LinkButton>
      <LinkButton href="#" variant="outlined">
        Outlined
      </LinkButton>
      <LinkButton href="#" variant="ghost">
        Ghost
      </LinkButton>
      <LinkButton href="#" variant="link">
        Link
      </LinkButton>
      <LinkButton href="#" variant="destructive">
        Destructive
      </LinkButton>
    </div>
  )
}

export const Playground: Story = {
  args: {
    children: 'Click Me',
    external: false,
    href: '/playground',
    iconPosition: 'left',
    showExternalIcon: true,
    size: 'md',
    variant: 'default'
  }
}

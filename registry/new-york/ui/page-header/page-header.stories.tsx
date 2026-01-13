import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from './page-header'
import { Button } from '@registry/button'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    description: {
      control: 'text',
      description: 'Optional description text below title'
    },
    divider: {
      control: 'boolean',
      description: 'Show bottom border divider'
    },
    title: {
      control: 'text',
      description: 'Page title (required)'
    },
    variant: {
      control: 'select',
      description: 'Layout variant',
      options: ['default', 'centered', 'compact']
    }
  },
  component: PageHeader,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/PageHeader'
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'Manage your account settings and preferences.',
    title: 'Settings'
  }
}

export const WithBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { href: '/', label: 'Home' },
      { href: '/products', label: 'Products' },
      { label: 'Widget Pro' }
    ],
    description: 'View and manage product details.',
    title: 'Widget Pro'
  },
  name: 'With Breadcrumbs'
}

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button size="sm" variant="outlined">Cancel</Button>
        <Button size="sm">Save Changes</Button>
      </>
    ),
    description: 'Edit your profile information.',
    title: 'Edit Profile'
  },
  name: 'With Actions'
}

export const WithBadge: Story = {
  args: {
    badge: { label: 'Beta', variant: 'secondary' },
    description: 'Try out our new experimental feature.',
    title: 'New Feature'
  },
  name: 'With Badge'
}

export const WithBackLink: Story = {
  args: {
    backLink: { href: '/projects', label: 'Back to Projects' },
    description: 'View and edit project details.',
    title: 'Project Details'
  },
  name: 'With Back Link'
}

export const Centered: Story = {
  args: {
    actions: (
      <Button>Get Started</Button>
    ),
    description: 'Learn more about our platform and how we can help you build amazing products.',
    title: 'Welcome to Paradigm UI',
    variant: 'centered'
  },
  name: 'Centered Layout'
}

export const Compact: Story = {
  args: {
    actions: (
      <Button size="sm">Edit</Button>
    ),
    title: 'Quick Settings',
    variant: 'compact'
  },
  name: 'Compact Layout'
}

export const WithDivider: Story = {
  args: {
    description: 'Configure your application settings.',
    divider: true,
    title: 'Application Settings'
  },
  name: 'With Divider'
}

export const FullFeatured: Story = {
  args: {
    actions: (
      <>
        <Button size="sm" variant="outlined">Discard</Button>
        <Button size="sm">Publish</Button>
      </>
    ),
    badge: { label: 'Draft', variant: 'outline' },
    breadcrumbs: [
      { href: '/', label: 'Dashboard' },
      { href: '/posts', label: 'Blog Posts' },
      { label: 'Edit Post' }
    ],
    description: 'Make changes to your blog post before publishing.',
    divider: true,
    title: 'Edit Blog Post'
  },
  name: 'Full Featured'
}

export const Playground: Story = {
  args: {
    badge: { label: 'New' },
    breadcrumbs: [
      { href: '/', label: 'Home' },
      { label: 'Current Page' }
    ],
    description: 'Customize this page header to see different configurations.',
    divider: false,
    title: 'Playground Page',
    variant: 'default'
  }
}

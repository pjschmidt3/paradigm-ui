import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Bell,
  Home,
  Inbox,
  MessageSquare,
  Settings,
  User
} from 'lucide-react'

import { NavLink } from './nav-link'

const meta = {
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the link represents the current page'
    },
    badge: {
      control: 'text',
      description: 'Optional badge count or text to display'
    }
  },
  component: NavLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/NavLink'
} satisfies Meta<typeof NavLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Dashboard',
    href: '/dashboard'
  }
}

export const Active: Story = {
  args: {
    active: true,
    children: 'Dashboard',
    href: '/dashboard'
  }
}

export const WithIcon: Story = {
  args: {
    children: 'Home',
    href: '/home',
    icon: Home
  }
}

export const WithIconActive: Story = {
  args: {
    active: true,
    children: 'Home',
    href: '/home',
    icon: Home
  },
  name: 'With Icon (Active)'
}

export const WithBadge: Story = {
  args: {
    badge: 5,
    children: 'Notifications',
    href: '/notifications'
  }
}

export const WithIconAndBadge: Story = {
  args: {
    badge: 12,
    children: 'Messages',
    href: '/messages',
    icon: MessageSquare
  },
  name: 'With Icon and Badge'
}

export const TextBadge: Story = {
  args: {
    badge: 'New',
    children: 'Features',
    href: '/features'
  },
  name: 'Text Badge'
}

export const NavigationExample: Story = {
  args: {
    children: '',
    href: '#'
  },
  name: 'Navigation Menu Example',
  render: () => (
    <nav className="flex w-64 flex-col gap-1">
      <NavLink active href="/dashboard" icon={Home}>
        Dashboard
      </NavLink>
      <NavLink badge={3} href="/inbox" icon={Inbox}>
        Inbox
      </NavLink>
      <NavLink href="/notifications" icon={Bell}>
        Notifications
      </NavLink>
      <NavLink badge="New" href="/messages" icon={MessageSquare}>
        Messages
      </NavLink>
      <NavLink href="/profile" icon={User}>
        Profile
      </NavLink>
      <NavLink href="/settings" icon={Settings}>
        Settings
      </NavLink>
    </nav>
  )
}

export const StateComparison: Story = {
  args: {
    children: '',
    href: '#'
  },
  name: 'Active vs Inactive',
  render: () => (
    <div className="flex flex-col gap-2">
      <NavLink href="/inactive" icon={Home}>
        Inactive Link
      </NavLink>
      <NavLink active href="/active" icon={Home}>
        Active Link
      </NavLink>
    </div>
  )
}

export const Playground: Story = {
  args: {
    active: false,
    badge: undefined,
    children: 'Navigation Link',
    href: '/playground'
  }
}

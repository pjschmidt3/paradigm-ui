import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProfileCard } from './profile-card'

const meta = {
  argTypes: {
    actions: {
      control: false,
      description: 'Actions to display in the footer (e.g., buttons)'
    },
    avatar: {
      control: 'text',
      description: 'URL of the avatar image'
    },
    bio: {
      control: 'text',
      description: 'Optional biographical text'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    name: {
      control: 'text',
      description: 'Full name of the person'
    },
    title: {
      control: 'text',
      description: 'Job title or role'
    }
  },
  component: ProfileCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Cards/ProfileCard'
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'John Doe',
    title: 'Software Engineer'
  }
}

export const WithAvatar: Story = {
  args: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    name: 'John Doe',
    title: 'Software Engineer'
  },
  name: 'With Avatar'
}

export const WithBio: Story = {
  args: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Passionate about building great products and solving complex problems. 10+ years of experience in web development.',
    name: 'John Doe',
    title: 'Senior Software Engineer'
  },
  name: 'With Bio'
}

export const WithActions: Story = {
  args: {
    actions: (
      <div className="flex gap-2">
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" type="button">
          Follow
        </button>
        <button className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium" type="button">
          Message
        </button>
      </div>
    ),
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Building the future of web development.',
    name: 'John Doe',
    title: 'Tech Lead'
  },
  name: 'With Actions'
}

export const MinimalNameOnly: Story = {
  args: {
    name: 'Jane Smith'
  },
  name: 'Minimal (Name Only)'
}

export const FullProfile: Story = {
  args: {
    actions: (
      <div className="flex gap-2">
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" type="button">
          Connect
        </button>
        <button className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium" type="button">
          View Profile
        </button>
      </div>
    ),
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Product designer with a passion for creating beautiful and functional user experiences. Currently designing at a leading tech company.',
    name: 'Sarah Johnson',
    title: 'Senior Product Designer'
  },
  name: 'Full Profile'
}

export const Playground: Story = {
  args: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'A short bio about this person.',
    name: 'John Doe',
    title: 'Software Engineer'
  }
}

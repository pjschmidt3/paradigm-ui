import type { Meta, StoryObj } from '@storybook/react-vite'

import { Code2, Globe } from 'lucide-react'

import { ProjectCard } from './project-card'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    description: {
      control: 'text',
      description: 'Project description'
    },
    featured: {
      control: 'boolean',
      description: 'Whether this is a featured project'
    },
    title: {
      control: 'text',
      description: 'Project title'
    },
    variant: {
      control: 'select',
      description: 'Layout variant',
      options: ['default', 'horizontal', 'overlay']
    }
  },
  component: ProjectCard,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Portfolio/ProjectCard'
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description:
      'A full-stack e-commerce platform with real-time inventory management and Stripe integration.',
    image: {
      alt: 'E-commerce platform screenshot',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', icon: <Globe className="size-4" />, label: 'Live Demo' },
      { href: 'https://github.com', icon: <Code2 className="size-4" />, label: 'GitHub' }
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    title: 'E-commerce Platform'
  }
}

export const Horizontal: Story = {
  args: {
    description:
      'A collaborative task management application with real-time updates, team workspaces, and productivity analytics.',
    image: {
      alt: 'Task management app',
      src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', icon: <Globe className="size-4" />, label: 'Live Demo' },
      { href: 'https://github.com', icon: <Code2 className="size-4" />, label: 'Source' }
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
    title: 'Task Management App',
    variant: 'horizontal'
  },
  name: 'Horizontal Layout'
}

export const Overlay: Story = {
  args: {
    description:
      'Personal portfolio website showcasing my work and skills as a full-stack developer.',
    image: {
      alt: 'Portfolio website',
      src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', label: 'Visit Site' }
    ],
    tags: ['React', 'Tailwind CSS', 'Motion'],
    title: 'Portfolio Website',
    variant: 'overlay'
  },
  name: 'Overlay Layout'
}

export const Featured: Story = {
  args: {
    description:
      'An AI-powered code review assistant that integrates with GitHub to provide automated code analysis and suggestions.',
    featured: true,
    image: {
      alt: 'AI Code Review Tool',
      src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', icon: <Globe className="size-4" />, label: 'Try It' },
      { href: 'https://github.com', icon: <Code2 className="size-4" />, label: 'GitHub' }
    ],
    tags: ['Python', 'OpenAI', 'GitHub API', 'FastAPI'],
    title: 'AI Code Review Tool'
  },
  name: 'Featured Project'
}

export const WithTechStack: Story = {
  args: {
    description: 'Modern web application built with cutting-edge technologies.',
    image: {
      alt: 'Tech stack demo',
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop'
    },
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Docker'
    ],
    title: 'Full-Stack Application'
  },
  name: 'With Tech Stack Tags'
}

export const MinimalNoImage: Story = {
  args: {
    description:
      'A collection of reusable React hooks for common UI patterns and state management.',
    links: [
      { href: 'https://github.com', icon: <Code2 className="size-4" />, label: 'View on GitHub' }
    ],
    tags: ['React', 'TypeScript', 'npm'],
    title: 'React Hooks Library'
  },
  name: 'Without Image'
}

export const FeaturedHorizontal: Story = {
  args: {
    description:
      'A comprehensive dashboard for monitoring and analyzing real-time data streams with customizable widgets and alerts.',
    featured: true,
    image: {
      alt: 'Analytics Dashboard',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', icon: <Globe className="size-4" />, label: 'Demo' },
      { href: 'https://github.com', icon: <Code2 className="size-4" />, label: 'Code' }
    ],
    tags: ['Vue.js', 'D3.js', 'WebSocket', 'MongoDB'],
    title: 'Real-Time Analytics Dashboard',
    variant: 'horizontal'
  },
  name: 'Featured Horizontal'
}

export const Playground: Story = {
  args: {
    description: 'Customize this project card to see different configurations.',
    featured: false,
    image: {
      alt: 'Playground project',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop'
    },
    links: [
      { href: 'https://example.com', label: 'Demo' },
      { href: 'https://github.com', label: 'Source' }
    ],
    tags: ['React', 'TypeScript'],
    title: 'Playground Project',
    variant: 'default'
  }
}

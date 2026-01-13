import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BarChart3,
  Cloud,
  Lock,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Zap
} from 'lucide-react'

import { FeatureCard } from './feature-card'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    description: {
      control: 'text',
      description: 'Description text'
    },
    href: {
      control: 'text',
      description: 'Optional link URL - makes entire card clickable'
    },
    icon: {
      control: false,
      description: 'Icon component (Lucide icon)'
    },
    title: {
      control: 'text',
      description: 'Feature title'
    }
  },
  component: FeatureCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Cards/FeatureCard'
} satisfies Meta<typeof FeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'Lightning fast performance with optimized rendering and caching strategies.',
    icon: Zap,
    title: 'Blazing Fast'
  }
}

export const WithLink: Story = {
  args: {
    description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    href: '/features/security',
    icon: Shield,
    title: 'Secure by Default'
  },
  name: 'With Link'
}

export const Analytics: Story = {
  args: {
    description: 'Comprehensive analytics and insights to track your progress.',
    icon: BarChart3,
    title: 'Advanced Analytics'
  }
}

export const CloudFeature: Story = {
  args: {
    description: 'Seamless cloud integration with automatic syncing across devices.',
    icon: Cloud,
    title: 'Cloud Native'
  },
  name: 'Cloud Feature'
}

export const AIFeature: Story = {
  args: {
    description: 'Powered by AI to provide intelligent suggestions and automation.',
    icon: Sparkles,
    title: 'AI Powered'
  },
  name: 'AI Feature'
}

export const FeatureGrid: Story = {
  args: {
    description: 'Lightning fast performance',
    icon: Zap,
    title: 'Blazing Fast'
  },
  name: 'Feature Grid',
  render: () => (
    <div className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        description="Lightning fast performance with optimized rendering."
        href="/features/performance"
        icon={Zap}
        title="Blazing Fast"
      />
      <FeatureCard
        description="Enterprise-grade security with end-to-end encryption."
        href="/features/security"
        icon={Shield}
        title="Secure"
      />
      <FeatureCard
        description="Seamless cloud integration with automatic syncing."
        href="/features/cloud"
        icon={Cloud}
        title="Cloud Native"
      />
      <FeatureCard
        description="Comprehensive analytics to track your progress."
        href="/features/analytics"
        icon={BarChart3}
        title="Analytics"
      />
      <FeatureCard
        description="AI-powered suggestions and intelligent automation."
        href="/features/ai"
        icon={Sparkles}
        title="AI Powered"
      />
      <FeatureCard
        description="Flexible settings to customize your experience."
        href="/features/settings"
        icon={Settings}
        title="Customizable"
      />
    </div>
  )
}

export const MarketingSection: Story = {
  args: {
    description: 'Get started quickly',
    icon: Rocket,
    title: 'Quick Start'
  },
  name: 'Marketing Section',
  render: () => (
    <div className="max-w-5xl space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-muted-foreground mt-2">Everything you need to succeed</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          description="Get up and running in minutes with our intuitive setup."
          icon={Rocket}
          title="Quick Start"
        />
        <FeatureCard
          description="Your data is protected with industry-leading security."
          icon={Lock}
          title="Secure"
        />
        <FeatureCard
          description="Optimized for speed at every level of the stack."
          icon={Zap}
          title="Fast"
        />
        <FeatureCard
          description="AI features to boost your productivity."
          icon={Sparkles}
          title="Smart"
        />
      </div>
    </div>
  )
}

export const Playground: Story = {
  args: {
    description: 'This is a description of the feature that explains what it does.',
    href: '/features/example',
    icon: Zap,
    title: 'Feature Title'
  }
}

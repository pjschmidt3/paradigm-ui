import type { Meta, StoryObj } from '@storybook/react-vite'

import { CTASection } from './cta-section'

const meta = {
  argTypes: {
    background: {
      control: 'select',
      description: 'Background style variant',
      options: ['default', 'muted', 'primary', 'gradient']
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    description: {
      control: 'text',
      description: 'Supporting description text'
    },
    heading: {
      control: 'text',
      description: 'Main heading text'
    },
    primaryAction: {
      control: 'object',
      description: 'Primary CTA button configuration'
    },
    secondaryAction: {
      control: 'object',
      description: 'Optional secondary action button'
    },
    variant: {
      control: 'select',
      description: 'Layout variant',
      options: ['default', 'centered', 'split']
    }
  },
  component: CTASection,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  title: 'Marketing/CTASection'
} satisfies Meta<typeof CTASection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'Join thousands of developers building amazing products with our platform.',
    heading: 'Ready to get started?',
    primaryAction: { label: 'Get Started Free' },
    secondaryAction: { label: 'Learn More' }
  }
}

export const Centered: Story = {
  args: {
    description: 'Start your free trial today. No credit card required.',
    heading: 'Transform your workflow',
    primaryAction: { label: 'Start Free Trial' },
    secondaryAction: { label: 'Schedule Demo' },
    variant: 'centered'
  }
}

export const Split: Story = {
  args: {
    description: 'Get personalized recommendations and pricing for your team.',
    heading: 'Need help choosing a plan?',
    primaryAction: { label: 'Contact Sales' },
    secondaryAction: { label: 'View Pricing' },
    variant: 'split'
  }
}

export const MutedBackground: Story = {
  args: {
    background: 'muted',
    description: 'Subscribe to our newsletter for the latest updates and tips.',
    heading: 'Stay in the loop',
    primaryAction: { label: 'Subscribe' },
    variant: 'centered'
  },
  name: 'Muted Background'
}

export const PrimaryBackground: Story = {
  args: {
    background: 'primary',
    description: 'Limited time offer - get 50% off your first year.',
    heading: 'Special Offer',
    primaryAction: { label: 'Claim Offer' },
    secondaryAction: { label: 'See Details' },
    variant: 'centered'
  },
  name: 'Primary Background'
}

export const GradientBackground: Story = {
  args: {
    background: 'gradient',
    description: 'Experience the future of product development with AI-powered tools.',
    heading: 'Build faster with AI',
    primaryAction: { label: 'Try Now' },
    secondaryAction: { label: 'Watch Demo' },
    variant: 'centered'
  },
  name: 'Gradient Background'
}

export const SingleAction: Story = {
  args: {
    description: 'Questions? Our team is here to help.',
    heading: 'Get in touch',
    primaryAction: { label: 'Contact Us' }
  },
  name: 'Single Action'
}

export const AllVariants: Story = {
  args: {
    heading: 'Ready to start?',
    primaryAction: { label: 'Get Started' }
  },
  name: 'All Variants',
  render: () => (
    <div className="space-y-8">
      <CTASection
        description="Default variant with left-aligned text and buttons on the right."
        heading="Default Layout"
        primaryAction={{ label: 'Get Started' }}
        secondaryAction={{ label: 'Learn More' }}
        variant="default"
      />
      <CTASection
        background="muted"
        description="Centered variant with stacked buttons below the text."
        heading="Centered Layout"
        primaryAction={{ label: 'Start Free Trial' }}
        secondaryAction={{ label: 'Schedule Demo' }}
        variant="centered"
      />
      <CTASection
        background="gradient"
        description="Split variant with two-column layout."
        heading="Split Layout"
        primaryAction={{ label: 'Contact Sales' }}
        secondaryAction={{ label: 'View Pricing' }}
        variant="split"
      />
    </div>
  )
}

export const Playground: Story = {
  args: {
    background: 'default',
    description: 'Join thousands of users who trust our platform.',
    heading: 'Ready to get started?',
    primaryAction: { label: 'Get Started' },
    secondaryAction: { label: 'Learn More' },
    variant: 'default'
  }
}

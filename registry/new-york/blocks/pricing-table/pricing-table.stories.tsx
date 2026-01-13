import type { Meta, StoryObj } from '@storybook/react-vite'

import { PricingTable, PricingTier } from './pricing-table'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    tiers: {
      control: 'object',
      description: 'Array of pricing tier configurations'
    }
  },
  component: PricingTable,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Marketing/PricingTable'
} satisfies Meta<typeof PricingTable>

export default meta
type Story = StoryObj<typeof meta>

const defaultTiers = [
  {
    cta: { label: 'Get Started' },
    description: 'Perfect for individuals',
    features: [
      '5 projects',
      '1GB storage',
      'Basic analytics',
      'Email support'
    ],
    name: 'Starter',
    period: 'month',
    price: 9
  },
  {
    cta: { label: 'Start Free Trial' },
    description: 'Best for growing teams',
    features: [
      'Unlimited projects',
      '10GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations'
    ],
    name: 'Pro',
    period: 'month',
    popular: true,
    price: 29
  },
  {
    cta: { label: 'Contact Sales' },
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated account manager',
      'Custom SLA',
      'On-premise deployment'
    ],
    name: 'Enterprise',
    period: 'month',
    price: 'Custom'
  }
]

export const Default: Story = {
  args: {
    tiers: defaultTiers
  }
}

export const TwoTiers: Story = {
  args: {
    tiers: [
      {
        cta: { label: 'Get Started' },
        description: 'For personal use',
        features: [
          '3 projects',
          '500MB storage',
          'Basic support'
        ],
        name: 'Free',
        price: 'Free'
      },
      {
        cta: { label: 'Upgrade Now' },
        description: 'For professionals',
        features: [
          'Unlimited projects',
          '50GB storage',
          'Priority support',
          'API access'
        ],
        name: 'Pro',
        period: 'month',
        popular: true,
        price: 19
      }
    ]
  },
  name: 'Two-Tier Comparison'
}

export const PopularHighlighted: Story = {
  args: {
    tiers: defaultTiers
  },
  name: 'With Popular Highlight'
}

export const YearlyPricing: Story = {
  args: {
    tiers: [
      {
        cta: { label: 'Get Started' },
        description: 'Billed annually',
        features: [
          '5 projects',
          '1GB storage',
          'Email support'
        ],
        name: 'Basic',
        period: 'year',
        price: 99
      },
      {
        cta: { label: 'Subscribe' },
        description: 'Billed annually',
        features: [
          'Unlimited projects',
          '10GB storage',
          'Priority support',
          'Advanced features'
        ],
        name: 'Pro',
        period: 'year',
        popular: true,
        price: 299
      },
      {
        cta: { label: 'Contact Us' },
        description: 'Custom billing',
        features: [
          'Everything in Pro',
          'Unlimited storage',
          'Dedicated support',
          'Custom solutions'
        ],
        name: 'Enterprise',
        price: 'Custom'
      }
    ]
  },
  name: 'Yearly Pricing'
}

export const SingleTier: Story = {
  args: {
    tiers: []
  },
  name: 'Single Tier',
  render: () => (
    <div className="mx-auto max-w-sm">
      <PricingTier
        cta={{ label: 'Subscribe Now' }}
        description="Everything you need to get started"
        features={[
          'Unlimited projects',
          '10GB storage',
          'Priority email support',
          'Advanced analytics',
          'Custom integrations'
        ]}
        name="Pro Plan"
        period="month"
        popular
        price={29}
      />
    </div>
  )
}

export const Playground: Story = {
  args: {
    tiers: defaultTiers
  }
}

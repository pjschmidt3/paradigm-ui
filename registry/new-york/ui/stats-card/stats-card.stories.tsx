import type { Meta, StoryObj } from '@storybook/react-vite'
import { DollarSign, ShoppingCart, TrendingUp, Users } from 'lucide-react'

import { StatsCard } from './stats-card'

const meta = {
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    icon: {
      control: false,
      description: 'Optional icon component (Lucide icon)'
    },
    label: {
      control: 'text',
      description: 'Label describing the statistic'
    },
    trend: {
      control: 'object',
      description: 'Trend indicator with direction and percentage'
    },
    value: {
      control: 'text',
      description: 'The main statistic value'
    }
  },
  component: StatsCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Cards/StatsCard'
} satisfies Meta<typeof StatsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Total Users',
    value: '12,345'
  }
}

export const WithIcon: Story = {
  args: {
    icon: Users,
    label: 'Total Users',
    value: '12,345'
  },
  name: 'With Icon'
}

export const TrendUp: Story = {
  args: {
    icon: TrendingUp,
    label: 'Monthly Growth',
    trend: { direction: 'up', value: 12.5 },
    value: '24.8%'
  },
  name: 'Trend Up'
}

export const TrendDown: Story = {
  args: {
    icon: ShoppingCart,
    label: 'Cart Abandonment',
    trend: { direction: 'down', value: 8.2 },
    value: '32%'
  },
  name: 'Trend Down'
}

export const TrendNeutral: Story = {
  args: {
    icon: Users,
    label: 'Active Users',
    trend: { direction: 'neutral', value: 0 },
    value: '1,234'
  },
  name: 'Trend Neutral'
}

export const Revenue: Story = {
  args: {
    icon: DollarSign,
    label: 'Total Revenue',
    trend: { direction: 'up', value: 23.5 },
    value: '$45,231'
  },
  name: 'Revenue Example'
}

export const NumericValue: Story = {
  args: {
    icon: Users,
    label: 'New Signups',
    trend: { direction: 'up', value: 18 },
    value: 892
  },
  name: 'Numeric Value'
}

export const StatsGrid: Story = {
  args: {
    label: 'Total Users',
    value: '12,345'
  },
  name: 'Stats Grid',
  render: () => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <StatsCard
        icon={Users}
        label="Total Users"
        trend={{ direction: 'up', value: 12 }}
        value="12,345"
      />
      <StatsCard
        icon={DollarSign}
        label="Revenue"
        trend={{ direction: 'up', value: 8.2 }}
        value="$45,231"
      />
      <StatsCard
        icon={ShoppingCart}
        label="Orders"
        trend={{ direction: 'down', value: 3.1 }}
        value="1,234"
      />
      <StatsCard
        icon={TrendingUp}
        label="Conversion"
        trend={{ direction: 'neutral', value: 0 }}
        value="3.2%"
      />
    </div>
  )
}

export const Playground: Story = {
  args: {
    icon: Users,
    label: 'Total Users',
    trend: { direction: 'up', value: 12 },
    value: '12,345'
  }
}

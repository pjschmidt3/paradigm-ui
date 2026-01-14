import type { Meta, StoryObj } from '@storybook/react-vite'

import { Steps } from './steps'

const basicSteps = [
  { label: 'Account' },
  { label: 'Details' },
  { label: 'Review' },
  { label: 'Complete' }
]

const stepsWithDescriptions = [
  { description: 'Create your account', label: 'Account' },
  { description: 'Enter your information', label: 'Details' },
  { description: 'Review your order', label: 'Review' },
  { description: 'Order confirmed', label: 'Complete' }
]

const meta = {
  argTypes: {
    currentStep: {
      control: { max: 3, min: 0, type: 'number' },
      description: 'Current step index (0-indexed)'
    },
    orientation: {
      control: 'select',
      description: 'Layout orientation',
      options: ['horizontal', 'vertical']
    },
    size: {
      control: 'select',
      description: 'Step circle size',
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: 'select',
      description: 'Visual variant for step display',
      options: ['dots', 'numbers', 'icons']
    }
  },
  component: Steps,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Steps'
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: basicSteps
  }
}

export const WithDescriptions: Story = {
  args: {
    currentStep: 1,
    steps: stepsWithDescriptions
  },
  name: 'With Descriptions'
}

export const FirstStep: Story = {
  args: {
    currentStep: 0,
    steps: basicSteps
  },
  name: 'At First Step'
}

export const LastStep: Story = {
  args: {
    currentStep: 3,
    steps: basicSteps
  },
  name: 'At Last Step'
}

export const AllComplete: Story = {
  args: {
    currentStep: 4,
    steps: basicSteps
  },
  name: 'All Steps Complete'
}

export const DotsVariant: Story = {
  args: {
    currentStep: 1,
    steps: basicSteps,
    variant: 'dots'
  },
  name: 'Dots Variant'
}

export const IconsVariant: Story = {
  args: {
    currentStep: 2,
    steps: basicSteps,
    variant: 'icons'
  },
  name: 'Icons Variant'
}

export const Vertical: Story = {
  args: {
    currentStep: 1,
    orientation: 'vertical',
    steps: stepsWithDescriptions
  }
}

export const VerticalIcons: Story = {
  args: {
    currentStep: 2,
    orientation: 'vertical',
    steps: stepsWithDescriptions,
    variant: 'icons'
  },
  name: 'Vertical with Icons'
}

export const SmallSize: Story = {
  args: {
    currentStep: 1,
    size: 'sm',
    steps: basicSteps
  },
  name: 'Small Size'
}

export const LargeSize: Story = {
  args: {
    currentStep: 1,
    size: 'lg',
    steps: basicSteps
  },
  name: 'Large Size'
}

export const VariantComparison: Story = {
  args: {
    currentStep: 2,
    steps: basicSteps
  },
  name: 'Variant Comparison',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Numbers (default)</p>
        <Steps currentStep={2} steps={basicSteps} variant="numbers" />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Icons</p>
        <Steps currentStep={2} steps={basicSteps} variant="icons" />
      </div>
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Dots</p>
        <Steps currentStep={2} steps={basicSteps} variant="dots" />
      </div>
    </div>
  )
}

export const CheckoutFlow: Story = {
  args: {
    currentStep: 1,
    steps: [
      { description: 'Items in your cart', label: 'Cart' },
      { description: 'Where to deliver', label: 'Shipping' },
      { description: 'How to pay', label: 'Payment' },
      { description: 'Place your order', label: 'Confirm' }
    ]
  },
  name: 'Checkout Flow Example'
}

export const OnboardingFlow: Story = {
  args: {
    currentStep: 0,
    orientation: 'vertical',
    steps: [
      { description: 'Tell us about yourself', label: 'Profile' },
      { description: 'Connect your accounts', label: 'Integrations' },
      { description: 'Invite your colleagues', label: 'Team' },
      { description: 'You\'re all set!', label: 'Finish' }
    ],
    variant: 'icons'
  },
  name: 'Onboarding Flow Example'
}

export const Playground: Story = {
  args: {
    currentStep: 1,
    orientation: 'horizontal',
    size: 'md',
    steps: stepsWithDescriptions,
    variant: 'numbers'
  }
}

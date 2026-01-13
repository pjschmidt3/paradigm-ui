import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from './heading'

const meta = {
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to display inside the heading'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the heading'
    },
    level: {
      control: 'select',
      description: 'The heading level (1-5), determines the HTML element (h1-h5) and styling',
      options: [1, 2, 3, 4, 5]
    }
  },
  component: Heading,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Heading'
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

// Heading levels
export const Level1: Story = {
  args: {
    children: 'Heading Level 1',
    level: 1
  },
  name: 'Level 1 (h1)'
}

export const Level2: Story = {
  args: {
    children: 'Heading Level 2',
    level: 2
  },
  name: 'Level 2 (h2)'
}

export const Level3: Story = {
  args: {
    children: 'Heading Level 3',
    level: 3
  },
  name: 'Level 3 (h3)'
}

export const Level4: Story = {
  args: {
    children: 'Heading Level 4',
    level: 4
  },
  name: 'Level 4 (h4)'
}

export const Level5: Story = {
  args: {
    children: 'Heading Level 5',
    level: 5
  },
  name: 'Level 5 (h5)'
}

// With custom className
export const WithCustomClassName: Story = {
  args: {
    children: 'Custom Styled Heading',
    className: 'text-blue-500 italic',
    level: 1
  },
  name: 'With Custom ClassName'
}

// All levels comparison
export const AllLevels: Story = {
  name: 'All Levels Comparison',
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
    </div>
  )
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Heading Text',
    level: 1
  },
  render: (args) => <Heading {...args} />
}

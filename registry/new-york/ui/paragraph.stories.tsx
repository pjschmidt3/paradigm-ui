import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from './paragraph'

const meta = {
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to display inside the paragraph'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the paragraph'
    }
  },
  component: Paragraph,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Paragraph'
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

// Default
export const Default: Story = {
  args: {
    children:
      'This is a paragraph component with default styling. It uses a monospace font with light weight for a clean, readable appearance.'
  }
}

// With custom className
export const WithCustomClassName: Story = {
  args: {
    children: 'This paragraph has custom styling applied via className.',
    className: 'text-blue-500 font-bold text-xl'
  },
  name: 'With Custom ClassName'
}

// Long text
export const LongText: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  name: 'Long Text'
}

// Multiple paragraphs example
export const MultipleParagraphs: Story = {
  name: 'Multiple Paragraphs',
  render: () => (
    <div className="flex max-w-lg flex-col gap-4">
      <Paragraph>
        First paragraph with default styling. The Paragraph component is designed for body text content.
      </Paragraph>
      <Paragraph>
        Second paragraph demonstrating how multiple paragraphs work together in a layout.
      </Paragraph>
      <Paragraph className="text-sm text-gray-500">
        Third paragraph with custom muted styling applied.
      </Paragraph>
    </div>
  )
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Editable paragraph text. Modify the content and className in the controls below.'
  },
  render: (args) => <Paragraph {...args} />
}

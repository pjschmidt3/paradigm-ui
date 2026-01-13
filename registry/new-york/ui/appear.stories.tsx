import type { Meta, StoryObj } from '@storybook/react-vite'

import { Appear } from './appear'

const meta = {
  argTypes: {
    as: {
      control: 'text',
      description: 'The element type to render (defaults to motion.div)'
    },
    duration: {
      control: { max: 3, min: 0.1, step: 0.1, type: 'range' },
      description: 'Animation duration in seconds'
    }
  },
  component: Appear,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Components/Appear'
} satisfies Meta<typeof Appear>

export default meta
type Story = StoryObj<typeof meta>

// Default fade-in animation
export const Default: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-blue-500 p-8 text-white">
        <h3 className="text-xl font-bold">Animated Content</h3>
        <p>This content fades in with a subtle slide-up animation.</p>
      </div>
    )
  }
}

// With custom duration
export const SlowAnimation: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-green-500 p-8 text-white">
        <h3 className="text-xl font-bold">Slow Animation</h3>
        <p>This content appears with a 1.5 second duration.</p>
      </div>
    ),
    duration: 1.5
  },
  name: 'Slow Animation (1.5s)'
}

export const FastAnimation: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-purple-500 p-8 text-white">
        <h3 className="text-xl font-bold">Fast Animation</h3>
        <p>This content appears with a 0.2 second duration.</p>
      </div>
    ),
    duration: 0.2
  },
  name: 'Fast Animation (0.2s)'
}

// With text content
export const WithTextContent: Story = {
  args: {
    children: (
      <p className="max-w-md text-lg">
        The Appear component wraps any content and provides a smooth fade-in animation with a subtle
        upward movement. It is perfect for revealing content as users scroll or when content loads.
      </p>
    )
  },
  name: 'With Text Content'
}

// With card content
export const WithCard: Story = {
  args: {
    children: (
      <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
        <h3 className="mb-2 text-xl font-semibold">Card Title</h3>
        <p className="mb-4 text-gray-600">
          This is a card component wrapped in Appear. It smoothly animates into view.
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Learn More
        </button>
      </div>
    )
  },
  name: 'With Card Content'
}

// Multiple elements staggered
export const StaggeredElements: Story = {
  name: 'Staggered Children',
  render: () => (
    <Appear>
      <div className="flex flex-col gap-4">
        <div className="rounded bg-red-500 p-4 text-white">First item</div>
        <div className="rounded bg-orange-500 p-4 text-white">Second item</div>
        <div className="rounded bg-yellow-500 p-4 text-black">Third item</div>
        <div className="rounded bg-green-500 p-4 text-white">Fourth item</div>
      </div>
    </Appear>
  )
}

// With image content
export const WithImage: Story = {
  args: {
    children: (
      <div className="overflow-hidden rounded-lg">
        <div className="flex h-48 w-64 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <span className="text-lg font-medium">Image Placeholder</span>
        </div>
      </div>
    )
  },
  name: 'With Image Content'
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-gray-800 p-8 text-white">
        <h3 className="mb-2 text-xl font-bold">Playground</h3>
        <p>Adjust the duration control to see different animation speeds.</p>
      </div>
    ),
    duration: 0.5
  },
  render: (args) => <Appear {...args} />
}

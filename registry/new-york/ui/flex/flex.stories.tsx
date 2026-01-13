import type { Meta, StoryObj } from '@storybook/react-vite'

import { Flex } from './flex'

const meta = {
  argTypes: {
    alignContent: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    },
    alignItems: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    },
    direction: {
      control: 'select',
      description: 'Flex direction',
      options: ['row', 'col']
    },
    gap: {
      control: 'select',
      description: 'Gap size between flex items',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    justifyContent: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    },
    justifyItems: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    },
    placeContent: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    },
    placeItems: {
      control: 'select',
      options: [
        'start',
        'flex-start',
        'end',
        'flex-end',
        'center',
        'around',
        'between',
        'evenly',
        'initial'
      ]
    }
  },
  component: Flex,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/Flex'
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

// Story helper component for flex items
const FlexItem = ({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={`rounded bg-purple-500 p-4 text-white ${className}`}>
    {children}
  </div>
)

export const Default: Story = {
  args: {
    direction: 'row',
    gap: 'md'
  },
  render: (args) => (
    <Flex {...args}>
      <FlexItem>Item 1</FlexItem>
      <FlexItem>Item 2</FlexItem>
      <FlexItem>Item 3</FlexItem>
    </Flex>
  )
}

export const Row: Story = {
  args: {
    alignItems: 'center',
    direction: 'row',
    gap: 'lg'
  },
  render: (args) => (
    <Flex {...args}>
      <FlexItem>Short</FlexItem>
      <FlexItem className="py-8">Tall Item</FlexItem>
      <FlexItem>Short</FlexItem>
    </Flex>
  )
}

export const Column: Story = {
  args: {
    direction: 'col',
    gap: 'md'
  },
  render: (args) => (
    <Flex {...args}>
      <FlexItem>First</FlexItem>
      <FlexItem>Second</FlexItem>
      <FlexItem>Third</FlexItem>
    </Flex>
  )
}

export const CenteredContent: Story = {
  args: {
    alignItems: 'center',
    direction: 'row',
    gap: 'md',
    justifyContent: 'center'
  },
  render: (args) => (
    <Flex
      {...args}
      className="min-h-[300px] border-2 border-dashed border-gray-300">
      <FlexItem>Centered</FlexItem>
      <FlexItem>Content</FlexItem>
    </Flex>
  )
}

export const SpaceBetween: Story = {
  args: {
    alignItems: 'center',
    direction: 'row',
    gap: 'sm',
    justifyContent: 'between'
  },
  render: (args) => (
    <Flex
      {...args}
      className="border-2 border-dashed border-gray-300 p-4">
      <FlexItem>Start</FlexItem>
      <FlexItem>Middle</FlexItem>
      <FlexItem>End</FlexItem>
    </Flex>
  )
}

export const SpaceAround: Story = {
  args: {
    alignItems: 'center',
    direction: 'row',
    gap: 'xs',
    justifyContent: 'around'
  },
  render: (args) => (
    <Flex
      {...args}
      className="border-2 border-dashed border-gray-300 p-4">
      <FlexItem>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
      <FlexItem>4</FlexItem>
    </Flex>
  )
}

export const SpaceEvenly: Story = {
  args: {
    direction: 'row',
    gap: 'xs',
    justifyContent: 'evenly'
  },
  render: (args) => (
    <Flex
      {...args}
      className="border-2 border-dashed border-gray-300 p-4">
      <FlexItem>Even</FlexItem>
      <FlexItem>Spacing</FlexItem>
      <FlexItem>Here</FlexItem>
    </Flex>
  )
}

export const WrappingItems: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    justifyContent: 'start'
  },
  render: (args) => (
    <Flex
      {...args}
      className="max-w-md">
      {Array.from({ length: 10 }, (_, i) => (
        <FlexItem key={i}>Item {i + 1}</FlexItem>
      ))}
    </Flex>
  )
}
export const ColumnCentered: Story = {
  args: {
    alignItems: 'center',
    direction: 'col',
    gap: 'xl',
    justifyContent: 'center'
  },
  render: (args) => (
    <Flex
      {...args}
      className="min-h-[400px] border-2 border-dashed border-gray-300">
      <FlexItem>Vertically</FlexItem>
      <FlexItem>And</FlexItem>
      <FlexItem>Horizontally</FlexItem>
      <FlexItem>Centered</FlexItem>
    </Flex>
  )
}

export const Navbar: Story = {
  args: {
    alignItems: 'center',
    direction: 'row',
    gap: 'md',
    justifyContent: 'between'
  },
  name: 'Navbar Example',
  render: (args) => (
    <Flex
      {...args}
      className="rounded bg-gray-800 p-4">
      <FlexItem className="bg-white px-6 text-black">Logo</FlexItem>
      <Flex
        direction="row"
        gap="md">
        <FlexItem className="border border-white bg-transparent">Home</FlexItem>
        <FlexItem className="border border-white bg-transparent">
          About
        </FlexItem>
        <FlexItem className="border border-white bg-transparent">
          Contact
        </FlexItem>
      </Flex>
    </Flex>
  )
}

export const Playground: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    justifyContent: 'start'
  },
  render: (args) => (
    <Flex {...args}>
      <FlexItem>Use controls →</FlexItem>
      <FlexItem>To customize</FlexItem>
      <FlexItem>This flex container</FlexItem>
    </Flex>
  )
}

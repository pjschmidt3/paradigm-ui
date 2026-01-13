import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlexRow } from './flex-row'

const meta = {
  argTypes: {
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
    gap: {
      control: 'select',
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
    }
  },
  component: FlexRow,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/FlexRow'
} satisfies Meta<typeof FlexRow>

export default meta
type Story = StoryObj<typeof meta>

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded bg-green-500 p-4 text-white">{children}</div>
)

export const Default: Story = {
  args: {
    gap: 'md'
  },
  render: (args) => (
    <FlexRow {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </FlexRow>
  )
}

export const NavigationBar: Story = {
  args: {
    alignItems: 'center',
    gap: 'lg',
    justifyContent: 'between'
  },
  name: 'Navigation Bar',
  render: (args) => (
    <FlexRow
      {...args}
      className="rounded bg-slate-800 p-4">
      <div className="text-xl font-bold text-white">Brand</div>
      <FlexRow gap="md">
        <button className="px-3 py-2 text-white hover:text-gray-300">
          Home
        </button>
        <button className="px-3 py-2 text-white hover:text-gray-300">
          About
        </button>
        <button className="px-3 py-2 text-white hover:text-gray-300">
          Services
        </button>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Contact
        </button>
      </FlexRow>
    </FlexRow>
  )
}

export const CardRow: Story = {
  args: {
    gap: 'lg',
    justifyContent: 'start'
  },
  name: 'Card Row',
  render: (args) => (
    <FlexRow {...args}>
      {[1, 2, 3].map((i) => (
        <div
          className="w-64 rounded-lg border bg-white p-6 shadow-md"
          key={i}>
          <h3 className="mb-2 text-lg font-bold">Card {i}</h3>
          <p className="text-gray-600">This is a card in a flex row layout.</p>
        </div>
      ))}
    </FlexRow>
  )
}

export const CenteredContent: Story = {
  args: {
    alignItems: 'center',
    gap: 'md',
    justifyContent: 'center'
  },
  render: (args) => (
    <FlexRow
      {...args}
      className="min-h-[200px] rounded bg-gray-100">
      <Item>Centered</Item>
      <Item>Items</Item>
    </FlexRow>
  )
}

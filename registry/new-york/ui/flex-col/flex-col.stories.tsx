import type { Meta, StoryObj } from '@storybook/react-vite'

import { FlexCol } from './flex-col'

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
        'stretch',
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
  component: FlexCol,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  title: 'Layout/FlexCol'
} satisfies Meta<typeof FlexCol>

export default meta
type Story = StoryObj<typeof meta>

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded bg-orange-500 p-4 text-white">{children}</div>
)

export const Default: Story = {
  args: {
    gap: 'md'
  },
  render: (args) => (
    <FlexCol {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </FlexCol>
  )
}

export const Sidebar: Story = {
  args: {
    alignItems: 'stretch',
    gap: 'sm'
  },
  name: 'Sidebar Menu',
  render: (args) => (
    <FlexCol
      {...args}
      className="w-64 rounded bg-slate-800 p-4">
      <button className="rounded px-4 py-2 text-left text-white hover:bg-slate-700">
        Dashboard
      </button>
      <button className="rounded px-4 py-2 text-left text-white hover:bg-slate-700">
        Projects
      </button>
      <button className="rounded px-4 py-2 text-left text-white hover:bg-slate-700">
        Team
      </button>
      <button className="rounded px-4 py-2 text-left text-white hover:bg-slate-700">
        Settings
      </button>
      <div className="my-2 border-t border-slate-600"></div>
      <button className="rounded px-4 py-2 text-left text-white hover:bg-slate-700">
        Logout
      </button>
    </FlexCol>
  )
}

export const FormLayout: Story = {
  args: {
    alignItems: 'stretch',
    gap: 'lg'
  },
  name: 'Form Layout',
  render: (args) => (
    <FlexCol
      {...args}
      className="max-w-md">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>
        <input
          className="rounded border px-3 py-2"
          placeholder="Enter your name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input
          className="rounded border px-3 py-2"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Message</label>
        <textarea
          className="rounded border px-3 py-2"
          placeholder="Your message"
          rows={4}
        />
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Submit
      </button>
    </FlexCol>
  )
}

export const CenteredContent: Story = {
  args: {
    alignItems: 'center',
    gap: 'xl',
    justifyContent: 'center'
  },
  render: (args) => (
    <FlexCol
      {...args}
      className="min-h-[400px] rounded bg-gray-100">
      <Item>Vertically</Item>
      <Item>Centered</Item>
      <Item>Items</Item>
    </FlexCol>
  )
}

export const CardStack: Story = {
  args: {
    alignItems: 'stretch',
    gap: 'md'
  },
  name: 'Vertical Card Stack',
  render: (args) => (
    <FlexCol
      {...args}
      className="max-w-md">
      {[1, 2, 3].map((i) => (
        <div
          className="rounded-lg border bg-white p-4 shadow"
          key={i}>
          <h3 className="mb-2 font-bold">Card {i}</h3>
          <p className="text-sm text-gray-600">
            This is a card in a vertical stack layout.
          </p>
        </div>
      ))}
    </FlexCol>
  )
}

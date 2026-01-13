import type { Meta, StoryObj } from '@storybook/react-vite'

import { useDisclosure } from './use-disclosure'

const meta = {
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Hooks/useDisclosure'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ModalDemo() {
  const { isOpen, open, close, toggle } = useDisclosure()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={open}
        >
          Open
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={close}
        >
          Close
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={toggle}
        >
          Toggle
        </button>
      </div>

      <div className="text-sm text-gray-600">
        State: <span className="font-mono font-semibold">{isOpen ? 'open' : 'closed'}</span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="text-gray-600 mb-4">
              This modal is controlled by useDisclosure hook.
              Click the close button or the X to close it.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={close}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={close}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const Default: Story = {
  render: () => <ModalDemo />
}

function DefaultOpenDemo() {
  const { isOpen, close, toggle } = useDisclosure({ defaultOpen: true })

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        This disclosure starts open by default.
      </p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={close}
        >
          Close
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={toggle}
        >
          Toggle
        </button>
      </div>

      {isOpen && (
        <div className="p-4 bg-green-100 border border-green-300 rounded">
          <p className="text-green-800">This content is visible by default!</p>
        </div>
      )}
    </div>
  )
}

export const DefaultOpen: Story = {
  name: 'Default Open',
  render: () => <DefaultOpenDemo />
}

function WithCallbacksDemo() {
  const { isOpen, open, close, toggle } = useDisclosure({
    onOpen: () => console.log('Modal opened!'),
    onClose: () => console.log('Modal closed!')
  })

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        Check the console - callbacks fire on open/close.
      </p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={open}
        >
          Open (logs to console)
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={close}
        >
          Close (logs to console)
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={toggle}
        >
          Toggle
        </button>
      </div>

      <div className="text-sm text-gray-600">
        State: <span className="font-mono font-semibold">{isOpen ? 'open' : 'closed'}</span>
      </div>
    </div>
  )
}

export const WithCallbacks: Story = {
  name: 'With Callbacks',
  render: () => <WithCallbacksDemo />
}

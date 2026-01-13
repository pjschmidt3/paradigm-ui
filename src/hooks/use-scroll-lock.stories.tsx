import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { useScrollLock } from './use-scroll-lock'

const meta = {
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  title: 'Hooks/useScrollLock'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ScrollLockDemo() {
  const [isLocked, setIsLocked] = useState(false)

  useScrollLock(isLocked)

  return (
    <div className="min-h-[200vh] p-8">
      <div className="sticky top-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="font-bold mb-2">useScrollLock Demo</h3>
        <p className="text-sm text-gray-600 mb-4">
          {isLocked
            ? 'Body scroll is LOCKED. Try scrolling - it won\'t work!'
            : 'Body scroll is unlocked. Scroll down to see more content.'}
        </p>

        <button
          className={`px-4 py-2 text-white rounded ${
            isLocked
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
          onClick={() => setIsLocked(!isLocked)}
        >
          {isLocked ? 'Unlock Scroll' : 'Lock Scroll'}
        </button>
      </div>

      <div className="mt-8 max-w-md mx-auto space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            className="p-4 bg-gray-100 rounded"
            key={i}
          >
            <p className="font-semibold">Content Block {i + 1}</p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <ScrollLockDemo />
}

function ModalWithScrollLockDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useScrollLock(isModalOpen)

  return (
    <div className="min-h-[200vh] p-8">
      <div className="sticky top-4 z-10 max-w-md mx-auto">
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
      </div>

      <div className="mt-8 max-w-md mx-auto space-y-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            className="p-4 bg-gray-100 rounded"
            key={i}
          >
            <p className="font-semibold">Background Content {i + 1}</p>
            <p className="text-sm text-gray-600">
              Scroll is locked when modal is open, preventing background scrolling.
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md mx-4">
            <h2 className="text-xl font-bold mb-4">Modal with Scroll Lock</h2>
            <p className="text-gray-600 mb-4">
              Notice that the background content cannot scroll while this modal is open.
              This is achieved using the useScrollLock hook with the modal's open state.
            </p>
            <div className="max-h-[200px] overflow-y-auto bg-gray-50 p-3 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">
                This inner content is scrollable:
              </p>
              {Array.from({ length: 10 }).map((_, i) => (
                <p className="text-sm text-gray-600" key={i}>
                  Scrollable line {i + 1}
                </p>
              ))}
            </div>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsModalOpen(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const WithModal: Story = {
  name: 'Modal with Scroll Lock',
  render: () => <ModalWithScrollLockDemo />
}

import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { useFocusTrap } from './use-focus-trap'

const meta = {
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Hooks/useFocusTrap'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function FocusTrapModalDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useFocusTrap(modalRef, isOpen)

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-4">
          When the modal is open, Tab navigation is trapped inside.
          <br />
          Try pressing Tab - focus cycles through modal elements only.
        </p>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg p-6 shadow-xl max-w-md"
            ref={modalRef}
          >
            <h2 className="text-xl font-bold mb-4">Focus Trapped Modal</h2>
            <p className="text-gray-600 mb-4">
              Tab navigation is trapped within this modal.
              Press Tab repeatedly to see focus cycle through the
              interactive elements below.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export const Default: Story = {
  name: 'Modal with Focus Trap',
  render: () => <FocusTrapModalDemo />
}

function SidebarFocusTrapDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useFocusTrap(sidebarRef, isOpen)

  return (
    <div className="min-w-[400px]">
      <p className="text-sm text-gray-600 mb-4">
        Focus trap also works for sidebars and drawers:
      </p>

      <button
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={() => setIsOpen(true)}
      >
        Open Sidebar
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-4"
            ref={sidebarRef}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Menu</h3>
              <button
                className="p-1 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            </div>

            <nav className="space-y-2">
              <a
                className="block px-3 py-2 rounded hover:bg-gray-100"
                href="#"
              >
                Dashboard
              </a>
              <a
                className="block px-3 py-2 rounded hover:bg-gray-100"
                href="#"
              >
                Projects
              </a>
              <a
                className="block px-3 py-2 rounded hover:bg-gray-100"
                href="#"
              >
                Team
              </a>
              <a
                className="block px-3 py-2 rounded hover:bg-gray-100"
                href="#"
              >
                Settings
              </a>
            </nav>

            <div className="absolute bottom-4 left-4 right-4">
              <button
                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setIsOpen(false)}
              >
                Close Sidebar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export const Sidebar: Story = {
  name: 'Sidebar with Focus Trap',
  render: () => <SidebarFocusTrapDemo />
}

function AccessibilityDemo() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const confirmRef = useRef<HTMLDivElement>(null)
  const alertRef = useRef<HTMLDivElement>(null)

  useFocusTrap(confirmRef, activeModal === 'confirm')
  useFocusTrap(alertRef, activeModal === 'alert')

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Focus trapping is essential for accessibility - it ensures keyboard
        users can't accidentally navigate to background content.
      </p>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setActiveModal('confirm')}
        >
          Confirmation Dialog
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setActiveModal('alert')}
        >
          Alert Dialog
        </button>
      </div>

      {activeModal === 'confirm' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg p-6 shadow-xl max-w-sm"
            ref={confirmRef}
            role="dialog"
            aria-labelledby="confirm-title"
            aria-modal="true"
          >
            <h2 className="text-lg font-bold mb-2" id="confirm-title">
              Confirm Action
            </h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to proceed with this action?
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setActiveModal(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => setActiveModal(null)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'alert' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg p-6 shadow-xl max-w-sm"
            ref={alertRef}
            role="alertdialog"
            aria-labelledby="alert-title"
            aria-modal="true"
          >
            <h2 className="text-lg font-bold mb-2 text-red-600" id="alert-title">
              Warning!
            </h2>
            <p className="text-gray-600 mb-4">
              This action cannot be undone. Please proceed with caution.
            </p>
            <button
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setActiveModal(null)}
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const AccessibilityPatterns: Story = {
  name: 'Accessibility Patterns',
  render: () => <AccessibilityDemo />
}

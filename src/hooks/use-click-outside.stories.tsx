import { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { useClickOutside } from './use-click-outside'

const meta = {
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  title: 'Hooks/useClickOutside'
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function DropdownDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(dropdownRef, () => setIsOpen(false), isOpen)

  return (
    <div className="min-w-[300px]">
      <p className="text-sm text-gray-600 mb-4">
        Click the button to open the dropdown, then click outside to close it:
      </p>

      <div className="relative" ref={dropdownRef}>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Open'} Dropdown
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
            <div className="py-1">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Option 1
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Option 2
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Option 3
              </button>
              <hr className="my-1" />
              <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export const Default: Story = {
  name: 'Dropdown Menu',
  render: () => <DropdownDemo />
}

function PopoverDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  useClickOutside(popoverRef, () => setIsOpen(false), isOpen)

  return (
    <div className="min-w-[300px]">
      <p className="text-sm text-gray-600 mb-4">
        A popover that closes when clicking outside:
      </p>

      <div className="relative inline-block" ref={popoverRef}>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          Show Info
        </button>

        {isOpen && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-white border rounded-lg shadow-lg z-10">
            <h4 className="font-semibold mb-2">Helpful Information</h4>
            <p className="text-sm text-gray-600">
              This is a popover with useful information. Click anywhere outside
              to dismiss it.
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b" />
          </div>
        )}
      </div>
    </div>
  )
}

export const Popover: Story = {
  render: () => <PopoverDemo />
}

function MultipleDropdownsDemo() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdown1Ref = useRef<HTMLDivElement>(null)
  const dropdown2Ref = useRef<HTMLDivElement>(null)

  useClickOutside(dropdown1Ref, () => {
    if (openDropdown === 'dropdown1') setOpenDropdown(null)
  }, openDropdown === 'dropdown1')

  useClickOutside(dropdown2Ref, () => {
    if (openDropdown === 'dropdown2') setOpenDropdown(null)
  }, openDropdown === 'dropdown2')

  return (
    <div className="min-w-[400px]">
      <p className="text-sm text-gray-600 mb-4">
        Multiple dropdowns - only one can be open at a time:
      </p>

      <div className="flex gap-4">
        <div className="relative" ref={dropdown1Ref}>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => setOpenDropdown(openDropdown === 'dropdown1' ? null : 'dropdown1')}
          >
            File
          </button>

          {openDropdown === 'dropdown1' && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  New
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Open
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Save
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={dropdown2Ref}>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={() => setOpenDropdown(openDropdown === 'dropdown2' ? null : 'dropdown2')}
          >
            Edit
          </button>

          {openDropdown === 'dropdown2' && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
              <div className="py-1">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Undo
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Redo
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Cut
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm">
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const MultipleDropdowns: Story = {
  name: 'Multiple Dropdowns',
  render: () => <MultipleDropdownsDemo />
}

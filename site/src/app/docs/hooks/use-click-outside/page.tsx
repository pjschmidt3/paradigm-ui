import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseClickOutsidePage() {
  const importCode = `import { useClickOutside } from '@/hooks/use-click-outside'`

  const apiCode = `useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,    // Ref to the element to monitor
  handler: (event) => void,    // Callback when click outside detected
  enabled?: boolean            // Optional: enable/disable the listener (default: true)
)

// No return value - hook attaches/detaches listeners automatically`

  const dropdownExample = `import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks/use-click-outside'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => setIsOpen(false), isOpen)

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>

      {isOpen && (
        <ul className="absolute top-full mt-1 bg-white shadow-lg rounded-md">
          <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
        </ul>
      )}
    </div>
  )
}`

  const modalExample = `import { useRef } from 'react'
import { useClickOutside } from '@/hooks/use-click-outside'
import { useDisclosure } from '@/hooks/use-disclosure'

function Modal() {
  const { isOpen, open, close } = useDisclosure()
  const modalRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, close, isOpen)

  return (
    <>
      <button onClick={open}>Open Modal</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div ref={modalRef} className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p>Click outside this modal to close it.</p>
            <button onClick={close} className="mt-4">Close</button>
          </div>
        </div>
      )}
    </>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useClickOutside
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A hook that detects clicks outside of a referenced element, useful for closing dropdowns, modals, and popovers.
      </Paragraph>

      {/* Import */}
      <Heading level={2} className="mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      {/* API */}
      <Heading level={2} className="mt-12 mb-4">
        API
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Attaches mousedown and touchstart listeners to detect outside clicks:
      </Paragraph>
      <CodeBlock code={apiCode} language="tsx" />

      {/* Dropdown Example */}
      <Heading level={2} className="mt-12 mb-4">
        Dropdown Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Close a dropdown when clicking outside:
      </Paragraph>
      <CodeBlock code={dropdownExample} language="tsx" />

      {/* Modal Example */}
      <Heading level={2} className="mt-12 mb-4">
        Modal Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Dismiss a modal by clicking the overlay:
      </Paragraph>
      <CodeBlock code={modalExample} language="tsx" />

      {/* When to Use */}
      <div className="mt-12 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-2">
          When to Use
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Dropdown menus</li>
          <li>Modal overlays</li>
          <li>Popover content</li>
          <li>Search suggestions / autocomplete</li>
          <li>Context menus</li>
        </ul>
      </div>
    </div>
  )
}

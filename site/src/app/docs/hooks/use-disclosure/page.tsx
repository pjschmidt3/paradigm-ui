import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseDisclosurePage() {
  const importCode = `import { useDisclosure } from '@/hooks/use-disclosure'`

  const apiCode = `const {
  isOpen,   // boolean - current state
  open,     // () => void - set to true
  close,    // () => void - set to false
  toggle,   // () => void - flip state
  onOpen,   // () => void - alias for open
  onClose,  // () => void - alias for close
  onToggle  // () => void - alias for toggle
} = useDisclosure(initialState?: boolean)`

  const modalExample = `import { useDisclosure } from '@/hooks/use-disclosure'

function ModalExample() {
  const { isOpen, open, close } = useDisclosure()

  return (
    <>
      <button onClick={open}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>Modal content here...</p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}`

  const dropdownExample = `import { useDisclosure } from '@/hooks/use-disclosure'

function DropdownExample() {
  const { isOpen, toggle } = useDisclosure()

  return (
    <div className="relative">
      <button onClick={toggle}>
        Menu {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useDisclosure
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A hook for managing open/close state of modals, dropdowns, sidebars, and other disclosure patterns.
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
        Returns an object with state and control functions:
      </Paragraph>
      <CodeBlock code={apiCode} language="tsx" />

      {/* Modal Example */}
      <Heading level={2} className="mt-12 mb-4">
        Modal Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Using useDisclosure to control a modal:
      </Paragraph>
      <CodeBlock code={modalExample} language="tsx" />

      {/* Dropdown Example */}
      <Heading level={2} className="mt-12 mb-4">
        Dropdown Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Using toggle for a dropdown menu:
      </Paragraph>
      <CodeBlock code={dropdownExample} language="tsx" />

      {/* When to Use */}
      <div className="mt-12 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-2">
          When to Use
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Modals and dialogs</li>
          <li>Dropdown menus</li>
          <li>Sidebars and drawers</li>
          <li>Accordions and collapsibles</li>
          <li>Any binary open/close UI pattern</li>
        </ul>
      </div>
    </div>
  )
}

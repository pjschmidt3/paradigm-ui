import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseClickOutsidePage() {
  const importCode = `import { useClickOutside } from '@/hooks/use-click-outside'`

  const apiCode = `useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: () => void
)`

  const example = `import { useRef } from 'react'
import { useClickOutside } from '@/hooks/use-click-outside'
import { useDisclosure } from '@/hooks/use-disclosure'

function Dropdown() {
  const { isOpen, toggle, close } = useDisclosure()
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, close)

  return (
    <div ref={ref} className="relative">
      <button onClick={toggle}>Menu</button>

      {isOpen && (
        <ul className="absolute top-full mt-1 bg-white shadow-lg">
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      )}
    </div>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useClickOutside
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Detect clicks outside a referenced element to close dropdowns, modals, and popovers.
      </Paragraph>

      <Heading level={2} className="mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      <Heading level={2} className="mt-12 mb-4">
        API
      </Heading>
      <CodeBlock code={apiCode} language="tsx" />

      <Heading level={2} className="mt-12 mb-4">
        Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Common pattern: combining with useDisclosure for dropdown menus:
      </Paragraph>
      <CodeBlock code={example} language="tsx" />

      <div className="mt-8 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-2">
          Use Cases
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Dropdown menus</li>
          <li>Modal overlays</li>
          <li>Popover content</li>
          <li>Search suggestions</li>
        </ul>
      </div>
    </div>
  )
}

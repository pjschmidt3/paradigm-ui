import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { List } from '@paradigm/list'

export default function ListPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/list.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { List } from '@/components/ui/list'`

  const basicExample = `<List
  items={[
    'First item',
    'Second item',
    'Third item'
  ]}
/>`

  const checklistExample = `<List
  variant="check"
  items={[
    'Task completed',
    'Another task done',
    'All finished'
  ]}
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        List
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Flexible list component supporting bullet, numbered, check, and plain variants with configurable spacing.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the List component to your project using the shadcn CLI:
      </Paragraph>
      <CodeBlock code={installCommand} language="bash" />

      {/* Import */}
      <Heading level={2} className="mt-12 mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      {/* Preview */}
      <Heading level={2} className="mt-12 mb-4">
        Preview
      </Heading>
      <ComponentPreview
        title="List"
        description="Default bullet list"
        code={basicExample}
        tier="free"
      >
        <List
          items={[
            'First item',
            'Second item',
            'Third item'
          ]}
        />
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Checklist
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use the check variant for completed tasks:
      </Paragraph>
      <ComponentPreview
        title="Checklist"
        description="List with check marks"
        code={checklistExample}
        tier="free"
      >
        <List
          variant="check"
          items={[
            'Task completed',
            'Another task done',
            'All finished'
          ]}
        />
      </ComponentPreview>

      <Heading level={3} className="mt-8 mb-4">
        All Variants
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Available list style variants:
      </Paragraph>
      <CodeBlock
        code={`// Bullet list (default)
<List variant="bullet" items={['Item 1', 'Item 2']} />

// Numbered list
<List variant="numbered" items={['First', 'Second']} />

// Check list
<List variant="check" items={['Done', 'Complete']} />

// Plain list (no markers)
<List variant="none" items={['Item A', 'Item B']} />`}
        language="tsx"
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <Paragraph className="text-sm font-medium mb-2">Bullet</Paragraph>
          <List variant="bullet" items={['Item 1', 'Item 2', 'Item 3']} />
        </div>
        <div>
          <Paragraph className="text-sm font-medium mb-2">Numbered</Paragraph>
          <List variant="numbered" items={['First', 'Second', 'Third']} />
        </div>
        <div>
          <Paragraph className="text-sm font-medium mb-2">Check</Paragraph>
          <List variant="check" items={['Done', 'Complete', 'Finished']} />
        </div>
        <div>
          <Paragraph className="text-sm font-medium mb-2">None</Paragraph>
          <List variant="none" items={['Item A', 'Item B', 'Item C']} />
        </div>
      </div>

      <Heading level={3} className="mt-8 mb-4">
        Spacing Options
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Control vertical spacing between items:
      </Paragraph>
      <CodeBlock
        code={`// Tight spacing
<List spacing="tight" items={['Compact', 'List']} />

// Normal spacing (default)
<List spacing="normal" items={['Standard', 'Spacing']} />

// Relaxed spacing
<List spacing="relaxed" items={['More', 'Space']} />`}
        language="tsx"
      />

      {/* Props */}
      <Heading level={2} className="mt-12 mb-4">
        Props
      </Heading>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="text-left py-3 pr-4 font-medium">Prop</th>
              <th className="text-left py-3 pr-4 font-medium">Type</th>
              <th className="text-left py-3 pr-4 font-medium">Default</th>
              <th className="text-left py-3 font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">items</td>
              <td className="py-3 pr-4 font-mono text-xs">(string | ReactNode)[]</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Array of list items (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">variant</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;bullet&quot; | &quot;numbered&quot; | &quot;check&quot; | &quot;none&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;bullet&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">List style variant</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">spacing</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;tight&quot; | &quot;normal&quot; | &quot;relaxed&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;normal&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Vertical spacing between items</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">className</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Additional CSS classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

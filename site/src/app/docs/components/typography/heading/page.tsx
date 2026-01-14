import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'

export default function HeadingPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/heading.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { Heading } from '@/components/ui/heading'`

  const basicExample = `<Heading level={1}>Heading Level 1</Heading>
<Heading level={2}>Heading Level 2</Heading>
<Heading level={3}>Heading Level 3</Heading>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Heading
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Semantic heading component that renders h1-h5 elements with consistent typography and spacing.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Heading component to your project using the shadcn CLI:
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
        title="Heading"
        description="Heading levels 1-3"
        code={basicExample}
        tier="free"
      >
        <div className="space-y-4">
          <Heading level={1}>Heading Level 1</Heading>
          <Heading level={2}>Heading Level 2</Heading>
          <Heading level={3}>Heading Level 3</Heading>
        </div>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        All Levels
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Headings support levels 1 through 5, each with appropriate sizing and weight:
      </Paragraph>
      <CodeBlock
        code={`<Heading level={1}>Level 1 - 4xl bold</Heading>
<Heading level={2}>Level 2 - 2xl medium</Heading>
<Heading level={3}>Level 3 - xl medium</Heading>
<Heading level={4}>Level 4 - lg medium</Heading>
<Heading level={5}>Level 5 - md medium</Heading>`}
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
              <td className="py-3 pr-4 font-mono text-xs">level</td>
              <td className="py-3 pr-4 font-mono text-xs">1 | 2 | 3 | 4 | 5</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Semantic heading level (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">children</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Content of the heading</td>
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

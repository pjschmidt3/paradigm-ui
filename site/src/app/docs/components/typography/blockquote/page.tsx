import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { Blockquote } from '@paradigm/blockquote'

export default function BlockquotePage() {
  const registryUrl = 'https://paradigm-ui.dev/r/blockquote.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { Blockquote } from '@/components/ui/blockquote'`

  const basicExample = `<Blockquote>
  The best way to predict the future is to invent it.
</Blockquote>`

  const withCiteExample = `<Blockquote cite="Alan Kay">
  The best way to predict the future is to invent it.
</Blockquote>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Blockquote
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Styled blockquote component for displaying quotations with optional attribution. Supports multiple visual variants.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Blockquote component to your project using the shadcn CLI:
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
        title="Blockquote"
        description="Default blockquote style"
        code={basicExample}
        tier="free"
      >
        <Blockquote>
          The best way to predict the future is to invent it.
        </Blockquote>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Attribution
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add a citation using the cite prop:
      </Paragraph>
      <ComponentPreview
        title="Blockquote with Citation"
        description="Blockquote with attribution"
        code={withCiteExample}
        tier="free"
      >
        <Blockquote cite="Alan Kay">
          The best way to predict the future is to invent it.
        </Blockquote>
      </ComponentPreview>

      <Heading level={3} className="mt-8 mb-4">
        Variants
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Choose from different visual styles:
      </Paragraph>
      <CodeBlock
        code={`// Default - left border with italic text
<Blockquote variant="default">Quote text</Blockquote>

// Bordered - rounded border with subtle background
<Blockquote variant="bordered">Quote text</Blockquote>

// Filled - solid muted background
<Blockquote variant="filled">Quote text</Blockquote>`}
        language="tsx"
      />

      <div className="mt-6 space-y-4">
        <Blockquote variant="default" cite="Default variant">
          This is the default variant with a left border.
        </Blockquote>
        <Blockquote variant="bordered" cite="Bordered variant">
          This is the bordered variant with rounded corners.
        </Blockquote>
        <Blockquote variant="filled" cite="Filled variant">
          This is the filled variant with a solid background.
        </Blockquote>
      </div>

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
              <td className="py-3 pr-4 font-mono text-xs">variant</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot; | &quot;bordered&quot; | &quot;filled&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Visual style of the blockquote</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">cite</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional attribution/citation text</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">children</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Content of the blockquote (required)</td>
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

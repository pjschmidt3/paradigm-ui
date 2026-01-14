import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'

export default function ParagraphPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/paragraph.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { Paragraph } from '@/components/ui/paragraph'`

  const basicExample = `<Paragraph>
  This is a paragraph of text with consistent styling.
  It uses a monospace font for a technical, modern look.
</Paragraph>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Paragraph
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Styled paragraph component with consistent typography for body text content.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Paragraph component to your project using the shadcn CLI:
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
        title="Paragraph"
        description="Basic paragraph text"
        code={basicExample}
        tier="free"
      >
        <Paragraph>
          This is a paragraph of text with consistent styling.
          It uses a monospace font for a technical, modern look.
        </Paragraph>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Custom Styling
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Apply custom classes to modify the paragraph appearance:
      </Paragraph>
      <CodeBlock
        code={`<Paragraph className="text-sm text-muted-foreground">
  Smaller, muted paragraph text.
</Paragraph>

<Paragraph className="text-xl font-semibold">
  Larger, bolder paragraph text.
</Paragraph>`}
        language="tsx"
      />

      <Heading level={3} className="mt-8 mb-4">
        With HTML Attributes
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Paragraph extends standard HTML paragraph attributes:
      </Paragraph>
      <CodeBlock
        code={`<Paragraph id="intro" data-testid="intro-text">
  Paragraph with custom HTML attributes.
</Paragraph>`}
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
              <td className="py-3 pr-4 font-mono text-xs">children</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Content of the paragraph</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">className</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Additional CSS classes</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">...props</td>
              <td className="py-3 pr-4 font-mono text-xs">HTMLAttributes&lt;HTMLParagraphElement&gt;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">All standard paragraph attributes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { Callout } from '@paradigm/callout'

export default function CalloutPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/callout.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { Callout } from '@/components/ui/callout'`

  const basicExample = `<Callout variant="info">
  This is an informational callout.
</Callout>`

  const withTitleExample = `<Callout variant="warning" title="Attention">
  This action cannot be undone.
</Callout>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Callout
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Attention-grabbing callout component for highlighting important information. Supports info, warning, success, error, and note variants with automatic icons.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Callout component to your project using the shadcn CLI:
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
        title="Callout"
        description="Info callout"
        code={basicExample}
        tier="free"
      >
        <Callout variant="info">
          This is an informational callout.
        </Callout>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Title
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add a title for extra emphasis:
      </Paragraph>
      <ComponentPreview
        title="Callout with Title"
        description="Warning callout with title"
        code={withTitleExample}
        tier="free"
      >
        <Callout variant="warning" title="Attention">
          This action cannot be undone.
        </Callout>
      </ComponentPreview>

      <Heading level={3} className="mt-8 mb-4">
        All Variants
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Each variant has its own color scheme and default icon:
      </Paragraph>
      <CodeBlock
        code={`// Info (default) - blue with info icon
<Callout variant="info">Informational message</Callout>

// Warning - amber with warning icon
<Callout variant="warning">Warning message</Callout>

// Success - green with check icon
<Callout variant="success">Success message</Callout>

// Error - red with X icon
<Callout variant="error">Error message</Callout>

// Note - gray with lightbulb icon
<Callout variant="note">Note or tip</Callout>`}
        language="tsx"
      />

      <div className="mt-6 space-y-4">
        <Callout variant="info" title="Info">
          This is an informational message to help guide the user.
        </Callout>
        <Callout variant="warning" title="Warning">
          Proceed with caution. This action may have consequences.
        </Callout>
        <Callout variant="success" title="Success">
          The operation completed successfully.
        </Callout>
        <Callout variant="error" title="Error">
          Something went wrong. Please try again.
        </Callout>
        <Callout variant="note" title="Note">
          Here&apos;s a helpful tip you might want to know.
        </Callout>
      </div>

      <Heading level={3} className="mt-8 mb-4">
        Custom Icon
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Override the default icon with any Lucide icon:
      </Paragraph>
      <CodeBlock
        code={`import { Rocket } from 'lucide-react'

<Callout variant="info" icon={Rocket} title="Launch">
  Ready for liftoff!
</Callout>`}
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
              <td className="py-3 pr-4 font-mono text-xs">variant</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;info&quot; | &quot;warning&quot; | &quot;success&quot; | &quot;error&quot; | &quot;note&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;info&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Color scheme and default icon</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">title</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional title heading</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">icon</td>
              <td className="py-3 pr-4 font-mono text-xs">ComponentType&lt;LucideProps&gt;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Override the default variant icon</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">children</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Content of the callout (required)</td>
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

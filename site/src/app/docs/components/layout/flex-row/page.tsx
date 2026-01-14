import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { FlexRow } from '@paradigm/flex-row'

export default function FlexRowPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/flex-row.json'

  const installCommand = `npx shadcn@latest add ${registryUrl}`

  const importCode = `import { FlexRow } from '@/components/ui/flex-row'`

  const basicExample = `<FlexRow gap="md" alignItems="center">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</FlexRow>`

  const spaceBetweenExample = `<FlexRow justifyContent="between" alignItems="center">
  <span>Logo</span>
  <nav>Navigation</nav>
  <button>CTA</button>
</FlexRow>`

  const nestedExample = `<FlexRow gap="lg" alignItems="stretch">
  <aside className="w-64">Sidebar</aside>
  <main className="flex-1">Content</main>
</FlexRow>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        FlexRow
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Horizontal flex container - convenience wrapper around Flex with direction=row.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the FlexRow component to your project using the shadcn CLI:
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
        title="FlexRow"
        description="Horizontal flexbox container"
        code={basicExample}
        tier="premium"
      >
        <FlexRow gap="md" alignItems="center" className="w-full">
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Left</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Center</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Right</div>
        </FlexRow>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Space Between
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">justifyContent=&quot;between&quot;</code> for header layouts:
      </Paragraph>
      <CodeBlock code={spaceBetweenExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Sidebar Layout
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Combine with fixed and flexible widths for layouts:
      </Paragraph>
      <CodeBlock code={nestedExample} language="tsx" />

      {/* Props */}
      <Heading level={2} className="mt-12 mb-4">
        Props
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        FlexRow accepts all the same props as Flex, except <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">direction</code> which is fixed to &quot;row&quot;.
      </Paragraph>
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
              <td className="py-3 pr-4 font-mono text-xs">gap</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Gap between items</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">alignItems</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot; | &quot;baseline&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Cross-axis alignment</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">justifyContent</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;between&quot; | &quot;around&quot; | &quot;evenly&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Main-axis alignment</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">alignContent</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;between&quot; | &quot;around&quot; | &quot;evenly&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Multi-line cross-axis alignment</td>
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

      {/* Note */}
      <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Note:</strong> FlexRow is a convenience component. For row layouts with additional customization, consider using the base <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">Flex</code> component directly.
        </Paragraph>
      </div>
    </div>
  )
}

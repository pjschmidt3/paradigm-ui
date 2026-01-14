import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { Flex } from '@paradigm/flex'

export default function FlexPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/flex.json'

  const installCommand = `npx shadcn@latest add ${registryUrl}`

  const importCode = `import { Flex } from '@/components/ui/flex'`

  const basicExample = `<Flex gap="md" alignItems="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>`

  const directionExample = `<Flex direction="col" gap="sm">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</Flex>`

  const justifyExample = `<Flex justifyContent="between" alignItems="center">
  <span>Left</span>
  <span>Right</span>
</Flex>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Flex
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Flexbox container with gap, alignment, and direction props mapped to Tailwind classes.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Flex component to your project using the shadcn CLI:
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
        title="Flex"
        description="Flexbox container with gap and alignment"
        code={basicExample}
        tier="premium"
      >
        <Flex gap="md" alignItems="center" className="w-full">
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 1</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 2</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 3</div>
        </Flex>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Column Direction
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">direction=&quot;col&quot;</code> for vertical layouts:
      </Paragraph>
      <CodeBlock code={directionExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Justify Content
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Distribute items with <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">justifyContent</code>:
      </Paragraph>
      <CodeBlock code={justifyExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">direction</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;row&quot; | &quot;col&quot; | &quot;row-reverse&quot; | &quot;col-reverse&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;row&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Flex direction</td>
            </tr>
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
              <td className="py-3 pr-4 font-mono text-xs">alignSelf</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;auto&quot; | &quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Individual item cross-axis alignment</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">justifyItems</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Item alignment on main axis</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">justifySelf</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;auto&quot; | &quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Individual item main-axis alignment</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">placeContent</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;between&quot; | &quot;around&quot; | &quot;evenly&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Shorthand for align-content and justify-content</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">placeItems</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Shorthand for align-items and justify-items</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">placeSelf</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;auto&quot; | &quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Shorthand for align-self and justify-self</td>
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

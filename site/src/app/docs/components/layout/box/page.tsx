import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { Box } from '@paradigm/box'

export default function BoxPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/box.json'

  const installCommand = `npx shadcn@latest add ${registryUrl}`

  const importCode = `import { Box } from '@/components/ui/box'`

  const basicExample = `<Box p="md" bg="card" rounded="lg">
  <p>Content</p>
</Box>`

  const responsiveExample = `<Box px={{ base: 'sm', md: 'lg', xl: '2xl' }}>
  <p>Responsive padding</p>
</Box>`

  const polymorphicExample = `<Box as="section" py="xl">
  <h2>Section content</h2>
</Box>`

  const centeringExample = `<Box width="full" maxWidth="4xl" mx="auto">
  <p>Centered content</p>
</Box>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Box
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Flexible container component with semantic spacing, sizing, and styling props. Supports responsive values and polymorphic rendering.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Box component to your project using the shadcn CLI:
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
        title="Box"
        description="Basic box with padding and background"
        code={basicExample}
        tier="premium"
      >
        <Box p="md" bg="card" rounded="lg" className="border">
          <p className="text-sm">Content inside a Box</p>
        </Box>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Responsive Spacing
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use responsive objects for different spacing at each breakpoint:
      </Paragraph>
      <CodeBlock code={responsiveExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Polymorphic Rendering
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Render as different HTML elements using the <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">as</code> prop:
      </Paragraph>
      <CodeBlock code={polymorphicExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Centering Pattern
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Center content with max-width and auto margins:
      </Paragraph>
      <CodeBlock code={centeringExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">as</td>
              <td className="py-3 pr-4 font-mono text-xs">ElementType</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;div&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">HTML element or component to render</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">p, px, py, pt, pb, pl, pr</td>
              <td className="py-3 pr-4 font-mono text-xs">SpacingValue | ResponsiveValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Padding props (all, x-axis, y-axis, individual sides)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">m, mx, my, mt, mb, ml, mr</td>
              <td className="py-3 pr-4 font-mono text-xs">SpacingValue | ResponsiveValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Margin props (all, x-axis, y-axis, individual sides)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">width, height</td>
              <td className="py-3 pr-4 font-mono text-xs">SizingValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Width and height sizing</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">minWidth, maxWidth, minHeight, maxHeight</td>
              <td className="py-3 pr-4 font-mono text-xs">SizingValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Min/max sizing constraints</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">bg</td>
              <td className="py-3 pr-4 font-mono text-xs">BackgroundValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Background color</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">rounded</td>
              <td className="py-3 pr-4 font-mono text-xs">RoundedValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Border radius</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">shadow</td>
              <td className="py-3 pr-4 font-mono text-xs">ShadowValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Box shadow</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">border</td>
              <td className="py-3 pr-4 font-mono text-xs">BorderValue</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Border style</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">display</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;block&quot; | &quot;flex&quot; | &quot;grid&quot; | &quot;inline&quot; | &quot;inline-block&quot; | &quot;none&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Display property</td>
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

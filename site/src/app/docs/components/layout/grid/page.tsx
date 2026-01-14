import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { Grid } from '@paradigm/grid'

export default function GridPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/grid.json'

  const installCommand = `npx shadcn@latest add ${registryUrl}`

  const importCode = `import { Grid } from '@/components/ui/grid'`

  const basicExample = `<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>`

  const responsiveExample = `<Grid cols={1} className="sm:grid-cols-2 lg:grid-cols-4" gap="lg">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
  <Card>Feature 4</Card>
</Grid>`

  const asymmetricGapExample = `<Grid cols={3} gapX="lg" gapY="sm">
  <div>Row 1, Col 1</div>
  <div>Row 1, Col 2</div>
  <div>Row 1, Col 3</div>
  <div>Row 2, Col 1</div>
  <div>Row 2, Col 2</div>
  <div>Row 2, Col 3</div>
</Grid>`

  const autoFlowExample = `<Grid cols={3} autoFlow="dense" gap="md">
  <div className="col-span-2">Wide item</div>
  <div>Item</div>
  <div>Item</div>
  <div className="col-span-2">Wide item</div>
</Grid>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Grid
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        CSS Grid container with cols, rows, gap, and alignment props mapped to Tailwind classes.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Grid component to your project using the shadcn CLI:
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
        title="Grid"
        description="CSS Grid container with columns and gap"
        code={basicExample}
        tier="premium"
      >
        <Grid cols={3} gap="md" className="w-full">
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">1</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">2</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">3</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">4</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">5</div>
          <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-center">6</div>
        </Grid>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Responsive Columns
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Combine with Tailwind breakpoint classes for responsive layouts:
      </Paragraph>
      <CodeBlock code={responsiveExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Asymmetric Gaps
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">gapX</code> and <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">gapY</code> for different horizontal and vertical gaps:
      </Paragraph>
      <CodeBlock code={asymmetricGapExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Auto Flow Dense
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">autoFlow=&quot;dense&quot;</code> to fill gaps in the grid:
      </Paragraph>
      <CodeBlock code={autoFlowExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">cols</td>
              <td className="py-3 pr-4 font-mono text-xs">1-12 | &quot;none&quot; | &quot;subgrid&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Number of grid columns</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">rows</td>
              <td className="py-3 pr-4 font-mono text-xs">1-6 | &quot;none&quot; | &quot;subgrid&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Number of grid rows</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">gap</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Gap between items (both axes)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">gapX</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Horizontal gap between columns</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">gapY</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot; | &quot;2xl&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Vertical gap between rows</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">autoFlow</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;row&quot; | &quot;col&quot; | &quot;dense&quot; | &quot;row-dense&quot; | &quot;col-dense&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Grid auto-placement algorithm</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">autoColumns</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;auto&quot; | &quot;min&quot; | &quot;max&quot; | &quot;fr&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Size of auto-generated columns</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">autoRows</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;auto&quot; | &quot;min&quot; | &quot;max&quot; | &quot;fr&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Size of auto-generated rows</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">alignItems</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;baseline&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Align items on block axis</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">justifyItems</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Align items on inline axis</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">alignContent</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;between&quot; | &quot;around&quot; | &quot;evenly&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Distribute space on block axis</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">justifyContent</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;start&quot; | &quot;center&quot; | &quot;end&quot; | &quot;between&quot; | &quot;around&quot; | &quot;evenly&quot; | &quot;stretch&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Distribute space on inline axis</td>
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
              <td className="py-3 pr-4 font-mono text-xs">width</td>
              <td className="py-3 pr-4 font-mono text-xs">number | string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Grid container width</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">height</td>
              <td className="py-3 pr-4 font-mono text-xs">number | string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Grid container height</td>
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

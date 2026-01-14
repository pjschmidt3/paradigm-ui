import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function SectionPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/section.json'

  const installCommand = `npx shadcn@latest add ${registryUrl}`

  const importCode = `import { Section } from '@/components/ui/section'`

  const basicExample = `<Section title="Features" description="Everything you need to build modern apps">
  <Grid cols={3} gap="lg">
    <FeatureCard title="Fast" />
    <FeatureCard title="Secure" />
    <FeatureCard title="Scalable" />
  </Grid>
</Section>`

  const cardVariantExample = `<Section
  title="Settings"
  description="Manage your account preferences"
  variant="card"
  actions={<Button size="sm">Save</Button>}
>
  <form>...</form>
</Section>`

  const backgroundExample = `<Section
  title="Newsletter"
  description="Stay updated with the latest news"
  background="muted"
  spacing="lg"
>
  <NewsletterForm />
</Section>`

  const dividerExample = `<Section
  title="Related Articles"
  divider="top"
  spacing="sm"
>
  <ArticleList />
</Section>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Section
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Section component with title, description, actions, background, dividers, spacing, and layout variants.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the Section component to your project using the shadcn CLI:
      </Paragraph>
      <CodeBlock code={installCommand} language="bash" />

      {/* Import */}
      <Heading level={2} className="mt-12 mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      {/* Usage */}
      <Heading level={2} className="mt-12 mb-4">
        Usage
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Basic section with title and description:
      </Paragraph>
      <CodeBlock code={basicExample} language="tsx" />

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Card Variant
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">variant=&quot;card&quot;</code> to wrap content in a Card component:
      </Paragraph>
      <CodeBlock code={cardVariantExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Background Options
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add visual distinction with background colors:
      </Paragraph>
      <CodeBlock code={backgroundExample} language="tsx" />

      <Heading level={3} className="mt-8 mb-4">
        Dividers
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add border dividers at the top, bottom, or both:
      </Paragraph>
      <CodeBlock code={dividerExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">title</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Section heading text</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">description</td>
              <td className="py-3 pr-4 font-mono text-xs">string | ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Section description content</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">actions</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Action buttons in header</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">variant</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot; | &quot;card&quot; | &quot;inset&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Section layout variant</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">background</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot; | &quot;muted&quot; | &quot;accent&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;default&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Background color</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">spacing</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;md&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Vertical padding amount</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">divider</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;none&quot; | &quot;top&quot; | &quot;bottom&quot; | &quot;both&quot;</td>
              <td className="py-3 pr-4 font-mono text-xs">&quot;none&quot;</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Border divider placement</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">id</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Section ID for anchor links</td>
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

      {/* Variant descriptions */}
      <Heading level={2} className="mt-12 mb-4">
        Variants
      </Heading>
      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Heading level={4} className="text-sm font-medium mb-2">default</Heading>
          <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
            Standard section with optional header. Content flows normally.
          </Paragraph>
        </div>
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Heading level={4} className="text-sm font-medium mb-2">card</Heading>
          <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
            Content wrapped in a Card component. Good for settings panels and dashboard sections.
          </Paragraph>
        </div>
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Heading level={4} className="text-sm font-medium mb-2">inset</Heading>
          <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
            Extends beyond container with negative margins. Creates full-bleed effect within constrained layouts.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

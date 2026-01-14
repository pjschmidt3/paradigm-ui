import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

const components = [
  {
    name: 'Heading',
    description: 'Semantic heading component with level prop (h1-h6) and consistent styling.',
    import: "import { Heading } from '@/components/ui/heading'"
  },
  {
    name: 'Paragraph',
    description: 'Text component with size variants and muted color options.',
    import: "import { Paragraph } from '@/components/ui/paragraph'"
  }
]

export default function TypographyPage() {
  const headingExample = `<Heading level={1}>Main Title</Heading>
<Heading level={2}>Section Title</Heading>
<Heading level={3}>Subsection</Heading>`

  const paragraphExample = `<Paragraph>Default body text for content.</Paragraph>
<Paragraph size="lg" className="text-zinc-600">
  Large text with muted color.
</Paragraph>
<Paragraph size="sm">Small helper text.</Paragraph>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Typography
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Consistent, semantic text components for headings and body content.
      </Paragraph>

      {/* Component List */}
      <div className="space-y-6 mb-12">
        {components.map((comp) => (
          <div key={comp.name} className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <Heading level={3} className="text-lg mb-2">
              {comp.name}
            </Heading>
            <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {comp.description}
            </Paragraph>
            <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded block">
              {comp.import}
            </code>
          </div>
        ))}
      </div>

      {/* Heading Example */}
      <Heading level={2} className="mb-4">
        Heading Usage
      </Heading>
      <CodeBlock code={headingExample} language="tsx" />

      {/* Paragraph Example */}
      <Heading level={2} className="mt-12 mb-4">
        Paragraph Usage
      </Heading>
      <CodeBlock code={paragraphExample} language="tsx" />

      {/* Live Preview */}
      <div className="mt-8 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          Preview
        </Heading>
        <div className="space-y-3">
          <Heading level={1}>Main Title</Heading>
          <Heading level={2}>Section Title</Heading>
          <Heading level={3}>Subsection</Heading>
          <Paragraph>Default body text for content.</Paragraph>
        </div>
      </div>
    </div>
  )
}

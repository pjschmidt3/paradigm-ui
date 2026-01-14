import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

const components = [
  {
    name: 'Box',
    description: 'Foundational layout primitive with sizing and spacing props.',
    import: "import { Box } from '@/components/ui/box'"
  },
  {
    name: 'Flex',
    description: 'Flexbox container with direction, gap, and alignment props.',
    import: "import { Flex } from '@/components/ui/flex'"
  },
  {
    name: 'FlexRow',
    description: 'Horizontal flex container (flex-direction: row).',
    import: "import { FlexRow } from '@/components/ui/flex-row'"
  },
  {
    name: 'FlexCol',
    description: 'Vertical flex container (flex-direction: column).',
    import: "import { FlexCol } from '@/components/ui/flex-col'"
  },
  {
    name: 'Grid',
    description: 'CSS Grid container with responsive column and gap props.',
    import: "import { Grid } from '@/components/ui/grid'"
  }
]

export default function LayoutComponentsPage() {
  const example = `import { FlexRow, FlexCol } from '@/components/ui/flex-row'
import { Box } from '@/components/ui/box'

export function Layout() {
  return (
    <FlexRow gap="lg" align="stretch">
      <Box w="64" className="bg-zinc-100">
        Sidebar
      </Box>
      <FlexCol gap="md" className="flex-1">
        <Box h="16" className="bg-zinc-100">Header</Box>
        <Box className="flex-1 bg-zinc-50">Content</Box>
      </FlexCol>
    </FlexRow>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Layout Components
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Foundational layout primitives for building flexible, responsive interfaces.
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

      {/* Example */}
      <Heading level={2} className="mb-4">
        Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Combining layout components to create a page structure:
      </Paragraph>
      <CodeBlock code={example} language="tsx" />

      {/* Storybook Link */}
      <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          View interactive examples in{' '}
          <a
            href="https://paradigm-ui.com/storybook"
            className="text-zinc-900 dark:text-zinc-100 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook
          </a>
        </Paragraph>
      </div>
    </div>
  )
}

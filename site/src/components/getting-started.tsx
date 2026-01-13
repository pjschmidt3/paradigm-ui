'use client'

import { CodeBlock } from './paradigm'

export function GettingStarted() {
  const installCommand = `npx shadcn@latest add https://paradigm-ui.com/registry/flex`

  const usageExample = `import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'

export function MyComponent() {
  return (
    <FlexRow gap="md" align="center">
      <FlexCol gap="sm">
        <h2>Title</h2>
        <p>Description</p>
      </FlexCol>
      <button>Action</button>
    </FlexRow>
  )
}`

  return (
    <section id="docs" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Add components directly to your project with a single command.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Installation */}
          <div>
            <h3 className="text-lg font-medium mb-4">1. Install a component</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use the shadcn CLI to add any Paradigm UI component to your project:
            </p>
            <CodeBlock code={installCommand} language="bash" />
          </div>

          {/* Usage */}
          <div>
            <h3 className="text-lg font-medium mb-4">2. Import and use</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Components are added to your project. Import and use them like any other component:
            </p>
            <CodeBlock code={usageExample} language="tsx" />
          </div>

          {/* Available Components */}
          <div className="pt-4">
            <h3 className="text-lg font-medium mb-4">Available Components</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: 'box', label: 'Box' },
                { name: 'flex', label: 'Flex' },
                { name: 'flex-row', label: 'FlexRow' },
                { name: 'flex-col', label: 'FlexCol' },
                { name: 'grid', label: 'Grid' },
                { name: 'heading', label: 'Heading' },
                { name: 'paragraph', label: 'Paragraph' },
                { name: 'button', label: 'Button' },
                { name: 'hero', label: 'Hero' }
              ].map((component) => (
                <code
                  key={component.name}
                  className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md text-sm font-mono"
                >
                  {component.label}
                </code>
              ))}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              ...and 50+ more components available in the registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function InstallationPage() {
  const shadcnInit = `npx shadcn@latest init`

  const addComponent = `npx shadcn@latest add https://paradigm-ui.com/registry/flex
npx shadcn@latest add https://paradigm-ui.com/registry/heading
npx shadcn@latest add https://paradigm-ui.com/registry/paragraph`

  const componentsJsonExample = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}`

  const importExample = `import { FlexRow, FlexCol } from '@/components/ui/flex-row'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export function Welcome() {
  return (
    <FlexCol gap="md">
      <Heading level={1}>Hello World</Heading>
      <Paragraph>Welcome to your app.</Paragraph>
    </FlexCol>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Get up and running with Paradigm UI in your React project.
      </Paragraph>

      {/* Prerequisites */}
      <Heading level={2} className="mb-4">
        Prerequisites
      </Heading>
      <ul className="list-disc list-inside space-y-2 mb-8 text-zinc-600 dark:text-zinc-400">
        <li>React 18 or later</li>
        <li>TailwindCSS v4</li>
        <li>TypeScript (recommended)</li>
        <li>shadcn/ui initialized in your project</li>
      </ul>

      {/* Initialize shadcn */}
      <Heading level={2} className="mb-4">
        1. Initialize shadcn (if not already done)
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        If you haven&apos;t set up shadcn/ui yet, run:
      </Paragraph>
      <CodeBlock code={shadcnInit} language="bash" />
      <Paragraph className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-8">
        Follow the prompts to configure your project. We recommend the &quot;new-york&quot; style with zinc as the base color.
      </Paragraph>

      {/* Add Components */}
      <Heading level={2} className="mb-4">
        2. Add Components
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Use the shadcn CLI to add Paradigm UI components from our registry:
      </Paragraph>
      <CodeBlock code={addComponent} language="bash" />
      <Paragraph className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-8">
        Components are added to your <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">components/ui</code> directory. You own the code.
      </Paragraph>

      {/* Configuration */}
      <Heading level={2} className="mb-4">
        3. Configuration
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Ensure your <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">components.json</code> is configured correctly:
      </Paragraph>
      <CodeBlock code={componentsJsonExample} language="json" />

      {/* Usage */}
      <Heading level={2} className="mt-12 mb-4">
        4. Start Building
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Import and use components in your app:
      </Paragraph>
      <CodeBlock code={importExample} language="tsx" />

      {/* Next Steps */}
      <div className="mt-12 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <Heading level={3} className="text-base mb-2">
          Next: Explore Components
        </Heading>
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          Browse our layout, typography, and card components to see what&apos;s available.
        </Paragraph>
      </div>
    </div>
  )
}

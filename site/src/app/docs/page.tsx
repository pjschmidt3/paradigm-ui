import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import Link from 'next/link'

export default function DocsPage() {
  const quickStartCode = `npx shadcn@latest add https://paradigm-ui.com/registry/flex
npx shadcn@latest add https://paradigm-ui.com/registry/heading`

  const usageExample = `import { FlexRow } from '@/components/ui/flex-row'
import { Heading } from '@/components/ui/heading'

export function MyComponent() {
  return (
    <FlexRow gap="md" align="center">
      <Heading level={2}>Welcome</Heading>
      <p>Get started building with Paradigm UI.</p>
    </FlexRow>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Paradigm UI
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A composable, type-safe React component library built on shadcn/ui conventions.
        Production-ready components that integrate seamlessly with your existing shadcn setup.
      </Paragraph>

      {/* Feature Highlights */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="text-2xl font-semibold mb-1">67+</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">Components</div>
        </div>
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="text-2xl font-semibold mb-1">7</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">React Hooks</div>
        </div>
        <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <div className="text-2xl font-semibold mb-1">100%</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">TypeScript</div>
        </div>
      </div>

      {/* Quick Start */}
      <Heading level={2} className="mb-4">
        Quick Start
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add components directly to your project using the shadcn CLI:
      </Paragraph>
      <CodeBlock code={quickStartCode} language="bash" />

      <Heading level={2} className="mt-12 mb-4">
        Usage
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Import components from your local components directory:
      </Paragraph>
      <CodeBlock code={usageExample} language="tsx" />

      {/* Next Steps */}
      <Heading level={2} className="mt-12 mb-4">
        Next Steps
      </Heading>
      <div className="space-y-3">
        <Link
          href="/docs/installation"
          className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
        >
          <div className="font-medium mb-1">Installation</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Prerequisites, setup, and configuration guide.
          </div>
        </Link>
        <Link
          href="/docs/components/layout"
          className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
        >
          <div className="font-medium mb-1">Components</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Browse layout, typography, and card components.
          </div>
        </Link>
        <Link
          href="/docs/hooks/use-disclosure"
          className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
        >
          <div className="font-medium mb-1">Hooks</div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            React hooks for common UI patterns.
          </div>
        </Link>
      </div>
    </div>
  )
}

import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseMediaQueryPage() {
  const importCode = `import { useMediaQuery, useIsMobile } from '@/hooks/use-media-query'`

  const apiCode = `// General media query hook
const matches = useMediaQuery(query: string)

// Convenience hook for mobile detection (< 768px)
const isMobile = useIsMobile()`

  const example = `import { useMediaQuery, useIsMobile } from '@/hooks/use-media-query'

function ResponsiveComponent() {
  const isMobile = useIsMobile()
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <div>
      {isMobile ? (
        <MobileNav />
      ) : (
        <DesktopNav />
      )}

      {isLargeScreen && <Sidebar />}
    </div>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useMediaQuery
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Hooks for responsive behavior based on CSS media queries.
      </Paragraph>

      <Heading level={2} className="mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      <Heading level={2} className="mt-12 mb-4">
        API
      </Heading>
      <CodeBlock code={apiCode} language="tsx" />

      <Heading level={2} className="mt-12 mb-4">
        Example
      </Heading>
      <CodeBlock code={example} language="tsx" />

      <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Note:</strong> Returns <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">false</code> during SSR to avoid hydration mismatches.
        </Paragraph>
      </div>
    </div>
  )
}

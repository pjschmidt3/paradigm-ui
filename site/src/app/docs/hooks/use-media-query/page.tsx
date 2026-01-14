import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseMediaQueryPage() {
  const importCode = `import { useMediaQuery } from '@/hooks/use-media-query'`

  const apiCode = `const matches = useMediaQuery(query: string)

// Parameters:
// query   - CSS media query string (e.g., "(min-width: 768px)")

// Returns:
// matches - boolean indicating if the query currently matches`

  const responsiveExample = `import { useMediaQuery } from '@/hooks/use-media-query'

function ResponsiveLayout() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <div>
      {isMobile && <MobileNav />}
      {isTablet && <TabletNav />}
      {isDesktop && <DesktopNav />}

      {isDesktop && <Sidebar />}
    </div>
  )
}`

  const darkModeExample = `import { useMediaQuery } from '@/hooks/use-media-query'

function ThemeProvider({ children }) {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div className={prefersDark ? 'dark' : 'light'}>
      {children}
    </div>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useMediaQuery
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A hook that returns whether a CSS media query matches the current viewport.
      </Paragraph>

      {/* Import */}
      <Heading level={2} className="mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      {/* API */}
      <Heading level={2} className="mt-12 mb-4">
        API
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Returns a boolean that updates when the media query match changes:
      </Paragraph>
      <CodeBlock code={apiCode} language="tsx" />

      {/* Responsive Layout Example */}
      <Heading level={2} className="mt-12 mb-4">
        Responsive Layout Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Using useMediaQuery for responsive component rendering:
      </Paragraph>
      <CodeBlock code={responsiveExample} language="tsx" />

      {/* Dark Mode Example */}
      <Heading level={2} className="mt-12 mb-4">
        Dark Mode Detection Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Detecting system dark mode preference:
      </Paragraph>
      <CodeBlock code={darkModeExample} language="tsx" />

      {/* SSR Note */}
      <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Note:</strong> Returns <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">false</code> during SSR to avoid hydration mismatches. The value updates on client hydration.
        </Paragraph>
      </div>

      {/* When to Use */}
      <div className="mt-8 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-2">
          When to Use
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Responsive component rendering</li>
          <li>Dark mode / light mode detection</li>
          <li>Reduced motion preference detection</li>
          <li>Device orientation detection</li>
          <li>Any CSS media query-based behavior</li>
        </ul>
      </div>
    </div>
  )
}

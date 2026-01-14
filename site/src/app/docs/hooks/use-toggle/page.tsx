import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseTogglePage() {
  const importCode = `import { useToggle } from '@/hooks/use-toggle'`

  const apiCode = `const [value, toggle, setValue] = useToggle(initialValue?: boolean)

// Returns:
// value    - boolean - current state
// toggle   - () => void - flip state
// setValue - (value: boolean) => void - set specific value`

  const example = `import { useToggle } from '@/hooks/use-toggle'

function ThemeToggle() {
  const [isDark, toggleTheme] = useToggle(false)

  return (
    <button
      onClick={toggleTheme}
      className={isDark ? 'bg-zinc-800' : 'bg-white'}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useToggle
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A simple hook for toggling boolean state.
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
    </div>
  )
}

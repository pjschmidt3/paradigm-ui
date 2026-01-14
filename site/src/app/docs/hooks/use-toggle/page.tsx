import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

export default function UseTogglePage() {
  const importCode = `import { useToggle } from '@/hooks/use-toggle'`

  const apiCode = `const [value, {
  toggle,    // () => void - flip state
  setTrue,   // () => void - set to true
  setFalse,  // () => void - set to false
  setValue   // (value: boolean) => void - set to specific value
}] = useToggle(initialValue?: boolean)`

  const featureToggleExample = `import { useToggle } from '@/hooks/use-toggle'

function FeatureToggle() {
  const [isEnabled, { toggle }] = useToggle(false)

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={toggle}
        />
        Enable dark mode
      </label>

      <p>Dark mode is {isEnabled ? 'enabled' : 'disabled'}</p>
    </div>
  )
}`

  const passwordExample = `import { useToggle } from '@/hooks/use-toggle'

function PasswordInput() {
  const [showPassword, { toggle }] = useToggle(false)

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
        className="pr-10"
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      >
        {showPassword ? '🙈' : '👁️'}
      </button>
    </div>
  )
}`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        useToggle
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        A hook for managing boolean state with convenient toggle and set actions.
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
        Returns a tuple with the current value and an actions object:
      </Paragraph>
      <CodeBlock code={apiCode} language="tsx" />

      {/* Feature Toggle Example */}
      <Heading level={2} className="mt-12 mb-4">
        Feature Toggle Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Using useToggle for a settings checkbox:
      </Paragraph>
      <CodeBlock code={featureToggleExample} language="tsx" />

      {/* Password Example */}
      <Heading level={2} className="mt-12 mb-4">
        Visibility Toggle Example
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Using toggle for password visibility:
      </Paragraph>
      <CodeBlock code={passwordExample} language="tsx" />

      {/* When to Use */}
      <div className="mt-12 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-2">
          When to Use
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Feature flags and settings toggles</li>
          <li>Password visibility toggles</li>
          <li>Show/hide UI elements</li>
          <li>Boolean form inputs</li>
          <li>Any binary on/off state</li>
        </ul>
      </div>
    </div>
  )
}

import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { ProfileCard } from '@paradigm/profile-card'
import { Button } from '@paradigm/button'

export default function ProfileCardPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/profile-card.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { ProfileCard } from '@/components/ui/profile-card'`

  const basicExample = `<ProfileCard
  name="Jane Doe"
  title="Software Engineer"
  bio="Building great products with modern web technologies."
  avatar="https://github.com/shadcn.png"
/>`

  const actionsExample = `<ProfileCard
  name="John Smith"
  title="Product Designer"
  avatar="https://github.com/shadcn.png"
  actions={
    <>
      <Button size="sm">Follow</Button>
      <Button size="sm" variant="outlined">Message</Button>
    </>
  }
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        ProfileCard
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Card component for displaying user profiles with avatar, name, title, bio, and optional action buttons.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the ProfileCard component to your project using the shadcn CLI:
      </Paragraph>
      <CodeBlock code={installCommand} language="bash" />

      {/* Import */}
      <Heading level={2} className="mt-12 mb-4">
        Import
      </Heading>
      <CodeBlock code={importCode} language="tsx" />

      {/* Preview */}
      <Heading level={2} className="mt-12 mb-4">
        Preview
      </Heading>
      <ComponentPreview
        title="ProfileCard"
        description="Profile card with avatar and details"
        code={basicExample}
        tier="free"
      >
        <div className="max-w-xs mx-auto">
          <ProfileCard
            name="Jane Doe"
            title="Software Engineer"
            bio="Building great products with modern web technologies."
            avatar="https://github.com/shadcn.png"
          />
        </div>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Actions
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add buttons or other elements using the <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">actions</code> prop:
      </Paragraph>
      <CodeBlock code={actionsExample} language="tsx" />
      <div className="mt-4 max-w-xs mx-auto">
        <ProfileCard
          name="John Smith"
          title="Product Designer"
          avatar="https://github.com/shadcn.png"
          actions={
            <>
              <Button size="sm">Follow</Button>
              <Button size="sm" variant="outlined">Message</Button>
            </>
          }
        />
      </div>

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
              <td className="py-3 pr-4 font-mono text-xs">name</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Full name of the person (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">title</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Job title or role</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">bio</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional biographical text</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">avatar</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">URL of the avatar image</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">actions</td>
              <td className="py-3 pr-4 font-mono text-xs">ReactNode</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Actions to display in the footer (e.g., buttons)</td>
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
    </div>
  )
}

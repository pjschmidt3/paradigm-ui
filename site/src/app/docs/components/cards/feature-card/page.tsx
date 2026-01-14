import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { FeatureCard } from '@paradigm/feature-card'
import { Zap, Shield } from 'lucide-react'

export default function FeatureCardPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/feature-card.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { FeatureCard } from '@/components/ui/feature-card'`

  const basicExample = `<FeatureCard
  icon={Zap}
  title="Lightning Fast"
  description="Built for speed with optimized rendering and minimal bundle size."
/>`

  const linkExample = `<FeatureCard
  icon={Rocket}
  title="Explore Features"
  description="Click to learn more about our feature set."
  href="/features"
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        FeatureCard
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Card component for showcasing features with an icon, title, and description. Optionally makes the card clickable with an href.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the FeatureCard component to your project using the shadcn CLI:
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
        title="FeatureCard"
        description="Feature card with icon and description"
        code={basicExample}
        tier="free"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Built for speed with optimized rendering and minimal bundle size."
          />
          <FeatureCard
            icon={Shield}
            title="Secure by Default"
            description="Enterprise-grade security with built-in best practices."
          />
        </div>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        Clickable Card
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add an <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">href</code> prop to make the card clickable:
      </Paragraph>
      <CodeBlock code={linkExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">icon</td>
              <td className="py-3 pr-4 font-mono text-xs">ComponentType&lt;LucideProps&gt;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Lucide icon component (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">title</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Feature title (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">description</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Feature description (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">href</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional link URL - makes entire card clickable</td>
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

import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { StatsCard } from '@paradigm/stats-card'
import { Users, DollarSign, TrendingUp } from 'lucide-react'

export default function StatsCardPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/stats-card.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { StatsCard } from '@/components/ui/stats-card'`

  const basicExample = `<StatsCard
  label="Total Users"
  value="2,543"
  icon={Users}
/>`

  const trendExample = `<StatsCard
  label="Revenue"
  value="$45,231"
  icon={DollarSign}
  trend={{ direction: 'up', value: 12.5 }}
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        StatsCard
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Card component for displaying statistics with a label, value, optional icon, and trend indicator.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the StatsCard component to your project using the shadcn CLI:
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
        title="StatsCard"
        description="Statistics card with value and trend"
        code={basicExample}
        tier="free"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            label="Total Users"
            value="2,543"
            icon={Users}
          />
          <StatsCard
            label="Revenue"
            value="$45,231"
            icon={DollarSign}
            trend={{ direction: 'up', value: 12.5 }}
          />
          <StatsCard
            label="Growth Rate"
            value="23.1%"
            icon={TrendingUp}
            trend={{ direction: 'down', value: 3.2 }}
          />
        </div>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Trend Indicator
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add a trend indicator with direction (up, down, neutral) and percentage value:
      </Paragraph>
      <CodeBlock code={trendExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">label</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Label describing the statistic (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">value</td>
              <td className="py-3 pr-4 font-mono text-xs">number | string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">The main statistic value (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">icon</td>
              <td className="py-3 pr-4 font-mono text-xs">ComponentType&lt;LucideProps&gt;</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional Lucide icon component</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">trend</td>
              <td className="py-3 pr-4 font-mono text-xs">{`{ direction: 'up' | 'down' | 'neutral', value: number }`}</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Trend indicator with direction and percentage</td>
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

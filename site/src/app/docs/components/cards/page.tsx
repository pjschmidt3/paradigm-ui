import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

const components = [
  {
    name: 'ProfileCard',
    description: 'User profile display with avatar, name, bio, and social links.',
    import: "import { ProfileCard } from '@/components/ui/profile-card'"
  },
  {
    name: 'StatsCard',
    description: 'Metric display with label, value, and optional trend indicator.',
    import: "import { StatsCard } from '@/components/ui/stats-card'"
  },
  {
    name: 'TestimonialCard',
    description: 'Customer testimonial with quote, author, and company attribution.',
    import: "import { TestimonialCard } from '@/components/ui/testimonial-card'"
  },
  {
    name: 'FeatureCard',
    description: 'Feature highlight with icon, title, and description.',
    import: "import { FeatureCard } from '@/components/ui/feature-card'"
  }
]

export default function CardsPage() {
  const statsExample = `<StatsCard
  label="Total Users"
  value="12,345"
  trend={{ value: 12, direction: 'up' }}
/>`

  const testimonialExample = `<TestimonialCard
  quote="Paradigm UI has transformed how we build interfaces."
  author="Jane Smith"
  role="CTO"
  company="TechCorp"
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Cards
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Pre-styled card components for common UI patterns like profiles, stats, and testimonials.
      </Paragraph>

      {/* Component List */}
      <div className="space-y-6 mb-12">
        {components.map((comp) => (
          <div key={comp.name} className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <Heading level={3} className="text-lg mb-2">
              {comp.name}
            </Heading>
            <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {comp.description}
            </Paragraph>
            <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded block">
              {comp.import}
            </code>
          </div>
        ))}
      </div>

      {/* Examples */}
      <Heading level={2} className="mb-4">
        StatsCard Example
      </Heading>
      <CodeBlock code={statsExample} language="tsx" />

      <Heading level={2} className="mt-12 mb-4">
        TestimonialCard Example
      </Heading>
      <CodeBlock code={testimonialExample} language="tsx" />

      {/* Note */}
      <div className="mt-8 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
          These cards are part of the free tier and can be added individually via the CLI.
        </Paragraph>
      </div>
    </div>
  )
}

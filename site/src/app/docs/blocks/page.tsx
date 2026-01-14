import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

const blocks = [
  {
    name: 'PricingTable',
    description: 'Complete pricing section with tiers, features, and CTAs.',
    category: 'Marketing'
  },
  {
    name: 'CTASection',
    description: 'Call-to-action section with headline, description, and buttons.',
    category: 'Marketing'
  },
  {
    name: 'ProjectCard',
    description: 'Portfolio project display with image, title, and tech stack.',
    category: 'Portfolio'
  },
  {
    name: 'Timeline',
    description: 'Chronological timeline for experience, history, or processes.',
    category: 'Portfolio'
  },
  {
    name: 'PageHeader',
    description: 'Page title section with breadcrumbs and optional actions.',
    category: 'Page Layout'
  },
  {
    name: 'SectionWrapper',
    description: 'Consistent section container with spacing and optional heading.',
    category: 'Page Layout'
  }
]

export default function BlocksPage() {
  const installExample = `npx shadcn@latest add https://paradigm-ui.com/registry/pricing-table`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Blocks
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-4">
        Pre-built page sections for common use cases. Composed from multiple components for rapid development.
      </Paragraph>

      {/* Premium Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm mb-8">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
        Premium Tier
      </div>

      {/* Block Categories */}
      <div className="space-y-8 mb-12">
        {['Marketing', 'Portfolio', 'Page Layout'].map((category) => (
          <div key={category}>
            <Heading level={2} className="text-lg mb-4">
              {category}
            </Heading>
            <div className="space-y-4">
              {blocks
                .filter((b) => b.category === category)
                .map((block) => (
                  <div
                    key={block.name}
                    className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800"
                  >
                    <Heading level={3} className="text-base mb-1">
                      {block.name}
                    </Heading>
                    <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400">
                      {block.description}
                    </Paragraph>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Premium blocks can be added via the CLI:
      </Paragraph>
      <CodeBlock code={installExample} language="bash" />

      {/* What's Included */}
      <div className="mt-12 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-3">
          What&apos;s included in Premium?
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>All composed blocks (PricingTable, CTASection, etc.)</li>
          <li>Full TypeScript types</li>
          <li>Responsive by default</li>
          <li>Dark mode support</li>
          <li>Customizable via props and Tailwind</li>
        </ul>
      </div>
    </div>
  )
}

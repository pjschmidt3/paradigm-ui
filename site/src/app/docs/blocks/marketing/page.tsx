import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'

const marketingBlocks = [
  {
    name: 'PricingTable',
    description: 'Complete pricing section with multiple tiers, feature lists, and call-to-action buttons.',
    props: ['tiers', 'billingPeriod', 'highlightedTier']
  },
  {
    name: 'CTASection',
    description: 'Call-to-action section with headline, supporting text, and primary/secondary buttons.',
    props: ['heading', 'description', 'primaryAction', 'secondaryAction']
  }
]

export default function MarketingBlocksPage() {
  const pricingExample = `import { PricingTable } from '@/components/blocks/pricing-table'

const tiers = [
  {
    name: 'Free',
    price: { monthly: 0, annually: 0 },
    features: ['5 projects', 'Basic analytics', 'Community support'],
    cta: { label: 'Get Started', href: '/signup' }
  },
  {
    name: 'Pro',
    price: { monthly: 19, annually: 190 },
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
    cta: { label: 'Start Trial', href: '/signup?plan=pro' },
    highlighted: true
  }
]

<PricingTable tiers={tiers} billingPeriod="monthly" />`

  const ctaExample = `import { CTASection } from '@/components/blocks/cta-section'

<CTASection
  heading="Ready to get started?"
  description="Join thousands of developers building with Paradigm UI."
  primaryAction={{ label: 'Get Started', href: '/signup' }}
  secondaryAction={{ label: 'View Docs', href: '/docs' }}
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        Marketing Blocks
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Pre-built marketing sections for landing pages and product sites.
      </Paragraph>

      {/* Block List */}
      <div className="space-y-6 mb-12">
        {marketingBlocks.map((block) => (
          <div key={block.name} className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-2">
              <Heading level={3} className="text-lg">
                {block.name}
              </Heading>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
                Premium
              </span>
            </div>
            <Paragraph className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {block.description}
            </Paragraph>
            <div className="flex flex-wrap gap-2">
              {block.props.map((prop) => (
                <code key={prop} className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  {prop}
                </code>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PricingTable Example */}
      <Heading level={2} className="mb-4">
        PricingTable Example
      </Heading>
      <CodeBlock code={pricingExample} language="tsx" />

      {/* CTASection Example */}
      <Heading level={2} className="mt-12 mb-4">
        CTASection Example
      </Heading>
      <CodeBlock code={ctaExample} language="tsx" />

      {/* Features */}
      <div className="mt-12 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <Heading level={3} className="text-base mb-3">
          All Marketing Blocks Include
        </Heading>
        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <li>Responsive design (mobile-first)</li>
          <li>Dark mode support</li>
          <li>Customizable via Tailwind classes</li>
          <li>Full TypeScript types</li>
          <li>Accessible markup</li>
        </ul>
      </div>
    </div>
  )
}

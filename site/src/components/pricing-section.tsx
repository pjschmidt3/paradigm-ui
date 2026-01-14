'use client'

export function PricingSection() {
  const freeTierFeatures = [
    'Layout components (Box, Flex, FlexRow, FlexCol, Grid)',
    'Typography (Heading, Paragraph)',
    '7 React hooks (useDisclosure, useToggle, useMediaQuery, etc.)',
    '10+ aesthetic cards (ProfileCard, StatsCard, FeatureCard)',
    'Content components (Blockquote, List, Callout)',
    '50+ atomic UI components',
    'Full TypeScript support',
    'TailwindCSS v4 compatible'
  ]

  const premiumFeatures = [
    'Everything in Free tier',
    'Hero component with animations',
    'SocialLinks component',
    'CodeBlock with copy functionality',
    'Appear animations',
    'Button variants (loading, sizes)',
    'PricingTable and CTASection blocks',
    'Portfolio blocks (ProjectCard, Timeline)',
    'Page layout blocks (PageHeader, SectionWrapper)',
    'Priority support'
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Pricing</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Start free with essential building blocks. Upgrade when you need the fancy stuff.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-500 dark:text-zinc-400">forever</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Essential building blocks for any project
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {freeTierFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#docs"
              className="block w-full text-center py-2.5 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Premium Tier */}
          <div className="relative bg-white dark:bg-zinc-900 rounded-xl border-2 border-violet-500 dark:border-violet-400 p-8 shadow-lg shadow-violet-500/10">
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-violet-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Recommended
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold">Coming Soon</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                Advanced composites for polished products
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="block w-full text-center py-2.5 px-4 rounded-lg bg-violet-500 hover:bg-violet-600 text-white font-medium transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

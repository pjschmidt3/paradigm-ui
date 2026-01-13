'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Appear, Hero, Heading, FlexRow, Box, Flex, Grid } from './paradigm'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [demoMode, setDemoMode] = useState<'flex' | 'grid'>('flex')

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Appear duration={0.6}>
          <Hero
            className="text-center"
            heading="Build beautiful interfaces with composable React components"
            headingClassName="text-balance max-w-4xl mx-auto"
            subheading="Production-ready. Type-safe. Tailwind-powered."
            subheadingClassName="text-zinc-600 dark:text-zinc-400 font-normal"
            description={
              <>
                Start with free, foundational components like Flex, Grid, and Typography.
                Upgrade to premium for polished, production-ready composites like Hero and SocialLinks.
              </>
            }
            descriptionClassName="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-500"
          />
        </Appear>

        {/* CTA Buttons */}
        <Appear duration={0.6}>
          <FlexRow className="justify-center gap-4 mt-8">
            <Link
              href="#components"
              className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 dark:bg-white px-8 text-sm font-medium text-white dark:text-zinc-900 transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
            >
              Get Started
            </Link>
            <Link
              href="#pricing"
              className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              View Components
            </Link>
          </FlexRow>
        </Appear>

        {/* Interactive Demo */}
        <Appear duration={0.6}>
          <div className="mt-16 md:mt-24">
            <Heading level={3} className="text-center text-lg font-medium mb-6 text-zinc-600 dark:text-zinc-400">
              Interactive Demo
            </Heading>

            {/* Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 p-1">
                <button
                  onClick={() => setDemoMode('flex')}
                  className={cn(
                    'px-4 py-2 text-sm rounded-md transition-colors',
                    demoMode === 'flex'
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  )}
                >
                  Show Flex
                </button>
                <button
                  onClick={() => setDemoMode('grid')}
                  className={cn(
                    'px-4 py-2 text-sm rounded-md transition-colors',
                    demoMode === 'grid'
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  )}
                >
                  Show Grid
                </button>
              </div>
            </div>

            {/* Demo Container */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-8 overflow-hidden">
              {demoMode === 'flex' ? (
                <Flex className="gap-4 flex-wrap justify-center">
                  <Appear duration={0.3}>
                    <Box className="w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Box 1
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="w-24 h-24 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Box 2
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="w-24 h-24 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Box 3
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="w-24 h-24 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Box 4
                    </Box>
                  </Appear>
                </Flex>
              ) : (
                <Grid className="grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto md:max-w-none">
                  <Appear duration={0.3}>
                    <Box className="aspect-square rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Cell 1
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="aspect-square rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Cell 2
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="aspect-square rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Cell 3
                    </Box>
                  </Appear>
                  <Appear duration={0.3}>
                    <Box className="aspect-square rounded-lg bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center text-white text-sm font-medium shadow-lg">
                      Cell 4
                    </Box>
                  </Appear>
                </Grid>
              )}

              <p className="text-center text-sm text-zinc-500 mt-6">
                {demoMode === 'flex'
                  ? 'Using Flex + Box components with Appear animations'
                  : 'Using Grid + Box components with Appear animations'}
              </p>
            </div>
          </div>
        </Appear>
      </div>
    </section>
  )
}

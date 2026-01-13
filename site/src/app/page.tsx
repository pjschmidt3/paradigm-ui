import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Components Section */}
      <section id="components" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-8">Components</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Component showcase coming soon...
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-8">Pricing</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Pricing tiers coming soon...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2026 Paradigm UI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/paradigm-ui/paradigm-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { HeroSection } from "@/components/hero-section"
import { ComponentsSection } from "@/components/components-section"
import { PricingSection } from "@/components/pricing-section"
import { GettingStarted } from "@/components/getting-started"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Components Section */}
      <ComponentsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Getting Started Section */}
      <GettingStarted />

      {/* Footer */}
      <Footer />
    </div>
  )
}

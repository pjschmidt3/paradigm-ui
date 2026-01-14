import { Heading } from '@paradigm/heading'
import { Paragraph } from '@paradigm/paragraph'
import { CodeBlock } from '@paradigm/code-block'
import { ComponentPreview } from '@/components/component-preview'
import { TestimonialCard } from '@paradigm/testimonial-card'

export default function TestimonialCardPage() {
  const registryUrl = 'https://paradigm-ui.dev/r/testimonial-card.json'
  const installCommand = `npx shadcn@latest add ${registryUrl}`
  const importCode = `import { TestimonialCard } from '@/components/ui/testimonial-card'`

  const basicExample = `<TestimonialCard
  quote="This component library has transformed our development workflow."
  author="Sarah Johnson"
  role="Engineering Lead at TechCorp"
  avatar="https://github.com/shadcn.png"
/>`

  const ratingExample = `<TestimonialCard
  quote="Incredible attention to detail and beautiful design."
  author="Mike Chen"
  role="Product Designer"
  rating={5}
/>`

  return (
    <div className="max-w-3xl">
      <Heading level={1} className="mb-4">
        TestimonialCard
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
        Card component for displaying customer testimonials with quote, author info, avatar, and optional star rating.
      </Paragraph>

      {/* Installation */}
      <Heading level={2} className="mb-4">
        Installation
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add the TestimonialCard component to your project using the shadcn CLI:
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
        title="TestimonialCard"
        description="Testimonial card with quote and rating"
        code={basicExample}
        tier="free"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <TestimonialCard
            quote="This component library has transformed our development workflow. Highly recommended!"
            author="Sarah Johnson"
            role="Engineering Lead at TechCorp"
            avatar="https://github.com/shadcn.png"
            rating={5}
          />
          <TestimonialCard
            quote="Beautiful design system that just works out of the box."
            author="Mike Chen"
            role="Product Designer"
            rating={4}
          />
        </div>
      </ComponentPreview>

      {/* Examples */}
      <Heading level={2} className="mt-12 mb-4">
        Examples
      </Heading>

      <Heading level={3} className="mt-8 mb-4">
        With Star Rating
      </Heading>
      <Paragraph className="text-zinc-600 dark:text-zinc-400 mb-4">
        Add a star rating from 1-5 with the <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">rating</code> prop:
      </Paragraph>
      <CodeBlock code={ratingExample} language="tsx" />

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
              <td className="py-3 pr-4 font-mono text-xs">quote</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">The testimonial quote text (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">author</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Author name (required)</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">role</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Author&apos;s role or title</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">avatar</td>
              <td className="py-3 pr-4 font-mono text-xs">string</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional avatar URL</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono text-xs">rating</td>
              <td className="py-3 pr-4 font-mono text-xs">1 | 2 | 3 | 4 | 5</td>
              <td className="py-3 pr-4 font-mono text-xs">-</td>
              <td className="py-3 text-zinc-600 dark:text-zinc-400">Optional star rating from 1-5</td>
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

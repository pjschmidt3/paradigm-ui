"use client"

import { ComponentPreview } from "./component-preview"
import { FlexRow, Grid, Button, Hero, Heading, Paragraph, Box, CodeBlock } from "./paradigm"

export function ComponentsSection() {
  return (
    <section id="components" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Components</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A growing collection of composable React components. Start with our generous free tier,
            upgrade to premium for complex composite components.
          </p>
        </div>

        {/* Component Previews */}
        <div className="space-y-8">
          {/* FlexRow */}
          <ComponentPreview
            title="FlexRow"
            description="Horizontal flex container with gap and alignment"
            tier="free"
            code={`import { FlexRow } from "@paradigm/flex-row"

<FlexRow gap="md" justifyContent="between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</FlexRow>`}
          >
            <FlexRow gap="md" justifyContent="between" className="w-full max-w-md">
              <Box className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 1</Box>
              <Box className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 2</Box>
              <Box className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded">Item 3</Box>
            </FlexRow>
          </ComponentPreview>

          {/* Grid */}
          <ComponentPreview
            title="Grid"
            description="CSS Grid with responsive columns"
            tier="free"
            code={`import { Grid } from "@paradigm/grid"

<Grid cols={3} gap="md">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
  <div>Cell 4</div>
  <div>Cell 5</div>
  <div>Cell 6</div>
</Grid>`}
          >
            <Grid cols={3} gap="md" className="w-full max-w-md">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <Box
                  key={n}
                  className="px-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded text-center"
                >
                  Cell {n}
                </Box>
              ))}
            </Grid>
          </ComponentPreview>

          {/* Button */}
          <ComponentPreview
            title="Button"
            description="Flexible button with variants and icons"
            tier="premium"
            code={`import { Button } from "@paradigm/button"

<Button variant="default">Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>`}
          >
            <FlexRow gap="sm">
              <Button variant="default">Default</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
            </FlexRow>
          </ComponentPreview>

          {/* Hero */}
          <ComponentPreview
            title="Hero"
            description="Composite hero section with heading and social links"
            tier="premium"
            code={`import { Hero } from "@paradigm/hero"

<Hero
  heading="Welcome to Paradigm"
  subheading="Build faster with composable components"
  description="A growing collection of premium React components."
/>`}
          >
            <div className="w-full max-w-md">
              <Hero
                heading="Welcome to Paradigm"
                subheading="Build faster"
                className="py-4"
              />
            </div>
          </ComponentPreview>

          {/* Typography */}
          <ComponentPreview
            title="Typography"
            description="Heading and Paragraph components"
            tier="free"
            code={`import { Heading } from "@paradigm/heading"
import { Paragraph } from "@paradigm/paragraph"

<Heading level={2}>Page Title</Heading>
<Paragraph>
  Body text with consistent typography styling.
</Paragraph>`}
          >
            <div className="w-full max-w-md space-y-2">
              <Heading level={2}>Page Title</Heading>
              <Paragraph className="text-zinc-600 dark:text-zinc-400">
                Body text with consistent typography styling.
              </Paragraph>
            </div>
          </ComponentPreview>

          {/* CodeBlock */}
          <ComponentPreview
            title="CodeBlock"
            description="Code display with copy-to-clipboard"
            tier="premium"
            code={`import { CodeBlock } from "@paradigm/code-block"

<CodeBlock
  code="const greeting = 'Hello, World!'"
  language="typescript"
/>`}
          >
            <div className="w-full max-w-md">
              <CodeBlock
                code={`const greeting = 'Hello, World!'
console.log(greeting)`}
                language="typescript"
              />
            </div>
          </ComponentPreview>
        </div>
      </div>
    </section>
  )
}

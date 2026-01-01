# Paradigm UI Examples

Practical examples showing how to use Paradigm UI components in real-world scenarios.

## Table of Contents

- [Layout Patterns](#layout-patterns)
- [Responsive Design](#responsive-design)
- [Animation Patterns](#animation-patterns)
- [Composition Examples](#composition-examples)
- [Common Use Cases](#common-use-cases)

## Layout Patterns

### Navigation Bar

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'

export function Navbar() {
  return (
    <FlexRow
      as="nav"
      justifyContent="between"
      alignItems="center"
      className="px-6 py-4 border-b"
    >
      <FlexRow alignItems="center" className="gap-8">
        <Logo />
        <NavLinks />
      </FlexRow>

      <FlexRow alignItems="center" className="gap-4">
        <SearchBar />
        <UserMenu />
      </FlexRow>
    </FlexRow>
  )
}
```

### Card Grid

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'
import { Appear } from '@/components/ui/appear'

export function CardGrid({ items }) {
  return (
    <FlexRow className="flex-wrap gap-6">
      {items.map((item, index) => (
        <Appear key={item.id} delay={index * 0.1}>
          <FlexCol
            className="w-80 p-6 border rounded-lg gap-4"
            justifyContent="between"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Learn More</button>
          </FlexCol>
        </Appear>
      ))}
    </FlexRow>
  )
}
```

### Sidebar Layout

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'

export function SidebarLayout({ sidebar, children }) {
  return (
    <FlexRow className="min-h-screen">
      <FlexCol
        as="aside"
        className="w-64 border-r p-4 gap-2"
      >
        {sidebar}
      </FlexCol>

      <FlexCol className="flex-1 p-8">
        {children}
      </FlexCol>
    </FlexRow>
  )
}
```

## Responsive Design

### Mobile-First Stack

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { FlexRow } from '@/components/ui/flex-row'

export function ResponsiveFeatures({ features }) {
  return (
    <FlexCol className="gap-8 md:flex-row md:gap-12">
      {features.map((feature) => (
        <FlexCol key={feature.id} className="gap-4 md:flex-1">
          <Icon name={feature.icon} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </FlexCol>
      ))}
    </FlexCol>
  )
}
```

### Responsive Hero Section

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { Hero } from '@/components/ui/hero'
import { Paragraph } from '@/components/ui/paragraph'
import { Appear } from '@/components/ui/appear'

export function HeroSection() {
  return (
    <FlexCol
      alignItems="center"
      justifyContent="center"
      className="min-h-screen gap-6 px-4 text-center"
    >
      <Appear duration={0.8}>
        <Hero className="max-w-4xl">
          Build Beautiful Interfaces Faster
        </Hero>
      </Appear>

      <Appear delay={0.2} duration={0.8}>
        <Paragraph className="max-w-2xl" variant="muted">
          Composable primitives that make complex layouts simple
        </Paragraph>
      </Appear>

      <Appear delay={0.4}>
        <FlexRow className="gap-4 mt-4">
          <button>Get Started</button>
          <button>View Docs</button>
        </FlexRow>
      </Appear>
    </FlexCol>
  )
}
```

## Animation Patterns

### Staggered List

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { Appear } from '@/components/ui/appear'

export function StaggeredList({ items }) {
  return (
    <FlexCol className="gap-4">
      {items.map((item, index) => (
        <Appear
          key={item.id}
          delay={index * 0.1}
          duration={0.5}
        >
          <div className="p-4 border rounded">
            {item.content}
          </div>
        </Appear>
      ))}
    </FlexCol>
  )
}
```

### Sequential Sections

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { Appear } from '@/components/ui/appear'

export function AboutPage() {
  return (
    <FlexCol className="gap-16 py-16">
      <Appear as="section">
        <h2>Our Mission</h2>
        <p>...</p>
      </Appear>

      <Appear as="section" delay={0.2}>
        <h2>Our Team</h2>
        <p>...</p>
      </Appear>

      <Appear as="section" delay={0.4}>
        <h2>Our Values</h2>
        <p>...</p>
      </Appear>
    </FlexCol>
  )
}
```

## Composition Examples

### Feature Showcase

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { Appear } from '@/components/ui/appear'

export function FeatureShowcase() {
  return (
    <FlexCol className="gap-12 py-16">
      <Appear>
        <Heading level={2} className="text-center">
          Why Choose Paradigm UI?
        </Heading>
      </Appear>

      <FlexRow className="flex-wrap gap-8 justify-center">
        <Appear delay={0.1}>
          <FlexCol className="max-w-sm gap-4">
            <div className="w-12 h-12 bg-primary rounded" />
            <Heading level={3}>Composable</Heading>
            <Paragraph variant="muted">
              Build complex layouts from simple primitives
            </Paragraph>
          </FlexCol>
        </Appear>

        <Appear delay={0.2}>
          <FlexCol className="max-w-sm gap-4">
            <div className="w-12 h-12 bg-primary rounded" />
            <Heading level={3}>Type-Safe</Heading>
            <Paragraph variant="muted">
              Full TypeScript support with strict mode
            </Paragraph>
          </FlexCol>
        </Appear>

        <Appear delay={0.3}>
          <FlexCol className="max-w-sm gap-4">
            <div className="w-12 h-12 bg-primary rounded" />
            <Heading level={3}>Tailwind-Native</Heading>
            <Paragraph variant="muted">
              Works seamlessly with your Tailwind workflow
            </Paragraph>
          </FlexCol>
        </Appear>
      </FlexRow>
    </FlexCol>
  )
}
```

### Dashboard Layout

```tsx
import { FlexRow } from '@/components/ui/flex-row'
import { FlexCol } from '@/components/ui/flex-col'

export function Dashboard() {
  return (
    <FlexCol className="min-h-screen">
      {/* Header */}
      <FlexRow
        justifyContent="between"
        alignItems="center"
        className="px-6 py-4 border-b"
      >
        <h1>Dashboard</h1>
        <UserMenu />
      </FlexRow>

      {/* Main content */}
      <FlexRow className="flex-1">
        {/* Sidebar */}
        <FlexCol className="w-64 border-r p-4 gap-2">
          <NavItem>Overview</NavItem>
          <NavItem>Analytics</NavItem>
          <NavItem>Settings</NavItem>
        </FlexCol>

        {/* Content area */}
        <FlexCol className="flex-1 p-8 gap-8">
          {/* Stats row */}
          <FlexRow className="gap-4">
            <StatCard title="Users" value="1,234" />
            <StatCard title="Revenue" value="$12,345" />
            <StatCard title="Growth" value="+12%" />
          </FlexRow>

          {/* Charts */}
          <FlexRow className="gap-4">
            <ChartCard className="flex-1" />
            <ChartCard className="flex-1" />
          </FlexRow>
        </FlexCol>
      </FlexRow>
    </FlexCol>
  )
}
```

## Common Use Cases

### Centered Loading State

```tsx
import { FlexCol } from '@/components/ui/flex-col'

export function LoadingScreen() {
  return (
    <FlexCol
      justifyContent="center"
      alignItems="center"
      className="min-h-screen"
    >
      <Spinner />
      <p>Loading...</p>
    </FlexCol>
  )
}
```

### Form Layout

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { FlexRow } from '@/components/ui/flex-row'

export function ContactForm() {
  return (
    <form>
      <FlexCol className="gap-6 max-w-lg">
        <FlexCol className="gap-2">
          <label>Name</label>
          <input type="text" />
        </FlexCol>

        <FlexCol className="gap-2">
          <label>Email</label>
          <input type="email" />
        </FlexCol>

        <FlexCol className="gap-2">
          <label>Message</label>
          <textarea rows={5} />
        </FlexCol>

        <FlexRow justifyContent="end" className="gap-4">
          <button type="button">Cancel</button>
          <button type="submit">Send</button>
        </FlexRow>
      </FlexCol>
    </form>
  )
}
```

### Modal Dialog

```tsx
import { FlexCol } from '@/components/ui/flex-col'
import { FlexRow } from '@/components/ui/flex-row'
import { Heading } from '@/components/ui/heading'

export function Modal({ title, children, onClose }) {
  return (
    <FlexCol
      justifyContent="center"
      alignItems="center"
      className="fixed inset-0 bg-black/50"
    >
      <FlexCol className="bg-white rounded-lg p-6 gap-4 max-w-md w-full">
        <FlexRow justifyContent="between" alignItems="center">
          <Heading level={3}>{title}</Heading>
          <button onClick={onClose}>×</button>
        </FlexRow>

        <div>{children}</div>

        <FlexRow justifyContent="end" className="gap-4">
          <button onClick={onClose}>Close</button>
          <button>Confirm</button>
        </FlexRow>
      </FlexCol>
    </FlexCol>
  )
}
```

## Best Practices

### 1. Use Semantic HTML

Always use the `as` prop for semantic markup:

```tsx
<FlexRow as="nav">...</FlexRow>
<FlexCol as="section">...</FlexCol>
<Appear as="article">...</Appear>
```

### 2. Combine with Tailwind

Paradigm UI works best when combined with Tailwind utilities:

```tsx
<FlexCol
  alignItems="center"
  className="gap-4 p-8 bg-gradient-to-r from-blue-500 to-purple-500"
>
  {/* ... */}
</FlexCol>
```

### 3. Progressive Enhancement

Start with simple layouts and add complexity as needed:

```tsx
// Start simple
<FlexRow className="gap-4">
  <div>A</div>
  <div>B</div>
</FlexRow>

// Add alignment
<FlexRow alignItems="center" className="gap-4">
  <div>A</div>
  <div>B</div>
</FlexRow>

// Add responsive behavior
<FlexRow
  alignItems="center"
  className="gap-4 flex-col md:flex-row"
>
  <div>A</div>
  <div>B</div>
</FlexRow>
```

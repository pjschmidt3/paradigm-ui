import { render, screen } from '@testing-library/react'

import { Section } from './section'

describe('Section component', () => {
  describe('Basic rendering', () => {
    it('should render children', () => {
      render(<Section><p>Test content</p></Section>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section"]')).toBeInTheDocument()
    })

    it('should render content slot', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-content"]')).toBeInTheDocument()
    })

    it('should render with id attribute', () => {
      const { container } = render(<Section id="test-section"><p>Content</p></Section>)
      expect(container.querySelector('#test-section')).toBeInTheDocument()
    })
  })

  describe('Title and description rendering', () => {
    it('should render title when provided', () => {
      render(<Section title="Test Title"><p>Content</p></Section>)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render title as heading level 2', () => {
      render(<Section title="Test Title"><p>Content</p></Section>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Title')
    })

    it('should have title data-slot', () => {
      const { container } = render(<Section title="Test Title"><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-title"]')).toBeInTheDocument()
    })

    it('should render description when provided', () => {
      render(<Section description="Test description"><p>Content</p></Section>)
      expect(screen.getByText('Test description')).toBeInTheDocument()
    })

    it('should have description data-slot', () => {
      const { container } = render(<Section description="Test description"><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-description"]')).toBeInTheDocument()
    })

    it('should not render header when no title/description/actions', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-header"]')).not.toBeInTheDocument()
    })

    it('should render header when title provided', () => {
      const { container } = render(<Section title="Title"><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-header"]')).toBeInTheDocument()
    })
  })

  describe('Actions slot rendering', () => {
    it('should render actions when provided', () => {
      render(
        <Section actions={<button type="button">Action</button>}>
          <p>Content</p>
        </Section>
      )
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    })

    it('should have actions data-slot', () => {
      const { container } = render(
        <Section actions={<button type="button">Action</button>}>
          <p>Content</p>
        </Section>
      )
      expect(container.querySelector('[data-slot="section-actions"]')).toBeInTheDocument()
    })

    it('should not render actions slot when not provided', () => {
      const { container } = render(<Section title="Title"><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-actions"]')).not.toBeInTheDocument()
    })
  })

  describe('Variant styling', () => {
    it('should apply default variant', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).not.toHaveClass('-mx-4')
    })

    it('should apply card variant', () => {
      const { container } = render(<Section variant="card"><p>Content</p></Section>)
      expect(container.querySelector('[data-slot="section-card"]')).toBeInTheDocument()
    })

    it('should apply inset variant with negative margins', () => {
      const { container } = render(<Section variant="inset"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('-mx-4', 'px-4')
    })
  })

  describe('Background styling', () => {
    it('should apply default background (no class)', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).not.toHaveClass('bg-muted')
      expect(section).not.toHaveClass('bg-accent')
    })

    it('should apply muted background', () => {
      const { container } = render(<Section background="muted"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('bg-muted')
    })

    it('should apply accent background', () => {
      const { container } = render(<Section background="accent"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('bg-accent')
    })
  })

  describe('Divider styling', () => {
    it('should apply no divider by default', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).not.toHaveClass('border-t')
      expect(section).not.toHaveClass('border-b')
    })

    it('should apply top divider', () => {
      const { container } = render(<Section divider="top"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('border-t', 'border-border')
    })

    it('should apply bottom divider', () => {
      const { container } = render(<Section divider="bottom"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('border-b', 'border-border')
    })

    it('should apply both dividers', () => {
      const { container } = render(<Section divider="both"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('border-t', 'border-b', 'border-border')
    })
  })

  describe('Spacing styling', () => {
    it('should apply medium spacing by default', () => {
      const { container } = render(<Section><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('py-12')
    })

    it('should apply small spacing', () => {
      const { container } = render(<Section spacing="sm"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('py-8')
    })

    it('should apply large spacing', () => {
      const { container } = render(<Section spacing="lg"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('py-16')
    })

    it('should apply extra large spacing', () => {
      const { container } = render(<Section spacing="xl"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('py-24')
    })
  })

  describe('Card variant specific', () => {
    it('should render title in card header', () => {
      render(<Section title="Card Title" variant="card"><p>Content</p></Section>)
      expect(screen.getByText('Card Title')).toBeInTheDocument()
    })

    it('should render description in card header', () => {
      render(<Section description="Card description" variant="card"><p>Content</p></Section>)
      expect(screen.getByText('Card description')).toBeInTheDocument()
    })

    it('should render actions in card header', () => {
      render(
        <Section actions={<button type="button">Card Action</button>} variant="card">
          <p>Content</p>
        </Section>
      )
      expect(screen.getByRole('button', { name: 'Card Action' })).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<Section className="custom-class"><p>Content</p></Section>)
      const section = container.querySelector('[data-slot="section"]')
      expect(section).toHaveClass('custom-class')
    })
  })
})

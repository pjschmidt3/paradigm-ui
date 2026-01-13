import { render, screen } from '@testing-library/react'

import { SectionWrapper } from './section-wrapper'

describe('SectionWrapper component', () => {
  describe('Basic rendering', () => {
    it('should render children', () => {
      render(<SectionWrapper><p>Test content</p></SectionWrapper>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper"]')).toBeInTheDocument()
    })

    it('should render content slot', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-content"]')).toBeInTheDocument()
    })

    it('should render with id attribute', () => {
      const { container } = render(<SectionWrapper id="test-section"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('#test-section')).toBeInTheDocument()
    })
  })

  describe('Title and description rendering', () => {
    it('should render title when provided', () => {
      render(<SectionWrapper title="Test Title"><p>Content</p></SectionWrapper>)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render title as heading level 2', () => {
      render(<SectionWrapper title="Test Title"><p>Content</p></SectionWrapper>)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Title')
    })

    it('should have title data-slot', () => {
      const { container } = render(<SectionWrapper title="Test Title"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-title"]')).toBeInTheDocument()
    })

    it('should render description when provided', () => {
      render(<SectionWrapper description="Test description"><p>Content</p></SectionWrapper>)
      expect(screen.getByText('Test description')).toBeInTheDocument()
    })

    it('should have description data-slot', () => {
      const { container } = render(<SectionWrapper description="Test description"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-description"]')).toBeInTheDocument()
    })

    it('should not render header when no title/description/actions', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-header"]')).not.toBeInTheDocument()
    })

    it('should render header when title provided', () => {
      const { container } = render(<SectionWrapper title="Title"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-header"]')).toBeInTheDocument()
    })
  })

  describe('Actions slot rendering', () => {
    it('should render actions when provided', () => {
      render(
        <SectionWrapper actions={<button type="button">Action</button>}>
          <p>Content</p>
        </SectionWrapper>
      )
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument()
    })

    it('should have actions data-slot', () => {
      const { container } = render(
        <SectionWrapper actions={<button type="button">Action</button>}>
          <p>Content</p>
        </SectionWrapper>
      )
      expect(container.querySelector('[data-slot="section-wrapper-actions"]')).toBeInTheDocument()
    })

    it('should not render actions slot when not provided', () => {
      const { container } = render(<SectionWrapper title="Title"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-actions"]')).not.toBeInTheDocument()
    })
  })

  describe('Variant styling', () => {
    it('should apply default variant', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).not.toHaveClass('-mx-4')
    })

    it('should apply card variant', () => {
      const { container } = render(<SectionWrapper variant="card"><p>Content</p></SectionWrapper>)
      expect(container.querySelector('[data-slot="section-wrapper-card"]')).toBeInTheDocument()
    })

    it('should apply inset variant with negative margins', () => {
      const { container } = render(<SectionWrapper variant="inset"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('-mx-4', 'px-4')
    })
  })

  describe('Background styling', () => {
    it('should apply default background (no class)', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).not.toHaveClass('bg-muted')
      expect(section).not.toHaveClass('bg-accent')
    })

    it('should apply muted background', () => {
      const { container } = render(<SectionWrapper background="muted"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('bg-muted')
    })

    it('should apply accent background', () => {
      const { container } = render(<SectionWrapper background="accent"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('bg-accent')
    })
  })

  describe('Divider styling', () => {
    it('should apply no divider by default', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).not.toHaveClass('border-t')
      expect(section).not.toHaveClass('border-b')
    })

    it('should apply top divider', () => {
      const { container } = render(<SectionWrapper divider="top"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('border-t', 'border-border')
    })

    it('should apply bottom divider', () => {
      const { container } = render(<SectionWrapper divider="bottom"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('border-b', 'border-border')
    })

    it('should apply both dividers', () => {
      const { container } = render(<SectionWrapper divider="both"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('border-t', 'border-b', 'border-border')
    })
  })

  describe('Spacing styling', () => {
    it('should apply medium spacing by default', () => {
      const { container } = render(<SectionWrapper><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('py-12')
    })

    it('should apply small spacing', () => {
      const { container } = render(<SectionWrapper spacing="sm"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('py-8')
    })

    it('should apply large spacing', () => {
      const { container } = render(<SectionWrapper spacing="lg"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('py-16')
    })

    it('should apply extra large spacing', () => {
      const { container } = render(<SectionWrapper spacing="xl"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('py-24')
    })
  })

  describe('Card variant specific', () => {
    it('should render title in card header', () => {
      render(<SectionWrapper title="Card Title" variant="card"><p>Content</p></SectionWrapper>)
      expect(screen.getByText('Card Title')).toBeInTheDocument()
    })

    it('should render description in card header', () => {
      render(<SectionWrapper description="Card description" variant="card"><p>Content</p></SectionWrapper>)
      expect(screen.getByText('Card description')).toBeInTheDocument()
    })

    it('should render actions in card header', () => {
      render(
        <SectionWrapper actions={<button type="button">Card Action</button>} variant="card">
          <p>Content</p>
        </SectionWrapper>
      )
      expect(screen.getByRole('button', { name: 'Card Action' })).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<SectionWrapper className="custom-class"><p>Content</p></SectionWrapper>)
      const section = container.querySelector('[data-slot="section-wrapper"]')
      expect(section).toHaveClass('custom-class')
    })
  })
})

import { fireEvent, render, screen } from '@testing-library/react'

import { Badge } from './badge'

describe('Badge component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Badge>Test Badge</Badge>)
      expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    it('should render as a span element by default', () => {
      const { container } = render(<Badge>Test</Badge>)
      expect(container.querySelector('span')).toBeInTheDocument()
    })
  })

  describe('Size variants', () => {
    it('should render with default size classes', () => {
      const { container } = render(<Badge>Default</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs')
    })

    it('should render sm size with correct classes', () => {
      const { container } = render(<Badge size="sm">Small</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('px-1.5', 'py-0', 'text-[10px]')
      expect(badge).toHaveAttribute('data-size', 'sm')
    })

    it('should render lg size with correct classes', () => {
      const { container } = render(<Badge size="lg">Large</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('px-2.5', 'py-1', 'text-sm')
      expect(badge).toHaveAttribute('data-size', 'lg')
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Badge>Default</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('should apply secondary variant classes', () => {
      const { container } = render(<Badge variant="secondary">Secondary</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    it('should apply destructive variant classes', () => {
      const { container } = render(
        <Badge variant="destructive">Destructive</Badge>
      )
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('bg-destructive')
    })

    it('should apply outline variant classes', () => {
      const { container } = render(<Badge variant="outline">Outline</Badge>)
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('text-foreground')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Badge className="custom-class">Badge</Badge>
      )
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('custom-class')
      expect(badge).toHaveClass('inline-flex')
    })
  })

  describe('Size and variant combinations', () => {
    it('should combine size and variant correctly', () => {
      const { container } = render(
        <Badge
          size="lg"
          variant="secondary">
          Combined
        </Badge>
      )
      const badge = container.querySelector('[data-slot="badge"]')
      expect(badge).toHaveClass('px-2.5', 'py-1', 'text-sm')
      expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })
  })

  describe('Closable Badge (onRemove)', () => {
    it('should render close button when onRemove provided', () => {
      const onRemove = jest.fn()
      const { container } = render(
        <Badge onRemove={onRemove}>Closable</Badge>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      expect(closeButton).toBeInTheDocument()
    })

    it('should not render close button when onRemove not provided', () => {
      const { container } = render(<Badge>Not Closable</Badge>)
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      expect(closeButton).not.toBeInTheDocument()
    })

    it('should call onRemove when close button is clicked', () => {
      const onRemove = jest.fn()
      const { container } = render(
        <Badge onRemove={onRemove}>Closable</Badge>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      fireEvent.click(closeButton!)
      expect(onRemove).toHaveBeenCalledTimes(1)
    })

    it('should stop event propagation on close button click', () => {
      const onRemove = jest.fn()
      const parentClick = jest.fn()
      const { container } = render(
        <div onClick={parentClick}>
          <Badge onRemove={onRemove}>Closable</Badge>
        </div>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      fireEvent.click(closeButton!)
      expect(onRemove).toHaveBeenCalled()
      expect(parentClick).not.toHaveBeenCalled()
    })

    it('should render close button with correct size for sm badge', () => {
      const onRemove = jest.fn()
      const { container } = render(
        <Badge size="sm" onRemove={onRemove}>Small</Badge>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      expect(closeButton).toHaveClass('size-2.5')
    })

    it('should render close button with correct size for lg badge', () => {
      const onRemove = jest.fn()
      const { container } = render(
        <Badge size="lg" onRemove={onRemove}>Large</Badge>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      expect(closeButton).toHaveClass('size-3.5')
    })

    it('should have accessible aria-label on close button', () => {
      const onRemove = jest.fn()
      const { container } = render(
        <Badge onRemove={onRemove}>Accessible</Badge>
      )
      const closeButton = container.querySelector('[data-slot="badge-close"]')
      expect(closeButton).toHaveAttribute('aria-label', 'Remove')
    })
  })
})

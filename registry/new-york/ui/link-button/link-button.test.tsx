import { render, screen } from '@testing-library/react'
import { Settings } from 'lucide-react'

import { LinkButton } from './link-button'

describe('LinkButton component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<LinkButton href="/about">About</LinkButton>)
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('should render as an anchor element', () => {
      render(<LinkButton href="/home">Home</LinkButton>)
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    it('should have correct href attribute', () => {
      render(<LinkButton href="/contact">Contact</LinkButton>)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/contact')
    })
  })

  describe('External links', () => {
    it('should add target="_blank" when external is true', () => {
      render(
        <LinkButton external href="https://example.com">
          External
        </LinkButton>
      )
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    })

    it('should add rel="noopener noreferrer" when external is true', () => {
      render(
        <LinkButton external href="https://example.com">
          External
        </LinkButton>
      )
      expect(screen.getByRole('link')).toHaveAttribute(
        'rel',
        'noopener noreferrer'
      )
    })

    it('should show external link icon by default when external', () => {
      const { container } = render(
        <LinkButton external href="https://example.com">
          External
        </LinkButton>
      )
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('should not show external icon when showExternalIcon is false', () => {
      const { container } = render(
        <LinkButton external href="https://example.com" showExternalIcon={false}>
          External
        </LinkButton>
      )
      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })

    it('should not add external attributes when external is false', () => {
      render(<LinkButton href="/internal">Internal</LinkButton>)
      expect(screen.getByRole('link')).not.toHaveAttribute('target')
      expect(screen.getByRole('link')).not.toHaveAttribute('rel')
    })
  })

  describe('Icon support', () => {
    it('should render icon on the left by default', () => {
      const { container } = render(
        <LinkButton href="/settings" icon={Settings}>
          Settings
        </LinkButton>
      )
      const link = container.querySelector('a')
      const svg = link?.querySelector('svg')
      expect(svg).toBeInTheDocument()
      // Icon should be first child
      expect(link?.firstElementChild).toBe(svg)
    })

    it('should render icon on the right when iconPosition is right', () => {
      const { container } = render(
        <LinkButton href="/next" icon={Settings} iconPosition="right">
          Next
        </LinkButton>
      )
      const link = container.querySelector('a')
      const svg = link?.querySelector('svg')
      expect(svg).toBeInTheDocument()
      // Icon should be after the text
      expect(link?.lastElementChild).toBe(svg)
    })

    it('should not show external icon when custom icon is provided', () => {
      const { container } = render(
        <LinkButton external href="https://example.com" icon={Settings}>
          With Icon
        </LinkButton>
      )
      // Should only have one SVG (the custom icon, not external icon)
      const svgs = container.querySelectorAll('svg')
      expect(svgs.length).toBe(1)
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(
        <LinkButton href="/test" variant="default">
          Default
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('bg-primary')
    })

    it('should apply ghost variant classes', () => {
      const { container } = render(
        <LinkButton href="/test" variant="ghost">
          Ghost
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('bg-transparent')
    })

    it('should apply outlined variant classes', () => {
      const { container } = render(
        <LinkButton href="/test" variant="outlined">
          Outlined
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('border-2', 'border-primary')
    })
  })

  describe('Sizes', () => {
    it('should apply small size classes', () => {
      const { container } = render(
        <LinkButton href="/test" size="sm">
          Small
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('h-8')
    })

    it('should apply large size classes', () => {
      const { container } = render(
        <LinkButton href="/test" size="lg">
          Large
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('h-11')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <LinkButton className="custom-class" href="/test">
          Custom
        </LinkButton>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('custom-class')
      expect(link).toHaveClass('inline-flex')
    })
  })
})

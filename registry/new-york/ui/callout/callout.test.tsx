import { render, screen } from '@testing-library/react'
import { AlertCircle } from 'lucide-react'

import { Callout } from './callout'

describe('Callout component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Callout>This is a callout message</Callout>)
      expect(screen.getByText('This is a callout message')).toBeInTheDocument()
    })

    it('should have role="alert" for accessibility', () => {
      render(<Callout>Alert content</Callout>)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(
        <Callout>
          <p>Paragraph in callout</p>
        </Callout>
      )
      expect(screen.getByText('Paragraph in callout')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply info variant classes', () => {
      const { container } = render(
        <Callout variant="info">Info callout</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-blue-200', 'bg-blue-50')
    })

    it('should apply warning variant classes', () => {
      const { container } = render(
        <Callout variant="warning">Warning callout</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-amber-200', 'bg-amber-50')
    })

    it('should apply success variant classes', () => {
      const { container } = render(
        <Callout variant="success">Success callout</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-green-200', 'bg-green-50')
    })

    it('should apply error variant classes', () => {
      const { container } = render(
        <Callout variant="error">Error callout</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-red-200', 'bg-red-50')
    })

    it('should apply note variant classes', () => {
      const { container } = render(
        <Callout variant="note">Note callout</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-gray-200', 'bg-gray-50')
    })
  })

  describe('Title', () => {
    it('should render title when provided', () => {
      render(
        <Callout title="Important">Callout content</Callout>
      )
      expect(screen.getByText('Important')).toBeInTheDocument()
    })

    it('should render title in an h4 element', () => {
      const { container } = render(
        <Callout title="Heading">Content</Callout>
      )
      expect(container.querySelector('h4')).toBeInTheDocument()
    })

    it('should not render title element when title prop is not provided', () => {
      const { container } = render(<Callout>Content only</Callout>)
      expect(container.querySelector('h4')).not.toBeInTheDocument()
    })
  })

  describe('Icons', () => {
    it('should render default icon for each variant', () => {
      const { container } = render(
        <Callout variant="info">Info</Callout>
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should allow custom icon override', () => {
      render(
        <Callout icon={AlertCircle}>Custom icon callout</Callout>
      )
      // Icon should be rendered
      const callout = screen.getByRole('alert')
      expect(callout.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Callout className="custom-class">Content</Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('custom-class')
      expect(callout).toHaveClass('flex', 'gap-3', 'rounded-lg')
    })
  })

  describe('Common patterns', () => {
    it('should combine variant and title', () => {
      const { container } = render(
        <Callout
          title="Warning Title"
          variant="warning">
          Warning content
        </Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('border-amber-200')
      expect(screen.getByText('Warning Title')).toBeInTheDocument()
      expect(screen.getByText('Warning content')).toBeInTheDocument()
    })

    it('should render complete callout with all props', () => {
      const { container } = render(
        <Callout
          className="extra-class"
          title="Complete Callout"
          variant="success">
          Full featured callout
        </Callout>
      )
      const callout = container.querySelector('[role="alert"]')
      expect(callout).toHaveClass('extra-class', 'border-green-200')
      expect(screen.getByText('Complete Callout')).toBeInTheDocument()
      expect(screen.getByText('Full featured callout')).toBeInTheDocument()
    })
  })
})

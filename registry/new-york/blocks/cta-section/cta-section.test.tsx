import { fireEvent, render, screen } from '@testing-library/react'

import { CTASection } from './cta-section'

describe('CTASection component', () => {
  const defaultProps = {
    heading: 'Ready to get started?',
    primaryAction: { label: 'Get Started' }
  }

  describe('Basic rendering', () => {
    it('should render heading', () => {
      render(<CTASection {...defaultProps} />)
      expect(screen.getByRole('heading', { name: 'Ready to get started?' })).toBeInTheDocument()
    })

    it('should render description when provided', () => {
      render(<CTASection {...defaultProps} description="Join thousands of users" />)
      expect(screen.getByText('Join thousands of users')).toBeInTheDocument()
    })

    it('should render primary action button', () => {
      render(<CTASection {...defaultProps} />)
      expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
    })

    it('should render secondary action when provided', () => {
      render(
        <CTASection
          {...defaultProps}
          secondaryAction={{ label: 'Learn More' }}
        />
      )
      expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument()
    })
  })

  describe('Variant layouts', () => {
    it('should render default variant', () => {
      const { container } = render(<CTASection {...defaultProps} variant="default" />)
      const section = container.querySelector('section')
      expect(section).not.toHaveClass('text-center')
    })

    it('should render centered variant with text-center class', () => {
      const { container } = render(<CTASection {...defaultProps} variant="centered" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('text-center')
    })

    it('should render split variant', () => {
      const { container } = render(<CTASection {...defaultProps} variant="split" />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })
  })

  describe('Background variants', () => {
    it('should apply default background', () => {
      const { container } = render(<CTASection {...defaultProps} background="default" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-background')
    })

    it('should apply muted background', () => {
      const { container } = render(<CTASection {...defaultProps} background="muted" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-muted')
    })

    it('should apply primary background', () => {
      const { container } = render(<CTASection {...defaultProps} background="primary" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('should apply gradient background', () => {
      const { container } = render(<CTASection {...defaultProps} background="gradient" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-gradient-to-r')
    })
  })

  describe('Action callbacks', () => {
    it('should call primary onClick when button is clicked', () => {
      const handleClick = jest.fn()
      render(
        <CTASection
          {...defaultProps}
          primaryAction={{ label: 'Click Me', onClick: handleClick }}
        />
      )
      fireEvent.click(screen.getByRole('button', { name: 'Click Me' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should call secondary onClick when button is clicked', () => {
      const handleClick = jest.fn()
      render(
        <CTASection
          {...defaultProps}
          secondaryAction={{ label: 'Secondary', onClick: handleClick }}
        />
      )
      fireEvent.click(screen.getByRole('button', { name: 'Secondary' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<CTASection {...defaultProps} className="custom-section" />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-section')
    })
  })

  describe('Padding and spacing', () => {
    it('should have standard padding classes', () => {
      const { container } = render(<CTASection {...defaultProps} />)
      const section = container.querySelector('section')
      expect(section).toHaveClass('py-16', 'px-6')
    })
  })
})

import { fireEvent, render, screen } from '@testing-library/react'

import { PricingTable, PricingTier } from './pricing-table'

describe('PricingTier component', () => {
  const defaultProps = {
    cta: { label: 'Get Started' },
    features: ['Feature 1', 'Feature 2'],
    name: 'Basic',
    price: 9
  }

  describe('Basic rendering', () => {
    it('should render tier name', () => {
      render(<PricingTier {...defaultProps} />)
      expect(screen.getByText('Basic')).toBeInTheDocument()
    })

    it('should render numeric price with dollar sign', () => {
      render(<PricingTier {...defaultProps} />)
      expect(screen.getByText('$9')).toBeInTheDocument()
    })

    it('should render string price as-is', () => {
      render(<PricingTier {...defaultProps} price="Free" />)
      expect(screen.getByText('Free')).toBeInTheDocument()
    })

    it('should render billing period', () => {
      render(<PricingTier {...defaultProps} period="month" />)
      expect(screen.getByText('/month')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(<PricingTier {...defaultProps} description="Perfect for starters" />)
      expect(screen.getByText('Perfect for starters')).toBeInTheDocument()
    })

    it('should render all features', () => {
      render(<PricingTier {...defaultProps} />)
      expect(screen.getByText('Feature 1')).toBeInTheDocument()
      expect(screen.getByText('Feature 2')).toBeInTheDocument()
    })

    it('should render CTA button', () => {
      render(<PricingTier {...defaultProps} />)
      expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
    })
  })

  describe('Popular tier', () => {
    it('should display Popular badge when popular is true', () => {
      render(<PricingTier {...defaultProps} popular />)
      expect(screen.getByText('Popular')).toBeInTheDocument()
    })

    it('should not display Popular badge when popular is false', () => {
      render(<PricingTier {...defaultProps} />)
      expect(screen.queryByText('Popular')).not.toBeInTheDocument()
    })

    it('should apply ring styling when popular', () => {
      const { container } = render(<PricingTier {...defaultProps} popular />)
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('ring-2', 'ring-primary')
    })
  })

  describe('CTA actions', () => {
    it('should call onClick when button is clicked', () => {
      const handleClick = jest.fn()
      render(<PricingTier {...defaultProps} cta={{ label: 'Click Me', onClick: handleClick }} />)
      fireEvent.click(screen.getByRole('button', { name: 'Click Me' }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<PricingTier {...defaultProps} className="custom-class" />)
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('custom-class')
    })
  })
})

describe('PricingTable component', () => {
  const tiers = [
    {
      cta: { label: 'Start Free' },
      features: ['5 projects', 'Basic support'],
      name: 'Free',
      price: 'Free'
    },
    {
      cta: { label: 'Get Pro' },
      features: ['Unlimited projects', 'Priority support'],
      name: 'Pro',
      popular: true,
      price: 29
    },
    {
      cta: { label: 'Contact Sales' },
      features: ['Custom solutions', 'Dedicated support'],
      name: 'Enterprise',
      price: 'Custom'
    }
  ]

  it('should render all tiers', () => {
    render(<PricingTable tiers={tiers} />)
    // Use getAllByText since "Free" appears as both tier name and price
    expect(screen.getAllByText('Free').length).toBeGreaterThan(0)
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('should render with responsive grid classes', () => {
    const { container } = render(<PricingTable tiers={tiers} />)
    const grid = container.firstChild
    expect(grid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
  })

  it('should merge custom className', () => {
    const { container } = render(<PricingTable className="custom-table" tiers={tiers} />)
    const grid = container.firstChild
    expect(grid).toHaveClass('custom-table')
  })

  it('should render popular badge on correct tier', () => {
    render(<PricingTable tiers={tiers} />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })
})

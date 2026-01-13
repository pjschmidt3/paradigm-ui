import { render, screen } from '@testing-library/react'

import { TestimonialCard } from './testimonial-card'

describe('TestimonialCard component', () => {
  describe('Basic rendering', () => {
    it('should render with required props', () => {
      render(<TestimonialCard author="John Doe" quote="This is a great product!" />)
      expect(screen.getByText('This is a great product!')).toBeInTheDocument()
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should render quote text', () => {
      render(<TestimonialCard author="Jane" quote="Amazing experience" />)
      expect(screen.getByText('Amazing experience')).toBeInTheDocument()
    })

    it('should render author name', () => {
      render(<TestimonialCard author="Sarah Smith" quote="Test quote" />)
      expect(screen.getByText('Sarah Smith')).toBeInTheDocument()
    })
  })

  describe('Optional props', () => {
    it('should render role when provided', () => {
      render(
        <TestimonialCard
          author="John Doe"
          quote="Great product"
          role="CEO at Company"
        />
      )
      expect(screen.getByText('CEO at Company')).toBeInTheDocument()
    })

    it('should render avatar when provided', () => {
      const { container } = render(
        <TestimonialCard
          author="John Doe"
          avatar="https://example.com/avatar.jpg"
          quote="Great product"
        />
      )
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
    })

    it('should render avatar fallback when no avatar provided', () => {
      render(<TestimonialCard author="John Doe" quote="Great product" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should not render role when not provided', () => {
      const { container } = render(
        <TestimonialCard author="John Doe" quote="Great product" />
      )
      const roleSpan = container.querySelector('.text-xs')
      expect(roleSpan).not.toBeInTheDocument()
    })
  })

  describe('Rating display', () => {
    it('should render 5 stars when rating is 5', () => {
      const { container } = render(
        <TestimonialCard author="John" quote="Perfect!" rating={5} />
      )
      const stars = container.querySelectorAll('svg')
      expect(stars).toHaveLength(5)
      const filledStars = container.querySelectorAll('.fill-yellow-400')
      expect(filledStars).toHaveLength(5)
    })

    it('should render correct number of filled stars', () => {
      const { container } = render(
        <TestimonialCard author="John" quote="Good" rating={3} />
      )
      const filledStars = container.querySelectorAll('.fill-yellow-400')
      expect(filledStars).toHaveLength(3)
    })

    it('should render rating of 1 correctly', () => {
      const { container } = render(
        <TestimonialCard author="John" quote="Poor" rating={1} />
      )
      const filledStars = container.querySelectorAll('.fill-yellow-400')
      expect(filledStars).toHaveLength(1)
    })

    it('should not render stars when rating not provided', () => {
      const { container } = render(
        <TestimonialCard author="John" quote="No rating" />
      )
      const stars = container.querySelectorAll('svg')
      expect(stars).toHaveLength(0)
    })
  })

  describe('Initials generation', () => {
    it('should generate single initial from single name', () => {
      render(<TestimonialCard author="John" quote="Test" />)
      expect(screen.getByText('J')).toBeInTheDocument()
    })

    it('should generate initials from two names', () => {
      render(<TestimonialCard author="John Doe" quote="Test" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should limit initials to two characters', () => {
      render(<TestimonialCard author="John Michael Doe" quote="Test" />)
      expect(screen.getByText('JM')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(
        <TestimonialCard
          author="John"
          className="custom-class"
          quote="Test"
        />
      )
      const card = container.firstChild
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('Quote styling', () => {
    it('should render quote with italic styling', () => {
      render(<TestimonialCard author="John" quote="Test quote" />)
      const quote = screen.getByText('Test quote')
      expect(quote).toHaveClass('italic')
    })
  })

  describe('Full testimonial', () => {
    it('should render all elements when all props provided', () => {
      const { container } = render(
        <TestimonialCard
          author="Jane Smith"
          avatar="https://example.com/avatar.jpg"
          quote="This product exceeded my expectations!"
          rating={5}
          role="Product Manager"
        />
      )
      expect(screen.getByText('This product exceeded my expectations!')).toBeInTheDocument()
      expect(screen.getByText('Jane Smith')).toBeInTheDocument()
      expect(screen.getByText('Product Manager')).toBeInTheDocument()
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
    })
  })
})

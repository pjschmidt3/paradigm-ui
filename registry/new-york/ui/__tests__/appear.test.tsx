import { render, screen } from '@testing-library/react'
import { ElementType } from 'react'

import { Appear } from '@/registry/new-york/ui/appear'

// Mock motion/react-client to avoid animation issues in tests
jest.mock('motion/react-client', () => ({
  div: ({ children, ...props }: any) => (
    <div
      data-testid="motion-div"
      {...props}>
      {children}
    </div>
  ),
  span: ({ children, ...props }: any) => (
    <span
      data-testid="motion-span"
      {...props}>
      {children}
    </span>
  ),
  section: ({ children, ...props }: any) => (
    <section
      data-testid="motion-section"
      {...props}>
      {children}
    </section>
  ),
}))

// Mock motion/react for Variants and stagger
jest.mock('motion/react', () => ({
  Variants: {},
  stagger: () => 0.2,
}))

describe('Appear component', () => {
  describe('Basic rendering', () => {
    it('should render children within motion container', () => {
      render(
        <Appear>
          <span data-testid="child">Hello World</span>
        </Appear>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      render(
        <Appear>
          <span data-testid="child1">First</span>
          <span data-testid="child2">Second</span>
        </Appear>
      )
      expect(screen.getByTestId('child1')).toBeInTheDocument()
      expect(screen.getByTestId('child2')).toBeInTheDocument()
    })

    it('should render text content directly', () => {
      render(<Appear>Simple text content</Appear>)
      expect(screen.getByText('Simple text content')).toBeInTheDocument()
    })
  })

  describe('Default element', () => {
    it('should use motion.div when no as prop provided', () => {
      render(<Appear>Content</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })
  })

  describe('Polymorphic as prop', () => {
    it('should accept custom motion element via as prop', () => {
      // Access motion mock to get motion.span
      const motion = jest.requireMock('motion/react-client')
      render(<Appear as={motion.span}>Span content</Appear>)
      expect(screen.getByTestId('motion-span')).toBeInTheDocument()
    })

    it('should accept custom motion section via as prop', () => {
      const motion = jest.requireMock('motion/react-client')
      render(<Appear as={motion.section}>Section content</Appear>)
      expect(screen.getByTestId('motion-section')).toBeInTheDocument()
    })

    it('should use provided component for rendering', () => {
      const CustomComponent = ({ children, ...props }: any) => (
        <article
          data-testid="custom-component"
          {...props}>
          {children}
        </article>
      )
      render(<Appear as={CustomComponent}>Custom content</Appear>)
      expect(screen.getByTestId('custom-component')).toBeInTheDocument()
    })
  })

  describe('Animation props', () => {
    it('should receive animate="visible" prop', () => {
      render(<Appear>Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveAttribute('animate', 'visible')
    })

    it('should receive initial="hidden" prop', () => {
      render(<Appear>Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveAttribute('initial', 'hidden')
    })

    it('should receive variants prop', () => {
      render(<Appear>Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      // variants is passed but is an object, checking it exists
      expect(wrapper).toHaveAttribute('variants')
    })
  })

  describe('Duration prop', () => {
    it('should accept duration prop', () => {
      // Duration is passed to variants internally
      // Just verify component renders without error with duration
      render(<Appear duration={0.5}>Content</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })

    it('should render correctly with different duration values', () => {
      const { rerender } = render(<Appear duration={0.1}>Content</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()

      rerender(<Appear duration={1}>Content</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()

      rerender(<Appear duration={2}>Content</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })
  })

  describe('Props spreading', () => {
    it('should pass className to wrapper', () => {
      render(<Appear className="custom-class">Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveClass('custom-class')
    })

    it('should pass id to wrapper', () => {
      render(<Appear id="appear-section">Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveAttribute('id', 'appear-section')
    })

    it('should pass data attributes to wrapper', () => {
      render(<Appear data-section="hero">Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveAttribute('data-section', 'hero')
    })

    it('should pass aria attributes to wrapper', () => {
      render(<Appear aria-label="Animated section">Content</Appear>)
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveAttribute('aria-label', 'Animated section')
    })

    it('should pass multiple props together', () => {
      render(
        <Appear
          className="appear-wrapper"
          data-testvalue="test"
          id="test-appear">
          Content
        </Appear>
      )
      const wrapper = screen.getByTestId('motion-div')
      expect(wrapper).toHaveClass('appear-wrapper')
      expect(wrapper).toHaveAttribute('id', 'test-appear')
      expect(wrapper).toHaveAttribute('data-testvalue', 'test')
    })
  })

  describe('Nested Appear components', () => {
    it('should support nested Appear components', () => {
      render(
        <Appear data-testid="outer">
          <Appear data-testid="inner">Nested content</Appear>
        </Appear>
      )
      expect(screen.getByTestId('outer')).toBeInTheDocument()
      expect(screen.getByTestId('inner')).toBeInTheDocument()
    })
  })

  describe('Edge cases', () => {
    it('should handle empty children', () => {
      render(<Appear>{null}</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })

    it('should handle undefined children', () => {
      render(<Appear>{undefined}</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })

    it('should handle boolean children (falsy)', () => {
      render(<Appear>{false}</Appear>)
      expect(screen.getByTestId('motion-div')).toBeInTheDocument()
    })

    it('should handle number children', () => {
      render(<Appear>{42}</Appear>)
      expect(screen.getByText('42')).toBeInTheDocument()
    })
  })
})

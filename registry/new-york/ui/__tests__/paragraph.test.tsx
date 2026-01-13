import { render, screen } from '@testing-library/react'

import { Paragraph } from '@/registry/new-york/ui/paragraph'

describe('Paragraph component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Paragraph>Hello World</Paragraph>)
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('should render as a p element', () => {
      const { container } = render(<Paragraph>Test</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph?.tagName).toBe('P')
    })

    it('should render children correctly', () => {
      render(
        <Paragraph>
          <span data-testid="child">Child content</span>
        </Paragraph>
      )
      expect(screen.getByTestId('child')).toBeInTheDocument()
    })
  })

  describe('Default classes', () => {
    it('should apply font-mono class', () => {
      const { container } = render(<Paragraph>Test</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('font-mono')
    })

    it('should apply text-lg class', () => {
      const { container } = render(<Paragraph>Test</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('text-lg')
    })

    it('should apply font-light class', () => {
      const { container } = render(<Paragraph>Test</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('font-light')
    })

    it('should apply all default typography classes', () => {
      const { container } = render(<Paragraph>Test</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('font-mono', 'text-lg', 'font-light')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Paragraph className="custom-class mt-4">Custom</Paragraph>
      )
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('custom-class', 'mt-4')
      expect(paragraph).toHaveClass('font-mono', 'text-lg', 'font-light')
    })

    it('should allow className to override default classes', () => {
      const { container } = render(
        <Paragraph className="text-sm">Override size</Paragraph>
      )
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('text-sm')
    })

    it('should work with empty className', () => {
      const { container } = render(<Paragraph className="">Empty</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('font-mono', 'text-lg', 'font-light')
    })
  })

  describe('HTML attributes', () => {
    it('should spread additional props to p element', () => {
      render(<Paragraph data-testid="paragraph">Test</Paragraph>)
      expect(screen.getByTestId('paragraph')).toBeInTheDocument()
    })

    it('should support id attribute', () => {
      const { container } = render(<Paragraph id="my-paragraph">Test</Paragraph>)
      const paragraph = container.querySelector('#my-paragraph')
      expect(paragraph).toBeInTheDocument()
    })

    it('should support aria attributes', () => {
      render(<Paragraph aria-label="Description">Test</Paragraph>)
      expect(screen.getByLabelText('Description')).toBeInTheDocument()
    })

    it('should support style attribute', () => {
      const { container } = render(
        <Paragraph style={{ color: 'rgb(255, 0, 0)' }}>Styled</Paragraph>
      )
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveStyle({ color: 'rgb(255, 0, 0)' })
    })

    it('should support event handlers', () => {
      const handleClick = jest.fn()
      render(<Paragraph onClick={handleClick}>Clickable</Paragraph>)
      screen.getByText('Clickable').click()
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Edge cases', () => {
    it('should render without children', () => {
      const { container } = render(<Paragraph />)
      const paragraph = container.querySelector('p')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toBeEmptyDOMElement()
    })

    it('should handle null children', () => {
      const { container } = render(<Paragraph>{null}</Paragraph>)
      const paragraph = container.querySelector('p')
      expect(paragraph).toBeInTheDocument()
    })

    it('should handle multiple children', () => {
      render(
        <Paragraph>
          First <strong>bold</strong> last
        </Paragraph>
      )
      expect(screen.getByText('bold')).toBeInTheDocument()
    })
  })
})

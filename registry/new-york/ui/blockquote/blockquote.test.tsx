import { render, screen } from '@testing-library/react'

import { Blockquote } from './blockquote'

describe('Blockquote component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Blockquote>This is a quote</Blockquote>)
      expect(screen.getByText('This is a quote')).toBeInTheDocument()
    })

    it('should render as a blockquote element', () => {
      const { container } = render(<Blockquote>Quote</Blockquote>)
      expect(container.querySelector('blockquote')).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(
        <Blockquote>
          <p>Paragraph in quote</p>
        </Blockquote>
      )
      expect(screen.getByText('Paragraph in quote')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(
        <Blockquote variant="default">Default quote</Blockquote>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toHaveClass('border-l-4', 'italic')
    })

    it('should apply bordered variant classes', () => {
      const { container } = render(
        <Blockquote variant="bordered">Bordered quote</Blockquote>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toHaveClass('border', 'rounded-lg', 'p-4')
    })

    it('should apply filled variant classes', () => {
      const { container } = render(
        <Blockquote variant="filled">Filled quote</Blockquote>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toHaveClass('bg-muted', 'rounded-lg')
    })
  })

  describe('Citation', () => {
    it('should render citation when cite prop is provided', () => {
      render(<Blockquote cite="Author Name">Quote text</Blockquote>)
      expect(screen.getByText(/Author Name/)).toBeInTheDocument()
    })

    it('should render citation with em-dash prefix', () => {
      render(<Blockquote cite="John Doe">Quote text</Blockquote>)
      const footer = screen.getByText(/John Doe/)
      expect(footer.textContent).toContain('—')
    })

    it('should not render footer when cite prop is not provided', () => {
      const { container } = render(<Blockquote>Quote text</Blockquote>)
      expect(container.querySelector('footer')).not.toBeInTheDocument()
    })

    it('should render citation in a footer element', () => {
      const { container } = render(
        <Blockquote cite="Citation">Quote</Blockquote>
      )
      expect(container.querySelector('footer')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Blockquote className="custom-class">Quote</Blockquote>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toHaveClass('custom-class')
      expect(blockquote).toHaveClass('my-4')
    })
  })

  describe('Common patterns', () => {
    it('should combine variant and citation', () => {
      const { container } = render(
        <Blockquote
          cite="Famous Author"
          variant="bordered">
          A famous quote
        </Blockquote>
      )
      const blockquote = container.querySelector('blockquote')
      expect(blockquote).toHaveClass('border', 'rounded-lg')
      expect(screen.getByText(/Famous Author/)).toBeInTheDocument()
    })
  })
})

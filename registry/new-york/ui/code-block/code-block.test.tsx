import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'

import { CodeBlock } from './code-block'

// Mock navigator.clipboard
const mockClipboard = {
  writeText: jest.fn(() => Promise.resolve())
}
Object.assign(navigator, {
  clipboard: mockClipboard
})

describe('CodeBlock component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('Basic rendering', () => {
    it('should render code content correctly', () => {
      render(<CodeBlock code="const x = 1" />)
      expect(screen.getByText('const x = 1')).toBeInTheDocument()
    })

    it('should render code in a pre and code element', () => {
      const { container } = render(<CodeBlock code="const x = 1" />)
      expect(container.querySelector('pre')).toBeInTheDocument()
      expect(container.querySelector('code')).toBeInTheDocument()
    })

    it('should render multiline code correctly', () => {
      const multilineCode = `function hello() {
  return 'world'
}`
      const { container } = render(<CodeBlock code={multilineCode} />)
      const codeElement = container.querySelector('code')
      expect(codeElement?.textContent).toBe(multilineCode)
    })
  })

  describe('Language badge', () => {
    it('should show language badge by default', () => {
      render(<CodeBlock code="const x = 1" />)
      expect(screen.getByText('tsx')).toBeInTheDocument()
    })

    it('should default language to "tsx"', () => {
      render(<CodeBlock code="const x = 1" />)
      expect(screen.getByText('tsx')).toBeInTheDocument()
    })

    it('should show custom language when provided', () => {
      render(<CodeBlock code="print('hello')" language="python" />)
      expect(screen.getByText('python')).toBeInTheDocument()
    })

    it('should hide language badge when showLanguage is false', () => {
      render(<CodeBlock code="const x = 1" showLanguage={false} />)
      expect(screen.queryByText('tsx')).not.toBeInTheDocument()
    })

    it('should show language badge when showLanguage is true', () => {
      render(<CodeBlock code="const x = 1" showLanguage={true} />)
      expect(screen.getByText('tsx')).toBeInTheDocument()
    })
  })

  describe('Copy button', () => {
    it('should show copy button by default', () => {
      render(<CodeBlock code="const x = 1" />)
      expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
    })

    it('should hide copy button when showCopy is false', () => {
      render(<CodeBlock code="const x = 1" showCopy={false} />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('should show copy button when showCopy is true', () => {
      render(<CodeBlock code="const x = 1" showCopy={true} />)
      expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
    })

    it('should copy code to clipboard when clicked', async () => {
      const code = 'const x = 1'
      render(<CodeBlock code={code} />)

      const copyButton = screen.getByRole('button', { name: 'Copy' })
      await act(async () => {
        fireEvent.click(copyButton)
      })

      expect(mockClipboard.writeText).toHaveBeenCalledWith(code)
    })

    it('should show "Copied!" feedback after copy', async () => {
      render(<CodeBlock code="const x = 1" />)

      const copyButton = screen.getByRole('button', { name: 'Copy' })
      await act(async () => {
        fireEvent.click(copyButton)
      })

      expect(screen.getByText('Copied!')).toBeInTheDocument()
    })

    it('should revert to "Copy" after 2 seconds', async () => {
      render(<CodeBlock code="const x = 1" />)

      const copyButton = screen.getByRole('button', { name: 'Copy' })
      await act(async () => {
        fireEvent.click(copyButton)
      })

      expect(screen.getByText('Copied!')).toBeInTheDocument()

      act(() => {
        jest.advanceTimersByTime(2000)
      })

      await waitFor(() => {
        expect(screen.getByText('Copy')).toBeInTheDocument()
      })
    })
  })

  describe('Custom className', () => {
    it('should apply custom className to container', () => {
      const { container } = render(
        <CodeBlock code="const x = 1" className="custom-class" />
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('custom-class')
    })

    it('should merge custom className with default classes', () => {
      const { container } = render(
        <CodeBlock code="const x = 1" className="custom-class" />
      )
      const wrapper = container.firstChild
      expect(wrapper).toHaveClass('relative', 'group', 'custom-class')
    })
  })

  describe('Combined props', () => {
    it('should work with all props combined', async () => {
      const code = 'print("hello")'
      render(
        <CodeBlock
          code={code}
          language="python"
          showLanguage={true}
          showCopy={true}
          className="my-custom-class"
        />
      )

      expect(screen.getByText(code)).toBeInTheDocument()
      expect(screen.getByText('python')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument()
    })

    it('should work without copy and language', () => {
      render(
        <CodeBlock
          code="const x = 1"
          showCopy={false}
          showLanguage={false}
        />
      )

      expect(screen.getByText('const x = 1')).toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
      expect(screen.queryByText('tsx')).not.toBeInTheDocument()
    })
  })
})

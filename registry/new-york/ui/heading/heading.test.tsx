import { render, screen } from '@testing-library/react'

import { Heading } from './heading'

describe('Heading component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Heading level={1}>Hello World</Heading>)
      expect(
        screen.getByRole('heading', { name: 'Hello World' })
      ).toBeInTheDocument()
    })

    it('should render children correctly', () => {
      render(<Heading level={2}>Test Content</Heading>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })
  })

  describe('Heading levels', () => {
    it('should render h1 for level 1 with correct classes', () => {
      const { container } = render(<Heading level={1}>Level 1</Heading>)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H1')
      expect(container.querySelector('h1')).toHaveClass(
        'text-4xl',
        'font-bold',
        'scroll-m-20',
        'text-primary',
        'font-roboto'
      )
    })

    it('should render h2 for level 2 with correct classes', () => {
      const { container } = render(<Heading level={2}>Level 2</Heading>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H2')
      expect(container.querySelector('h2')).toHaveClass(
        'text-2xl',
        'font-medium',
        'scroll-m-20',
        'text-primary',
        'font-roboto'
      )
    })

    it('should render h3 for level 3 with correct classes', () => {
      const { container } = render(<Heading level={3}>Level 3</Heading>)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H3')
      expect(container.querySelector('h3')).toHaveClass(
        'text-xl',
        'font-medium',
        'scroll-m-20',
        'text-primary',
        'font-roboto'
      )
    })

    it('should render h4 for level 4 with correct classes', () => {
      const { container } = render(<Heading level={4}>Level 4</Heading>)
      const heading = screen.getByRole('heading', { level: 4 })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H4')
      expect(container.querySelector('h4')).toHaveClass(
        'text-lg',
        'font-medium',
        'scroll-m-20',
        'text-primary',
        'font-roboto'
      )
    })

    it('should render h5 for level 5 with correct classes', () => {
      const { container } = render(<Heading level={5}>Level 5</Heading>)
      const heading = screen.getByRole('heading', { level: 5 })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName).toBe('H5')
      expect(container.querySelector('h5')).toHaveClass(
        'text-md',
        'font-medium',
        'scroll-m-20',
        'text-primary',
        'font-roboto'
      )
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Heading className="custom-class mt-4" level={1}>
          Custom
        </Heading>
      )
      const heading = container.querySelector('h1')
      expect(heading).toHaveClass('custom-class', 'mt-4')
      expect(heading).toHaveClass('scroll-m-20', 'text-primary', 'font-roboto')
    })

    it('should allow className to override default classes', () => {
      const { container } = render(
        <Heading className="text-secondary" level={2}>
          Override
        </Heading>
      )
      const heading = container.querySelector('h2')
      expect(heading).toHaveClass('text-secondary')
    })
  })

  describe('Accessibility', () => {
    it('should be accessible by heading role for all levels', () => {
      const { rerender } = render(<Heading level={1}>H1</Heading>)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

      rerender(<Heading level={2}>H2</Heading>)
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()

      rerender(<Heading level={3}>H3</Heading>)
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()

      rerender(<Heading level={4}>H4</Heading>)
      expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()

      rerender(<Heading level={5}>H5</Heading>)
      expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    })

    it('should include accessible name from children', () => {
      render(<Heading level={1}>Accessible Heading</Heading>)
      expect(
        screen.getByRole('heading', { name: 'Accessible Heading' })
      ).toBeInTheDocument()
    })
  })

  describe('Base classes', () => {
    it('should apply scroll-m-20 to all heading levels', () => {
      const levels = [1, 2, 3, 4, 5] as const
      levels.forEach((level) => {
        const { container } = render(
          <Heading level={level}>Test {level}</Heading>
        )
        const heading = container.querySelector(`h${level}`)
        expect(heading).toHaveClass('scroll-m-20')
      })
    })

    it('should apply text-primary to all heading levels', () => {
      const levels = [1, 2, 3, 4, 5] as const
      levels.forEach((level) => {
        const { container } = render(
          <Heading level={level}>Test {level}</Heading>
        )
        const heading = container.querySelector(`h${level}`)
        expect(heading).toHaveClass('text-primary')
      })
    })

    it('should apply font-roboto to all heading levels', () => {
      const levels = [1, 2, 3, 4, 5] as const
      levels.forEach((level) => {
        const { container } = render(
          <Heading level={level}>Test {level}</Heading>
        )
        const heading = container.querySelector(`h${level}`)
        expect(heading).toHaveClass('font-roboto')
      })
    })
  })
})

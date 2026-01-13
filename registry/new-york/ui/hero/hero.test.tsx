import { render, screen } from '@testing-library/react'

import { Hero } from './hero'

// Mock motion/react for SocialLinks dependency
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  Variants: {},
}))

describe('Hero component', () => {
  describe('Basic rendering', () => {
    it('should render container div with base classes', () => {
      const { container } = render(<Hero />)
      const div = container.firstChild as HTMLElement
      expect(div).toHaveClass('flex-col', 'space-y-5', 'text-center')
    })

    it('should render empty container when no props provided', () => {
      const { container } = render(<Hero />)
      expect(container.querySelector('h1')).not.toBeInTheDocument()
      expect(container.querySelector('h2')).not.toBeInTheDocument()
      expect(container.querySelector('p')).not.toBeInTheDocument()
    })
  })

  describe('Heading conditional rendering', () => {
    it('should render heading when heading prop provided', () => {
      render(<Hero heading="Main Title" />)
      expect(
        screen.getByRole('heading', { name: 'Main Title', level: 1 })
      ).toBeInTheDocument()
    })

    it('should render heading as h1 element', () => {
      const { container } = render(<Hero heading="Test Heading" />)
      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
      expect(h1).toHaveTextContent('Test Heading')
    })

    it('should apply text-4xl md:text-6xl classes to heading', () => {
      const { container } = render(<Hero heading="Styled Heading" />)
      const h1 = container.querySelector('h1')
      expect(h1).toHaveClass('text-4xl')
    })

    it('should not render heading when prop not provided', () => {
      render(<Hero subheading="Just Subheading" />)
      expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
    })
  })

  describe('Subheading conditional rendering', () => {
    it('should render subheading when subheading prop provided', () => {
      render(<Hero subheading="Subtitle" />)
      expect(
        screen.getByRole('heading', { name: 'Subtitle', level: 2 })
      ).toBeInTheDocument()
    })

    it('should render subheading as h2 element', () => {
      const { container } = render(<Hero subheading="Test Subheading" />)
      const h2 = container.querySelector('h2')
      expect(h2).toBeInTheDocument()
      expect(h2).toHaveTextContent('Test Subheading')
    })

    it('should apply text-3xl md:text-4xl classes to subheading', () => {
      const { container } = render(<Hero subheading="Styled Subheading" />)
      const h2 = container.querySelector('h2')
      expect(h2).toHaveClass('text-3xl')
    })

    it('should not render subheading when prop not provided', () => {
      render(<Hero heading="Just Heading" />)
      expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    })
  })

  describe('Description conditional rendering', () => {
    it('should render description when description prop provided', () => {
      render(<Hero description="This is a description" />)
      expect(screen.getByText('This is a description')).toBeInTheDocument()
    })

    it('should render description wrapped in paragraph element', () => {
      const { container } = render(<Hero description="Test Description" />)
      const p = container.querySelector('p')
      expect(p).toBeInTheDocument()
      expect(p).toHaveTextContent('Test Description')
    })

    it('should apply margin and text-lg classes to description', () => {
      const { container } = render(<Hero description="Styled Description" />)
      const p = container.querySelector('p')
      expect(p).toHaveClass('mt-8', 'mb-16', 'text-lg')
    })

    it('should not render description when prop not provided', () => {
      const { container } = render(<Hero heading="Just Heading" />)
      expect(container.querySelector('p')).not.toBeInTheDocument()
    })
  })

  describe('SocialLinks conditional rendering', () => {
    it('should render social links when socialLinks prop provided', () => {
      render(
        <Hero
          socialLinks={{
            github: 'https://github.com/test',
          }}
        />
      )
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
    })

    it('should apply default size 5xl when not specified in socialLinks', () => {
      const { container } = render(
        <Hero
          socialLinks={{
            github: 'https://github.com/test',
          }}
        />
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-5xl')
    })

    it('should respect size from socialLinks prop', () => {
      const { container } = render(
        <Hero
          socialLinks={{
            github: 'https://github.com/test',
            size: '2xl',
          }}
        />
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('text-2xl')
    })

    it('should not render social links when prop not provided', () => {
      render(<Hero heading="Just Heading" />)
      expect(screen.queryByLabelText('Github')).not.toBeInTheDocument()
    })

    it('should render multiple social links when provided', () => {
      render(
        <Hero
          socialLinks={{
            facebook: 'https://facebook.com/test',
            github: 'https://github.com/test',
            twitter: 'https://twitter.com/test',
          }}
        />
      )
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
      expect(screen.getByLabelText('Facebook Page')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with container classes', () => {
      const { container } = render(<Hero className="custom-hero" />)
      const div = container.firstChild as HTMLElement
      expect(div).toHaveClass('custom-hero')
      expect(div).toHaveClass('flex-col', 'space-y-5', 'text-center')
    })

    it('should allow additional classes', () => {
      const { container } = render(<Hero className="bg-primary p-8" />)
      const div = container.firstChild as HTMLElement
      expect(div).toHaveClass('bg-primary', 'p-8')
    })
  })

  describe('Element-specific classNames', () => {
    it('should apply headingClassName to heading', () => {
      const { container } = render(
        <Hero heading="Custom Heading" headingClassName="text-red-500" />
      )
      const h1 = container.querySelector('h1')
      expect(h1).toHaveClass('text-red-500')
    })

    it('should apply subheadingClassName to subheading', () => {
      const { container } = render(
        <Hero subheading="Custom Sub" subheadingClassName="text-blue-500" />
      )
      const h2 = container.querySelector('h2')
      expect(h2).toHaveClass('text-blue-500')
    })

    it('should apply descriptionClassName to description', () => {
      const { container } = render(
        <Hero description="Custom Desc" descriptionClassName="text-green-500" />
      )
      const p = container.querySelector('p')
      expect(p).toHaveClass('text-green-500')
    })
  })

  describe('Full hero rendering', () => {
    it('should render all sections when all props provided', () => {
      const { container } = render(
        <Hero
          description="This is the description"
          heading="Main Heading"
          socialLinks={{
            github: 'https://github.com/test',
            twitter: 'https://twitter.com/test',
          }}
          subheading="Subheading Text"
        />
      )

      expect(
        screen.getByRole('heading', { name: 'Main Heading', level: 1 })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: 'Subheading Text', level: 2 })
      ).toBeInTheDocument()
      expect(screen.getByText('This is the description')).toBeInTheDocument()
      expect(screen.getByLabelText('Github')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()

      // Verify order of elements
      const div = container.firstChild as HTMLElement
      expect(div.children.length).toBe(4) // h1, h2, p, socialLinks
    })

    it('should accept ReactNode for heading content', () => {
      render(
        <Hero
          heading={
            <span>
              Rich <strong>Content</strong>
            </span>
          }
        />
      )
      expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('should accept ReactNode for description content', () => {
      render(
        <Hero
          description={
            <span>
              Description with <em>emphasis</em>
            </span>
          }
        />
      )
      expect(screen.getByText('emphasis')).toBeInTheDocument()
    })
  })
})

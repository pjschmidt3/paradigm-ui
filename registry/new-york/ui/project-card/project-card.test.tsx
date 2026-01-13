import { render, screen } from '@testing-library/react'

import { ProjectCard } from './project-card'

describe('ProjectCard component', () => {
  const defaultProps = {
    description: 'A sample project',
    title: 'Test Project'
  }

  describe('Basic rendering', () => {
    it('should render title', () => {
      render(<ProjectCard {...defaultProps} />)
      expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(<ProjectCard {...defaultProps} />)
      expect(screen.getByText('A sample project')).toBeInTheDocument()
    })

    it('should render without description', () => {
      render(<ProjectCard title="Test Project" />)
      expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      expect(container.querySelector('[data-slot="project-card"]')).toBeInTheDocument()
    })
  })

  describe('Image rendering', () => {
    it('should render image when provided', () => {
      render(
        <ProjectCard
          {...defaultProps}
          image={{ alt: 'Project screenshot', src: '/test.jpg' }}
        />
      )
      const img = screen.getByRole('img', { name: 'Project screenshot' })
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/test.jpg')
    })

    it('should apply object-cover to image', () => {
      render(
        <ProjectCard
          {...defaultProps}
          image={{ alt: 'Screenshot', src: '/test.jpg' }}
        />
      )
      const img = screen.getByRole('img')
      expect(img).toHaveClass('object-cover')
    })

    it('should not render image container when no image provided', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      expect(
        container.querySelector('[data-slot="project-card-image"]')
      ).not.toBeInTheDocument()
    })
  })

  describe('Tags rendering', () => {
    it('should render tags as badges', () => {
      render(<ProjectCard {...defaultProps} tags={['React', 'TypeScript', 'Node.js']} />)
      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('Node.js')).toBeInTheDocument()
    })

    it('should render tags with outline variant', () => {
      render(<ProjectCard {...defaultProps} tags={['React']} />)
      const badge = screen.getByText('React')
      expect(badge).toHaveAttribute('data-slot', 'badge')
    })

    it('should not render tags section when no tags provided', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      expect(
        container.querySelector('[data-slot="project-card-tags"]')
      ).not.toBeInTheDocument()
    })

    it('should not render tags section when empty array', () => {
      const { container } = render(<ProjectCard {...defaultProps} tags={[]} />)
      expect(
        container.querySelector('[data-slot="project-card-tags"]')
      ).not.toBeInTheDocument()
    })
  })

  describe('Links rendering', () => {
    it('should render links', () => {
      render(
        <ProjectCard
          {...defaultProps}
          links={[
            { href: 'https://example.com', label: 'Live Demo' },
            { href: 'https://github.com', label: 'GitHub' }
          ]}
        />
      )
      expect(screen.getByRole('link', { name: /Live Demo/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument()
    })

    it('should set external link attributes', () => {
      render(
        <ProjectCard
          {...defaultProps}
          links={[{ href: 'https://example.com', label: 'Demo' }]}
        />
      )
      const link = screen.getByRole('link', { name: /Demo/i })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should not render links section when no links provided', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      expect(
        container.querySelector('[data-slot="project-card-links"]')
      ).not.toBeInTheDocument()
    })
  })

  describe('Variant styling', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      const card = container.querySelector('[data-slot="project-card"]')
      expect(card).toHaveClass('flex', 'flex-col')
    })

    it('should apply horizontal variant classes', () => {
      const { container } = render(<ProjectCard {...defaultProps} variant="horizontal" />)
      const card = container.querySelector('[data-slot="project-card"]')
      expect(card).toHaveClass('md:flex-row')
    })

    it('should apply overlay variant styling to image', () => {
      render(
        <ProjectCard
          {...defaultProps}
          image={{ alt: 'Screenshot', src: '/test.jpg' }}
          variant="overlay"
        />
      )
      const img = screen.getByRole('img')
      expect(img).toHaveClass('brightness-50')
    })
  })

  describe('Featured styling', () => {
    it('should apply shadow-lg when featured', () => {
      const { container } = render(<ProjectCard {...defaultProps} featured />)
      const card = container.querySelector('[data-slot="project-card"]')
      expect(card).toHaveClass('shadow-lg')
    })

    it('should not apply shadow-lg when not featured', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      const card = container.querySelector('[data-slot="project-card"]')
      expect(card).not.toHaveClass('shadow-lg')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(
        <ProjectCard {...defaultProps} className="custom-class" />
      )
      const card = container.querySelector('[data-slot="project-card"]')
      expect(card).toHaveClass('custom-class')
    })
  })
})

import { render, screen } from '@testing-library/react'
import { Zap } from 'lucide-react'

import { FeatureCard } from './feature-card'

describe('FeatureCard component', () => {
  describe('Basic rendering', () => {
    it('should render with required props', () => {
      render(
        <FeatureCard
          description="This is a description"
          icon={Zap}
          title="Feature Title"
        />
      )
      expect(screen.getByText('Feature Title')).toBeInTheDocument()
      expect(screen.getByText('This is a description')).toBeInTheDocument()
    })

    it('should render title', () => {
      render(
        <FeatureCard description="Description" icon={Zap} title="Test Title" />
      )
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(
        <FeatureCard
          description="Test Description"
          icon={Zap}
          title="Title"
        />
      )
      expect(screen.getByText('Test Description')).toBeInTheDocument()
    })

    it('should render icon', () => {
      const { container } = render(
        <FeatureCard description="Description" icon={Zap} title="Title" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  describe('Link behavior', () => {
    it('should render as link when href provided', () => {
      render(
        <FeatureCard
          description="Description"
          href="/features"
          icon={Zap}
          title="Feature"
        />
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/features')
    })

    it('should not render link when href not provided', () => {
      render(
        <FeatureCard description="Description" icon={Zap} title="Feature" />
      )
      expect(screen.queryByRole('link')).not.toBeInTheDocument()
    })

    it('should have hover styles when href provided', () => {
      const { container } = render(
        <FeatureCard
          description="Description"
          href="/features"
          icon={Zap}
          title="Feature"
        />
      )
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('hover:shadow-md')
      expect(card).toHaveClass('cursor-pointer')
    })

    it('should not have hover styles when no href', () => {
      const { container } = render(
        <FeatureCard description="Description" icon={Zap} title="Feature" />
      )
      const card = container.querySelector('[data-slot="card"]')
      expect(card).not.toHaveClass('hover:shadow-md')
    })
  })

  describe('Icon styling', () => {
    it('should render icon in circular background', () => {
      const { container } = render(
        <FeatureCard description="Description" icon={Zap} title="Title" />
      )
      const iconWrapper = container.querySelector('.rounded-full')
      expect(iconWrapper).toBeInTheDocument()
    })

    it('should apply primary color to icon', () => {
      const { container } = render(
        <FeatureCard description="Description" icon={Zap} title="Title" />
      )
      const svg = container.querySelector('svg')
      expect(svg).toHaveClass('text-primary')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className without href', () => {
      const { container } = render(
        <FeatureCard
          className="custom-class"
          description="Description"
          icon={Zap}
          title="Title"
        />
      )
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('custom-class')
    })

    it('should merge custom className with href', () => {
      const { container } = render(
        <FeatureCard
          className="custom-class"
          description="Description"
          href="/test"
          icon={Zap}
          title="Title"
        />
      )
      const card = container.querySelector('[data-slot="card"]')
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('Text styling', () => {
    it('should render title with semibold styling', () => {
      render(
        <FeatureCard description="Description" icon={Zap} title="Test Title" />
      )
      const title = screen.getByText('Test Title')
      expect(title).toHaveClass('font-semibold')
    })

    it('should render description with muted color', () => {
      render(
        <FeatureCard
          description="Test Description"
          icon={Zap}
          title="Title"
        />
      )
      const description = screen.getByText('Test Description')
      expect(description).toHaveClass('text-muted-foreground')
    })
  })

  describe('Full feature card', () => {
    it('should render all elements correctly', () => {
      const { container } = render(
        <FeatureCard
          className="extra-class"
          description="A comprehensive description of this amazing feature."
          href="/features/amazing"
          icon={Zap}
          title="Amazing Feature"
        />
      )
      expect(screen.getByText('Amazing Feature')).toBeInTheDocument()
      expect(screen.getByText('A comprehensive description of this amazing feature.')).toBeInTheDocument()
      expect(container.querySelector('svg')).toBeInTheDocument()
      expect(screen.getByRole('link')).toHaveAttribute('href', '/features/amazing')
    })
  })
})

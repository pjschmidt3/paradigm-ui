import { render, screen } from '@testing-library/react'

import { PageHeader } from './page-header'

describe('PageHeader component', () => {
  describe('Basic rendering', () => {
    it('should render title', () => {
      render(<PageHeader title="Test Title" />)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render as heading level 1', () => {
      render(<PageHeader title="Test Title" />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title')
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header"]')).toBeInTheDocument()
    })

    it('should render description when provided', () => {
      render(<PageHeader description="Test description" title="Test Title" />)
      expect(screen.getByText('Test description')).toBeInTheDocument()
    })

    it('should render description slot', () => {
      const { container } = render(<PageHeader description="Test description" title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-description"]')).toBeInTheDocument()
    })

    it('should not render description when not provided', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-description"]')).not.toBeInTheDocument()
    })
  })

  describe('Breadcrumbs rendering', () => {
    it('should render breadcrumbs when provided', () => {
      render(
        <PageHeader
          breadcrumbs={[
            { href: '/', label: 'Home' },
            { href: '/products', label: 'Products' },
            { label: 'Current' }
          ]}
          title="Test Title"
        />
      )
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Current')).toBeInTheDocument()
    })

    it('should render breadcrumb links with href', () => {
      render(
        <PageHeader
          breadcrumbs={[
            { href: '/', label: 'Home' },
            { label: 'Current' }
          ]}
          title="Test Title"
        />
      )
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).toHaveAttribute('href', '/')
    })

    it('should render last breadcrumb as page', () => {
      render(
        <PageHeader
          breadcrumbs={[
            { href: '/', label: 'Home' },
            { label: 'Current Page' }
          ]}
          title="Test Title"
        />
      )
      expect(screen.getByText('Current Page')).toHaveAttribute('aria-current', 'page')
    })

    it('should not render breadcrumbs when array is empty', () => {
      const { container } = render(<PageHeader breadcrumbs={[]} title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-breadcrumbs"]')).not.toBeInTheDocument()
    })

    it('should not render breadcrumbs when not provided', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-breadcrumbs"]')).not.toBeInTheDocument()
    })
  })

  describe('Back link rendering', () => {
    it('should render back link when provided', () => {
      render(<PageHeader backLink={{ href: '/back', label: 'Go back' }} title="Test Title" />)
      const link = screen.getByRole('link', { name: /Go back/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/back')
    })

    it('should have back link data-slot', () => {
      const { container } = render(<PageHeader backLink={{ href: '/back', label: 'Go back' }} title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-back-link"]')).toBeInTheDocument()
    })

    it('should not render back link when not provided', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-back-link"]')).not.toBeInTheDocument()
    })
  })

  describe('Badge rendering', () => {
    it('should render badge when provided', () => {
      render(<PageHeader badge={{ label: 'New' }} title="Test Title" />)
      expect(screen.getByText('New')).toBeInTheDocument()
    })

    it('should have badge data-slot', () => {
      const { container } = render(<PageHeader badge={{ label: 'New' }} title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-badge"]')).toBeInTheDocument()
    })

    it('should apply badge variant', () => {
      const { container } = render(<PageHeader badge={{ label: 'Error', variant: 'destructive' }} title="Test Title" />)
      const badge = container.querySelector('[data-slot="page-header-badge"]')
      expect(badge).toHaveClass('bg-destructive')
    })

    it('should not render badge when not provided', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-badge"]')).not.toBeInTheDocument()
    })
  })

  describe('Actions slot rendering', () => {
    it('should render actions when provided', () => {
      render(
        <PageHeader
          actions={<button type="button">Action Button</button>}
          title="Test Title"
        />
      )
      expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument()
    })

    it('should have actions data-slot', () => {
      const { container } = render(
        <PageHeader
          actions={<button type="button">Action</button>}
          title="Test Title"
        />
      )
      expect(container.querySelector('[data-slot="page-header-actions"]')).toBeInTheDocument()
    })

    it('should not render actions slot when not provided', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      expect(container.querySelector('[data-slot="page-header-actions"]')).not.toBeInTheDocument()
    })
  })

  describe('Variant styling', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).toHaveClass('flex', 'flex-col')
    })

    it('should apply centered variant classes', () => {
      const { container } = render(<PageHeader title="Test Title" variant="centered" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).toHaveClass('text-center', 'items-center')
    })

    it('should apply compact variant classes', () => {
      const { container } = render(<PageHeader title="Test Title" variant="compact" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).toHaveClass('py-4')
    })
  })

  describe('Divider styling', () => {
    it('should apply border when divider is true', () => {
      const { container } = render(<PageHeader divider title="Test Title" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).toHaveClass('border-b', 'border-border', 'mb-6')
    })

    it('should not apply border when divider is false', () => {
      const { container } = render(<PageHeader title="Test Title" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).not.toHaveClass('border-b')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<PageHeader className="custom-class" title="Test Title" />)
      const header = container.querySelector('[data-slot="page-header"]')
      expect(header).toHaveClass('custom-class')
    })
  })
})

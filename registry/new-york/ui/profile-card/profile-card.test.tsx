import { render, screen } from '@testing-library/react'

import { ProfileCard } from './profile-card'

describe('ProfileCard component', () => {
  describe('Basic rendering', () => {
    it('should render with required name prop', () => {
      render(<ProfileCard name="John Doe" />)
      expect(screen.getByText('John Doe')).toBeInTheDocument()
    })

    it('should render avatar fallback with initials when no avatar provided', () => {
      render(<ProfileCard name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should render avatar component when avatar prop provided', () => {
      const { container } = render(
        <ProfileCard avatar="https://example.com/avatar.jpg" name="John Doe" />
      )
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
    })
  })

  describe('Optional props', () => {
    it('should render title when provided', () => {
      render(<ProfileCard name="John Doe" title="Software Engineer" />)
      expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    })

    it('should render bio when provided', () => {
      render(<ProfileCard bio="A passionate developer" name="John Doe" />)
      expect(screen.getByText('A passionate developer')).toBeInTheDocument()
    })

    it('should render actions when provided', () => {
      render(
        <ProfileCard
          actions={<button type="button">Follow</button>}
          name="John Doe"
        />
      )
      expect(screen.getByRole('button', { name: 'Follow' })).toBeInTheDocument()
    })

    it('should not render title section when not provided', () => {
      const { container } = render(<ProfileCard name="John Doe" />)
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs).toHaveLength(0)
    })
  })

  describe('Initials generation', () => {
    it('should generate single initial from single name', () => {
      render(<ProfileCard name="John" />)
      expect(screen.getByText('J')).toBeInTheDocument()
    })

    it('should generate initials from two names', () => {
      render(<ProfileCard name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should limit initials to two characters', () => {
      render(<ProfileCard name="John Michael Doe" />)
      expect(screen.getByText('JM')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <ProfileCard className="custom-class" name="John Doe" />
      )
      const card = container.firstChild
      expect(card).toHaveClass('custom-class')
      expect(card).toHaveClass('text-center')
    })
  })

  describe('Structure', () => {
    it('should render all sections when all props provided', () => {
      const { container } = render(
        <ProfileCard
          actions={<button type="button">Follow</button>}
          avatar="https://example.com/avatar.jpg"
          bio="A passionate developer"
          name="John Doe"
          title="Software Engineer"
        />
      )
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Software Engineer')).toBeInTheDocument()
      expect(screen.getByText('A passionate developer')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Follow' })).toBeInTheDocument()
    })
  })
})

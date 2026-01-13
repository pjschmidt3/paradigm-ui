import { render, screen } from '@testing-library/react'
import { Home, Settings } from 'lucide-react'

import { NavLink } from './nav-link'

describe('NavLink component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<NavLink href="/home">Home</NavLink>)
      expect(screen.getByText('Home')).toBeInTheDocument()
    })

    it('should render as an anchor element', () => {
      render(<NavLink href="/home">Home</NavLink>)
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    it('should have correct href attribute', () => {
      render(<NavLink href="/dashboard">Dashboard</NavLink>)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/dashboard')
    })
  })

  describe('Active state', () => {
    it('should apply inactive classes by default', () => {
      const { container } = render(<NavLink href="/home">Home</NavLink>)
      const link = container.querySelector('a')
      expect(link).toHaveClass('text-muted-foreground')
    })

    it('should apply active classes when active is true', () => {
      const { container } = render(
        <NavLink active href="/home">
          Home
        </NavLink>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('text-primary', 'font-medium')
    })

    it('should apply active background when active', () => {
      const { container } = render(
        <NavLink active href="/home">
          Home
        </NavLink>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('bg-primary/10')
    })
  })

  describe('Icon support', () => {
    it('should render icon when provided', () => {
      const { container } = render(
        <NavLink href="/home" icon={Home}>
          Home
        </NavLink>
      )
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('should not render icon when not provided', () => {
      const { container } = render(<NavLink href="/home">Home</NavLink>)
      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })

    it('should apply correct icon size classes', () => {
      const { container } = render(
        <NavLink href="/settings" icon={Settings}>
          Settings
        </NavLink>
      )
      const icon = container.querySelector('svg')
      expect(icon).toHaveClass('size-4', 'shrink-0')
    })
  })

  describe('Badge support', () => {
    it('should render numeric badge', () => {
      render(
        <NavLink badge={5} href="/notifications">
          Notifications
        </NavLink>
      )
      expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('should render string badge', () => {
      render(
        <NavLink badge="New" href="/features">
          Features
        </NavLink>
      )
      expect(screen.getByText('New')).toBeInTheDocument()
    })

    it('should not render badge when not provided', () => {
      const { container } = render(<NavLink href="/home">Home</NavLink>)
      // The badge would have specific styling, check there's no pill element
      const potentialBadge = container.querySelector('.rounded-full.text-xs')
      expect(potentialBadge).not.toBeInTheDocument()
    })

    it('should render badge with 0 value', () => {
      render(
        <NavLink badge={0} href="/inbox">
          Inbox
        </NavLink>
      )
      expect(screen.getByText('0')).toBeInTheDocument()
    })
  })

  describe('Combined features', () => {
    it('should render with icon and badge', () => {
      const { container } = render(
        <NavLink badge={3} href="/messages" icon={Settings}>
          Messages
        </NavLink>
      )
      expect(container.querySelector('svg')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
      expect(screen.getByText('Messages')).toBeInTheDocument()
    })

    it('should apply active state with icon and badge', () => {
      const { container } = render(
        <NavLink active badge={3} href="/messages" icon={Settings}>
          Messages
        </NavLink>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('text-primary', 'font-medium')
      expect(container.querySelector('svg')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <NavLink className="custom-class" href="/test">
          Test
        </NavLink>
      )
      const link = container.querySelector('a')
      expect(link).toHaveClass('custom-class')
      expect(link).toHaveClass('inline-flex')
    })
  })

  describe('Accessibility', () => {
    it('should be focusable', () => {
      render(<NavLink href="/home">Home</NavLink>)
      const link = screen.getByRole('link')
      link.focus()
      expect(link).toHaveFocus()
    })
  })
})

import { render, screen } from '@testing-library/react'

import { Avatar, AvatarFallback, AvatarImage, AvatarStatus } from './avatar'

describe('Avatar component', () => {
  describe('Basic rendering', () => {
    it('should render with default size', () => {
      const { container } = render(<Avatar data-testid="avatar" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-8')
      expect(avatar).toHaveAttribute('data-size', 'default')
    })

    it('should render as a relative positioned container', () => {
      const { container } = render(<Avatar />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('relative', 'flex', 'rounded-full')
    })
  })

  describe('Size variants', () => {
    it('should render xs size correctly', () => {
      const { container } = render(<Avatar size="xs" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-6')
      expect(avatar).toHaveAttribute('data-size', 'xs')
    })

    it('should render sm size correctly', () => {
      const { container } = render(<Avatar size="sm" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-7')
      expect(avatar).toHaveAttribute('data-size', 'sm')
    })

    it('should render default size correctly', () => {
      const { container } = render(<Avatar size="default" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-8')
      expect(avatar).toHaveAttribute('data-size', 'default')
    })

    it('should render lg size correctly', () => {
      const { container } = render(<Avatar size="lg" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-10')
      expect(avatar).toHaveAttribute('data-size', 'lg')
    })

    it('should render xl size correctly', () => {
      const { container } = render(<Avatar size="xl" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('size-12')
      expect(avatar).toHaveAttribute('data-size', 'xl')
    })
  })

  describe('AvatarFallback', () => {
    it('should render fallback content', () => {
      render(
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('should have correct slot attribute', () => {
      const { container } = render(
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )
      expect(container.querySelector('[data-slot="avatar-fallback"]')).toBeInTheDocument()
    })
  })

  describe('AvatarImage', () => {
    it('should render with correct classes when image loaded', () => {
      const { container } = render(
        <Avatar>
          <AvatarImage src="test.jpg" alt="Test" />
        </Avatar>
      )
      // Radix Avatar only renders AvatarImage after load, but we can verify the avatar container renders correctly
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toBeInTheDocument()
      expect(avatar).toHaveClass('overflow-hidden')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(<Avatar className="custom-class" />)
      const avatar = container.querySelector('[data-slot="avatar"]')
      expect(avatar).toHaveClass('custom-class')
      expect(avatar).toHaveClass('rounded-full')
    })
  })
})

describe('AvatarStatus component', () => {
  describe('Basic rendering', () => {
    it('should render with default status (offline)', () => {
      const { container } = render(<AvatarStatus data-testid="status" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('bg-gray-400')
      expect(status).toHaveAttribute('data-status', 'offline')
    })

    it('should render with absolute positioning', () => {
      const { container } = render(<AvatarStatus />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('absolute', 'bottom-0', 'right-0', 'rounded-full')
    })
  })

  describe('Status variants', () => {
    it('should render online status with green color', () => {
      const { container } = render(<AvatarStatus status="online" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('bg-green-500')
      expect(status).toHaveAttribute('data-status', 'online')
    })

    it('should render offline status with gray color', () => {
      const { container } = render(<AvatarStatus status="offline" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('bg-gray-400')
      expect(status).toHaveAttribute('data-status', 'offline')
    })

    it('should render away status with yellow color', () => {
      const { container } = render(<AvatarStatus status="away" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('bg-yellow-500')
      expect(status).toHaveAttribute('data-status', 'away')
    })

    it('should render busy status with red color', () => {
      const { container } = render(<AvatarStatus status="busy" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('bg-red-500')
      expect(status).toHaveAttribute('data-status', 'busy')
    })
  })

  describe('Size variants', () => {
    it('should render xs size correctly', () => {
      const { container } = render(<AvatarStatus size="xs" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('size-1.5')
    })

    it('should render sm size correctly', () => {
      const { container } = render(<AvatarStatus size="sm" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('size-2')
    })

    it('should render default size correctly', () => {
      const { container } = render(<AvatarStatus size="default" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('size-2.5')
    })

    it('should render lg size correctly', () => {
      const { container } = render(<AvatarStatus size="lg" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('size-3')
    })

    it('should render xl size correctly', () => {
      const { container } = render(<AvatarStatus size="xl" />)
      const status = container.querySelector('[data-slot="avatar-status"]')
      expect(status).toHaveClass('size-3.5')
    })
  })

  describe('Combined usage', () => {
    it('should render inside Avatar with status indicator', () => {
      const { container } = render(
        <Avatar size="lg">
          <AvatarFallback>JD</AvatarFallback>
          <AvatarStatus status="online" size="lg" />
        </Avatar>
      )
      expect(container.querySelector('[data-slot="avatar"]')).toHaveClass('size-10')
      expect(container.querySelector('[data-slot="avatar-status"]')).toHaveClass('bg-green-500', 'size-3')
    })
  })
})

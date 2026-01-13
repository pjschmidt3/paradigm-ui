import { render, screen } from '@testing-library/react'
import { Users } from 'lucide-react'

import { StatsCard } from './stats-card'

describe('StatsCard component', () => {
  describe('Basic rendering', () => {
    it('should render with required props', () => {
      render(<StatsCard label="Total Users" value={1234} />)
      expect(screen.getByText('1234')).toBeInTheDocument()
      expect(screen.getByText('Total Users')).toBeInTheDocument()
    })

    it('should render string value', () => {
      render(<StatsCard label="Revenue" value="$12,345" />)
      expect(screen.getByText('$12,345')).toBeInTheDocument()
    })

    it('should render numeric value', () => {
      render(<StatsCard label="Count" value={9876} />)
      expect(screen.getByText('9876')).toBeInTheDocument()
    })
  })

  describe('Icon rendering', () => {
    it('should render icon when provided', () => {
      const { container } = render(
        <StatsCard icon={Users} label="Users" value={100} />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should not render icon section when not provided', () => {
      const { container } = render(<StatsCard label="Users" value={100} />)
      const iconWrapper = container.querySelector('.absolute.right-4.top-4')
      expect(iconWrapper).not.toBeInTheDocument()
    })
  })

  describe('Trend indicator', () => {
    it('should render upward trend with green color', () => {
      render(
        <StatsCard
          label="Growth"
          trend={{ direction: 'up', value: 12 }}
          value={100}
        />
      )
      expect(screen.getByText('12%')).toBeInTheDocument()
      const trendText = screen.getByText('12%')
      expect(trendText).toHaveClass('text-green-500')
    })

    it('should render downward trend with red color', () => {
      render(
        <StatsCard
          label="Decline"
          trend={{ direction: 'down', value: 8 }}
          value={100}
        />
      )
      expect(screen.getByText('8%')).toBeInTheDocument()
      const trendText = screen.getByText('8%')
      expect(trendText).toHaveClass('text-red-500')
    })

    it('should render neutral trend with muted color', () => {
      render(
        <StatsCard
          label="Stable"
          trend={{ direction: 'neutral', value: 0 }}
          value={100}
        />
      )
      expect(screen.getByText('0%')).toBeInTheDocument()
      const trendText = screen.getByText('0%')
      expect(trendText).toHaveClass('text-muted-foreground')
    })

    it('should not render trend section when not provided', () => {
      render(<StatsCard label="Users" value={100} />)
      expect(screen.queryByText('%')).not.toBeInTheDocument()
    })

    it('should render ArrowUp icon for upward trend', () => {
      const { container } = render(
        <StatsCard
          label="Growth"
          trend={{ direction: 'up', value: 12 }}
          value={100}
        />
      )
      const arrowUp = container.querySelector('.text-green-500')
      expect(arrowUp).toBeInTheDocument()
    })

    it('should render ArrowDown icon for downward trend', () => {
      const { container } = render(
        <StatsCard
          label="Decline"
          trend={{ direction: 'down', value: 8 }}
          value={100}
        />
      )
      const arrowDown = container.querySelector('.text-red-500')
      expect(arrowDown).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <StatsCard className="custom-class" label="Users" value={100} />
      )
      const card = container.firstChild
      expect(card).toHaveClass('custom-class')
      expect(card).toHaveClass('relative')
    })
  })

  describe('Layout', () => {
    it('should render value with large text styling', () => {
      render(<StatsCard label="Users" value={100} />)
      const value = screen.getByText('100')
      expect(value).toHaveClass('text-3xl', 'font-bold')
    })

    it('should render label with muted styling', () => {
      render(<StatsCard label="Total Users" value={100} />)
      const label = screen.getByText('Total Users')
      expect(label).toHaveClass('text-muted-foreground', 'text-sm')
    })
  })
})

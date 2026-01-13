import { render, screen } from '@testing-library/react'

import { Timeline, TimelineItem } from './timeline'

describe('TimelineItem component', () => {
  const defaultProps = {
    title: 'Test Item'
  }

  describe('Basic rendering', () => {
    it('should render title', () => {
      render(<TimelineItem {...defaultProps} />)
      expect(screen.getByText('Test Item')).toBeInTheDocument()
    })

    it('should render description', () => {
      render(<TimelineItem {...defaultProps} description="A description" />)
      expect(screen.getByText('A description')).toBeInTheDocument()
    })

    it('should render date', () => {
      render(<TimelineItem {...defaultProps} date="January 2024" />)
      expect(screen.getByText('January 2024')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<TimelineItem {...defaultProps} />)
      expect(container.querySelector('[data-slot="timeline-item"]')).toBeInTheDocument()
    })

    it('should have data-status attribute', () => {
      const { container } = render(<TimelineItem {...defaultProps} status="completed" />)
      const item = container.querySelector('[data-slot="timeline-item"]')
      expect(item).toHaveAttribute('data-status', 'completed')
    })
  })

  describe('Status dot styling', () => {
    it('should render completed dot with primary background', () => {
      const { container } = render(<TimelineItem {...defaultProps} status="completed" />)
      const dot = container.querySelector('[data-slot="timeline-dot"] > div')
      expect(dot).toHaveClass('bg-primary')
    })

    it('should render current dot with primary border only', () => {
      const { container } = render(<TimelineItem {...defaultProps} status="current" />)
      const dot = container.querySelector('[data-slot="timeline-dot"] > div')
      expect(dot).toHaveClass('border-primary')
      expect(dot).not.toHaveClass('bg-primary')
    })

    it('should render upcoming dot with muted border', () => {
      const { container } = render(<TimelineItem {...defaultProps} status="upcoming" />)
      const dot = container.querySelector('[data-slot="timeline-dot"] > div')
      expect(dot).toHaveClass('border-muted')
    })
  })

  describe('Icon rendering', () => {
    it('should render custom icon when provided', () => {
      render(
        <TimelineItem
          {...defaultProps}
          icon={<span data-testid="custom-icon">Icon</span>}
        />
      )
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('should apply status styling to icon container', () => {
      const { container } = render(
        <TimelineItem
          {...defaultProps}
          icon={<span>Icon</span>}
          status="completed"
        />
      )
      const iconContainer = container.querySelector('[data-slot="timeline-dot"] > div')
      expect(iconContainer).toHaveClass('border-primary', 'bg-primary')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(
        <TimelineItem {...defaultProps} className="custom-class" />
      )
      const item = container.querySelector('[data-slot="timeline-item"]')
      expect(item).toHaveClass('custom-class')
    })
  })
})

describe('Timeline component', () => {
  const items = [
    { date: '2020', status: 'completed' as const, title: 'Founded' },
    { date: '2021', status: 'current' as const, title: 'Launch' },
    { date: '2022', status: 'upcoming' as const, title: 'Expansion' }
  ]

  describe('Rendering with items prop', () => {
    it('should render all items', () => {
      render(<Timeline items={items} />)
      expect(screen.getByText('Founded')).toBeInTheDocument()
      expect(screen.getByText('Launch')).toBeInTheDocument()
      expect(screen.getByText('Expansion')).toBeInTheDocument()
    })

    it('should render dates', () => {
      render(<Timeline items={items} />)
      expect(screen.getByText('2020')).toBeInTheDocument()
      expect(screen.getByText('2021')).toBeInTheDocument()
      expect(screen.getByText('2022')).toBeInTheDocument()
    })

    it('should have data-slot attribute', () => {
      const { container } = render(<Timeline items={items} />)
      expect(container.querySelector('[data-slot="timeline"]')).toBeInTheDocument()
    })
  })

  describe('Rendering with children', () => {
    it('should render TimelineItem children', () => {
      render(
        <Timeline>
          <TimelineItem title="Step 1" />
          <TimelineItem title="Step 2" />
        </Timeline>
      )
      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
    })
  })

  describe('Orientation', () => {
    it('should apply vertical orientation classes by default', () => {
      const { container } = render(<Timeline items={items} />)
      const timeline = container.querySelector('[data-slot="timeline"]')
      expect(timeline).toHaveClass('flex', 'flex-col')
    })

    it('should apply horizontal orientation classes', () => {
      const { container } = render(<Timeline items={items} orientation="horizontal" />)
      const timeline = container.querySelector('[data-slot="timeline"]')
      expect(timeline).toHaveClass('flex', 'flex-row')
    })
  })

  describe('Line position', () => {
    it('should apply left line position by default', () => {
      const { container } = render(<Timeline items={items} />)
      const firstItem = container.querySelector('[data-slot="timeline-item"]')
      expect(firstItem).toHaveClass('pl-6')
    })

    it('should apply right line position classes', () => {
      const { container } = render(<Timeline items={items} linePosition="right" />)
      const firstItem = container.querySelector('[data-slot="timeline-item"]')
      expect(firstItem).toHaveClass('pr-6', 'text-right')
    })
  })

  describe('Connecting line', () => {
    it('should render connecting line between items', () => {
      const { container } = render(<Timeline items={items} />)
      const lines = container.querySelectorAll('[data-slot="timeline-line"]')
      // Last item should not have a line
      expect(lines).toHaveLength(items.length - 1)
    })

    it('should not render line on last item', () => {
      const { container } = render(<Timeline items={[{ title: 'Only Item' }]} />)
      const lines = container.querySelectorAll('[data-slot="timeline-line"]')
      expect(lines).toHaveLength(0)
    })
  })

  describe('Status inheritance', () => {
    it('should pass status to items', () => {
      const { container } = render(<Timeline items={items} />)
      const completedItem = container.querySelector('[data-status="completed"]')
      const currentItem = container.querySelector('[data-status="current"]')
      const upcomingItem = container.querySelector('[data-status="upcoming"]')
      expect(completedItem).toBeInTheDocument()
      expect(currentItem).toBeInTheDocument()
      expect(upcomingItem).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className', () => {
      const { container } = render(<Timeline className="custom-timeline" items={items} />)
      const timeline = container.querySelector('[data-slot="timeline"]')
      expect(timeline).toHaveClass('custom-timeline')
    })
  })
})

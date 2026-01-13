import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode
} from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

const timelineVariants = cva(['relative'], {
  defaultVariants: {
    orientation: 'vertical'
  },
  variants: {
    orientation: {
      horizontal: 'flex flex-row overflow-x-auto gap-8 pb-4',
      vertical: 'flex flex-col'
    }
  }
})

const timelineItemVariants = cva(['relative'], {
  defaultVariants: {
    linePosition: 'left',
    orientation: 'vertical',
    status: 'upcoming'
  },
  variants: {
    linePosition: {
      center: '',
      left: '',
      right: ''
    },
    orientation: {
      horizontal: 'flex flex-col items-center min-w-[120px]',
      vertical: 'pb-8 last:pb-0'
    },
    status: {
      completed: '',
      current: '',
      upcoming: ''
    }
  }
})

const dotVariants = cva(
  [
    'size-3',
    'rounded-full',
    'border-2',
    'shrink-0',
    'z-10',
    'bg-background'
  ],
  {
    defaultVariants: {
      status: 'upcoming'
    },
    variants: {
      status: {
        completed: 'border-primary bg-primary',
        current: 'border-primary',
        upcoming: 'border-muted'
      }
    }
  }
)

export interface TimelineItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Item title
   */
  title: string

  /**
   * Item description
   */
  description?: ReactNode | string

  /**
   * Formatted date display
   */
  date?: string

  /**
   * Custom icon for the dot
   */
  icon?: ReactNode

  /**
   * Status determines dot styling
   */
  status?: 'completed' | 'current' | 'upcoming'

  /**
   * Internal: orientation passed from parent
   * @internal
   */
  _orientation?: 'vertical' | 'horizontal'

  /**
   * Internal: line position passed from parent
   * @internal
   */
  _linePosition?: 'left' | 'center' | 'right'

  /**
   * Internal: whether this is the last item
   * @internal
   */
  _isLast?: boolean

  /**
   * Internal: item index for alternating layout
   * @internal
   */
  _index?: number
}

/**
 * TimelineItem - Individual item in a timeline
 */
export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      _index = 0,
      _isLast = false,
      _linePosition = 'left',
      _orientation = 'vertical',
      className,
      date,
      description,
      icon,
      status = 'upcoming',
      title,
      ...props
    },
    ref
  ) => {
    const isVertical = _orientation === 'vertical'
    const isCenter = _linePosition === 'center'
    const isEven = _index % 2 === 0

    return (
      <div
        className={cn(
          timelineItemVariants({
            linePosition: _linePosition,
            orientation: _orientation,
            status
          }),
          isVertical && _linePosition === 'left' && 'pl-6',
          isVertical && _linePosition === 'right' && 'pr-6 text-right',
          isVertical && isCenter && 'pl-6 md:pl-0',
          className
        )}
        data-slot="timeline-item"
        data-status={status}
        ref={ref}
        {...props}
      >
        {/* Dot */}
        <div
          className={cn(
            'absolute',
            isVertical && _linePosition === 'left' && 'left-0 top-1',
            isVertical && _linePosition === 'right' && 'right-0 top-1',
            isVertical && isCenter && 'left-0 top-1 md:left-1/2 md:-translate-x-1/2',
            !isVertical && 'left-1/2 top-0 -translate-x-1/2'
          )}
          data-slot="timeline-dot"
        >
          {icon ? (
            <div
              className={cn(
                'flex size-6 items-center justify-center rounded-full border-2 bg-background',
                status === 'completed' && 'border-primary bg-primary text-primary-foreground',
                status === 'current' && 'border-primary',
                status === 'upcoming' && 'border-muted'
              )}
            >
              {icon}
            </div>
          ) : (
            <div className={cn(dotVariants({ status }))} />
          )}
        </div>

        {/* Connecting Line */}
        {!_isLast && (
          <div
            className={cn(
              'bg-muted absolute',
              isVertical && _linePosition === 'left' && 'left-[5px] top-4 h-full w-0.5',
              isVertical && _linePosition === 'right' && 'right-[5px] top-4 h-full w-0.5',
              isVertical && isCenter && 'left-[5px] top-4 h-full w-0.5 md:left-1/2 md:-translate-x-1/2',
              !isVertical && 'left-[calc(50%+12px)] top-1.5 h-0.5 w-[calc(100%-24px)]'
            )}
            data-slot="timeline-line"
          />
        )}

        {/* Content */}
        <div
          className={cn(
            isVertical && isCenter && 'md:w-[calc(50%-24px)]',
            isVertical && isCenter && (isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right')
          )}
        >
          {date && (
            <div
              className={cn(
                'text-muted-foreground text-sm',
                !isVertical && 'mt-4'
              )}
              data-slot="timeline-date"
            >
              {date}
            </div>
          )}
          <div
            className={cn(
              'font-semibold',
              !isVertical && 'mt-1 text-center'
            )}
            data-slot="timeline-title"
          >
            {title}
          </div>
          {description && (
            <div
              className={cn(
                'text-muted-foreground mt-1 text-sm',
                !isVertical && 'text-center'
              )}
              data-slot="timeline-description"
            >
              {description}
            </div>
          )}
        </div>
      </div>
    )
  }
)

TimelineItem.displayName = 'TimelineItem'

export interface TimelineProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof timelineVariants> {
  /**
   * Array of timeline item props (alternative to children)
   */
  items?: TimelineItemProps[]

  /**
   * TimelineItem children (alternative to items)
   */
  children?: ReactNode

  /**
   * Timeline orientation
   */
  orientation?: 'vertical' | 'horizontal'

  /**
   * Line position for vertical orientation
   */
  linePosition?: 'left' | 'center' | 'right'
}

/**
 * Timeline - Display chronological events or milestones
 *
 * @example
 * // Using items prop
 * <Timeline
 *   items={[
 *     { title: "Founded", date: "2020", status: "completed" },
 *     { title: "Launch", date: "2021", status: "current" },
 *     { title: "Expansion", date: "2022", status: "upcoming" }
 *   ]}
 * />
 *
 * @example
 * // Using children
 * <Timeline>
 *   <TimelineItem title="Step 1" status="completed" />
 *   <TimelineItem title="Step 2" status="current" />
 *   <TimelineItem title="Step 3" status="upcoming" />
 * </Timeline>
 *
 * @example
 * // Horizontal timeline
 * <Timeline orientation="horizontal" items={items} />
 *
 * @example
 * // Alternating layout (center line)
 * <Timeline linePosition="center" items={items} />
 */
export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      children,
      className,
      items,
      linePosition = 'left',
      orientation = 'vertical',
      ...props
    },
    ref
  ) => {
    // If items prop is provided, render from array
    if (items && items.length > 0) {
      return (
        <div
          className={cn(timelineVariants({ orientation }), className)}
          data-slot="timeline"
          ref={ref}
          {...props}
        >
          {items.map((item, index) => (
            <TimelineItem
              _index={index}
              _isLast={index === items.length - 1}
              _linePosition={linePosition}
              _orientation={orientation}
              key={item.title + index}
              {...item}
            />
          ))}
        </div>
      )
    }

    // If children are provided, clone with internal props
    const childArray = Children.toArray(children)
    const enhancedChildren = childArray.map((child, index) => {
      if (isValidElement(child) && child.type === TimelineItem) {
        return cloneElement(child as ReactElement<TimelineItemProps>, {
          _index: index,
          _isLast: index === childArray.length - 1,
          _linePosition: linePosition,
          _orientation: orientation
        })
      }
      return child
    })

    return (
      <div
        className={cn(timelineVariants({ orientation }), className)}
        data-slot="timeline"
        ref={ref}
        {...props}
      >
        {enhancedChildren}
      </div>
    )
  }
)

Timeline.displayName = 'Timeline'

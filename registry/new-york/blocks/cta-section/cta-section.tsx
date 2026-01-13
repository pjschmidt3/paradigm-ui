import type { ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

import { Heading } from '@registry/heading'
import { Paragraph } from '@registry/paragraph'
import { Button } from '@registry/button'

const ctaSectionVariants = cva(
  ['py-16', 'px-6'],
  {
    defaultVariants: {
      background: 'default',
      variant: 'default'
    },
    variants: {
      background: {
        default: 'bg-background',
        gradient: 'bg-gradient-to-r from-primary/10 via-primary/5 to-background',
        muted: 'bg-muted',
        primary: 'bg-primary text-primary-foreground'
      },
      variant: {
        centered: 'text-center',
        default: '',
        split: ''
      }
    }
  }
)

export interface CTASectionProps extends VariantProps<typeof ctaSectionVariants> {
  /**
   * Main heading text or element
   */
  heading: ReactNode | string

  /**
   * Supporting description text or element
   */
  description?: ReactNode | string

  /**
   * Primary call-to-action button configuration
   */
  primaryAction: {
    label: string
    href?: string
    onClick?: () => void
  }

  /**
   * Optional secondary action button configuration
   */
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }

  /**
   * Layout variant
   * - default: left-aligned text, buttons on right
   * - centered: centered text, stacked buttons below
   * - split: two-column with text left, large CTA right
   */
  variant?: 'default' | 'centered' | 'split'

  /**
   * Background style
   */
  background?: 'default' | 'muted' | 'primary' | 'gradient'

  /**
   * Additional CSS classes
   */
  className?: string
}

export function CTASection({
  heading,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  background = 'default',
  className
}: CTASectionProps) {
  const handlePrimaryClick = () => {
    if (primaryAction.onClick) {
      primaryAction.onClick()
    } else if (primaryAction.href) {
      window.location.href = primaryAction.href
    }
  }

  const handleSecondaryClick = () => {
    if (secondaryAction?.onClick) {
      secondaryAction.onClick()
    } else if (secondaryAction?.href) {
      window.location.href = secondaryAction.href
    }
  }

  const isPrimaryBg = background === 'primary'

  const renderButtons = () => (
    <div
      className={cn(
        'flex gap-4',
        variant === 'centered' && 'justify-center',
        variant === 'split' && 'flex-col'
      )}
    >
      <Button
        onClick={handlePrimaryClick}
        size="lg"
        variant={isPrimaryBg ? 'outlined' : 'default'}
      >
        {primaryAction.label}
      </Button>
      {secondaryAction && (
        <Button
          onClick={handleSecondaryClick}
          size="lg"
          variant={isPrimaryBg ? 'ghost' : 'outlined'}
        >
          {secondaryAction.label}
        </Button>
      )}
    </div>
  )

  if (variant === 'centered') {
    return (
      <section className={cn(ctaSectionVariants({ background, variant }), className)}>
        <div className="mx-auto max-w-2xl space-y-6">
          <Heading
            className={cn(isPrimaryBg && 'text-primary-foreground')}
            level={2}
          >
            {heading}
          </Heading>
          {description && (
            <Paragraph className={cn(isPrimaryBg && 'text-primary-foreground/80')}>
              {description}
            </Paragraph>
          )}
          {renderButtons()}
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className={cn(ctaSectionVariants({ background, variant }), className)}>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <Heading
              className={cn(isPrimaryBg && 'text-primary-foreground')}
              level={2}
            >
              {heading}
            </Heading>
            {description && (
              <Paragraph className={cn(isPrimaryBg && 'text-primary-foreground/80')}>
                {description}
              </Paragraph>
            )}
          </div>
          <div className="flex justify-end">
            {renderButtons()}
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className={cn(ctaSectionVariants({ background, variant }), className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Heading
            className={cn(isPrimaryBg && 'text-primary-foreground')}
            level={2}
          >
            {heading}
          </Heading>
          {description && (
            <Paragraph className={cn(isPrimaryBg && 'text-primary-foreground/80')}>
              {description}
            </Paragraph>
          )}
        </div>
        {renderButtons()}
      </div>
    </section>
  )
}

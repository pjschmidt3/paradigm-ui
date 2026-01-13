import { ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'
import { Card, CardContent, CardHeader } from '@shadcn/card'
import { Heading } from '@registry/heading'
import { Paragraph } from '@registry/paragraph'

const sectionWrapperVariants = cva('', {
  defaultVariants: {
    background: 'default',
    divider: 'none',
    spacing: 'md',
    variant: 'default'
  },
  variants: {
    background: {
      accent: 'bg-accent',
      default: '',
      muted: 'bg-muted'
    },
    divider: {
      both: 'border-t border-b border-border',
      bottom: 'border-b border-border',
      none: '',
      top: 'border-t border-border'
    },
    spacing: {
      lg: 'py-16',
      md: 'py-12',
      sm: 'py-8',
      xl: 'py-24'
    },
    variant: {
      card: '',
      default: '',
      inset: '-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'
    }
  }
})

export interface SectionWrapperProps extends VariantProps<typeof sectionWrapperVariants> {
  actions?: ReactNode
  children: ReactNode
  className?: string
  description?: ReactNode | string
  id?: string
  title?: string
}

export function SectionWrapper({
  actions,
  background = 'default',
  children,
  className,
  description,
  divider = 'none',
  id,
  spacing = 'md',
  title,
  variant = 'default'
}: SectionWrapperProps) {
  const hasHeader = title || description || actions

  // Card variant uses Card component for wrapping
  if (variant === 'card') {
    return (
      <section
        className={cn(
          sectionWrapperVariants({ background, divider, spacing, variant: 'default' }),
          className
        )}
        data-slot="section-wrapper"
        id={id}
      >
        <Card data-slot="section-wrapper-card">
          {hasHeader && (
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex flex-col gap-1.5">
                {title && (
                  <div data-slot="section-wrapper-title">
                    <Heading level={2}>
                      {title}
                    </Heading>
                  </div>
                )}
                {description && (
                  <Paragraph
                    className="text-muted-foreground text-sm"
                    data-slot="section-wrapper-description"
                  >
                    {description}
                  </Paragraph>
                )}
              </div>
              {actions && (
                <div className="flex items-center gap-2" data-slot="section-wrapper-actions">
                  {actions}
                </div>
              )}
            </CardHeader>
          )}
          <CardContent data-slot="section-wrapper-content">
            {children}
          </CardContent>
        </Card>
      </section>
    )
  }

  // Default and inset variants
  return (
    <section
      className={cn(
        sectionWrapperVariants({ background, divider, spacing, variant }),
        className
      )}
      data-slot="section-wrapper"
      id={id}
    >
      {hasHeader && (
        <div
          className="mb-8 flex flex-row items-start justify-between"
          data-slot="section-wrapper-header"
        >
          <div className="flex flex-col gap-1.5">
            {title && (
              <div data-slot="section-wrapper-title">
                <Heading level={2}>
                  {title}
                </Heading>
              </div>
            )}
            {description && (
              <Paragraph
                className="text-muted-foreground"
                data-slot="section-wrapper-description"
              >
                {description}
              </Paragraph>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-2" data-slot="section-wrapper-actions">
              {actions}
            </div>
          )}
        </div>
      )}
      <div data-slot="section-wrapper-content">
        {children}
      </div>
    </section>
  )
}

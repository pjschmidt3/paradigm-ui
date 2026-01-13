import { ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowLeft } from 'lucide-react'

import { cn } from '@/src/lib/utils'
import { Badge } from '@shadcn/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@shadcn/breadcrumb'
import { Heading } from '@registry/heading'
import { Paragraph } from '@registry/paragraph'

const pageHeaderVariants = cva('', {
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      centered: 'text-center items-center',
      compact: 'py-4',
      default: ''
    }
  }
})

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export interface PageHeaderBreadcrumb {
  href?: string
  label: string
}

export interface PageHeaderBadge {
  label: string
  variant?: BadgeVariant
}

export interface PageHeaderBackLink {
  href: string
  label: string
}

export interface PageHeaderProps extends VariantProps<typeof pageHeaderVariants> {
  actions?: ReactNode
  backLink?: PageHeaderBackLink
  badge?: PageHeaderBadge
  breadcrumbs?: PageHeaderBreadcrumb[]
  className?: string
  description?: ReactNode | string
  divider?: boolean
  title: string
}

export function PageHeader({
  actions,
  backLink,
  badge,
  breadcrumbs,
  className,
  description,
  divider = false,
  title,
  variant = 'default'
}: PageHeaderProps) {
  const isCentered = variant === 'centered'
  const isCompact = variant === 'compact'

  return (
    <header
      className={cn(
        'flex flex-col gap-4 py-6',
        pageHeaderVariants({ variant }),
        divider && 'border-b border-border mb-6',
        className
      )}
      data-slot="page-header"
    >
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb data-slot="page-header-breadcrumbs">
          <BreadcrumbList className={cn(isCentered && 'justify-center')}>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <BreadcrumbItem key={crumb.label}>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <>
                      {crumb.href ? (
                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                      ) : (
                        <span className="text-muted-foreground">{crumb.label}</span>
                      )}
                      <BreadcrumbSeparator />
                    </>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* Back link */}
      {backLink && (
        <a
          className={cn(
            'inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors',
            isCentered && 'justify-center'
          )}
          data-slot="page-header-back-link"
          href={backLink.href}
        >
          <ArrowLeft className="size-4" />
          {backLink.label}
        </a>
      )}

      {/* Title row with actions */}
      <div
        className={cn(
          'flex gap-4',
          isCentered ? 'flex-col items-center' : 'flex-row items-center justify-between'
        )}
        data-slot="page-header-title-row"
      >
        <div className={cn('flex items-center gap-3', isCentered && 'flex-col')}>
          <Heading
            className={cn(isCompact && 'text-2xl')}
            level={1}
          >
            {title}
          </Heading>
          {badge && (
            <Badge
              data-slot="page-header-badge"
              variant={badge.variant || 'secondary'}
            >
              {badge.label}
            </Badge>
          )}
        </div>

        {/* Actions slot - positioned right on default/compact, below on centered */}
        {actions && (
          <div
            className={cn('flex items-center gap-2', isCentered && 'mt-2')}
            data-slot="page-header-actions"
          >
            {actions}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <Paragraph
          className={cn('text-muted-foreground', isCentered && 'max-w-2xl')}
          data-slot="page-header-description"
        >
          {description}
        </Paragraph>
      )}
    </header>
  )
}

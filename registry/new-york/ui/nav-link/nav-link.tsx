import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/src/lib/utils'

export const navLinkVariants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-2',
    'text-sm',
    'transition-colors',
    'rounded-md',
    'px-3',
    'py-2'
  ],
  {
    defaultVariants: {
      active: false
    },
    variants: {
      active: {
        false: [
          'text-muted-foreground',
          'hover:bg-muted',
          'hover:text-foreground'
        ],
        true: ['text-primary', 'bg-primary/10', 'font-medium']
      }
    }
  }
)

export interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>,
    VariantProps<typeof navLinkVariants> {
  /**
   * URL the link points to
   */
  href: string

  /**
   * Whether the link represents the current page
   * @default false
   */
  active?: boolean

  /**
   * Optional icon to display before the label
   */
  icon?: LucideIcon

  /**
   * Optional badge count to display after the label
   */
  badge?: string | number

  /**
   * Link label content
   */
  children: ReactNode
}

/**
 * NavLink - A navigation link with active/inactive states
 *
 * @example
 * // Basic usage
 * <NavLink href="/dashboard">Dashboard</NavLink>
 *
 * @example
 * // Active state
 * <NavLink href="/dashboard" active>Dashboard</NavLink>
 *
 * @example
 * // With icon
 * <NavLink href="/settings" icon={Settings}>Settings</NavLink>
 *
 * @example
 * // With badge
 * <NavLink href="/notifications" badge={5}>Notifications</NavLink>
 */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ active = false, badge, children, className, href, icon: Icon, ...props }, ref) => {
    return (
      <a
        className={cn(navLinkVariants({ active }), className)}
        href={href}
        ref={ref}
        {...props}
      >
        {Icon && <Icon className="size-4 shrink-0" />}
        <span className="flex-1">{children}</span>
        {badge !== undefined && (
          <span className="bg-primary/10 text-primary ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-medium">
            {badge}
          </span>
        )}
      </a>
    )
  }
)

NavLink.displayName = 'NavLink'

import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from 'react'

import { type VariantProps } from 'class-variance-authority'
import { ExternalLink, type LucideIcon } from 'lucide-react'

import { buttonVariants } from '@/registry/new-york/ui/button/button'
import { cn } from '@/src/lib/utils'

export interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /**
   * URL the link points to
   */
  href: string

  /**
   * Optional icon to display
   */
  icon?: LucideIcon

  /**
   * Position of the icon relative to children
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'

  /**
   * Whether the link opens in a new tab with security attributes
   * @default false
   */
  external?: boolean

  /**
   * Show external link icon when external is true
   * @default true
   */
  showExternalIcon?: boolean

  /**
   * Children content
   */
  children?: ReactNode
}

/**
 * LinkButton - An anchor element styled like a Button
 *
 * @example
 * // Basic usage
 * <LinkButton href="/about">About</LinkButton>
 *
 * @example
 * // With icon
 * <LinkButton href="/settings" icon={Settings}>Settings</LinkButton>
 *
 * @example
 * // External link
 * <LinkButton href="https://example.com" external>Visit Site</LinkButton>
 *
 * @example
 * // Different variants
 * <LinkButton href="/docs" variant="outlined">Documentation</LinkButton>
 * <LinkButton href="/help" variant="ghost">Help</LinkButton>
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      className,
      external = false,
      href,
      icon: Icon,
      iconPosition = 'left',
      showExternalIcon = true,
      size,
      variant,
      ...props
    },
    ref
  ) => {
    const externalProps = external
      ? { rel: 'noopener noreferrer', target: '_blank' as const }
      : {}

    const showExternal = external && showExternalIcon && !Icon

    return (
      <a
        className={cn(buttonVariants({ size, variant }), className)}
        href={href}
        ref={ref}
        {...externalProps}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon />}
        {children}
        {Icon && iconPosition === 'right' && <Icon />}
        {showExternal && <ExternalLink />}
      </a>
    )
  }
)

LinkButton.displayName = 'LinkButton'

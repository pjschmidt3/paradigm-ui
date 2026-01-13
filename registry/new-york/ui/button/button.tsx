import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import type { ComponentSize } from '@/src/types/shared/helpers'

import { cn } from '@/src/lib/utils'

/**
 * Converts a color value to a Tailwind class
 * Supports semantic color names (primary, secondary, etc.) and hex values
 */
function colorToClass(
  color: string | undefined,
  type: 'bg' | 'border' | 'text'
): string | undefined {
  if (!color) return undefined

  // Check if it's a hex color
  if (color.startsWith('#')) {
    return `${type === 'text' ? 'text' : type === 'bg' ? 'bg' : 'border'}-[${color}]`
  }

  // Map semantic color names to Tailwind classes
  const prefix = type === 'text' ? 'text' : type === 'bg' ? 'bg' : 'border'
  return `${prefix}-${color}`
}

type ButtonVariant = 'default' | 'destructive' | 'ghost' | 'link' | 'outlined'

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-medium',
    'transition-all',
    'duration-200',
    'outline-none',
    'select-none',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-primary/50',
    '[&_svg]:pointer-events-none',
    '[&_svg]:shrink-0'
  ],
  {
    defaultVariants: {
      size: 'md',
      variant: 'default'
    },
    variants: {
      size: {
        '2xl': ['h-14', 'px-10', 'text-xl', 'rounded-lg', '[&_svg]:size-6'],
        '3xl': ['h-16', 'px-12', 'text-2xl', 'rounded-xl', '[&_svg]:size-7'],
        '4xl': ['h-20', 'px-16', 'text-3xl', 'rounded-xl', '[&_svg]:size-8'],
        lg: ['h-11', 'px-6', 'text-base', 'rounded-lg', '[&_svg]:size-5'],
        md: ['h-10', 'px-4', 'text-sm', 'rounded-md', '[&_svg]:size-4'],
        sm: ['h-8', 'px-3', 'text-sm', 'rounded-md', '[&_svg]:size-4'],
        xl: ['h-12', 'px-8', 'text-lg', 'rounded-lg', '[&_svg]:size-5'],
        xs: ['h-6', 'px-2', 'text-xs', 'rounded-sm', '[&_svg]:size-3']
      } satisfies Record<ComponentSize, string[]>,
      variant: {
        default: [
          'bg-primary',
          'text-primary-foreground',
          'hover:bg-primary/90',
          'active:bg-primary/80',
          'shadow-sm'
        ],
        destructive: [
          'bg-destructive',
          'text-destructive-foreground',
          'hover:bg-destructive/90',
          'active:bg-destructive/80',
          'shadow-sm'
        ],
        ghost: [
          'bg-transparent',
          'hover:bg-muted',
          'hover:text-foreground',
          'active:bg-muted/80'
        ],
        link: [
          'text-primary',
          'underline-offset-4',
          'hover:underline',
          'bg-transparent',
          'shadow-none',
          'p-0'
        ],
        outlined: [
          'border-2',
          'border-primary',
          'bg-transparent',
          'text-primary',
          'hover:bg-primary',
          'hover:text-primary-foreground',
          'active:bg-primary/90'
        ]
      } satisfies Record<ButtonVariant, string[]>
    }
  }
)

export interface ButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon to display at the start of the button
   */
  iconStart?: ReactNode

  /**
   * Icon to display at the end of the button
   */
  iconEnd?: ReactNode

  /**
   * Text color - accepts semantic names (primary, secondary, etc.) or hex values (#ffffff)
   */
  color?: string

  /**
   * Background color - accepts semantic names (primary, secondary, etc.) or hex values (#ffffff)
   */
  bg?: string

  /**
   * Whether the button is in a loading state
   */
  loading?: boolean

  /**
   * Button shape - 'pill' for fully rounded corners
   */
  shape?: 'default' | 'pill'

  /**
   * Custom loading spinner component
   */
  loadingSpinner?: ReactNode

  /**
   * Children content
   */
  children?: ReactNode
}

/**
 * Button - A flexible, accessible button component with multiple variants and sizes
 *
 * @example
 * // Basic usage
 * <Button>Click me</Button>
 *
 * @example
 * // With icons
 * <Button iconStart={<Icon />}>Save</Button>
 *
 * @example
 * // Outlined variant
 * <Button variant="outlined">Cancel</Button>
 *
 * @example
 * // Link style
 * <Button variant="link">Learn more</Button>
 *
 * @example
 * // Custom colors
 * <Button bg="secondary" color="secondary-foreground">Custom</Button>
 *
 * @example
 * // Submit button
 * <Button type="submit" onClick={handleSubmit}>Submit</Button>
 *
 * @example
 * // Loading state
 * <Button loading>Saving...</Button>
 *
 * @example
 * // Pill shape (fully rounded)
 * <Button shape="pill">Tag</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      bg,
      children,
      className,
      color,
      disabled,
      iconEnd,
      iconStart,
      loading = false,
      loadingSpinner,
      shape,
      size,
      type = 'button',
      variant,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    // Build custom color classes
    const colorClass = colorToClass(color, 'text')
    const bgClass = colorToClass(bg, 'bg')

    // Default loading spinner
    const spinner =
      loadingSpinner
      || (loading && (
        <svg
          className="animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      ))

    // Apply shape class after CVA to ensure pill overrides size's rounded class
    const shapeClass = shape === 'pill' ? 'rounded-full' : ''

    return (
      <button
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ size, variant }),
          shapeClass,
          bgClass,
          colorClass,
          className
        )}
        disabled={isDisabled}
        ref={ref}
        type={type}
        {...props}>
        {loading ? spinner : iconStart}
        {children}
        {!loading && iconEnd}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { buttonVariants }

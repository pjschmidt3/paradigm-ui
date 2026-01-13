import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/src/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default'
    },
    variants: {
      size: {
        default: 'px-2 py-0.5 text-xs [&>svg]:size-3',
        lg: 'px-2.5 py-1 text-sm [&>svg]:size-3.5',
        sm: 'px-1.5 py-0 text-[10px] [&>svg]:size-2.5'
      },
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90'
      }
    }
  }
)

const closeButtonSizeClasses = {
  sm: 'size-2.5',
  default: 'size-3',
  lg: 'size-3.5'
}

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    onRemove?: () => void
  }

function Badge({
  asChild = false,
  className,
  size,
  variant,
  onRemove,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  const resolvedSize = size ?? 'default'

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove?.()
  }

  return (
    <Comp
      className={cn(badgeVariants({ size, variant }), className)}
      data-size={size}
      data-slot="badge"
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={handleRemove}
          className={cn(
            'ml-1 -mr-0.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 cursor-pointer',
            closeButtonSizeClasses[resolvedSize]
          )}
          data-slot="badge-close"
          aria-label="Remove"
        >
          <X className="size-full" />
        </button>
      )}
    </Comp>
  )
}

export { Badge, badgeVariants }

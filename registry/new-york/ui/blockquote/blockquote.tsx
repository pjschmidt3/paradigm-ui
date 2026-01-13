import type { ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

export const blockquoteVariants = cva(
  'my-4 [&>p]:leading-relaxed',
  {
    defaultVariants: {
      variant: 'default'
    },
    variants: {
      variant: {
        default: 'border-l-4 border-primary pl-4 italic text-muted-foreground',
        bordered: 'border rounded-lg p-4 bg-muted/30 text-foreground',
        filled: 'bg-muted p-4 rounded-lg text-foreground'
      }
    }
  }
)

export interface BlockquoteProps
  extends VariantProps<typeof blockquoteVariants> {
  /** Content of the blockquote */
  children: ReactNode
  /** Optional attribution/citation */
  cite?: string
  /** Additional CSS classes */
  className?: string
}

export function Blockquote({
  children,
  cite,
  className,
  variant
}: BlockquoteProps) {
  return (
    <blockquote className={cn(blockquoteVariants({ variant }), className)}>
      <div>{children}</div>
      {cite && (
        <footer className="mt-2 text-sm text-muted-foreground not-italic">
          — {cite}
        </footer>
      )}
    </blockquote>
  )
}

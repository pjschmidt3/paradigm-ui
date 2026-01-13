import type { ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'

import { cn } from '@/src/lib/utils'

export const listVariants = cva(
  '',
  {
    defaultVariants: {
      spacing: 'normal',
      variant: 'bullet'
    },
    variants: {
      spacing: {
        tight: 'space-y-1',
        normal: 'space-y-2',
        relaxed: 'space-y-4'
      },
      variant: {
        bullet: 'list-disc pl-6',
        numbered: 'list-decimal pl-6',
        check: 'list-none pl-0',
        none: 'list-none pl-0'
      }
    }
  }
)

export interface ListItemProps {
  /** Content of the list item */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

export function ListItem({ children, className }: ListItemProps) {
  return <li className={cn(className)}>{children}</li>
}

export interface ListProps extends VariantProps<typeof listVariants> {
  /** Additional CSS classes */
  className?: string
  /** List items - strings or ReactNodes */
  items: (string | ReactNode)[]
}

export function List({ className, items, spacing, variant }: ListProps) {
  const isOrdered = variant === 'numbered'
  const isCheck = variant === 'check'
  const ListElement = isOrdered ? 'ol' : 'ul'

  return (
    <ListElement className={cn(listVariants({ spacing, variant }), className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            isCheck && 'flex items-start gap-2'
          )}
        >
          {isCheck && (
            <Check className="mt-0.5 size-4 shrink-0 text-green-600" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ListElement>
  )
}

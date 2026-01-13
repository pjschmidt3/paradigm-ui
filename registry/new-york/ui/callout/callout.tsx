import type { ComponentType, ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import {
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  type LucideProps,
  XCircle
} from 'lucide-react'

import { cn } from '@/src/lib/utils'

export const calloutVariants = cva(
  'flex gap-3 rounded-lg border p-4',
  {
    defaultVariants: {
      variant: 'info'
    },
    variants: {
      variant: {
        info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
        warning: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100',
        success: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
        error: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
        note: 'border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
      }
    }
  }
)

const iconVariants = cva(
  'mt-0.5 size-5 shrink-0',
  {
    defaultVariants: {
      variant: 'info'
    },
    variants: {
      variant: {
        info: 'text-blue-600 dark:text-blue-400',
        warning: 'text-amber-600 dark:text-amber-400',
        success: 'text-green-600 dark:text-green-400',
        error: 'text-red-600 dark:text-red-400',
        note: 'text-gray-600 dark:text-gray-400'
      }
    }
  }
)

const defaultIcons: Record<string, ComponentType<LucideProps>> = {
  error: XCircle,
  info: Info,
  note: Lightbulb,
  success: CheckCircle,
  warning: AlertTriangle
}

export interface CalloutProps extends VariantProps<typeof calloutVariants> {
  /** Content of the callout */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Override the default icon for the variant */
  icon?: ComponentType<LucideProps>
  /** Optional title heading */
  title?: string
}

export function Callout({
  children,
  className,
  icon,
  title,
  variant = 'info'
}: CalloutProps) {
  const variantKey = variant ?? 'info'
  const Icon: ComponentType<LucideProps> = icon ?? defaultIcons[variantKey] ?? Info

  return (
    <div
      className={cn(calloutVariants({ variant }), className)}
      role="alert"
    >
      <Icon className={cn(iconVariants({ variant }))} />
      <div className="flex-1">
        {title && (
          <h4 className="mb-1 font-semibold">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  )
}

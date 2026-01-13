import type { ComponentType } from 'react'

import { ArrowDown, ArrowUp, type LucideProps } from 'lucide-react'

import { cn } from '@/src/lib/utils'

import { Card, CardContent } from '@/src/components/ui/card'

export interface StatsCardProps {
  /** Additional CSS classes */
  className?: string
  /** Optional icon component (Lucide icon) */
  icon?: ComponentType<LucideProps>
  /** Label describing the statistic */
  label: string
  /** Trend indicator with direction and percentage */
  trend?: {
    direction: 'up' | 'down' | 'neutral'
    value: number
  }
  /** The main statistic value */
  value: number | string
}

export function StatsCard({
  className,
  icon: Icon,
  label,
  trend,
  value
}: StatsCardProps) {
  return (
    <Card className={cn('relative', className)}>
      <CardContent className="flex flex-col gap-2 pt-6">
        {Icon && (
          <div className="absolute right-4 top-4">
            <div className="bg-muted rounded-full p-2">
              <Icon className="text-muted-foreground size-4" />
            </div>
          </div>
        )}
        <span className="text-3xl font-bold tracking-tight">{value}</span>
        <span className="text-muted-foreground text-sm">{label}</span>
        {trend && (
          <div className="flex items-center gap-1">
            {trend.direction === 'up' && (
              <ArrowUp className="size-4 text-green-500" />
            )}
            {trend.direction === 'down' && (
              <ArrowDown className="size-4 text-red-500" />
            )}
            <span
              className={cn(
                'text-sm font-medium',
                trend.direction === 'up' && 'text-green-500',
                trend.direction === 'down' && 'text-red-500',
                trend.direction === 'neutral' && 'text-muted-foreground'
              )}
            >
              {trend.value}%
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

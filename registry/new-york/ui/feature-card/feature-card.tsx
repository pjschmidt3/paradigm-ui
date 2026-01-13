import type { ComponentType } from 'react'

import type { LucideProps } from 'lucide-react'

import { cn } from '@/src/lib/utils'

import { Card, CardContent, CardHeader } from '@/src/components/ui/card'

export interface FeatureCardProps {
  /** Additional CSS classes */
  className?: string
  /** Description text */
  description: string
  /** Optional link URL - makes entire card clickable */
  href?: string
  /** Icon component (Lucide icon) */
  icon: ComponentType<LucideProps>
  /** Feature title */
  title: string
}

export function FeatureCard({
  className,
  description,
  href,
  icon: Icon,
  title
}: FeatureCardProps) {
  const cardContent = (
    <>
      <CardHeader className="pb-2">
        <div className="bg-primary/10 mb-4 inline-flex size-12 items-center justify-center rounded-full">
          <Icon className="text-primary size-6" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </>
  )

  if (href) {
    return (
      <a className="block" href={href}>
        <Card
          className={cn(
            'transition-shadow hover:shadow-md cursor-pointer',
            className
          )}
        >
          {cardContent}
        </Card>
      </a>
    )
  }

  return <Card className={cn(className)}>{cardContent}</Card>
}

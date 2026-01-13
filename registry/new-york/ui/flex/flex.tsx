import { PropsWithChildren } from 'react'

import {
  Dictionary,
  FlexContainerProps,
  GapSize
} from '@/src/types/shared/helpers'

import { cn } from '@/src/lib/utils'

const gapMap: Record<GapSize, string> = {
  '2xl': 'gap-12',
  lg: 'gap-6',
  md: 'gap-4',
  sm: 'gap-2',
  xl: 'gap-8',
  xs: 'gap-1'
}

export type FlexProps = PropsWithChildren<FlexContainerProps> & {
  className?: string
}

export function Flex({
  children,
  className,
  direction = 'row',
  gap,
  ...flexProps
}: FlexProps) {
  const tailwindPropMap: Dictionary<string> = {
    alignContent: 'content',
    alignItems: 'items',
    alignSelf: 'self',
    justifyContent: 'justify',
    justifyItems: 'justify-items',
    justifySelf: 'justify-self',
    placeContent: 'place-content',
    placeItems: 'place-items',
    placeSelf: 'place-self'
  }

  const tailwindClasses = []
  for (const [flexProp, value] of Object.entries(flexProps)) {
    const utilityNamespace = tailwindPropMap[flexProp]
    tailwindClasses.push(`${utilityNamespace}-${value}`)
  }

  const gapClass = gap ? gapMap[gap] : undefined

  return (
    <div
      className={cn(
        'flex',
        `flex-${direction}`,
        'flex-wrap',
        gapClass,
        tailwindClasses,
        className
      )}>
      {children}
    </div>
  )
}

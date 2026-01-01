import { cn } from '@/lib/utils'
import { Dictionary } from '@/types/shared/helpers'
import { ReactNode } from 'react'

type FlexPosition =
  | 'start'
  | 'flex-start'
  | 'end'
  | 'flex-end'
  | 'center'
  | 'around'
  | 'between'
  | 'evenly'
  | 'initial'

type GapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface FlexProps {
  direction?: 'row' | 'col'
  gap?: GapSize
  className?: string
  children?: ReactNode
  justifyContent?: FlexPosition
  justifyItems?: FlexPosition
  justifySelf?: FlexPosition
  alignContent?: FlexPosition
  alignItems?: FlexPosition
  alignSelf?: FlexPosition
  placeContent?: FlexPosition
  placeItems?: FlexPosition
  placeSelf?: FlexPosition
}

const gapMap: Record<GapSize, string> = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12'
}

export function Flex({
  direction = 'row',
  gap,
  className,
  children,
  ...flexProps
}: FlexProps) {
  const tailwindPropMap: Dictionary<string> = {
    justifyContent: 'justify',
    justifyItems: 'justify-items',
    justifySelf: 'justify-self',
    alignContent: 'content',
    alignItems: 'items',
    alignSelf: 'self',
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

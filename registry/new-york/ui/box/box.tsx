import type { ElementType } from 'react'

import type { DisplayValue, PolymorphicBoxProps } from '@/src/types/shared/box'

import {
  getSizingClasses,
  getVisualClasses,
  processSpacingProp
} from '@/src/lib/utils'
import { cn } from '@/src/lib/utils'

const displayMap: Record<DisplayValue, string> = {
  block: 'block',
  flex: 'flex',
  grid: 'grid',
  inline: 'inline',
  'inline-block': 'inline-block',
  none: 'hidden'
}

/**
 * Box - A flexible container component with semantic spacing and styling props
 *
 * @example
 * // Basic usage
 * <Box p="md" bg="card" rounded="lg">
 *   <p>Content</p>
 * </Box>
 *
 * @example
 * // Responsive spacing
 * <Box px={{ base: 'sm', md: 'lg', xl: '2xl' }}>
 *   <p>Responsive padding</p>
 * </Box>
 *
 * @example
 * // Polymorphic rendering
 * <Box as="section" py="xl">
 *   <h2>Section content</h2>
 * </Box>
 *
 * @example
 * // Centering pattern
 * <Box width="full" maxWidth="4xl" mx="auto">
 *   <p>Centered content</p>
 * </Box>
 */
export function Box<T extends ElementType = 'div'>({
  // Spacing props
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,

  // Sizing props
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,

  // Visual props
  bg,
  border,
  rounded,
  shadow,

  // Layout
  display,

  // Polymorphic
  as,

  // Standard props
  children,
  className,
  ...restProps
}: PolymorphicBoxProps<T>) {
  const Component = as || 'div'

  // Process spacing props
  const spacingClasses = [
    processSpacingProp('p', p),
    processSpacingProp('px', px),
    processSpacingProp('py', py),
    processSpacingProp('pt', pt),
    processSpacingProp('pb', pb),
    processSpacingProp('pl', pl),
    processSpacingProp('pr', pr),
    processSpacingProp('m', m),
    processSpacingProp('mx', mx),
    processSpacingProp('my', my),
    processSpacingProp('mt', mt),
    processSpacingProp('mb', mb),
    processSpacingProp('ml', ml),
    processSpacingProp('mr', mr)
  ].filter(Boolean)

  // Process visual props
  const visualClasses = getVisualClasses({ bg, border, rounded, shadow })

  // Process display
  const displayClass = display ? displayMap[display] : undefined

  // Process sizing props (prepend utility namespace)
  const sizingClasses = getSizingClasses({
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width
  })

  return (
    <Component
      className={cn(
        displayClass,
        spacingClasses,
        visualClasses,
        sizingClasses,
        className
      )}
      {...restProps}>
      {children}
    </Component>
  )
}

import { cn } from '@/lib/utils'
import {
  getVisualClasses,
  processSpacingProp,
  getSizingClasses
} from '@/lib/box-utils'
import type { ElementType } from 'react'
import type { DisplayValue, PolymorphicBoxProps } from '@/types/shared/box'

const displayMap: Record<DisplayValue, string> = {
  flex: 'flex',
  grid: 'grid',
  block: 'block',
  'inline-block': 'inline-block',
  inline: 'inline',
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
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,

  // Sizing props
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,

  // Visual props
  bg,
  rounded,
  shadow,
  border,

  // Layout
  display,

  // Polymorphic
  as,

  // Standard props
  className,
  children,
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
  const visualClasses = getVisualClasses({ bg, rounded, shadow, border })

  // Process display
  const displayClass = display ? displayMap[display] : undefined

  // Process sizing props (prepend utility namespace)
  const sizingClasses = getSizingClasses({
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
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

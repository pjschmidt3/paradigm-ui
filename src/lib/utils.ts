import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import type {
  BackgroundColor,
  BorderSize,
  ResponsiveBreakpoint,
  ResponsiveValue,
  RoundedSize,
  ShadowSize,
  SpacingSize,
  SpacingValue
} from '@/src/types/shared/box.ts'

// Spacing scale mapping (matching Flex component's gap scale)
const spacingMap: Record<SpacingSize, number> = {
  '2xl': 12, // 3rem (48px)
  lg: 6, // 1.5rem (24px)
  md: 4, // 1rem (16px)
  sm: 2, // 0.5rem (8px)
  xl: 8, // 2rem (32px)
  xs: 1 // 0.25rem (4px)
}

// Visual property maps
const shadowMap: Record<ShadowSize, string> = {
  '2xl': 'shadow-2xl',
  lg: 'shadow-lg',
  md: 'shadow-md',
  none: 'shadow-none',
  sm: 'shadow-sm',
  xl: 'shadow-xl'
}

const roundedMap: Record<RoundedSize, string> = {
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
  lg: 'rounded-lg',
  md: 'rounded-md',
  none: 'rounded-none',
  sm: 'rounded-sm',
  xl: 'rounded-xl'
}

const borderMap: Record<BorderSize, string> = {
  '2': 'border-2',
  '4': 'border-4',
  '8': 'border-8',
  base: 'border',
  none: 'border-0'
}

const backgroundMap: Record<BackgroundColor, string> = {
  accent: 'bg-accent',
  background: 'bg-background',
  card: 'bg-card',
  destructive: 'bg-destructive',
  foreground: 'bg-foreground',
  muted: 'bg-muted',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  transparent: 'bg-transparent'
}

interface ResponsiveClassConfig<T> {
  classBuilder: (val: T, breakpoint?: ResponsiveBreakpoint) => string
  value: ResponsiveValue<T>
}

/**
 * Transforms a responsive value into Tailwind responsive classes
 *
 * @example
 * getResponsiveClasses({
 *   value: { base: 'sm', md: 'lg' },
 *   classBuilder: (val, bp) => bp ? `${bp}:px-${spacingMap[val]}` : `px-${spacingMap[val]}`
 * })
 * // Returns: 'px-2 md:px-6'
 */
export function getResponsiveClasses<T>(
  config: ResponsiveClassConfig<T>
): string {
  const { classBuilder, value } = config

  // Handle primitive value (non-responsive)
  if (typeof value !== 'object' || value === null) {
    return classBuilder(value as T)
  }

  // Handle responsive object
  const responsiveObj = value as Partial<Record<ResponsiveBreakpoint, T>>
  const classes: string[] = []

  // Order matters: base first, then breakpoints in ascending order
  const breakpointOrder: ResponsiveBreakpoint[] = [
    'base',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl'
  ]

  for (const breakpoint of breakpointOrder) {
    const val = responsiveObj[breakpoint]
    if (val !== undefined) {
      if (breakpoint === 'base') {
        classes.push(classBuilder(val))
      } else {
        classes.push(classBuilder(val, breakpoint))
      }
    }
  }

  return classes.join(' ')
}

/**
 * Type guard to check if a value is a responsive object
 */
export function isResponsiveValue<T>(
  value: ResponsiveValue<T>
): value is Partial<Record<ResponsiveBreakpoint, T>> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

type SizingProperty = 'h' | 'max-h' | 'max-w' | 'min-h' | 'min-w' | 'w'

/**
 * Builds a Tailwind sizing class by prepending the property namespace
 * Numbers are converted to arbitrary pixel values
 *
 * @example
 * buildSizingClass('w', 'full') // Returns: 'w-full'
 * buildSizingClass('max-w', '4xl') // Returns: 'max-w-4xl'
 * buildSizingClass('h', 300) // Returns: 'h-[300px]'
 */
export function buildSizingClass(
  property: SizingProperty,
  value: number | string
): string {
  // If number, use arbitrary value with px
  if (typeof value === 'number') {
    return `${property}-[${value}px]`
  }

  return `${property}-${value}`
}

/**
 * Processes sizing props and returns Tailwind classes with proper namespaces
 * Accepts string values (Tailwind tokens) or numbers (converted to pixels)
 */
export function getSizingClasses(props: {
  height?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  width?: number | string
}): string[] {
  const classes: string[] = []

  if (props.width) classes.push(buildSizingClass('w', props.width))
  if (props.height) classes.push(buildSizingClass('h', props.height))
  if (props.minWidth) classes.push(buildSizingClass('min-w', props.minWidth))
  if (props.maxWidth) classes.push(buildSizingClass('max-w', props.maxWidth))
  if (props.minHeight) classes.push(buildSizingClass('min-h', props.minHeight))
  if (props.maxHeight) classes.push(buildSizingClass('max-h', props.maxHeight))

  return classes
}

/**
 * Maps visual props to Tailwind classes
 */
export function getVisualClasses(props: {
  bg?: BackgroundColor
  border?: BorderSize
  rounded?: RoundedSize
  shadow?: ShadowSize
}): string[] {
  const classes: string[] = []

  if (props.bg) classes.push(backgroundMap[props.bg])
  if (props.rounded) classes.push(roundedMap[props.rounded])
  if (props.shadow) classes.push(shadowMap[props.shadow])
  if (props.border) classes.push(borderMap[props.border])

  return classes
}

type SpacingProperty =
  | 'm'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mx'
  | 'my'
  | 'p'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'px'
  | 'py'

/**
 * Builds a Tailwind spacing class from a spacing value
 * Handles SpacingSize (xs, sm, md, lg, xl, 2xl) and 'auto' for margins
 *
 * @example
 * buildSpacingClass('p', 'md') // Returns: 'p-4'
 * buildSpacingClass('mx', 'auto') // Returns: 'mx-auto'
 * buildSpacingClass('px', 'lg', 'md') // Returns: 'md:px-6'
 */
export function buildSpacingClass(
  property: SpacingProperty,
  value: SpacingValue,
  breakpoint?: ResponsiveBreakpoint
): string {
  const prefix = breakpoint && breakpoint !== 'base' ? `${breakpoint}:` : ''

  // Handle 'auto' (only valid for margins)
  if (value === 'auto') {
    return `${prefix}${property}-auto`
  }

  // Map SpacingSize to Tailwind spacing scale
  const spacingValue = spacingMap[value]
  return `${prefix}${property}-${spacingValue}`
}

/**
 * Processes a spacing prop and returns Tailwind classes with responsive support
 * Supports both padding (p, px, py, pt, pr, pb, pl) and margin (m, mx, my, mt, mr, mb, ml)
 *
 * @example
 * processSpacingProp('p', 'md') // Returns: 'p-4'
 * processSpacingProp('px', { base: 'sm', md: 'lg' }) // Returns: 'px-2 md:px-6'
 * processSpacingProp('mx', 'auto') // Returns: 'mx-auto'
 * processSpacingProp('m', { base: 'md', lg: 'auto' }) // Returns: 'm-4 lg:m-auto'
 */
export function processSpacingProp(
  property: SpacingProperty,
  value: ResponsiveValue<SpacingValue> | undefined
): string {
  if (!value) return ''

  return getResponsiveClasses({
    classBuilder: (val: SpacingValue, breakpoint?: ResponsiveBreakpoint) =>
      buildSpacingClass(property, val, breakpoint),
    value
  })
}

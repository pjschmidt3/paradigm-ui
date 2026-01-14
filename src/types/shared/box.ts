import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import type { SpacingSize } from 'src/types/shared/helpers'

// Re-export SpacingSize from helpers for backward compatibility
export type { SpacingSize } from 'src/types/shared/helpers'

// Responsive breakpoints (matching Tailwind defaults)
export type ResponsiveBreakpoint = '2xl' | 'base' | 'lg' | 'md' | 'sm' | 'xl'

// Responsive value - either a single value or object with breakpoints
export type ResponsiveValue<T> = Partial<Record<ResponsiveBreakpoint, T>> | T

// Special spacing values (auto for margins)
export type SpacingValue = 'auto' | SpacingSize

// Display values
export type DisplayValue =
  | 'block'
  | 'flex'
  | 'grid'
  | 'inline'
  | 'inline-block'
  | 'none'

// Visual property values
export type ShadowSize = '2xl' | 'lg' | 'md' | 'none' | 'sm' | 'xl'
export type RoundedSize =
  | '2xl'
  | '3xl'
  | 'full'
  | 'lg'
  | 'md'
  | 'none'
  | 'sm'
  | 'xl'
export type BorderSize = '2' | '4' | '8' | 'base' | 'none'

// Background colors - using Tailwind semantic tokens
export type BackgroundColor =
  | 'accent'
  | 'background'
  | 'card'
  | 'destructive'
  | 'foreground'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'transparent'

export interface BoxProps {
  // Spacing props with responsive support
  p?: ResponsiveValue<SpacingSize>
  pb?: ResponsiveValue<SpacingSize>
  pl?: ResponsiveValue<SpacingSize>
  pr?: ResponsiveValue<SpacingSize>
  pt?: ResponsiveValue<SpacingSize>
  px?: ResponsiveValue<SpacingSize>
  py?: ResponsiveValue<SpacingSize>

  m?: ResponsiveValue<SpacingValue>
  mb?: ResponsiveValue<SpacingValue>
  ml?: ResponsiveValue<SpacingValue>
  mr?: ResponsiveValue<SpacingValue>
  mt?: ResponsiveValue<SpacingValue>
  mx?: ResponsiveValue<SpacingValue>
  my?: ResponsiveValue<SpacingValue>

  height?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  minWidth?: number | string
  // Sizing props - accepts Tailwind size values or numbers (for pixels)
  // String examples: "full", "screen", "auto", "1/2", "96", "4xl", etc.
  // Number examples: 300 (becomes h-[300px]), 500 (becomes w-[500px])
  // These will be automatically prefixed with w-, h-, min-w-, max-w-, etc.
  width?: number | string

  // Visual props
  bg?: BackgroundColor
  border?: BorderSize
  rounded?: RoundedSize
  shadow?: ShadowSize

  // Layout
  display?: DisplayValue

  children?: ReactNode
  // Standard React props
  className?: string
}

// Polymorphic component type
export type PolymorphicBoxProps<T extends ElementType> = BoxProps
  & Omit<ComponentPropsWithoutRef<T>, keyof BoxProps> & {
    as?: T
  }

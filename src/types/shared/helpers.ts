import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren
} from 'react'

import { DataType, Property } from 'csstype'

import FlexGrow = Property.FlexGrow
import FlexShrink = Property.FlexShrink
import FlexWrap = Property.FlexWrap
import JustifyContent = Property.JustifyContent
import JustifyItems = Property.JustifyItems
import JustifySelf = Property.JustifySelf
import AlignContent = Property.AlignContent
import AlignItems = Property.AlignItems
import AlignSelf = Property.AlignSelf
import PlaceContent = Property.PlaceContent
import PlaceItems = Property.PlaceItems
import PlaceSelf = Property.PlaceSelf
import ContentDistribution = DataType.ContentDistribution
import ContentPosition = DataType.ContentPosition

// ============================================================================
// Sizing Types - Shared across all paradigm-ui components
// ============================================================================

/**
 * Base size scale used for spacing, gaps, and smaller components
 * Maps to Tailwind spacing scale (1, 2, 4, 6, 8, 12)
 */
export type BaseSize = '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs'

/**
 * Extended size scale for components that need larger sizes
 * Includes all base sizes plus 3xl and 4xl
 */
export type ComponentSize = '3xl' | '4xl' | BaseSize

/**
 * Gap size - used for flex gap, grid gap, and other spacing between elements
 * Alias for BaseSize for semantic clarity
 */
export type GapSize = BaseSize

/**
 * Spacing size - used for padding and margin values
 * Alias for BaseSize for semantic clarity
 */
export type SpacingSize = BaseSize

export type FlexAlignment =
  | 'left'
  | 'right'
  | ContentDistribution
  | ContentPosition

export type FlexDirection = 'col' | 'row'
// ============================================================================
// Flex Props
// ============================================================================

export type FlexContainerProps = PropsWithChildren<{
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  direction?: FlexDirection
  flex?: boolean
  gap?: GapSize
  justifyContent?: JustifyContent
  justifyItems?: JustifyItems
  justifySelf?: JustifySelf
  placeContent?: PlaceContent
  placeItems?: PlaceItems
  placeSelf?: PlaceSelf
  wrap?: FlexWrap
}>

export type FlexItemProps = {
  grow?: FlexGrow
  shrink?: FlexShrink
}

export type FlexProps = FlexContainerProps & FlexItemProps

// ============================================================================
// Polymorphic Component Types
// ============================================================================

export type WithRenderer<T extends ElementType> = {
  as?: T
}

export type PropsWithRenderer<T extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<T> & WithRenderer<T>
>

// ============================================================================
// Utility Types
// ============================================================================

export interface Dictionary<T> {
  [key: string]: T
}

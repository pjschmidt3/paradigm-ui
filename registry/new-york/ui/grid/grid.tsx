import { ReactNode } from 'react'

import { Dictionary, GapSize } from '@/src/types/shared/helpers'

import { buildSizingClass, cn } from '@/src/lib/utils'

type GridPosition = 'baseline' | 'center' | 'end' | 'start' | 'stretch'

type GridContent =
  | 'around'
  | 'between'
  | 'center'
  | 'end'
  | 'evenly'
  | 'start'
  | 'stretch'

type GridFlow = 'col' | 'col-dense' | 'dense' | 'row' | 'row-dense'

type GridAutoValue = 'auto' | 'fr' | 'max' | 'min'

type GridColsValue =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'none'
  | 'subgrid'

type GridRowsValue = 1 | 2 | 3 | 4 | 5 | 6 | 'none' | 'subgrid'

interface GridProps {
  alignContent?: GridContent
  alignItems?: GridPosition
  autoColumns?: GridAutoValue
  autoFlow?: GridFlow
  autoRows?: GridAutoValue
  children?: ReactNode
  className?: string
  cols?: GridColsValue
  gap?: GapSize
  gapX?: GapSize
  gapY?: GapSize
  height?: number | string
  justifyContent?: GridContent
  justifyItems?: GridPosition
  placeContent?: GridContent
  placeItems?: GridPosition
  rows?: GridRowsValue
  width?: number | string
}

const gapMap: Record<GapSize, string> = {
  '2xl': 'gap-12',
  lg: 'gap-6',
  md: 'gap-4',
  sm: 'gap-2',
  xl: 'gap-8',
  xs: 'gap-1'
}

const gapXMap: Record<GapSize, string> = {
  '2xl': 'gap-x-12',
  lg: 'gap-x-6',
  md: 'gap-x-4',
  sm: 'gap-x-2',
  xl: 'gap-x-8',
  xs: 'gap-x-1'
}

const gapYMap: Record<GapSize, string> = {
  '2xl': 'gap-y-12',
  lg: 'gap-y-6',
  md: 'gap-y-4',
  sm: 'gap-y-2',
  xl: 'gap-y-8',
  xs: 'gap-y-1'
}

const gridFlowMap: Record<GridFlow, string> = {
  col: 'grid-flow-col',
  'col-dense': 'grid-flow-col-dense',
  dense: 'grid-flow-dense',
  row: 'grid-flow-row',
  'row-dense': 'grid-flow-row-dense'
}

const autoColumnsMap: Record<GridAutoValue, string> = {
  auto: 'auto-cols-auto',
  fr: 'auto-cols-fr',
  max: 'auto-cols-max',
  min: 'auto-cols-min'
}

const autoRowsMap: Record<GridAutoValue, string> = {
  auto: 'auto-rows-auto',
  fr: 'auto-rows-fr',
  max: 'auto-rows-max',
  min: 'auto-rows-min'
}

export function Grid({
  autoColumns,
  autoFlow,
  autoRows,
  children,
  className,
  cols,
  gap,
  gapX,
  gapY,
  height,
  rows,
  width,
  ...gridProps
}: GridProps) {
  const tailwindPropMap: Dictionary<string> = {
    alignContent: 'content',
    alignItems: 'items',
    justifyContent: 'justify',
    justifyItems: 'justify-items',
    placeContent: 'place-content',
    placeItems: 'place-items'
  }

  const tailwindClasses = []
  for (const [gridProp, value] of Object.entries(gridProps)) {
    const utilityNamespace = tailwindPropMap[gridProp]
    if (utilityNamespace) {
      tailwindClasses.push(`${utilityNamespace}-${value}`)
    }
  }

  const colsClass = cols ? `grid-cols-${cols}` : undefined
  const rowsClass = rows ? `grid-rows-${rows}` : undefined

  // Gap priority: specific axes (gapX/gapY) take precedence over general gap
  const gapClass = gap && !gapX && !gapY ? gapMap[gap] : undefined
  const gapXClass = gapX ? gapXMap[gapX] : undefined
  const gapYClass = gapY ? gapYMap[gapY] : undefined

  const flowClass = autoFlow ? gridFlowMap[autoFlow] : undefined
  const autoColsClass = autoColumns ? autoColumnsMap[autoColumns] : undefined
  const autoRowsClass = autoRows ? autoRowsMap[autoRows] : undefined

  // Handle sizing
  const widthClass = width ? buildSizingClass('w', width) : undefined
  const heightClass = height ? buildSizingClass('h', height) : undefined

  return (
    <div
      className={cn(
        'grid',
        colsClass,
        rowsClass,
        gapClass,
        gapXClass,
        gapYClass,
        flowClass,
        autoColsClass,
        autoRowsClass,
        widthClass,
        heightClass,
        tailwindClasses,
        className
      )}>
      {children}
    </div>
  )
}

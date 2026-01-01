import { Flex } from 'paradigm-ui/registry/new-york/ui/flex'
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

interface FlexColProps {
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

export function FlexCol({ className, children, ...flexProps }: FlexColProps) {
  return (
    <Flex
      direction="col"
      className={className}
      {...flexProps}>
      {children}
    </Flex>
  )
}

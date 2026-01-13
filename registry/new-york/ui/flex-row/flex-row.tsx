import { PropsWithChildren } from 'react'

import { FlexContainerProps } from '@/src/types/shared/helpers'

import { Flex } from '../flex'

type FlexRowProps = PropsWithChildren<FlexContainerProps> & {
  className?: string
}

export function FlexRow({ children, className, ...flexProps }: FlexRowProps) {
  return (
    <Flex
      className={className}
      direction="row"
      {...flexProps}>
      {children}
    </Flex>
  )
}

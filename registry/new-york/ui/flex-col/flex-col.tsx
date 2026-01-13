import { PropsWithChildren } from 'react'

import { FlexContainerProps } from '@/src/types/shared/helpers'

import { Flex } from '../flex'

type FlexColProps = PropsWithChildren<FlexContainerProps> & {
  className?: string
}

export function FlexCol({ children, className, ...flexProps }: FlexColProps) {
  return (
    <Flex
      className={className}
      direction="col"
      {...flexProps}>
      {children}
    </Flex>
  )
}

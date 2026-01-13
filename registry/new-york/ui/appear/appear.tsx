'use client'

import { ElementType } from 'react'

import { stagger, Variants } from 'motion/react'
import * as motion from 'motion/react-client'

import { PropsWithRenderer } from '@/src/types/shared/helpers'

type AppearProps<T extends ElementType> = {
  duration?: number
} & PropsWithRenderer<T>

export function Appear<T extends ElementType>({
  as,
  duration,
  ...props
}: AppearProps<T>) {
  const appearVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.2),
        duration,
        ease: 'easeOut' as const
      },
      y: 0
    }
  }
  const Component = as || motion.div

  return (
    <Component
      animate="visible"
      initial="hidden"
      variants={appearVariants}
      {...props}
    />
  )
}

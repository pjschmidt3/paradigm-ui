'use client'

import { PropsWithRenderer } from '@/types/shared/helpers'
import * as motion from 'motion/react-client'
import { stagger, Variants } from 'motion/react'
import { ElementType } from 'react'

type AppearProps<T extends ElementType> = {
  duration?: number
} & PropsWithRenderer<T>

export function Appear<T extends ElementType>({
  duration,
  as,
  ...props
}: AppearProps<T>) {
  const appearVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delayChildren: stagger(0.2),
        ease: 'easeOut' as const
      }
    }
  }
  const Component = as || motion.div

  return (
    <Component
      variants={appearVariants}
      initial="hidden"
      animate="visible"
      {...props}
    />
  )
}

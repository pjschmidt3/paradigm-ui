import { ReactNode } from 'react'

import { cn } from '@/src/lib/utils'
export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
  className?: string
}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn('font-mono text-lg font-light', className)}
      {...props}>
      {children}
    </p>
  )
}

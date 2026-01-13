import type { ReactNode } from 'react'

import { cn } from '@/src/lib/utils'

import { Heading } from '../heading'
import { Paragraph } from '../paragraph'
import { SocialLinks, SocialsProps } from '../social-links'

export interface HeroProps {
  className?: string
  description?: ReactNode | string
  descriptionClassName?: string
  heading?: ReactNode | string
  headingClassName?: string
  socialLinks?: SocialsProps
  subheading?: ReactNode | string
  subheadingClassName?: string
}

export function Hero({
  className,
  description,
  descriptionClassName,
  heading,
  headingClassName,
  socialLinks,
  subheading,
  subheadingClassName
}: HeroProps) {
  return (
    <div className={cn('flex-col space-y-5 text-center', className)}>
      {heading && (
        <Heading
          className={cn('text-4xl md:text-6xl', headingClassName)}
          level={1}>
          {heading}
        </Heading>
      )}
      {subheading && (
        <Heading
          className={cn('text-3xl md:text-4xl', subheadingClassName)}
          level={2}>
          {subheading}
        </Heading>
      )}

      {description && (
        <Paragraph
          className={cn('mt-8 mb-16 text-lg md:text-xl', descriptionClassName)}>
          {description}
        </Paragraph>
      )}

      {socialLinks && (
        <SocialLinks
          className={cn('mx-auto w-full max-w-2/3', socialLinks.className)}
          size={socialLinks.size || '5xl'}
          {...socialLinks}
        />
      )}
    </div>
  )
}

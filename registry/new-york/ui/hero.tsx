import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { Heading } from '@/paradigm-ui/registry/new-york/ui/heading'
import { Paragraph } from '@/paradigm-ui/registry/new-york/ui/paragraph'
import {
  SocialLinks,
  SocialsProps
} from '@/paradigm-ui/registry/new-york/ui/social-links'

export interface HeroProps {
  heading: string | ReactNode
  subheading?: string | ReactNode
  description?: string | ReactNode
  headingClassName?: string
  subheadingClassName?: string
  descriptionClassName?: string
  socialLinks?: SocialsProps
  className?: string
}

export function Hero({
  heading,
  subheading,
  description,
  headingClassName,
  subheadingClassName,
  descriptionClassName,
  socialLinks,
  className
}: HeroProps) {
  return (
    <div className={cn('flex-col space-y-5 text-center', className)}>
      {heading && (
        <Heading
          level={1}
          className={cn('text-4xl md:text-6xl', headingClassName)}>
          {heading}
        </Heading>
      )}
      {subheading && (
        <Heading
          level={2}
          className={cn('text-3xl md:text-4xl', subheadingClassName)}>
          {subheading}
        </Heading>
      )}

      {description && (
        <Paragraph
          className={cn('mb-16 mt-8 text-lg md:text-xl', descriptionClassName)}>
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

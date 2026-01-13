'use client'

import { ComponentType } from 'react'
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaTwitter,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6'

import { motion, Variants } from 'motion/react'

import { cn } from '@/src/lib/utils'

type fontSize =
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xl'
  | 'xs'

export interface SocialsProps {
  as?: ComponentType<{
    href?: string
  }>
  className?: string
  discord?: string
  facebook?: string
  github?: string
  instagram?: string
  linkedIn?: string
  size?: fontSize
  twitter?: string
  x?: string
  youtube?: string
}

export function SocialLinks({
  as,
  className,
  discord,
  facebook,
  github,
  instagram,
  linkedIn,
  size = 'lg',
  twitter,
  x,
  youtube
}: SocialsProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 }, // Start in final position for LCP
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Shorter for perceived speed
        ease: 'easeOut' as const
      },
      y: 0
    }
  }
  return (
    <motion.div
      animate="visible"
      className={cn(
        'flex flex-col justify-center space-y-12 space-x-12 md:flex-row',
        className
      )}
      initial="hidden"
      variants={itemVariants}>
      {facebook && (
        <SocialLink
          aria-label="Facebook Page"
          as={as}
          size={size}
          type="facebook"
          url={facebook}
        />
      )}
      {youtube && (
        <SocialLink
          aria-label="Youtube Account"
          as={as}
          size={size}
          type="youtube"
          url={youtube}
        />
      )}
      {instagram && (
        <SocialLink
          aria-label="Instagram"
          as={as}
          size={size}
          type="instagram"
          url={instagram}
        />
      )}
      {github && (
        <SocialLink
          aria-label="Github"
          as={as}
          size={size}
          type="github"
          url={github}
        />
      )}
      {linkedIn && (
        <SocialLink
          aria-label="LinkedIn"
          as={as}
          size={size}
          type="linkedIn"
          url={linkedIn}
        />
      )}
      {twitter && (
        <SocialLink
          aria-label="Twitter"
          as={as}
          size={size}
          type="twitter"
          url={twitter}
        />
      )}
      {x && (
        <SocialLink
          aria-label="X.com"
          as={as}
          size={size}
          type="x"
          url={x}
        />
      )}
      {discord && (
        <SocialLink
          aria-label="Discord"
          as={as}
          size={size}
          type="discord"
          url={discord}
        />
      )}
    </motion.div>
  )
}

type socialType =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedIn'
  | 'twitter'
  | 'x'
  | 'youtube'

const socialTypeMap = {
  discord: FaDiscord,
  facebook: FaFacebook,
  github: FaGithub,
  instagram: FaSquareInstagram,
  linkedIn: FaLinkedin,
  twitter: FaTwitter,
  x: FaXTwitter,
  youtube: FaYoutube
}

interface SocialLinkProps {
  as?: ComponentType<{
    href?: string
  }>
  size?: fontSize
  type: socialType
  url?: string
}

export function SocialLink({ as, size, type, url, ...props }: SocialLinkProps) {
  const Icon = socialTypeMap[type]

  const LinkComponent = as || 'a'

  return (
    <LinkComponent href={url}>
      <motion.div
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.95 }}>
        <Icon
          {...props}
          className={`text-${size}`}
        />
      </motion.div>
    </LinkComponent>
  )
}

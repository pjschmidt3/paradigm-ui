import * as React from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/src/lib/utils'

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'size-6',
        sm: 'size-7',
        default: 'size-8',
        lg: 'size-10',
        xl: 'size-12'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

const avatarStatusVariants = cva(
  'absolute bottom-0 right-0 rounded-full border-2 border-background',
  {
    variants: {
      status: {
        online: 'bg-green-500',
        offline: 'bg-gray-400',
        away: 'bg-yellow-500',
        busy: 'bg-red-500'
      },
      size: {
        xs: 'size-1.5',
        sm: 'size-2',
        default: 'size-2.5',
        lg: 'size-3',
        xl: 'size-3.5'
      }
    },
    defaultVariants: {
      status: 'offline',
      size: 'default'
    }
  }
)

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>

function Avatar({ className, size, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarVariants({ size }), className)}
      data-size={size ?? 'default'}
      data-slot="avatar"
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn('aspect-square size-full', className)}
      data-slot="avatar-image"
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  )
}

type AvatarStatusProps = React.ComponentProps<'span'> &
  VariantProps<typeof avatarStatusVariants>

function AvatarStatus({ className, status, size, ...props }: AvatarStatusProps) {
  return (
    <span
      className={cn(avatarStatusVariants({ status, size }), className)}
      data-slot="avatar-status"
      data-status={status ?? 'offline'}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarImage, AvatarStatus, avatarVariants, avatarStatusVariants }

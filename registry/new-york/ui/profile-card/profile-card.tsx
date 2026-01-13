import type { ReactNode } from 'react'

import { cn } from '@/src/lib/utils'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/src/components/ui/avatar'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/src/components/ui/card'

export interface ProfileCardProps {
  /** URL of the avatar image */
  avatar?: string
  /** Optional biographical text */
  bio?: string
  /** Additional CSS classes */
  className?: string
  /** Full name of the person */
  name: string
  /** Actions to display in the footer (e.g., buttons) */
  actions?: ReactNode
  /** Job title or role */
  title?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function ProfileCard({
  avatar,
  bio,
  className,
  name,
  actions,
  title
}: ProfileCardProps) {
  return (
    <Card className={cn('text-center', className)}>
      <CardHeader className="flex flex-col items-center gap-4">
        <Avatar size="xl">
          {avatar && <AvatarImage alt={name} src={avatar} />}
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          {title && (
            <p className="text-muted-foreground text-sm">{title}</p>
          )}
        </div>
      </CardHeader>
      {bio && (
        <CardContent>
          <p className="text-muted-foreground text-sm">{bio}</p>
        </CardContent>
      )}
      {actions && (
        <CardFooter className="justify-center gap-2">
          {actions}
        </CardFooter>
      )}
    </Card>
  )
}

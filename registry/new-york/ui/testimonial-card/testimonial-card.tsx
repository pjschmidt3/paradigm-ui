import { Star } from 'lucide-react'

import { cn } from '@/src/lib/utils'

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/src/components/ui/avatar'
import { Card, CardContent, CardFooter } from '@/src/components/ui/card'

export interface TestimonialCardProps {
  /** Author name */
  author: string
  /** Optional avatar URL */
  avatar?: string
  /** Additional CSS classes */
  className?: string
  /** The testimonial quote text */
  quote: string
  /** Optional rating from 1-5 */
  rating?: 1 | 2 | 3 | 4 | 5
  /** Author's role or title */
  role?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function TestimonialCard({
  author,
  avatar,
  className,
  quote,
  rating,
  role
}: TestimonialCardProps) {
  return (
    <Card className={cn(className)}>
      <CardContent className="pt-6">
        {rating && (
          <div className="mb-4 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                className={cn(
                  'size-4',
                  index < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                )}
                key={index}
              />
            ))}
          </div>
        )}
        <blockquote className="relative">
          <span className="text-muted-foreground/30 absolute -left-2 -top-2 text-4xl font-serif">
            "
          </span>
          <p className="text-foreground pl-4 italic">{quote}</p>
          <span className="text-muted-foreground/30 absolute -bottom-4 right-0 text-4xl font-serif">
            "
          </span>
        </blockquote>
      </CardContent>
      <CardFooter className="gap-3 pt-4">
        <Avatar size="default">
          {avatar && <AvatarImage alt={author} src={avatar} />}
          <AvatarFallback>{getInitials(author)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{author}</span>
          {role && (
            <span className="text-muted-foreground text-xs">{role}</span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

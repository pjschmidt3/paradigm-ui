import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { Badge } from '@/src/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card'
import { cn } from '@/src/lib/utils'

import { LinkButton } from '@registry/link-button'

const projectCardVariants = cva(['relative', 'overflow-hidden'], {
  defaultVariants: {
    featured: false,
    variant: 'default'
  },
  variants: {
    featured: {
      false: '',
      true: 'shadow-lg'
    },
    variant: {
      default: 'flex flex-col',
      horizontal: 'flex flex-col md:flex-row',
      overlay: 'relative'
    }
  }
})

const imageContainerVariants = cva(['overflow-hidden'], {
  defaultVariants: {
    featured: false,
    variant: 'default'
  },
  variants: {
    featured: {
      false: 'aspect-video',
      true: 'aspect-[16/10]'
    },
    variant: {
      default: 'w-full',
      horizontal: 'w-full md:w-2/5 md:shrink-0',
      overlay: 'absolute inset-0'
    }
  }
})

export interface ProjectCardLink {
  /**
   * Link text label
   */
  label: string

  /**
   * URL the link points to
   */
  href: string

  /**
   * Optional icon to display
   */
  icon?: ReactNode
}

export interface ProjectCardImage {
  /**
   * Image source URL
   */
  src: string

  /**
   * Alt text for the image
   */
  alt: string
}

export interface ProjectCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof projectCardVariants> {
  /**
   * Project title
   */
  title: string

  /**
   * Project description
   */
  description?: string

  /**
   * Project image/screenshot
   */
  image?: ProjectCardImage

  /**
   * Tech stack tags
   */
  tags?: string[]

  /**
   * Action links (e.g., Live Demo, GitHub)
   */
  links?: ProjectCardLink[]

  /**
   * Whether this is a featured project (larger image, more shadow)
   */
  featured?: boolean

  /**
   * Layout variant
   * - default: vertical card with image on top
   * - horizontal: image left, content right
   * - overlay: image as background with text overlay
   */
  variant?: 'default' | 'horizontal' | 'overlay'
}

/**
 * ProjectCard - A card component for showcasing portfolio projects
 *
 * @example
 * // Basic usage
 * <ProjectCard
 *   title="My Project"
 *   description="A cool project I built"
 *   image={{ src: "/project.jpg", alt: "Project screenshot" }}
 * />
 *
 * @example
 * // With tech stack and links
 * <ProjectCard
 *   title="E-commerce App"
 *   description="Full-stack shopping platform"
 *   image={{ src: "/ecommerce.jpg", alt: "E-commerce app" }}
 *   tags={["React", "Node.js", "PostgreSQL"]}
 *   links={[
 *     { label: "Live Demo", href: "https://example.com" },
 *     { label: "GitHub", href: "https://github.com/..." }
 *   ]}
 * />
 *
 * @example
 * // Featured horizontal layout
 * <ProjectCard
 *   title="Featured Project"
 *   variant="horizontal"
 *   featured
 *   ...
 * />
 */
export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      description,
      featured = false,
      image,
      links,
      tags,
      title,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const isOverlay = variant === 'overlay'

    return (
      <Card
        className={cn(projectCardVariants({ featured, variant }), className)}
        data-slot="project-card"
        ref={ref}
        {...props}
      >
        {image && (
          <div
            className={cn(
              imageContainerVariants({
                featured,
                variant
              })
            )}
            data-slot="project-card-image"
          >
            <img
              alt={image.alt}
              className={cn(
                'h-full w-full object-cover',
                isOverlay && 'brightness-50'
              )}
              src={image.src}
            />
            {isOverlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            )}
          </div>
        )}

        <div
          className={cn(
            'flex flex-1 flex-col',
            isOverlay && 'relative z-10 justify-end p-6',
            variant === 'horizontal' && 'md:py-0'
          )}
        >
          <CardHeader className={cn(isOverlay && 'px-0 pb-2')}>
            <CardTitle
              className={cn('text-lg', isOverlay && 'text-white')}
              data-slot="project-card-title"
            >
              {title}
            </CardTitle>
            {description && (
              <CardDescription
                className={cn(isOverlay && 'text-gray-200')}
                data-slot="project-card-description"
              >
                {description}
              </CardDescription>
            )}
          </CardHeader>

          {tags && tags.length > 0 && (
            <CardContent className={cn(isOverlay && 'px-0 py-2')}>
              <div
                className="flex flex-wrap gap-2"
                data-slot="project-card-tags"
              >
                {tags.map((tag) => (
                  <Badge
                    className={cn(isOverlay && 'border-white/30 text-white')}
                    key={tag}
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          )}

          {links && links.length > 0 && (
            <CardFooter
              className={cn('gap-2', isOverlay && 'px-0 pt-2')}
              data-slot="project-card-links"
            >
              {links.map((link) => (
                <LinkButton
                  external
                  href={link.href}
                  key={link.href}
                  size="sm"
                  variant={isOverlay ? 'default' : 'outlined'}
                >
                  {link.icon}
                  {link.label}
                </LinkButton>
              ))}
            </CardFooter>
          )}
        </div>
      </Card>
    )
  }
)

ProjectCard.displayName = 'ProjectCard'

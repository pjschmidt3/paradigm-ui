import { cva, type VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'

import { cn } from '@/src/lib/utils'

import { Badge } from '@/src/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card'

import { Button } from '../../ui/button'

const pricingTierVariants = cva(
  ['relative', 'flex', 'flex-col'],
  {
    defaultVariants: {
      popular: false
    },
    variants: {
      popular: {
        false: '',
        true: 'ring-2 ring-primary'
      }
    }
  }
)

export interface PricingTierProps extends VariantProps<typeof pricingTierVariants> {
  /**
   * Tier name (e.g., "Basic", "Pro", "Enterprise")
   */
  name: string

  /**
   * Display price (e.g., "$9", "99", "Free")
   */
  price: string | number

  /**
   * Billing period (e.g., "month", "year")
   */
  period?: string

  /**
   * Short description of the tier
   */
  description?: string

  /**
   * List of features included in this tier
   */
  features: string[]

  /**
   * Call-to-action configuration
   */
  cta: {
    label: string
    href?: string
    onClick?: () => void
  }

  /**
   * Whether this tier is marked as popular/recommended
   */
  popular?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

export function PricingTier({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular = false,
  className
}: PricingTierProps) {
  const handleClick = () => {
    if (cta.onClick) {
      cta.onClick()
    } else if (cta.href) {
      window.location.href = cta.href
    }
  }

  return (
    <Card className={cn(pricingTierVariants({ popular }), className)}>
      {popular && (
        <Badge
          className="absolute -top-2.5 left-1/2 -translate-x-1/2"
          variant="default"
        >
          Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{name}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="text-center">
          <span className="text-4xl font-bold">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          {period && (
            <span className="text-muted-foreground ml-1 text-sm">
              /{period}
            </span>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li className="flex items-start gap-2" key={index}>
              <Check className="text-primary mt-0.5 size-4 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleClick}
          variant={popular ? 'default' : 'outlined'}
        >
          {cta.label}
        </Button>
      </CardFooter>
    </Card>
  )
}

export interface PricingTableProps {
  /**
   * Array of pricing tier configurations
   */
  tiers: PricingTierProps[]

  /**
   * Additional CSS classes
   */
  className?: string
}

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {tiers.map((tier, index) => (
        <PricingTier key={tier.name || index} {...tier} />
      ))}
    </div>
  )
}

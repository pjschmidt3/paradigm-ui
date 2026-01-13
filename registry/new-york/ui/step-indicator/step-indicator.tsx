import { cva, type VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'

import { cn } from '@/src/lib/utils'

/**
 * Represents a single step in the indicator
 */
export interface Step {
  /** Step label */
  label: string
  /** Optional description */
  description?: string
}

const stepVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'shrink-0',
    'rounded-full',
    'text-sm',
    'font-medium',
    'transition-colors'
  ],
  {
    defaultVariants: {
      size: 'md',
      state: 'upcoming'
    },
    variants: {
      size: {
        lg: 'size-10',
        md: 'size-8',
        sm: 'size-6 text-xs'
      },
      state: {
        completed: 'bg-primary text-primary-foreground',
        current: 'border-2 border-primary text-primary ring-4 ring-primary/20',
        upcoming: 'border-2 border-muted text-muted-foreground'
      }
    }
  }
)

export interface StepIndicatorProps extends VariantProps<typeof stepVariants> {
  /** Array of steps to display */
  steps: Step[]

  /**
   * Current step index (0-indexed)
   * @default 0
   */
  currentStep?: number

  /**
   * Orientation of the step indicator
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Visual variant for step display
   * @default 'numbers'
   */
  variant?: 'dots' | 'icons' | 'numbers'

  /** Additional CSS classes */
  className?: string
}

/**
 * StepIndicator - Visual progress indicator for multi-step processes
 *
 * @example
 * // Basic usage with numbers
 * <StepIndicator
 *   steps={[
 *     { label: 'Account' },
 *     { label: 'Details' },
 *     { label: 'Confirm' }
 *   ]}
 *   currentStep={1}
 * />
 *
 * @example
 * // Vertical with descriptions
 * <StepIndicator
 *   orientation="vertical"
 *   steps={[
 *     { label: 'Step 1', description: 'Enter your email' },
 *     { label: 'Step 2', description: 'Choose a password' },
 *     { label: 'Step 3', description: 'Confirm details' }
 *   ]}
 *   currentStep={0}
 * />
 *
 * @example
 * // Dots variant
 * <StepIndicator steps={steps} variant="dots" currentStep={2} />
 *
 * @example
 * // Icons variant (check for completed, number for current)
 * <StepIndicator steps={steps} variant="icons" currentStep={1} />
 */
export function StepIndicator({
  className,
  currentStep = 0,
  orientation = 'horizontal',
  size,
  steps,
  variant = 'numbers'
}: StepIndicatorProps) {
  const getStepState = (index: number): 'completed' | 'current' | 'upcoming' => {
    if (index < currentStep) return 'completed'
    if (index === currentStep) return 'current'
    return 'upcoming'
  }

  const renderStepContent = (index: number, state: 'completed' | 'current' | 'upcoming') => {
    switch (variant) {
      case 'dots':
        return null
      case 'icons':
        if (state === 'completed') return <Check className="size-4" />
        return index + 1
      case 'numbers':
      default:
        return index + 1
    }
  }

  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      className={cn(
        'flex',
        isHorizontal ? 'flex-row items-center' : 'flex-col',
        className
      )}
    >
      {steps.map((step, index) => {
        const state = getStepState(index)
        const isLast = index === steps.length - 1

        return (
          <div
            className={cn(
              'flex',
              isHorizontal
                ? 'flex-1 items-center last:flex-none'
                : 'items-start'
            )}
            key={index}
          >
            {/* Step circle and content */}
            <div
              className={cn(
                'flex',
                isHorizontal ? 'flex-col items-center' : 'flex-row items-start gap-3'
              )}
            >
              {/* Circle */}
              <div className={cn(stepVariants({ size, state }))}>
                {renderStepContent(index, state)}
              </div>

              {/* Label and description */}
              <div
                className={cn(
                  isHorizontal ? 'mt-2 text-center' : '',
                  'min-w-0'
                )}
              >
                <div
                  className={cn(
                    'text-sm font-medium',
                    state === 'upcoming'
                      ? 'text-muted-foreground'
                      : 'text-foreground'
                  )}
                >
                  {step.label}
                </div>
                {step.description && (
                  <div className="text-muted-foreground mt-0.5 text-xs">
                    {step.description}
                  </div>
                )}
              </div>
            </div>

            {/* Connector */}
            {!isLast && (
              <div
                className={cn(
                  isHorizontal
                    ? 'mx-2 h-0.5 flex-1'
                    : 'ml-4 mt-2 mb-2 w-0.5 h-8',
                  state === 'completed' || (state === 'current' && !isHorizontal)
                    ? 'bg-primary'
                    : 'bg-muted border-muted border-dashed',
                  state !== 'completed' && isHorizontal && 'border-t-2 border-dashed bg-transparent'
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export { stepVariants }

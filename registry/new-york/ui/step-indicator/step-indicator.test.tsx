import { render, screen } from '@testing-library/react'

import { StepIndicator, type Step } from './step-indicator'

const basicSteps: Step[] = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' }
]

const stepsWithDescriptions: Step[] = [
  { description: 'Enter your email', label: 'Account' },
  { description: 'Choose a password', label: 'Security' },
  { description: 'Review and submit', label: 'Confirm' }
]

describe('StepIndicator component', () => {
  describe('Basic rendering', () => {
    it('should render all step labels', () => {
      render(<StepIndicator steps={basicSteps} />)
      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })

    it('should render descriptions when provided', () => {
      render(<StepIndicator steps={stepsWithDescriptions} />)
      expect(screen.getByText('Enter your email')).toBeInTheDocument()
      expect(screen.getByText('Choose a password')).toBeInTheDocument()
      expect(screen.getByText('Review and submit')).toBeInTheDocument()
    })

    it('should default to first step (currentStep = 0)', () => {
      const { container } = render(<StepIndicator steps={basicSteps} />)
      // First step should have current state ring class
      const steps = container.querySelectorAll('.rounded-full')
      expect(steps[0]).toHaveClass('ring-4')
    })
  })

  describe('Step states', () => {
    it('should mark steps before currentStep as completed', () => {
      const { container } = render(
        <StepIndicator currentStep={2} steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full.text-sm')
      // Steps 0 and 1 should be completed (primary background)
      expect(stepCircles[0]).toHaveClass('bg-primary')
      expect(stepCircles[1]).toHaveClass('bg-primary')
    })

    it('should mark current step with ring', () => {
      const { container } = render(
        <StepIndicator currentStep={1} steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full.text-sm')
      expect(stepCircles[1]).toHaveClass('ring-4')
    })

    it('should mark steps after currentStep as upcoming', () => {
      const { container } = render(
        <StepIndicator currentStep={0} steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full.text-sm')
      // Steps 1 and 2 should be upcoming (border-muted)
      expect(stepCircles[1]).toHaveClass('border-muted')
      expect(stepCircles[2]).toHaveClass('border-muted')
    })
  })

  describe('Variants', () => {
    it('should show numbers by default', () => {
      render(<StepIndicator steps={basicSteps} variant="numbers" />)
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })

    it('should show checkmark for completed steps with icons variant', () => {
      const { container } = render(
        <StepIndicator currentStep={2} steps={basicSteps} variant="icons" />
      )
      // Should have check icons for completed steps
      const svgs = container.querySelectorAll('svg')
      expect(svgs.length).toBe(2) // 2 completed steps have check icons
    })

    it('should show empty circles with dots variant', () => {
      const { container } = render(
        <StepIndicator steps={basicSteps} variant="dots" />
      )
      // With dots variant, there should be no text inside circles
      expect(screen.queryByText('1')).not.toBeInTheDocument()
      expect(screen.queryByText('2')).not.toBeInTheDocument()
      expect(screen.queryByText('3')).not.toBeInTheDocument()
    })
  })

  describe('Orientation', () => {
    it('should default to horizontal orientation', () => {
      const { container } = render(<StepIndicator steps={basicSteps} />)
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('flex-row')
    })

    it('should apply vertical orientation', () => {
      const { container } = render(
        <StepIndicator orientation="vertical" steps={basicSteps} />
      )
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('flex-col')
    })
  })

  describe('Edge cases', () => {
    it('should handle single step', () => {
      render(<StepIndicator steps={[{ label: 'Only Step' }]} />)
      expect(screen.getByText('Only Step')).toBeInTheDocument()
    })

    it('should handle currentStep at last position', () => {
      const { container } = render(
        <StepIndicator currentStep={2} steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full.text-sm')
      expect(stepCircles[2]).toHaveClass('ring-4')
    })

    it('should handle empty descriptions', () => {
      render(
        <StepIndicator
          steps={[
            { label: 'Step 1' },
            { description: 'Has description', label: 'Step 2' }
          ]}
        />
      )
      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Has description')).toBeInTheDocument()
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <StepIndicator className="custom-class" steps={basicSteps} />
      )
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('custom-class')
      expect(wrapper).toHaveClass('flex')
    })
  })

  describe('Sizes', () => {
    it('should apply small size classes', () => {
      const { container } = render(
        <StepIndicator size="sm" steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full.text-sm, .rounded-full.text-xs')
      expect(stepCircles[0]).toHaveClass('size-6')
    })

    it('should apply large size classes', () => {
      const { container } = render(
        <StepIndicator size="lg" steps={basicSteps} />
      )
      const stepCircles = container.querySelectorAll('.rounded-full')
      expect(stepCircles[0]).toHaveClass('size-10')
    })
  })
})

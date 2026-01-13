import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Button } from './button'

describe('Button component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Button>Click me</Button>)
      expect(
        screen.getByRole('button', { name: 'Click me' })
      ).toBeInTheDocument()
    })

    it('should render as a button element by default', () => {
      render(<Button>Test</Button>)
      expect(screen.getByRole('button')).toBeInstanceOf(HTMLButtonElement)
    })

    it('should have type="button" by default', () => {
      render(<Button>Test</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Button>Default</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('should apply outlined variant classes', () => {
      const { container } = render(<Button variant="outlined">Outlined</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('border-2', 'border-primary', 'bg-transparent')
    })

    it('should apply link variant classes', () => {
      const { container } = render(<Button variant="link">Link</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('underline-offset-4', 'bg-transparent')
    })

    it('should apply ghost variant classes', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('bg-transparent')
    })

    it('should apply destructive variant classes', () => {
      const { container } = render(
        <Button variant="destructive">Delete</Button>
      )
      const button = container.querySelector('button')
      expect(button).toHaveClass(
        'bg-destructive',
        'text-destructive-foreground'
      )
    })

    it('should apply pill shape with rounded-full class', () => {
      const { container } = render(<Button shape="pill">Pill</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('rounded-full')
    })
  })

  describe('Sizes', () => {
    it('should apply xs size classes', () => {
      const { container } = render(<Button size="xs">XS</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-6', 'px-2', 'text-xs')
    })

    it('should apply sm size classes', () => {
      const { container } = render(<Button size="sm">SM</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-8', 'px-3', 'text-sm')
    })

    it('should apply md size classes (default)', () => {
      const { container } = render(<Button size="md">MD</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-10', 'px-4', 'text-sm')
    })

    it('should apply lg size classes', () => {
      const { container } = render(<Button size="lg">LG</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-11', 'px-6', 'text-base')
    })

    it('should apply xl size classes', () => {
      const { container } = render(<Button size="xl">XL</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-12', 'px-8', 'text-lg')
    })

    it('should apply 2xl size classes', () => {
      const { container } = render(<Button size="2xl">2XL</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-14', 'px-10', 'text-xl')
    })

    it('should apply 3xl size classes', () => {
      const { container } = render(<Button size="3xl">3XL</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-16', 'px-12', 'text-2xl')
    })

    it('should apply 4xl size classes', () => {
      const { container } = render(<Button size="4xl">4XL</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('h-20', 'px-16', 'text-3xl')
    })
  })

  describe('Icons', () => {
    const TestIcon = () => <svg data-testid="test-icon" />

    it('should render icon at start', () => {
      render(<Button iconStart={<TestIcon />}>Button</Button>)
      const icon = screen.getByTestId('test-icon')
      const button = screen.getByRole('button')
      expect(button).toContainElement(icon)
    })

    it('should render icon at end', () => {
      render(<Button iconEnd={<TestIcon />}>Button</Button>)
      const icon = screen.getByTestId('test-icon')
      const button = screen.getByRole('button')
      expect(button).toContainElement(icon)
    })

    it('should render both icons', () => {
      render(
        <Button
          iconEnd={<svg data-testid="end-icon" />}
          iconStart={<svg data-testid="start-icon" />}>
          Button
        </Button>
      )
      expect(screen.getByTestId('start-icon')).toBeInTheDocument()
      expect(screen.getByTestId('end-icon')).toBeInTheDocument()
    })

    it('should hide icon end when loading', () => {
      render(
        <Button
          iconEnd={<TestIcon />}
          loading>
          Button
        </Button>
      )
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument()
    })
  })

  describe('Button types', () => {
    it('should support type="submit"', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })

    it('should support type="reset"', () => {
      render(<Button type="reset">Reset</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
    })

    it('should support type="button"', () => {
      render(<Button type="button">Button</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
  })

  describe('Event handlers', () => {
    it('should call onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click me</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('should not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(
        <Button
          disabled
          onClick={handleClick}>
          Disabled
        </Button>
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should not call onClick when loading', async () => {
      const user = userEvent.setup()
      const handleClick = jest.fn()
      render(
        <Button
          loading
          onClick={handleClick}>
          Loading
        </Button>
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('should trigger form submission when type="submit"', () => {
      const handleSubmit = jest.fn((e) => e.preventDefault())
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit</Button>
        </form>
      )

      screen.getByRole('button').click()
      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  describe('Custom colors', () => {
    it('should apply custom bg color with semantic name', () => {
      const { container } = render(<Button bg="secondary">Custom BG</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('bg-secondary')
    })

    it('should apply custom text color with semantic name', () => {
      const { container } = render(<Button color="accent">Custom Color</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('text-accent')
    })

    it('should apply custom bg color with hex value', () => {
      const { container } = render(<Button bg="#ff0000">Custom BG</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('bg-[#ff0000]')
    })

    it('should apply custom text color with hex value', () => {
      const { container } = render(
        <Button color="#ffffff">Custom Color</Button>
      )
      const button = container.querySelector('button')
      expect(button).toHaveClass('text-[#ffffff]')
    })

    it('should combine custom colors with variant', () => {
      const { container } = render(
        <Button
          bg="secondary"
          color="secondary-foreground"
          variant="outlined">
          Custom
        </Button>
      )
      const button = container.querySelector('button')
      expect(button).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })
  })

  describe('Loading state', () => {
    it('should show loading spinner when loading', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const spinner = container.querySelector('svg.animate-spin')
      expect(spinner).toBeInTheDocument()
    })

    it('should disable button when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should have aria-busy when loading', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('should support custom loading spinner', () => {
      render(
        <Button
          loading
          loadingSpinner={<div data-testid="custom-spinner" />}>
          Loading
        </Button>
      )
      expect(screen.getByTestId('custom-spinner')).toBeInTheDocument()
    })

    it('should replace iconStart with spinner when loading', () => {
      const { container } = render(
        <Button
          iconStart={<svg data-testid="icon" />}
          loading>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
      expect(container.querySelector('svg.animate-spin')).toBeInTheDocument()
    })
  })

  describe('Disabled state', () => {
    it('should disable the button when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should apply disabled opacity class', () => {
      const { container } = render(<Button disabled>Disabled</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('disabled:opacity-50')
    })

    it('should apply pointer-events-none class', () => {
      const { container } = render(<Button disabled>Disabled</Button>)
      const button = container.querySelector('button')
      expect(button).toHaveClass('disabled:pointer-events-none')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Button className="custom-class">Button</Button>
      )
      const button = container.querySelector('button')
      expect(button).toHaveClass('custom-class')
      expect(button).toHaveClass('inline-flex') // Default class should still be present
    })
  })

  describe('Ref forwarding', () => {
    it('should forward ref to button element', () => {
      const ref = { current: null }
      render(<Button ref={ref}>Button</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('Accessibility', () => {
    it('should have proper button role', () => {
      render(<Button>Accessible</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should support aria-label', () => {
      render(<Button aria-label="Custom label">Icon</Button>)
      expect(
        screen.getByRole('button', { name: 'Custom label' })
      ).toBeInTheDocument()
    })

    it('should support aria-disabled when disabled', () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
  })

  describe('Common patterns', () => {
    it('should combine size, variant, and custom colors', () => {
      const { container } = render(
        <Button
          bg="accent"
          color="accent-foreground"
          size="lg"
          variant="outlined">
          Combined
        </Button>
      )
      const button = container.querySelector('button')
      expect(button).toHaveClass(
        'h-11',
        'px-6',
        'border-2',
        'bg-accent',
        'text-accent-foreground'
      )
    })

    it('should handle all props together', () => {
      const handleClick = jest.fn()
      const ref = { current: null }
      render(
        <Button
          bg="primary"
          className="extra-class"
          color="primary-foreground"
          disabled={false}
          iconStart={<svg data-testid="icon" />}
          loading={false}
          onClick={handleClick}
          ref={ref}
          size="md"
          type="submit"
          variant="default">
          Complete Button
        </Button>
      )

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('type', 'submit')
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })
})

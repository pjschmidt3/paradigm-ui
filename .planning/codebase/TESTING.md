# Testing Patterns

**Analysis Date:** 2026-01-13

## Test Framework

**Runner:**
- Jest (latest version)
- Config: `tsconfig.test.json` in project root

**Assertion Library:**
- Jest built-in expect
- @testing-library/jest-dom 6.6.3 for DOM matchers

**Run Commands:**
```bash
npm run test                    # Run all tests
npm run test:watch              # Watch mode
npm run test:coverage           # Coverage report
```

## Test File Organization

**Location:**
- `registry/new-york/ui/__tests__/*.test.tsx` - Component tests
- Co-located with registry components

**Naming:**
- `{component}.test.tsx` for all tests
- No distinction between unit/integration in filename

**Structure:**
```
registry/new-york/ui/
├── button.tsx
├── box.tsx
├── flex.tsx
└── __tests__/
    ├── button.test.tsx
    ├── box.test.tsx
    ├── flex.test.tsx
    ├── flex-col.test.tsx
    ├── flex-row.test.tsx
    └── grid.test.tsx
```

## Test Structure

**Suite Organization:**
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../button'

describe('Button component', () => {
  describe('Basic rendering', () => {
    it('should render with text content', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      const { container } = render(<Button>Test</Button>)
      expect(container.firstChild).toHaveClass('bg-primary')
    })
  })
})
```

**Patterns:**
- Use `describe` blocks for grouping related tests
- Test naming: "should [expected behavior]"
- Arrange/Act/Assert pattern
- One assertion focus per test (multiple expects OK)

## Mocking

**Framework:**
- Jest built-in mocking
- Setup file: `src/setupTests.ts`

**Browser API Mocks (src/setupTests.ts):**
```typescript
// matchMedia for responsive queries
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}))

// IntersectionObserver for visibility
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// ResizeObserver for dimensions
window.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))
```

**What to Mock:**
- Browser APIs (matchMedia, IntersectionObserver, ResizeObserver)
- Console (warns and errors)

**What NOT to Mock:**
- Component internals
- Utility functions (cn, etc.)

## Fixtures and Factories

**Test Data:**
- Inline test data for simple cases
- No factory pattern currently in use

**Location:**
- No dedicated fixtures directory
- Test data defined in test files

## Coverage

**Requirements:**
- No enforced coverage target
- Coverage tracked for awareness

**Configuration:**
- Jest coverage built-in
- Run: `npm run test:coverage`

## Test Types

**Unit Tests:**
- Test single component in isolation
- Mock browser APIs only
- Examples: `button.test.tsx`, `flex.test.tsx`

**Integration Tests:**
- Not currently used
- Components test in isolation

**E2E Tests:**
- Not currently used
- Manual testing via Storybook

## Common Patterns

**Rendering:**
```typescript
const { container } = render(<Button>Click me</Button>)
```

**Queries:**
```typescript
screen.getByRole('button', { name: 'Click me' })
screen.getByTestId('test-icon')
screen.queryByTestId('icon') // for absence checks
```

**Assertions:**
```typescript
expect(button).toBeInTheDocument()
expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
expect(button).toHaveAttribute('type', 'button')
expect(button).toBeDisabled()
expect(ref.current).toBeInstanceOf(HTMLButtonElement)
```

**Event Testing:**
```typescript
const user = userEvent.setup()
const handleClick = jest.fn()
render(<Button onClick={handleClick}>Click me</Button>)

await user.click(screen.getByRole('button'))
expect(handleClick).toHaveBeenCalledTimes(1)
```

**Class Testing:**
```typescript
const { container } = render(<Flex gap="md">test</Flex>)
expect(container.firstChild).toHaveClass('gap-4')
```

**Ref Testing:**
```typescript
const ref = React.createRef<HTMLButtonElement>()
render(<Button ref={ref}>Test</Button>)
expect(ref.current).toBeInstanceOf(HTMLButtonElement)
```

## Test Coverage by Component

**Button (registry/new-york/ui/__tests__/button.test.tsx):**
- 46+ test cases covering:
  - Basic rendering (3 tests)
  - Variants (5 tests)
  - Sizes (8 tests)
  - Icons (4 tests)
  - Button types (3 tests)
  - Event handlers (3 tests)
  - Custom colors (5 tests)
  - Loading state (4 tests)
  - Disabled state (3 tests)
  - Custom className (1 test)
  - Ref forwarding (1 test)
  - Accessibility (3 tests)
  - Combined patterns (2 tests)

**Box (registry/new-york/ui/__tests__/box.test.tsx):**
- Spacing prop application
- Responsive padding with breakpoints
- Margin auto handling
- Multiple spacing prop combinations

**Flex (registry/new-york/ui/__tests__/flex.test.tsx):**
- Basic rendering and direction
- Alignment prop mapping
- Gap size application
- Class merging behavior

## Storybook Integration

**Stories Location:**
- `registry/new-york/ui/*.stories.tsx`

**Pattern:**
```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}
```

---

*Testing analysis: 2026-01-13*
*Update when test patterns change*

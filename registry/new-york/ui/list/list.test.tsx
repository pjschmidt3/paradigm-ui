import { render, screen } from '@testing-library/react'

import { List, ListItem } from './list'

describe('List component', () => {
  describe('Basic rendering', () => {
    it('should render list items', () => {
      render(<List items={['Item 1', 'Item 2', 'Item 3']} />)
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('should render as unordered list by default', () => {
      const { container } = render(<List items={['Item']} />)
      expect(container.querySelector('ul')).toBeInTheDocument()
    })

    it('should render ReactNode items', () => {
      render(
        <List
          items={[
            <strong key="1">Bold item</strong>,
            <em key="2">Italic item</em>
          ]}
        />
      )
      expect(screen.getByText('Bold item')).toBeInTheDocument()
      expect(screen.getByText('Italic item')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should apply bullet variant classes', () => {
      const { container } = render(
        <List
          items={['Item']}
          variant="bullet"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('list-disc', 'pl-6')
    })

    it('should render as ordered list for numbered variant', () => {
      const { container } = render(
        <List
          items={['Item']}
          variant="numbered"
        />
      )
      expect(container.querySelector('ol')).toBeInTheDocument()
    })

    it('should apply numbered variant classes', () => {
      const { container } = render(
        <List
          items={['Item']}
          variant="numbered"
        />
      )
      const list = container.querySelector('ol')
      expect(list).toHaveClass('list-decimal', 'pl-6')
    })

    it('should render check icons for check variant', () => {
      const { container } = render(
        <List
          items={['Item']}
          variant="check"
        />
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveClass('text-green-600')
    })

    it('should apply none variant classes', () => {
      const { container } = render(
        <List
          items={['Item']}
          variant="none"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('list-none', 'pl-0')
    })
  })

  describe('Spacing', () => {
    it('should apply tight spacing classes', () => {
      const { container } = render(
        <List
          items={['Item']}
          spacing="tight"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('space-y-1')
    })

    it('should apply normal spacing classes (default)', () => {
      const { container } = render(
        <List
          items={['Item']}
          spacing="normal"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('space-y-2')
    })

    it('should apply relaxed spacing classes', () => {
      const { container } = render(
        <List
          items={['Item']}
          spacing="relaxed"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('space-y-4')
    })
  })

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      const { container } = render(
        <List
          className="custom-class"
          items={['Item']}
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('custom-class')
    })
  })

  describe('Common patterns', () => {
    it('should combine variant and spacing', () => {
      const { container } = render(
        <List
          items={['Item 1', 'Item 2']}
          spacing="relaxed"
          variant="check"
        />
      )
      const list = container.querySelector('ul')
      expect(list).toHaveClass('space-y-4', 'list-none')
    })
  })
})

describe('ListItem component', () => {
  it('should render children', () => {
    render(<ListItem>List item content</ListItem>)
    expect(screen.getByText('List item content')).toBeInTheDocument()
  })

  it('should render as li element', () => {
    const { container } = render(<ListItem>Content</ListItem>)
    expect(container.querySelector('li')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <ListItem className="custom-item">Content</ListItem>
    )
    const li = container.querySelector('li')
    expect(li).toHaveClass('custom-item')
  })
})

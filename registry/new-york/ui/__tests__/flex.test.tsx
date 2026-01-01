import { Flex } from '@/paradigm-ui/registry/new-york/ui/flex'
import { render } from '@testing-library/react'

describe('flex component', () => {
  it('should render with display: flex', () => {
    const { container } = render(<Flex>test</Flex>)

    expect(container.firstChild).toHaveClass('flex')
  })

  it('should default to flex-row direction', () => {
    const { container } = render(<Flex>test</Flex>)

    expect(container.firstChild).toHaveClass('flex-row')
  })

  it('should render with flex-col direction when specified', () => {
    const { container } = render(<Flex direction="col">test</Flex>)

    expect(container.firstChild).toHaveClass('flex-col')
  })

  it('should add tailwind utilities from flex props', () => {
    const { container } = render(
      <Flex
        justifyContent="center"
        justifyItems="center"
        justifySelf="center"
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        placeContent="center"
        placeItems="center"
        placeSelf="center">
        Test
      </Flex>
    )

    expect(
      container.querySelector(
        '.justify-center.justify-items-center.justify-self-center.content-center.items-center.self-center.place-content-center.place-items-center.place-self-center'
      )
    ).toBeInTheDocument()
  })

  it('should merge custom className', () => {
    const { container } = render(<Flex className="custom-class">test</Flex>)

    expect(container.firstChild).toHaveClass('flex', 'flex-row', 'custom-class')
  })

  it('should apply flex-wrap by default', () => {
    const { container } = render(<Flex>test</Flex>)

    expect(container.firstChild).toHaveClass('flex-wrap')
  })

  it('should not apply gap class when gap prop is undefined', () => {
    const { container } = render(<Flex>test</Flex>)

    expect(container.firstChild).not.toHaveClass('gap-1')
    expect(container.firstChild).not.toHaveClass('gap-2')
    expect(container.firstChild).not.toHaveClass('gap-4')
  })

  it('should apply gap-1 when gap is xs', () => {
    const { container } = render(<Flex gap="xs">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-1')
  })

  it('should apply gap-2 when gap is sm', () => {
    const { container } = render(<Flex gap="sm">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('should apply gap-4 when gap is md', () => {
    const { container } = render(<Flex gap="md">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('should apply gap-6 when gap is lg', () => {
    const { container } = render(<Flex gap="lg">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-6')
  })

  it('should apply gap-8 when gap is xl', () => {
    const { container } = render(<Flex gap="xl">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-8')
  })

  it('should apply gap-12 when gap is 2xl', () => {
    const { container } = render(<Flex gap="2xl">test</Flex>)

    expect(container.firstChild).toHaveClass('gap-12')
  })

  it('should combine gap with direction', () => {
    const { container } = render(
      <Flex
        direction="col"
        gap="lg">
        test
      </Flex>
    )

    expect(container.firstChild).toHaveClass('flex', 'flex-col', 'gap-6')
  })

  it('should combine gap with alignment props', () => {
    const { container } = render(
      <Flex
        gap="md"
        alignItems="center"
        justifyContent="between">
        test
      </Flex>
    )

    expect(container.firstChild).toHaveClass(
      'gap-4',
      'items-center',
      'justify-between'
    )
  })
})

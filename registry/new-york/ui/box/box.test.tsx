import { render } from '@testing-library/react'

import { Box } from './box'

describe('Box component', () => {
  describe('spacing props', () => {
    it('should apply padding classes', () => {
      const { container } = render(<Box p="sm">content</Box>)
      expect(container.firstChild).toHaveClass('p-2')
    })

    it('should apply responsive padding', () => {
      const { container } = render(
        <Box px={{ base: 'sm', md: 'lg' }}>content</Box>
      )
      expect(container.firstChild).toHaveClass('px-2', 'md:px-6')
    })

    it('should apply margin classes', () => {
      const { container } = render(<Box m="md">content</Box>)
      expect(container.firstChild).toHaveClass('m-4')
    })

    it('should handle mx auto', () => {
      const { container } = render(<Box mx="auto">content</Box>)
      expect(container.firstChild).toHaveClass('mx-auto')
    })

    it('should handle responsive mx auto', () => {
      const { container } = render(
        <Box mx={{ base: 'sm', md: 'auto' }}>content</Box>
      )
      expect(container.firstChild).toHaveClass('mx-2', 'md:mx-auto')
    })

    it('should combine multiple spacing props', () => {
      const { container } = render(
        <Box
          mt="md"
          px="sm"
          py="lg">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('px-2', 'py-6', 'mt-4')
    })

    it('should apply all padding directional props', () => {
      const { container } = render(
        <Box
          pb="sm"
          pl="md"
          pr="lg"
          pt="xs">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('pt-1', 'pb-2', 'pl-4', 'pr-6')
    })

    it('should apply all margin directional props', () => {
      const { container } = render(
        <Box
          mb="sm"
          ml="md"
          mr="lg"
          mt="xs">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('mt-1', 'mb-2', 'ml-4', 'mr-6')
    })

    it('should handle all spacing sizes', () => {
      const { container: xs } = render(<Box p="xs">content</Box>)
      expect(xs.firstChild).toHaveClass('p-1')

      const { container: sm } = render(<Box p="sm">content</Box>)
      expect(sm.firstChild).toHaveClass('p-2')

      const { container: md } = render(<Box p="md">content</Box>)
      expect(md.firstChild).toHaveClass('p-4')

      const { container: lg } = render(<Box p="lg">content</Box>)
      expect(lg.firstChild).toHaveClass('p-6')

      const { container: xl } = render(<Box p="xl">content</Box>)
      expect(xl.firstChild).toHaveClass('p-8')

      const { container: xxl } = render(<Box p="2xl">content</Box>)
      expect(xxl.firstChild).toHaveClass('p-12')
    })

    it('should handle complex responsive spacing', () => {
      const { container } = render(
        <Box py={{ base: 'sm', lg: 'lg', md: 'md', xl: '2xl' }}>content</Box>
      )
      expect(container.firstChild).toHaveClass(
        'py-2',
        'md:py-4',
        'lg:py-6',
        'xl:py-12'
      )
    })
  })

  describe('sizing props', () => {
    it('should apply width classes', () => {
      const { container } = render(<Box width="full">content</Box>)
      expect(container.firstChild).toHaveClass('w-full')
    })

    it('should apply height classes', () => {
      const { container } = render(<Box height="screen">content</Box>)
      expect(container.firstChild).toHaveClass('h-screen')
    })

    it('should apply min/max width', () => {
      const { container } = render(
        <Box
          maxWidth="4xl"
          minWidth="0">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('min-w-0', 'max-w-4xl')
    })

    it('should apply min/max height', () => {
      const { container } = render(
        <Box
          maxHeight="96"
          minHeight="screen">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('min-h-screen', 'max-h-96')
    })

    it('should combine all sizing props', () => {
      const { container } = render(
        <Box
          height="64"
          maxWidth="7xl"
          minWidth="0"
          width="full">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass(
        'w-full',
        'h-64',
        'min-w-0',
        'max-w-7xl'
      )
    })

    it('should handle integer width as pixels', () => {
      const { container } = render(<Box width={300}>content</Box>)
      expect(container.firstChild).toHaveClass('w-[300px]')
    })

    it('should handle integer height as pixels', () => {
      const { container } = render(<Box height={500}>content</Box>)
      expect(container.firstChild).toHaveClass('h-[500px]')
    })

    it('should handle integer minWidth as pixels', () => {
      const { container } = render(<Box minWidth={200}>content</Box>)
      expect(container.firstChild).toHaveClass('min-w-[200px]')
    })

    it('should handle integer maxWidth as pixels', () => {
      const { container } = render(<Box maxWidth={800}>content</Box>)
      expect(container.firstChild).toHaveClass('max-w-[800px]')
    })

    it('should handle integer minHeight as pixels', () => {
      const { container } = render(<Box minHeight={100}>content</Box>)
      expect(container.firstChild).toHaveClass('min-h-[100px]')
    })

    it('should handle integer maxHeight as pixels', () => {
      const { container } = render(<Box maxHeight={600}>content</Box>)
      expect(container.firstChild).toHaveClass('max-h-[600px]')
    })

    it('should mix string and integer sizing props', () => {
      const { container } = render(
        <Box
          height="full"
          maxWidth="4xl"
          width={400}>
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass(
        'w-[400px]',
        'h-full',
        'max-w-4xl'
      )
    })
  })

  describe('visual props', () => {
    it('should apply background color', () => {
      const { container } = render(<Box bg="primary">content</Box>)
      expect(container.firstChild).toHaveClass('bg-primary')
    })

    it('should apply rounded corners', () => {
      const { container } = render(<Box rounded="lg">content</Box>)
      expect(container.firstChild).toHaveClass('rounded-lg')
    })

    it('should apply shadow', () => {
      const { container } = render(<Box shadow="md">content</Box>)
      expect(container.firstChild).toHaveClass('shadow-md')
    })

    it('should apply border', () => {
      const { container } = render(<Box border="base">content</Box>)
      expect(container.firstChild).toHaveClass('border')
    })

    it('should combine visual props', () => {
      const { container } = render(
        <Box
          bg="card"
          border="base"
          rounded="lg"
          shadow="md">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass(
        'bg-card',
        'rounded-lg',
        'shadow-md',
        'border'
      )
    })

    it('should handle all background colors', () => {
      const { container: bg1 } = render(<Box bg="background">content</Box>)
      expect(bg1.firstChild).toHaveClass('bg-background')

      const { container: bg2 } = render(<Box bg="foreground">content</Box>)
      expect(bg2.firstChild).toHaveClass('bg-foreground')

      const { container: bg3 } = render(<Box bg="card">content</Box>)
      expect(bg3.firstChild).toHaveClass('bg-card')

      const { container: bg4 } = render(<Box bg="primary">content</Box>)
      expect(bg4.firstChild).toHaveClass('bg-primary')

      const { container: bg5 } = render(<Box bg="muted">content</Box>)
      expect(bg5.firstChild).toHaveClass('bg-muted')

      const { container: bg6 } = render(<Box bg="transparent">content</Box>)
      expect(bg6.firstChild).toHaveClass('bg-transparent')
    })
  })

  describe('display prop', () => {
    it('should apply display classes', () => {
      const { container: flexContainer } = render(
        <Box display="flex">content</Box>
      )
      expect(flexContainer.firstChild).toHaveClass('flex')

      const { container: gridContainer } = render(
        <Box display="grid">content</Box>
      )
      expect(gridContainer.firstChild).toHaveClass('grid')

      const { container: hiddenContainer } = render(
        <Box display="none">content</Box>
      )
      expect(hiddenContainer.firstChild).toHaveClass('hidden')

      const { container: blockContainer } = render(
        <Box display="block">content</Box>
      )
      expect(blockContainer.firstChild).toHaveClass('block')
    })
  })

  describe('polymorphic rendering', () => {
    it('should render as div by default', () => {
      const { container } = render(<Box>content</Box>)
      expect(container.firstChild?.nodeName).toBe('DIV')
    })

    it('should render as specified element', () => {
      const { container: sectionContainer } = render(
        <Box as="section">content</Box>
      )
      expect(sectionContainer.firstChild?.nodeName).toBe('SECTION')

      const { container: articleContainer } = render(
        <Box as="article">content</Box>
      )
      expect(articleContainer.firstChild?.nodeName).toBe('ARTICLE')

      const { container: headerContainer } = render(
        <Box as="header">content</Box>
      )
      expect(headerContainer.firstChild?.nodeName).toBe('HEADER')
    })
  })

  describe('className merging', () => {
    it('should merge custom className', () => {
      const { container } = render(
        <Box
          className="custom-class"
          p="sm">
          content
        </Box>
      )
      expect(container.firstChild).toHaveClass('p-2', 'custom-class')
    })

    it('should allow className override via cn utility', () => {
      const { container } = render(
        <Box
          className="p-8"
          p="sm">
          content
        </Box>
      )
      // tailwind-merge should resolve conflicting padding
      expect(container.firstChild).toHaveClass('p-8')
      expect(container.firstChild).not.toHaveClass('p-2')
    })
  })

  describe('rest props forwarding', () => {
    it('should forward data attributes', () => {
      const { container } = render(
        <Box
          data-custom="value"
          data-testid="box-element">
          content
        </Box>
      )
      const element = container.firstChild as HTMLElement
      expect(element.dataset.testid).toBe('box-element')
      expect(element.dataset.custom).toBe('value')
    })

    it('should forward event handlers', () => {
      const handleClick = jest.fn()
      const { container } = render(<Box onClick={handleClick}>content</Box>)
      const element = container.firstChild as HTMLElement
      element.click()
      expect(handleClick).toHaveBeenCalled()
    })

    it('should forward id and role attributes', () => {
      const { container } = render(
        <Box
          id="custom-id"
          role="region">
          content
        </Box>
      )
      const element = container.firstChild as HTMLElement
      expect(element.id).toBe('custom-id')
      expect(element).toHaveAttribute('role', 'region')
    })
  })

  describe('comprehensive integration', () => {
    it('should combine all prop types correctly', () => {
      const { container } = render(
        <Box
          as="section"
          bg="card"
          className="custom-class"
          display="flex"
          maxWidth="4xl"
          mx="auto"
          px={{ base: 'sm', md: 'lg' }}
          py="md"
          rounded="lg"
          shadow="md"
          width="full">
          content
        </Box>
      )

      const element = container.firstChild as HTMLElement
      expect(element.nodeName).toBe('SECTION')
      expect(element).toHaveClass(
        'px-2',
        'md:px-6',
        'py-4',
        'mx-auto',
        'w-full',
        'max-w-4xl',
        'bg-card',
        'rounded-lg',
        'shadow-md',
        'flex',
        'custom-class'
      )
    })

    it('should handle complex real-world example', () => {
      const { container } = render(
        <Box
          as="article"
          bg="background"
          border="base"
          m={{ base: 'sm', md: 'md' }}
          maxWidth="7xl"
          p={{ base: 'md', lg: 'xl' }}
          rounded="xl"
          shadow="lg"
          width="full">
          <h2>Article Title</h2>
          <p>Article content</p>
        </Box>
      )

      const element = container.firstChild as HTMLElement
      expect(element.nodeName).toBe('ARTICLE')
      expect(element).toHaveClass(
        'p-4',
        'lg:p-8',
        'm-2',
        'md:m-4',
        'w-full',
        'max-w-7xl',
        'bg-background',
        'rounded-xl',
        'shadow-lg',
        'border'
      )
    })
  })
})

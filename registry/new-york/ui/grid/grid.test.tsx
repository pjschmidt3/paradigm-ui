import { render } from '@testing-library/react'

import { Grid } from './grid'

describe('grid component', () => {
  // Base behavior
  it('should render with display: grid', () => {
    const { container } = render(<Grid>test</Grid>)

    expect(container.firstChild).toHaveClass('grid')
  })

  it('should handle undefined cols gracefully', () => {
    const { container } = render(<Grid>test</Grid>)

    expect(container.firstChild).toHaveClass('grid')
    expect(container.firstChild).not.toHaveClass('grid-cols-1')
  })

  it('should handle undefined rows gracefully', () => {
    const { container } = render(<Grid>test</Grid>)

    expect(container.firstChild).toHaveClass('grid')
    expect(container.firstChild).not.toHaveClass('grid-rows-1')
  })

  // Template mapping - cols
  it('should apply grid-cols-3 when cols is 3', () => {
    const { container } = render(<Grid cols={3}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid-cols-3')
  })

  it('should apply grid-cols-12 when cols is 12', () => {
    const { container } = render(<Grid cols={12}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid-cols-12')
  })

  it('should apply grid-cols-subgrid when cols is "subgrid"', () => {
    const { container } = render(<Grid cols="subgrid">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-cols-subgrid')
  })

  it('should apply grid-cols-none when cols is "none"', () => {
    const { container } = render(<Grid cols="none">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-cols-none')
  })

  // Template mapping - rows
  it('should apply grid-rows-2 when rows is 2', () => {
    const { container } = render(<Grid rows={2}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid-rows-2')
  })

  it('should apply grid-rows-6 when rows is 6', () => {
    const { container } = render(<Grid rows={6}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid-rows-6')
  })

  it('should apply grid-rows-none when rows is "none"', () => {
    const { container } = render(<Grid rows="none">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-rows-none')
  })

  it('should apply grid-rows-subgrid when rows is "subgrid"', () => {
    const { container } = render(<Grid rows="subgrid">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-rows-subgrid')
  })

  // Gap sizing
  it('should not apply gap class when gap prop is undefined', () => {
    const { container } = render(<Grid>test</Grid>)

    expect(container.firstChild).not.toHaveClass('gap-1')
    expect(container.firstChild).not.toHaveClass('gap-2')
    expect(container.firstChild).not.toHaveClass('gap-4')
  })

  it('should apply gap-1 when gap is xs', () => {
    const { container } = render(<Grid gap="xs">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-1')
  })

  it('should apply gap-2 when gap is sm', () => {
    const { container } = render(<Grid gap="sm">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('should apply gap-4 when gap is md', () => {
    const { container } = render(<Grid gap="md">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('should apply gap-6 when gap is lg', () => {
    const { container } = render(<Grid gap="lg">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-6')
  })

  it('should apply gap-8 when gap is xl', () => {
    const { container } = render(<Grid gap="xl">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-8')
  })

  it('should apply gap-12 when gap is 2xl', () => {
    const { container } = render(<Grid gap="2xl">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-12')
  })

  // Directional gap
  it('should apply gap-x-4 when gapX is md', () => {
    const { container } = render(<Grid gapX="md">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-x-4')
  })

  it('should apply gap-y-6 when gapY is lg', () => {
    const { container } = render(<Grid gapY="lg">test</Grid>)

    expect(container.firstChild).toHaveClass('gap-y-6')
  })

  it('should apply both gap-x and gap-y when both specified', () => {
    const { container } = render(
      <Grid
        gapX="sm"
        gapY="xl">
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass('gap-x-2', 'gap-y-8')
  })

  it('should prioritize gapX/gapY over general gap', () => {
    const { container } = render(
      <Grid
        gap="md"
        gapX="lg">
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass('gap-x-6')
    expect(container.firstChild).not.toHaveClass('gap-4')
  })

  // Alignment props
  it('should add tailwind utilities from grid props', () => {
    const { container } = render(
      <Grid
        alignContent="around"
        alignItems="center"
        justifyContent="between"
        justifyItems="center"
        placeContent="evenly"
        placeItems="center">
        test
      </Grid>
    )

    expect(
      container.querySelector(
        '.justify-items-center.items-center.place-items-center.justify-between.content-around.place-content-evenly'
      )
    ).toBeInTheDocument()
  })

  it('should apply justify-items-center', () => {
    const { container } = render(<Grid justifyItems="center">test</Grid>)

    expect(container.firstChild).toHaveClass('justify-items-center')
  })

  it('should apply items-start for alignItems', () => {
    const { container } = render(<Grid alignItems="start">test</Grid>)

    expect(container.firstChild).toHaveClass('items-start')
  })

  it('should apply place-items-center', () => {
    const { container } = render(<Grid placeItems="center">test</Grid>)

    expect(container.firstChild).toHaveClass('place-items-center')
  })

  it('should apply justify-between for justifyContent', () => {
    const { container } = render(<Grid justifyContent="between">test</Grid>)

    expect(container.firstChild).toHaveClass('justify-between')
  })

  it('should apply content-around for alignContent', () => {
    const { container } = render(<Grid alignContent="around">test</Grid>)

    expect(container.firstChild).toHaveClass('content-around')
  })

  // Auto flow
  it('should apply grid-flow-row when autoFlow is "row"', () => {
    const { container } = render(<Grid autoFlow="row">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-flow-row')
  })

  it('should apply grid-flow-col when autoFlow is "col"', () => {
    const { container } = render(<Grid autoFlow="col">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-flow-col')
  })

  it('should apply grid-flow-dense when autoFlow is "dense"', () => {
    const { container } = render(<Grid autoFlow="dense">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-flow-dense')
  })

  it('should apply grid-flow-row-dense when autoFlow is "row-dense"', () => {
    const { container } = render(<Grid autoFlow="row-dense">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-flow-row-dense')
  })

  it('should apply grid-flow-col-dense when autoFlow is "col-dense"', () => {
    const { container } = render(<Grid autoFlow="col-dense">test</Grid>)

    expect(container.firstChild).toHaveClass('grid-flow-col-dense')
  })

  // Auto columns/rows
  it('should apply auto-cols-auto when autoColumns is "auto"', () => {
    const { container } = render(<Grid autoColumns="auto">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-cols-auto')
  })

  it('should apply auto-cols-fr when autoColumns is "fr"', () => {
    const { container } = render(<Grid autoColumns="fr">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-cols-fr')
  })

  it('should apply auto-cols-min when autoColumns is "min"', () => {
    const { container } = render(<Grid autoColumns="min">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-cols-min')
  })

  it('should apply auto-cols-max when autoColumns is "max"', () => {
    const { container } = render(<Grid autoColumns="max">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-cols-max')
  })

  it('should apply auto-rows-min when autoRows is "min"', () => {
    const { container } = render(<Grid autoRows="min">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-rows-min')
  })

  it('should apply auto-rows-auto when autoRows is "auto"', () => {
    const { container } = render(<Grid autoRows="auto">test</Grid>)

    expect(container.firstChild).toHaveClass('auto-rows-auto')
  })

  // Combined props
  it('should combine cols with gap', () => {
    const { container } = render(
      <Grid
        cols={4}
        gap="lg">
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass('grid', 'grid-cols-4', 'gap-6')
  })

  it('should combine cols with alignment props', () => {
    const { container } = render(
      <Grid
        alignContent="between"
        cols={3}
        justifyItems="center">
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass(
      'grid',
      'grid-cols-3',
      'justify-items-center',
      'content-between'
    )
  })

  it('should combine all props together', () => {
    const { container } = render(
      <Grid
        alignContent="between"
        autoFlow="row"
        cols={4}
        gap="lg"
        justifyItems="center"
        rows={2}>
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass(
      'grid',
      'grid-cols-4',
      'grid-rows-2',
      'gap-6',
      'justify-items-center',
      'content-between',
      'grid-flow-row'
    )
  })

  // ClassName merging
  it('should merge custom className', () => {
    const { container } = render(<Grid className="custom-class">test</Grid>)

    expect(container.firstChild).toHaveClass('grid', 'custom-class')
  })

  it('should merge custom className with all grid props', () => {
    const { container } = render(
      <Grid
        className="custom-class min-h-screen"
        cols={3}
        gap="md">
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass(
      'grid',
      'grid-cols-3',
      'gap-4',
      'custom-class',
      'min-h-screen'
    )
  })

  // Sizing props
  it('should apply width as string', () => {
    const { container } = render(<Grid width="full">test</Grid>)

    expect(container.firstChild).toHaveClass('grid', 'w-full')
  })

  it('should apply height as string', () => {
    const { container } = render(<Grid height="screen">test</Grid>)

    expect(container.firstChild).toHaveClass('grid', 'h-screen')
  })

  it('should apply width as integer pixels', () => {
    const { container } = render(<Grid width={400}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid', 'w-[400px]')
  })

  it('should apply height as integer pixels', () => {
    const { container } = render(<Grid height={600}>test</Grid>)

    expect(container.firstChild).toHaveClass('grid', 'h-[600px]')
  })

  it('should combine width and height with other grid props', () => {
    const { container } = render(
      <Grid
        cols={3}
        gap="md"
        height="full"
        width={500}>
        test
      </Grid>
    )

    expect(container.firstChild).toHaveClass(
      'grid',
      'grid-cols-3',
      'gap-4',
      'w-[500px]',
      'h-full'
    )
  })
})

import { FlexRow } from '@/paradigm-ui/registry/new-york/ui/flex-row'
import { render } from '@testing-library/react'

describe('flex-row component', () => {
  it('should render an element with display: flex', () => {
    const { container } = render(<FlexRow>test</FlexRow>)

    expect(container.firstChild).toHaveClass('flex')
  })

  it('should add tailwind utilities from flex props', () => {
    const { container } = render(
      <FlexRow
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
      </FlexRow>
    )

    expect(
      container.querySelector(
        '.justify-center.justify-items-center.justify-self-center.content-center.items-center.self-center.place-content-center.place-items-center.place-self-center'
      )
    ).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'

import { FlexRow } from './flex-row'

describe('flex-row component', () => {
  it('should render an element with display: flex', () => {
    const { container } = render(<FlexRow>test</FlexRow>)

    expect(container.firstChild).toHaveClass('flex')
  })

  it('should add tailwind utilities from flex props', () => {
    const { container } = render(
      <FlexRow
        alignContent="center"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
        justifyItems="center"
        justifySelf="center"
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

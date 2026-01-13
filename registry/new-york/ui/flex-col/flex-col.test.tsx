import { render } from '@testing-library/react'

import { FlexCol } from './flex-col'

describe('flex-col component', () => {
  it('should render an element with display: flex', () => {
    const { container } = render(<FlexCol>test</FlexCol>)

    expect(container.firstChild).toHaveClass('flex')
  })

  it('should add tailwind utilities from flex props', () => {
    const { container } = render(
      <FlexCol
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
      </FlexCol>
    )

    expect(
      container.querySelector(
        '.justify-center.justify-items-center.justify-self-center.content-center.items-center.self-center.place-content-center.place-items-center.place-self-center'
      )
    ).toBeInTheDocument()
  })
})

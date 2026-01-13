import { renderHook, act } from '@testing-library/react'
import { useDisclosure } from '../use-disclosure'

describe('useDisclosure', () => {
  it('initial state is false (closed) by default', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.isOpen).toBe(false)
  })

  it('initial state can be set to true', () => {
    const { result } = renderHook(() => useDisclosure({ defaultOpen: true }))
    expect(result.current.isOpen).toBe(true)
  })

  it('open() sets isOpen to true', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('close() sets isOpen to false', () => {
    const { result } = renderHook(() => useDisclosure({ defaultOpen: true }))
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('toggle() flips isOpen state', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('onOpen callback fires when opening', () => {
    const onOpen = jest.fn()
    const { result } = renderHook(() => useDisclosure({ onOpen }))

    act(() => {
      result.current.open()
    })

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('onOpen callback fires when toggling from closed to open', () => {
    const onOpen = jest.fn()
    const { result } = renderHook(() => useDisclosure({ onOpen }))

    act(() => {
      result.current.toggle()
    })

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('onClose callback fires when closing', () => {
    const onClose = jest.fn()
    const { result } = renderHook(() =>
      useDisclosure({ defaultOpen: true, onClose })
    )

    act(() => {
      result.current.close()
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('onClose callback fires when toggling from open to closed', () => {
    const onClose = jest.fn()
    const { result } = renderHook(() =>
      useDisclosure({ defaultOpen: true, onClose })
    )

    act(() => {
      result.current.toggle()
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('callbacks do not fire when state does not change', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const { result } = renderHook(() => useDisclosure({ onOpen, onClose }))

    // Already closed, calling close should not fire onClose
    act(() => {
      result.current.close()
    })

    expect(onClose).not.toHaveBeenCalled()

    // Open it
    act(() => {
      result.current.open()
    })

    expect(onOpen).toHaveBeenCalledTimes(1)

    // Already open, calling open should not fire onOpen again
    act(() => {
      result.current.open()
    })

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it('returns stable function references', () => {
    const { result, rerender } = renderHook(() => useDisclosure())

    const { open: open1, close: close1, toggle: toggle1 } = result.current

    rerender()

    const { open: open2, close: close2, toggle: toggle2 } = result.current

    expect(open1).toBe(open2)
    expect(close1).toBe(close2)
    expect(toggle1).toBe(toggle2)
  })
})

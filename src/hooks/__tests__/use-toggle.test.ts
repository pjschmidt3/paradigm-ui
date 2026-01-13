import { renderHook, act } from '@testing-library/react'
import { useToggle } from '../use-toggle'

describe('useToggle', () => {
  it('initial value is false by default', () => {
    const { result } = renderHook(() => useToggle())
    const [value] = result.current
    expect(value).toBe(false)
  })

  it('initial value can be set to true', () => {
    const { result } = renderHook(() => useToggle(true))
    const [value] = result.current
    expect(value).toBe(true)
  })

  it('toggle() flips the value', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1].toggle()
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1].toggle()
    })

    expect(result.current[0]).toBe(false)
  })

  it('setTrue() sets value to true', () => {
    const { result } = renderHook(() => useToggle(false))
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1].setTrue()
    })

    expect(result.current[0]).toBe(true)
  })

  it('setFalse() sets value to false', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1].setFalse()
    })

    expect(result.current[0]).toBe(false)
  })

  it('setValue(true) sets value to true', () => {
    const { result } = renderHook(() => useToggle(false))
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1].setValue(true)
    })

    expect(result.current[0]).toBe(true)
  })

  it('setValue(false) sets value to false', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1].setValue(false)
    })

    expect(result.current[0]).toBe(false)
  })

  it('returns stable function references', () => {
    const { result, rerender } = renderHook(() => useToggle())

    const actions1 = result.current[1]

    rerender()

    const actions2 = result.current[1]

    expect(actions1.toggle).toBe(actions2.toggle)
    expect(actions1.setTrue).toBe(actions2.setTrue)
    expect(actions1.setFalse).toBe(actions2.setFalse)
    expect(actions1.setValue).toBe(actions2.setValue)
  })
})

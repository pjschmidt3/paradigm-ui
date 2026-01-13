import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { useClickOutside } from '../use-click-outside'

describe('useClickOutside', () => {
  let container: HTMLDivElement
  let inside: HTMLDivElement
  let outside: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    inside = document.createElement('div')
    outside = document.createElement('div')
    container.appendChild(inside)
    document.body.appendChild(container)
    document.body.appendChild(outside)
  })

  afterEach(() => {
    document.body.removeChild(container)
    document.body.removeChild(outside)
  })

  it('does not call handler when clicking inside ref element', () => {
    const handler = jest.fn()

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useClickOutside(ref, handler)
      return ref
    })

    inside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).not.toHaveBeenCalled()
  })

  it('calls handler when clicking outside ref element', () => {
    const handler = jest.fn()

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useClickOutside(ref, handler)
      return ref
    })

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent))
  })

  it('does not call handler when disabled', () => {
    const handler = jest.fn()

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useClickOutside(ref, handler, false)
      return ref
    })

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).not.toHaveBeenCalled()
  })

  it('works with touch events (touchstart)', () => {
    const handler = jest.fn()

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useClickOutside(ref, handler)
      return ref
    })

    outside.dispatchEvent(new TouchEvent('touchstart', { bubbles: true }))

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(expect.any(TouchEvent))
  })

  it('cleans up listeners on unmount', () => {
    const handler = jest.fn()
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useClickOutside(ref, handler)
      return ref
    })

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function))
    expect(addEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function))
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function))

    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })

  it('updates handler reference correctly', () => {
    const handler1 = jest.fn()
    const handler2 = jest.fn()

    const { rerender } = renderHook(
      ({ handler }) => {
        const ref = useRef<HTMLDivElement>(container)
        useClickOutside(ref, handler)
        return ref
      },
      { initialProps: { handler: handler1 } }
    )

    // First handler should be called
    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    expect(handler1).toHaveBeenCalledTimes(1)
    expect(handler2).not.toHaveBeenCalled()

    // Rerender with new handler
    rerender({ handler: handler2 })

    // Now second handler should be called
    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    expect(handler1).toHaveBeenCalledTimes(1) // still 1
    expect(handler2).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when ref.current is null', () => {
    const handler = jest.fn()

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null)
      useClickOutside(ref, handler)
      return ref
    })

    outside.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).not.toHaveBeenCalled()
  })
})

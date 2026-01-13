import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { useFocusTrap } from '../use-focus-trap'

describe('useFocusTrap', () => {
  let container: HTMLDivElement
  let firstButton: HTMLButtonElement
  let middleInput: HTMLInputElement
  let lastButton: HTMLButtonElement
  let originalActiveElement: Element | null

  beforeEach(() => {
    originalActiveElement = document.activeElement

    container = document.createElement('div')
    firstButton = document.createElement('button')
    firstButton.textContent = 'First'
    middleInput = document.createElement('input')
    middleInput.type = 'text'
    lastButton = document.createElement('button')
    lastButton.textContent = 'Last'

    container.appendChild(firstButton)
    container.appendChild(middleInput)
    container.appendChild(lastButton)
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    if (originalActiveElement instanceof HTMLElement) {
      originalActiveElement.focus()
    }
  })

  it('focuses first focusable element on mount when active', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    expect(document.activeElement).toBe(firstButton)
  })

  it('Tab from last element goes to first element', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    // Focus last element
    lastButton.focus()
    expect(document.activeElement).toBe(lastButton)

    // Simulate Tab keydown
    const tabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true
    })

    lastButton.dispatchEvent(tabEvent)

    expect(document.activeElement).toBe(firstButton)
  })

  it('Shift+Tab from first element goes to last element', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    // Focus first element
    firstButton.focus()
    expect(document.activeElement).toBe(firstButton)

    // Simulate Shift+Tab keydown
    const shiftTabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
      cancelable: true
    })

    firstButton.dispatchEvent(shiftTabEvent)

    expect(document.activeElement).toBe(lastButton)
  })

  it('restores focus to previously focused element on deactivate', () => {
    const outsideButton = document.createElement('button')
    outsideButton.textContent = 'Outside'
    document.body.appendChild(outsideButton)
    outsideButton.focus()

    expect(document.activeElement).toBe(outsideButton)

    const { rerender } = renderHook(
      ({ active }) => {
        const ref = useRef<HTMLDivElement>(container)
        useFocusTrap(ref, active)
        return ref
      },
      { initialProps: { active: true } }
    )

    // Focus should be trapped inside
    expect(document.activeElement).toBe(firstButton)

    // Deactivate trap
    rerender({ active: false })

    // Focus should be restored to outside button
    expect(document.activeElement).toBe(outsideButton)

    document.body.removeChild(outsideButton)
  })

  it('does nothing when disabled', () => {
    const outsideButton = document.createElement('button')
    outsideButton.textContent = 'Outside'
    document.body.appendChild(outsideButton)
    outsideButton.focus()

    expect(document.activeElement).toBe(outsideButton)

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, false)
      return ref
    })

    // Focus should remain on outside button
    expect(document.activeElement).toBe(outsideButton)

    document.body.removeChild(outsideButton)
  })

  it('skips disabled elements', () => {
    const disabledButton = document.createElement('button')
    disabledButton.disabled = true
    disabledButton.textContent = 'Disabled'
    container.insertBefore(disabledButton, firstButton)

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    // Should focus first enabled button, not disabled one
    expect(document.activeElement).toBe(firstButton)
  })

  it('skips elements with tabindex=-1', () => {
    const hiddenButton = document.createElement('button')
    hiddenButton.tabIndex = -1
    hiddenButton.textContent = 'Hidden from tab'
    container.insertBefore(hiddenButton, firstButton)

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    // Should focus first tabbable button
    expect(document.activeElement).toBe(firstButton)
  })

  it('includes anchors with href', () => {
    const link = document.createElement('a')
    link.href = 'https://example.com'
    link.textContent = 'Link'
    container.insertBefore(link, firstButton)

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    // Should focus the link as first focusable element
    expect(document.activeElement).toBe(link)
  })

  it('cleans up event listener on unmount', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(container)
      useFocusTrap(ref, true)
      return ref
    })

    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))

    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })
})

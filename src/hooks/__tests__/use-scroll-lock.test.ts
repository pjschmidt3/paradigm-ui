import { renderHook } from '@testing-library/react'
import { useScrollLock } from '../use-scroll-lock'

describe('useScrollLock', () => {
  let originalOverflow: string

  beforeEach(() => {
    originalOverflow = document.body.style.overflow
    document.body.style.overflow = ''
  })

  afterEach(() => {
    document.body.style.overflow = originalOverflow
  })

  it('does not change body overflow when unlocked', () => {
    renderHook(() => useScrollLock(false))

    expect(document.body.style.overflow).toBe('')
  })

  it('sets body overflow to hidden when locked', () => {
    renderHook(() => useScrollLock(true))

    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores original overflow on unlock', () => {
    document.body.style.overflow = 'auto'

    const { rerender } = renderHook(
      ({ locked }) => useScrollLock(locked),
      { initialProps: { locked: true } }
    )

    expect(document.body.style.overflow).toBe('hidden')

    rerender({ locked: false })

    expect(document.body.style.overflow).toBe('auto')
  })

  it('restores original overflow on unmount', () => {
    document.body.style.overflow = 'scroll'

    const { unmount } = renderHook(() => useScrollLock(true))

    expect(document.body.style.overflow).toBe('hidden')

    unmount()

    expect(document.body.style.overflow).toBe('scroll')
  })

  it('handles multiple lock/unlock cycles', () => {
    document.body.style.overflow = 'visible'

    const { rerender } = renderHook(
      ({ locked }) => useScrollLock(locked),
      { initialProps: { locked: false } }
    )

    expect(document.body.style.overflow).toBe('visible')

    // First lock
    rerender({ locked: true })
    expect(document.body.style.overflow).toBe('hidden')

    // First unlock
    rerender({ locked: false })
    expect(document.body.style.overflow).toBe('visible')

    // Second lock
    rerender({ locked: true })
    expect(document.body.style.overflow).toBe('hidden')

    // Second unlock
    rerender({ locked: false })
    expect(document.body.style.overflow).toBe('visible')
  })

  it('preserves empty string overflow value', () => {
    document.body.style.overflow = ''

    const { rerender } = renderHook(
      ({ locked }) => useScrollLock(locked),
      { initialProps: { locked: true } }
    )

    expect(document.body.style.overflow).toBe('hidden')

    rerender({ locked: false })

    expect(document.body.style.overflow).toBe('')
  })
})

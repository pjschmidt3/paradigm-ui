import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '../use-mobile'

// Mock matchMedia
const createMatchMedia = (matches: boolean) => {
  const listeners: Array<(e: MediaQueryListEvent) => void> = []

  return {
    matches,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn((event: string, listener: (e: MediaQueryListEvent) => void) => {
      listeners.push(listener)
    }),
    removeEventListener: jest.fn((event: string, listener: (e: MediaQueryListEvent) => void) => {
      const index = listeners.indexOf(listener)
      if (index > -1) listeners.splice(index, 1)
    }),
    dispatchEvent: jest.fn(),
    _triggerChange: (newMatches: boolean) => {
      listeners.forEach(listener =>
        listener({ matches: newMatches } as MediaQueryListEvent)
      )
    },
  }
}

describe('useIsMobile', () => {
  const originalMatchMedia = window.matchMedia

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('returns true when viewport is mobile-sized (< 768px)', () => {
    const mockMql = createMatchMedia(true)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 767px)')
  })

  it('returns false when viewport is desktop-sized (>= 768px)', () => {
    const mockMql = createMatchMedia(false)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)
  })

  it('updates when viewport resizes across breakpoint', () => {
    const mockMql = createMatchMedia(false)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)

    // Simulate resize to mobile
    act(() => {
      mockMql._triggerChange(true)
    })

    expect(result.current).toBe(true)

    // Simulate resize back to desktop
    act(() => {
      mockMql._triggerChange(false)
    })

    expect(result.current).toBe(false)
  })

  it('uses correct breakpoint (767px max-width)', () => {
    const mockMql = createMatchMedia(false)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    renderHook(() => useIsMobile())

    // Should query for max-width: 767px (768 - 1)
    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 767px)')
  })
})

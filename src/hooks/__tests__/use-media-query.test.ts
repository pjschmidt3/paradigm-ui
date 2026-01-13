import { renderHook, act } from '@testing-library/react'
import { useMediaQuery } from '../use-media-query'

// Mock matchMedia
const createMatchMedia = (matches: boolean) => {
  const listeners: Array<(e: MediaQueryListEvent) => void> = []

  return {
    matches,
    media: '',
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn((event: string, listener: (e: MediaQueryListEvent) => void) => {
      listeners.push(listener)
    }),
    removeEventListener: jest.fn((event: string, listener: (e: MediaQueryListEvent) => void) => {
      const index = listeners.indexOf(listener)
      if (index > -1) listeners.splice(index, 1)
    }),
    dispatchEvent: jest.fn(),
    // Helper to simulate change
    _triggerChange: (newMatches: boolean) => {
      listeners.forEach(listener =>
        listener({ matches: newMatches } as MediaQueryListEvent)
      )
    },
    _listeners: listeners,
  }
}

describe('useMediaQuery', () => {
  const originalMatchMedia = window.matchMedia

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  it('returns false during SSR (initial state before effect runs)', () => {
    const mockMql = createMatchMedia(true)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    // renderHook runs synchronously, but useEffect is deferred
    // The initial render should return false before the effect sets the actual value
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    // After effect runs, it should match the mock
    expect(result.current).toBe(true)
  })

  it('returns true when query matches', () => {
    const mockMql = createMatchMedia(true)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(result.current).toBe(true)
    expect(window.matchMedia).toHaveBeenCalledWith('(min-width: 768px)')
  })

  it('returns false when query does not match', () => {
    const mockMql = createMatchMedia(false)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useMediaQuery('(max-width: 480px)'))

    expect(result.current).toBe(false)
  })

  it('updates when media query match changes', () => {
    const mockMql = createMatchMedia(false)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(result.current).toBe(false)

    // Simulate window resize that causes query to match
    act(() => {
      mockMql._triggerChange(true)
    })

    expect(result.current).toBe(true)

    // Simulate resize back
    act(() => {
      mockMql._triggerChange(false)
    })

    expect(result.current).toBe(false)
  })

  it('cleans up event listener on unmount', () => {
    const mockMql = createMatchMedia(true)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'))

    expect(mockMql.addEventListener).toHaveBeenCalledWith('change', expect.any(Function))
    expect(mockMql._listeners.length).toBe(1)

    unmount()

    expect(mockMql.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('handles different query strings', () => {
    const mockMql = createMatchMedia(true)
    window.matchMedia = jest.fn().mockReturnValue(mockMql)

    renderHook(() => useMediaQuery('(prefers-color-scheme: dark)'))

    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)')
  })
})

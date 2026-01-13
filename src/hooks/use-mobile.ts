import { useMediaQuery } from "./use-media-query"

const MOBILE_BREAKPOINT = 768

/**
 * Hook that returns whether the viewport is mobile-sized.
 *
 * @returns boolean indicating if viewport width is less than 768px
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile()
 * return isMobile ? <MobileNav /> : <DesktopNav />
 * ```
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
}

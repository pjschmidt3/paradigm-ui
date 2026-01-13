import * as React from "react"

/**
 * Hook that returns whether a CSS media query matches.
 *
 * @param query - CSS media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the query currently matches
 *
 * @example
 * ```tsx
 * const isLargeScreen = useMediaQuery("(min-width: 1024px)")
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)")
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(query)

    // Set initial value
    setMatches(mql.matches)

    // Handle changes
    const onChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    mql.addEventListener("change", onChange)

    return () => {
      mql.removeEventListener("change", onChange)
    }
  }, [query])

  return matches
}

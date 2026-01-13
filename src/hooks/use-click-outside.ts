import { useEffect, useCallback, type RefObject } from 'react'

/**
 * Hook that detects clicks outside of a referenced element.
 * Useful for closing modals, dropdowns, and menus when clicking outside.
 *
 * @param ref - React ref object pointing to the element to monitor
 * @param handler - Callback function called when a click outside is detected
 * @param enabled - Whether the hook is active (default: true)
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null)
 * const [isOpen, setIsOpen] = useState(false)
 *
 * useClickOutside(ref, () => setIsOpen(false), isOpen)
 *
 * return (
 *   <div ref={ref}>
 *     {isOpen && <DropdownMenu />}
 *   </div>
 * )
 * ```
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
): void {
  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      // Don't do anything if ref is not attached
      if (!ref.current) {
        return
      }

      // Check if click was outside the ref element
      if (!ref.current.contains(event.target as Node)) {
        handler(event)
      }
    },
    [ref, handler]
  )

  useEffect(() => {
    if (!enabled) {
      return
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [enabled, handleClickOutside])
}

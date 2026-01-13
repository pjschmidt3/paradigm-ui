import { useEffect, useRef, useCallback, type RefObject } from 'react'

/**
 * Selector for all focusable elements that should be included in the focus trap.
 * Excludes disabled elements and elements with tabindex="-1".
 */
const FOCUSABLE_SELECTOR = [
  'a[href]:not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"]):not([disabled])'
].join(', ')

/**
 * Gets all focusable elements within a container.
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
}

/**
 * Hook that traps keyboard focus within a container element.
 * Essential for modal accessibility - prevents focus from escaping the modal.
 *
 * @param ref - React ref object pointing to the container element
 * @param active - Whether the focus trap is active (default: true)
 *
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null)
 * const [isOpen, setIsOpen] = useState(false)
 *
 * useFocusTrap(modalRef, isOpen)
 *
 * return (
 *   <dialog ref={modalRef} open={isOpen}>
 *     <button onClick={() => setIsOpen(false)}>Close</button>
 *     <input type="text" />
 *   </dialog>
 * )
 * ```
 */
export function useFocusTrap<T extends HTMLElement>(
  ref: RefObject<T | null>,
  active: boolean = true
): void {
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !ref.current) {
        return
      }

      const focusableElements = getFocusableElements(ref.current)

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        event.preventDefault()
        return
      }

      // Shift+Tab on first element -> go to last
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
        return
      }

      // Tab on last element -> go to first
      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
        return
      }
    },
    [ref]
  )

  useEffect(() => {
    // Handle SSR
    if (typeof document === 'undefined') {
      return
    }

    if (!active || !ref.current) {
      return
    }

    // Store currently focused element
    previouslyFocusedRef.current = document.activeElement as HTMLElement

    // Focus first focusable element
    const focusableElements = getFocusableElements(ref.current)
    const firstElement = focusableElements[0]
    if (firstElement) {
      firstElement.focus()
    }

    // Add keydown listener for tab trapping
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)

      // Restore focus to previously focused element
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus()
      }
    }
  }, [active, ref, handleKeyDown])
}

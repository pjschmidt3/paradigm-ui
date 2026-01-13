import { useEffect, useRef } from 'react'

/**
 * Hook that prevents body scrolling when active.
 * Useful for modals, drawers, and other overlay components.
 *
 * @param locked - Whether to lock body scroll
 *
 * @example
 * ```tsx
 * const [isModalOpen, setIsModalOpen] = useState(false)
 *
 * useScrollLock(isModalOpen)
 *
 * return (
 *   <button onClick={() => setIsModalOpen(true)}>
 *     Open Modal
 *   </button>
 * )
 * ```
 */
export function useScrollLock(locked: boolean): void {
  const originalOverflowRef = useRef<string | null>(null)

  useEffect(() => {
    // Handle SSR
    if (typeof document === 'undefined') {
      return
    }

    if (locked) {
      // Store original overflow value before locking (only if not already stored)
      if (originalOverflowRef.current === null) {
        originalOverflowRef.current = document.body.style.overflow
      }
      document.body.style.overflow = 'hidden'

      return () => {
        // Restore on unmount
        if (originalOverflowRef.current !== null) {
          document.body.style.overflow = originalOverflowRef.current
        }
      }
    } else {
      // Restore original overflow value when unlocking
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current
        originalOverflowRef.current = null
      }
    }
  }, [locked])
}

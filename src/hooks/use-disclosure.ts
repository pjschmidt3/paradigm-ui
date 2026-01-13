import { useCallback, useState } from 'react'

export interface UseDisclosureOptions {
  defaultOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export interface UseDisclosureReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export function useDisclosure(
  options: UseDisclosureOptions = {}
): UseDisclosureReturn {
  const { defaultOpen = false, onOpen, onClose } = options
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const open = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        onOpen?.()
        return true
      }
      return prev
    })
  }, [onOpen])

  const close = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) {
        onClose?.()
        return false
      }
      return prev
    })
  }, [onClose])

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) {
        onClose?.()
        return false
      } else {
        onOpen?.()
        return true
      }
    })
  }, [onOpen, onClose])

  return { isOpen, open, close, toggle }
}

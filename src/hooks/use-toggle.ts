import { useCallback, useState } from 'react'

export interface UseToggleActions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
  setValue: (value: boolean) => void
}

export function useToggle(
  initialValue: boolean = false
): [boolean, UseToggleActions] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const setValueAction = useCallback((newValue: boolean) => {
    setValue(newValue)
  }, [])

  return [
    value,
    {
      toggle,
      setTrue,
      setFalse,
      setValue: setValueAction
    }
  ]
}

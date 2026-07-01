import { useState, useEffect, useCallback } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.classList.add('dark-mode-transition')
    localStorage.setItem('theme', 'dark')
    const timer = setTimeout(() => root.classList.remove('dark-mode-transition'), 400)
    return () => clearTimeout(timer)
  }, [])

  const toggle = useCallback(() => {}, [])

  return [isDark, toggle]
}

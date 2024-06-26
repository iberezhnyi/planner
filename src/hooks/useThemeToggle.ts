import { useEffect, useState } from "react"

export const useThemeToggle = (): [string, () => void] => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = (newTheme: string) => {
    window.localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  const themeToggler = () =>
    theme === "light" ? toggleTheme("dark") : toggleTheme("light")

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}

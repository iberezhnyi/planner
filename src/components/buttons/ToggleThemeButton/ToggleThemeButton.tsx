import { useThemeToggle } from 'hooks'
import { FC } from 'react'

export const ToggleThemeButton: FC = () => {
  const [theme, setTheme] = useThemeToggle()

  return (
    <button type="button" onClick={() => setTheme(theme)}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} theme
    </button>
  )
}

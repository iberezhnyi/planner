import { useThemeToggle } from "hooks"

export const ToggleThemeButton: React.FC = () => {
  const [theme, setTheme] = useThemeToggle()

  return (
    <button type="button" onClick={() => setTheme(theme)}>
      Switch to {theme === "light" ? "Dark" : "Light"} theme
    </button>
  )
}

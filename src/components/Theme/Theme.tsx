import { useThemeToggle } from "hooks"
import { ThemeProvider } from "styled-components"
import { themes } from "styles"
import { IChildren } from "types"

const Theme: React.FC<IChildren> = ({ children }) => {
  const [theme, themeToggler] = useThemeToggle()

  const themeMode = theme === "light" ? themes.light : themes.dark

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default Theme

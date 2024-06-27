import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import { selectTheme } from "store"
import { themes } from "styles"

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector(selectTheme)

  const themeMode = theme === "light" ? themes.light : themes.dark

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default Theme

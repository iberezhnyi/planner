import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from 'store'
import { Global, global, themes } from 'styles'

export const Theme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeName = useSelector(selectTheme)
  const theme = { global, ...themes[themeName] }

  console.log('themeMode', theme)

  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  )
}

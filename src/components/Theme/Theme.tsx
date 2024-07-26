import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { SnackbarProvider } from 'notistack'
import { selectTheme } from 'store'
import { Global, global, themes } from 'styles'

export const Theme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeName = useSelector(selectTheme)
  const theme = { global, ...themes[themeName] }

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider autoHideDuration={3000}>
        <Global />
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { SnackbarProvider } from 'notistack'
import { selectTheme } from 'store'
import { Global, global, themes } from 'styles'
import { Notifications } from 'components/common'

export const Theme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeName = useSelector(selectTheme)
  const theme = { global, ...themes[themeName] }

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        Components={{
          success: Notifications,
          error: Notifications,
        }}
      >
        <Global />
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  )
}

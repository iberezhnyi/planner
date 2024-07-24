import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from 'store'
import { Global, global, themes } from 'styles'

// import { CombinedTheme } from 'types'

export const Theme: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeName = useSelector(selectTheme)
  const theme = { global, ...themes[themeName] }

  // const theme={themeName === "dark" ? themes.dark : themes.light}

  // console.log('themeMode', theme)

  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  )
}

// : {
//     global: IGlobalStyles
//   } & ITheme

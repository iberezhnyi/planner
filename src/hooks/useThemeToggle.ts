import { useDispatch, useSelector } from 'react-redux'
import { changeThemeAction } from 'store/themeSlice'
import { selectTheme } from 'store/selectors'
import { ThemeNameType } from 'types'

export const useThemeToggle = (): [
  ThemeNameType,
  (theme: ThemeNameType) => void
] => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const setTheme = (theme: ThemeNameType) =>
    theme === 'light'
      ? dispatch(changeThemeAction('dark'))
      : dispatch(changeThemeAction('light'))

  return [theme, setTheme]
}

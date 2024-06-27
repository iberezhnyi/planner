import { useDispatch, useSelector } from "react-redux"
import { selectTheme, changeTheme } from "store"

export const useThemeToggle: () => [string, () => void] = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectTheme)

  const setTheme = (theme: string) =>
    theme === "light"
      ? dispatch(changeTheme("dark"))
      : dispatch(changeTheme("light"))

  return [theme, setTheme]
}

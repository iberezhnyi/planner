import { FC } from 'react'
import { useThemeToggle } from 'hooks'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './ToggleThemeButton.styled'

export const ToggleThemeButton: FC = () => {
  const [theme, setTheme] = useThemeToggle()

  return (
    <SC.ToggleThemeButton onClick={() => setTheme(theme)}>
      <SC.ToggleThemeIcon>
        <use href={`${sprite}#${theme === 'light' ? 'moon-stars' : 'sun'}`} />
      </SC.ToggleThemeIcon>
    </SC.ToggleThemeButton>
  )
}

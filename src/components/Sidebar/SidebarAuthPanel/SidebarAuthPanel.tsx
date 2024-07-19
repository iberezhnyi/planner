import { FC } from 'react'
import * as SC from './SidebarAuthPanel.styled'
import { ToggleThemeButton } from 'components/buttons'

export const SidebarAuthPanel: FC = () => {
  return (
    <SC.SidebarAuthPanel>
      <ToggleThemeButton />
    </SC.SidebarAuthPanel>
  )
}

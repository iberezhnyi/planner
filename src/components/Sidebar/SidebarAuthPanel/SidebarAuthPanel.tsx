import { FC } from 'react'
import * as SC from './SidebarAuthPanel.styled'
import { selectProfile } from 'store'
import { useSelector } from 'react-redux'

export const SidebarAuthPanel: FC = () => {
  const profile = useSelector(selectProfile)
  return (
    <SC.SidebarAuthPanel>
      <SC.SidebarAuthPanelList>
        <SC.SidebarAuthItem>
          <SC.SidebarAuthImg src={profile?.image} alt="User photo" width="60" />
        </SC.SidebarAuthItem>
        <SC.SidebarAuthItem>
          <SC.SidebarAuthInfo>{profile?.firstName}</SC.SidebarAuthInfo>
        </SC.SidebarAuthItem>
        <SC.SidebarAuthItem>
          <SC.SidebarAuthInfo>{profile?.email}</SC.SidebarAuthInfo>
        </SC.SidebarAuthItem>
      </SC.SidebarAuthPanelList>
    </SC.SidebarAuthPanel>
  )
}

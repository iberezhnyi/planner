import { FC } from 'react'
import * as SC from './SidebarAuthPanel.styled'
import { selectProfile } from 'store/selectors'
import { useSelector } from 'react-redux'
// import UserImagePlaceholder from 'assets/images/user/user-image-placeholder.png'

import sprite from 'assets/icons/sprite.svg'

export const SidebarAuthPanel: FC = () => {
  const profile = useSelector(selectProfile)

  return (
    <SC.SidebarAuthPanel>
      <SC.SidebarAuthPanelList>
        <SC.SidebarAuthItem>
          <SC.UserAvatar>
            <use href={`${sprite}#user-avatar`} />
          </SC.UserAvatar>

          {/* <SC.SidebarAuthImg
            src={profile?.image || UserImagePlaceholder}
            alt="User photo"
            width="60"
          /> */}
        </SC.SidebarAuthItem>
        <SC.SidebarAuthItem>
          <SC.SidebarAuthInfo>
            {profile?.email.split('@')[0]}
          </SC.SidebarAuthInfo>
        </SC.SidebarAuthItem>
        <SC.SidebarAuthItem>
          <SC.SidebarAuthInfo>{profile?.email}</SC.SidebarAuthInfo>
        </SC.SidebarAuthItem>
      </SC.SidebarAuthPanelList>
    </SC.SidebarAuthPanel>
  )
}

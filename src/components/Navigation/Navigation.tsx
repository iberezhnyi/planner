import { FC } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as SC from './Navigation.styled'

interface NavigationProps {
  setMobileMenu: (mobileMenu: boolean) => void
}

export const Navigation: FC<NavigationProps> = ({ setMobileMenu }) => {
  const location = useLocation()

  const isCalendarActive = location.pathname.startsWith('/calendar')

  return (
    <SC.Navigation>
      <SC.NavigationItem
        component={<NavLink to="/" onClick={() => setMobileMenu(false)} />}
      >
        Home
      </SC.NavigationItem>
      <SC.NavigationItem
        component={
          <NavLink
            to="calendar/weeks"
            onClick={() => setMobileMenu(false)}
            className={isCalendarActive ? 'active' : ''}
          />
        }
      >
        Calendar
      </SC.NavigationItem>
      {/* <SC.NavigationItem
        component={
          <NavLink to="/services" onClick={() => setMobileMenu(false)} />
        }
      >
        Services
      </SC.NavigationItem>
      <SC.NavigationItem
        component={
          <NavLink to="/contacts" onClick={() => setMobileMenu(false)} />
        }
      >
        Contacts
      </SC.NavigationItem> */}
    </SC.Navigation>
  )
}

// flexGrow: '1', backgroundColor: 'orange'

import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import * as SC from './Navigation.styled'

interface NavigationProps {
  setMobileMenu: (mobileMenu: boolean) => void
}

export const Navigation: FC<NavigationProps> = ({ setMobileMenu }) => {
  return (
    <SC.Navigation>
      <SC.NavigationItem
        component={<NavLink to="/" onClick={() => setMobileMenu(false)} />}
      >
        Home
      </SC.NavigationItem>
      <SC.NavigationItem
        component={<NavLink to="/about" onClick={() => setMobileMenu(false)} />}
      >
        About
      </SC.NavigationItem>
      <SC.NavigationItem
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
      </SC.NavigationItem>
    </SC.Navigation>
  )
}

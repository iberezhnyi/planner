import { NavLink } from "react-router-dom"
import * as SC from "./Navigation.styled"

const Navigation = () => {
  return (
    <SC.Navigation>
      <SC.NavigationItem component={<NavLink to="/" />}>Home</SC.NavigationItem>
      <SC.NavigationItem component={<NavLink to="/about" />}>
        About
      </SC.NavigationItem>
      <SC.NavigationItem component={<NavLink to="/services" />}>
        Services
      </SC.NavigationItem>
      <SC.NavigationItem component={<NavLink to="/contacts" />}>
        Contacts
      </SC.NavigationItem>
    </SC.Navigation>
  )
}

export default Navigation

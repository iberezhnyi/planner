import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

const commonStyles = {
  textDecoration: "none",

  padding: "5px 15px",

  borderRadius: "30px",
  backgroundImage:
    "linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)",
  backgroundPosition: "100% 0",
  backgroundSize: "200% 200%",

  color: "white",
  boxShadow: "0 16px 32px 0 rgba(0, 40, 120, .35)",
  transition: "500ms",
}

export const Button = styled.button`
  ${commonStyles}

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }

  &:active {
    background-color: tomato;
  }
`

export const ButtonLink = styled(Link)`
  ${commonStyles}

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }

  &:active {
    background-color: tomato;
  }
`

export const ButtonNavLink = styled(NavLink)`
  ${commonStyles}

  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }

  &:active {
    background-color: tomato;
  }
`

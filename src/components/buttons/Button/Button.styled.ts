import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

const commonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "0.8125rem",
  padding: "14px",

  background: "rgb(62, 133, 243)",
  boxShadow: "4px 2px 16px rgba(136, 165, 191, 0.48)",
  borderRadius: "16px",
  border: "none",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "0.875rem",
  lineHeight: "1.125rem",
  letterSpacing: "-0.02em",
  color: "rgb(255, 255, 255)",
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

import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { global } from 'styles'
// import { globalStyles } from 'styles/globalStyles'
// import { globalStyles } from "styles"

const commonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  columnGap: '0.8125rem',
  padding: '0.875rem',

  fontWeight: `${global.text.fontWeight.sb}`,

  borderRadius: '1rem',
}

export const Button = styled.button`
  ${commonStyles}

  color: ${({ theme }) => theme.btnTextColor};

  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }
`

export const ButtonLink = styled(Link)`
  ${commonStyles}

  color: ${({ theme }) => theme.btnTextColor};

  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }
`

export const ButtonNavLink = styled(NavLink)`
  ${commonStyles}

  color: ${({ theme }) => theme.btnTextColor};

  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
  }
`

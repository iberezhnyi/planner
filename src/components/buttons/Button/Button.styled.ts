import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { btnCommonStyles } from 'styles/common.styled'

export const Button = styled.button`
  ${btnCommonStyles}

  padding: ${({ theme }) => theme.global.spacing(4)};

  color: ${({ theme }) => theme.btnTextColor};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnDisabledTextColor};
  }
`

export const ButtonLink = styled(Link)`
  /* ${btnCommonStyles}

  color: ${({ theme }) => theme.btnTextColor};

  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  } */
`

export const ButtonNavLink = styled(NavLink)`
  /* ${btnCommonStyles}

  color: ${({ theme }) => theme.btnTextColor};

  background-color: ${({ theme }) => theme.btnBgColor};

  &:hover {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  }

  &:active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  } */
`

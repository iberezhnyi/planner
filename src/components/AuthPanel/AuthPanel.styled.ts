import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { btnCommonStyles } from 'styles/common.styled'

export const ButtonAuth = styled.button`
  ${btnCommonStyles}

  color: ${({ theme }) => theme.global.text.color.white};

  &.logout {
    color: ${({ theme }) => theme.textColor};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`

export const LinkAuth = styled(NavLink)`
  ${btnCommonStyles}

  color: ${({ theme }) => theme.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`

export const Username = styled.p`
  margin-bottom: 0;
`

export const IconUser = styled.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`

export const IconDropdown = styled.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`

export const List = styled.ul`
  padding: ${({ theme }) => theme.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({ theme }) => theme.pageBackground};
`

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.global.spacing(3)};
  }
`

export const ListLink = styled(NavLink)`
  ${btnCommonStyles}

  color: ${({ theme }) => theme.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`

export const IconListItem = styled.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`

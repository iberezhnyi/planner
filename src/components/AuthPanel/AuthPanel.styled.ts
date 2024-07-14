import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Username = styled.p`
  margin-bottom: 0;

  color: ${({ theme }) => theme.linkColor};
`

export const IconUser = styled.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: ${({ theme }) => theme.textColor};
`

export const IconDropdown = styled.svg`
  width: 1rem;
  height: 1rem;

  &.open {
    transform: rotate(180deg);
  }
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};

  color: ${({ theme }) => theme.linkColor};
`

export const List = styled.ul`
  padding: ${({ theme }) => theme.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({ theme }) => theme.primaryBgColor};
`

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.global.spacing(3)};
  }
`

export const IconListItem = styled.svg`
  width: 1rem;
  height: 1rem;
`

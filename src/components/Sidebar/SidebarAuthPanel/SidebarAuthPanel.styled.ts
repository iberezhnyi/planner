import styled from 'styled-components'
import { container } from 'styles'

export const SidebarAuthPanel = styled.div`
  padding-top: ${({ theme }) => theme.global.spacing(12)};
  padding-bottom: ${({ theme }) => theme.global.spacing(2)};

  background-color: ${({ theme }) => theme.secondaryBgColor};
`
// padding: ${({ theme }) => theme.global.spacing(14, 4, 2, 4)};

export const SidebarAuthPanelList = styled.ul`
  ${container}
`

export const SidebarAuthItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.global.spacing(2)};
  }
`

export const SidebarAuthImg = styled.img`
  border-radius: 50%;
`

export const SidebarAuthInfo = styled.p`
  color: ${({ theme }) => theme.textColorSecondary};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.m};
`

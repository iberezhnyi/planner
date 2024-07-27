import styled from 'styled-components'
import { container, media, section } from 'styles'

export const Header = styled.header`
  ${section}
  background-color: ${({ theme }) => theme.headerBgColor};
`

export const HeaderContainer = styled.div`
  ${container}

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet`
    justify-content: flex-end;
  `}
`

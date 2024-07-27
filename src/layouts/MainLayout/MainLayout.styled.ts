import styled from 'styled-components'
import { container, media } from 'styles'

export const LayoutInnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  ${media.tablet`
  padding-left: 0;
  `}

  ${media.desktop`
  ${container}
  `}
`

export const Main = styled.main`
  background-color: ${({ theme }) => theme.mainBgColor};
  flex-grow: 1;
`

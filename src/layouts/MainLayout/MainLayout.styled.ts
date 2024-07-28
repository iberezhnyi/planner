import styled from 'styled-components'
import { container, section } from 'styles'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Main = styled.main`
  background-color: ${({ theme }) => theme.mainBgColor};
  flex-grow: 1;

  ${section}

  ${container}
`

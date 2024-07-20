import styled from 'styled-components'
import { Container } from 'styles/Components.styled'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.headerBgColor};
`

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

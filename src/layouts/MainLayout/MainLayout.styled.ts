import styled from "styled-components"

export const MainLayout = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.pageBackground};
`

export const MainLayoutInnerWrapper = styled.div`
  flex-grow: 1;
  display: flex;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`

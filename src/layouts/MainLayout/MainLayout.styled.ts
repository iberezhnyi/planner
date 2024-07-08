import styled from "styled-components"

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 100vw;

  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.text.fontSize.s};
  font-weight: ${({ theme }) => theme.text.fontWeight.r};
  line-height: ${({ theme }) => theme.text.lineHeight};

  background: ${({ theme }) => theme.pageBackground};

  a {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
  }
`

export const MainLayoutInnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`

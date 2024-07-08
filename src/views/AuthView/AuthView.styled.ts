import styled from "styled-components"

export const AuthSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: 90%;
  padding: 2.5rem 1.5rem;

  background-color: ${({ theme }) => theme.primaryBgColor};
  border-radius: 0.5rem;
`

export const Title = styled.h1`
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.titleColor};
  font-size: ${({ theme }) => theme.text.fontSize.l};
  font-weight: ${({ theme }) => theme.text.fontWeight.sb};
`

export const Text = styled.p`
  margin-bottom: 0;

  text-align: center;
`

import styled from "styled-components"

export const RegisterSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryBgColor};
  color: black;
  border-radius: 8px;
  padding: 40px 24px;
  width: 90%;
`
export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${(props) => props.theme.titleColor};
`

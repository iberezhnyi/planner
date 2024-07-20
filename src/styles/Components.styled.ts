import styled, { css } from 'styled-components'

export const btnCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};
`

export const Section = styled.div`
  padding: ${({ theme }) => theme.global.spacing(2, 0)};
`

export const Container = styled.div`
  padding: ${({ theme }) => theme.global.spacing(0, 3)};
  margin-left: auto;
  margin-right: auto;
`

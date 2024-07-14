import styled from 'styled-components'

export const EyeIcon1 = styled.svg`
  position: absolute;
  top: 45%;
  right: 2%;

  width: 2rem;
  height: 2rem;

  fill: ${({ theme }) => theme.linkColor};
  stroke: ${({ theme }) => theme.linkColor};

  &.active {
    fill: ${({ theme }) => theme.linkActiveColor};
    stroke: ${({ theme }) => theme.linkActiveColor};
  }
`

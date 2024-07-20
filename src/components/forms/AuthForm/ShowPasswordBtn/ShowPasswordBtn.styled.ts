import styled from 'styled-components'

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 35%;
  right: 0;

  padding: ${({ theme }) => theme.global.spacing(2)};
`

export const EyeIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: ${({ theme }) => theme.iconColor};

  &.active {
    fill: ${({ theme }) => theme.iconActiveColor};
  }
`

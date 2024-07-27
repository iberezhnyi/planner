import { ColorRingProps } from 'react-loader-spinner'
import styled from 'styled-components'

export const mainLoaderColors: ColorRingProps['colors'] = [
  '#4CCCFF',
  '#4CCCFF',
  '#4CCCFF',
  '#4CCCFF',
  '#4CCCFF',
]

export const buttonLoaderColors: ColorRingProps['colors'] = [
  '#707579',
  '#707579',
  '#707579',
  '#707579',
  '#707579',
]

export const StyledWrapper = styled.div<{ $isButton?: boolean }>`
  height: ${(props) => (props.$isButton ? '1.25rem' : '1.75rem')};
  width: ${(props) => (props.$isButton ? '1.25rem' : '1.75rem')};

  &.large {
    width: 10rem;
    height: 10rem;
  }

  &.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

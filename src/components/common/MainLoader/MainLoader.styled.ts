import styled from 'styled-components'
import { Loader } from '../Loader/Loader'

export const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(23, 24, 32, 0.5);
  backdrop-filter: blur(3px);
`
export const LoaderStyled = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

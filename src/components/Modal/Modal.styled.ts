import Modal from 'react-modal'
import styled from 'styled-components'
import { global } from 'styles'

export const customStyles = {
  overlay: {
    zIndex: 2,
    backgroundColor: global.backdrop.backgroundColor,
    backdropFilter: global.backdrop.backdropFilter,
  },
}

export const ModalStyled = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

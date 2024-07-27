import { FC, ReactNode } from 'react'
import * as SC from './Modal.styled'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children: ReactNode
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEsc?: boolean
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  children,
}) => {
  return (
    <SC.ModalStyled
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      contentLabel="Modal"
      parentSelector={() =>
        document.querySelector('#modal-root') as HTMLElement
      }
      preventScroll={true}
      style={SC.customStyles}
    >
      {children}
    </SC.ModalStyled>
  )
}

import { FC, useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Loader } from '../Loader/Loader'

interface MainLoaderProps {
  isFetching: boolean
}

export const MainLoader: FC<MainLoaderProps> = ({ isFetching }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isFetching)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <Loader className="large" />
    </Modal>
  )
}

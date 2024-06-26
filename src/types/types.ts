import { ReactNode } from "react"

export interface IChildren extends React.PropsWithChildren {}

export interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  submitButton?: string
}

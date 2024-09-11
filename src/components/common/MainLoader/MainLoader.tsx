import { FC, useEffect } from 'react'
import * as SC from './MainLoader.styled'

export const MainLoader: FC = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll')

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  return (
    <SC.Backdrop>
      <SC.LoaderStyled className="large" />
    </SC.Backdrop>
  )
}

import { FC } from 'react'
import * as SC from './HomeView.styled'
import { Home } from 'components/Home'

const HomeView: FC = () => {
  return (
    <SC.Home>
      <Home />
    </SC.Home>
  )
}

export default HomeView

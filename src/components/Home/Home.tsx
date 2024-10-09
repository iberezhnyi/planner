import { FC } from 'react'
import DigitalPlanner from 'assets/images/home/digital-planner-app-removebg.png'
import * as SC from './Home.styled'

export const Home: FC = () => {
  return (
    <SC.ContentWrapper>
      <SC.Title>Your digital planner</SC.Title>
      <img src={DigitalPlanner} alt="" />
    </SC.ContentWrapper>
  )
}

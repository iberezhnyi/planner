import { FC } from 'react'
import { Link } from 'react-router-dom'
import * as SC from './NotFoundView.styled'

const NotFoundView: FC = () => {
  return (
    <SC.Section>
      <SC.Container>
        <p>404 Not Found</p>
        <p>This page doesn't exist.</p>
        <Link to="/">Open home page</Link>
      </SC.Container>
    </SC.Section>
  )
}

export default NotFoundView

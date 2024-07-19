import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from 'store/authSlice/authApi'
import { AuthForm } from 'components/forms'
import * as path from 'routsConfig'
import * as SC from './AuthView.styled'
import { ILoginFormValues, IRegisterFormValues } from 'types'

const AuthView: FC = () => {
  const location = useLocation()
  const [registerUser] = useRegisterUserMutation()
  const [loginUser] = useLoginUserMutation()

  const isLoginPage = location.pathname === path.login

  const handleAuth = (body: ILoginFormValues | IRegisterFormValues) => {
    isLoginPage
      ? loginUser(body as ILoginFormValues)
      : registerUser(body as IRegisterFormValues)
    console.log(`AuthView body in :>> ${location.pathname} form`, body)
  }

  return (
    <SC.AuthSection>
      <SC.ContentWrapper>
        <SC.Title>{isLoginPage ? 'Log in' : 'Register'}</SC.Title>

        <AuthForm auth={handleAuth} />

        <SC.Text>
          {isLoginPage
            ? "Don't have an account yet?"
            : 'Have you joined us yet?'}
          {'\u00A0'}
          <Link to={isLoginPage ? '/register' : '/login'}>
            {isLoginPage ? 'Register' : 'Log in'}
          </Link>
        </SC.Text>
      </SC.ContentWrapper>
    </SC.AuthSection>
  )
}

export default AuthView

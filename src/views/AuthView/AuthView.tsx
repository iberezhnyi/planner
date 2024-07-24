import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoginUserMutation, useRegisterUserMutation } from 'store'
import * as path from 'routsConfig'
import { AuthForm } from 'components/forms'
import {
  IBasicAuthFormValues,
  ILoginFormValues,
  IRegisterFormValues,
} from 'types'
import * as SC from './AuthView.styled'
import { getErrorMessage } from 'helpers'

const AuthView: FC = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation()
  const [registerUser] = useRegisterUserMutation({
    fixedCacheKey: 'register-user',
  })
  const [loginUser] = useLoginUserMutation({
    fixedCacheKey: 'login-user',
  })

  useEffect(() => {
    setErrorMessage('')
  }, [location.pathname])

  const isLoginPage = location.pathname === path.login

  const handleAuth = async (body: ILoginFormValues | IBasicAuthFormValues) => {
    try {
      if (isLoginPage) {
        await loginUser(body as ILoginFormValues).unwrap()

        console.log(`AuthView body in :>> ${location.pathname} form`, body)
      } else {
        const { email, password, firstName } = body as IBasicAuthFormValues
        const registerBody: IRegisterFormValues = {
          email,
          password,
          firstName,
        }

        await registerUser(registerBody).unwrap()

        console.log(
          `AuthView body in :>> ${location.pathname} form`,
          registerBody
        )
      }
    } catch (err) {
      console.log('err QQQQQQQQQQ:>> ', err)

      setErrorMessage(getErrorMessage(err))
    }
  }

  return (
    <SC.AuthSection>
      <SC.ContentWrapper>
        {errorMessage && <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>}

        <SC.Title>{isLoginPage ? 'Log in' : 'Register'}</SC.Title>
        <AuthForm auth={handleAuth} />
        <SC.Text>
          {isLoginPage
            ? "Don't have an account yet?"
            : 'Have you joined us yet?'}
          {'\u00A0'}
          <SC.AuthLink to={isLoginPage ? '/register' : '/login'}>
            {isLoginPage ? 'Register' : 'Log in'}
          </SC.AuthLink>
        </SC.Text>
      </SC.ContentWrapper>
    </SC.AuthSection>
  )
}

export default AuthView

import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLoginUserMutation, useRegisterUserMutation } from 'store/authApi'
import * as path from 'routsConfig'
import {
  IBasicAuthFormValues,
  ILoginFormValues,
  IRegisterFormValues,
} from 'types'
import {
  errorNotification,
  getErrorMessage,
  successNotification,
} from 'helpers'
import { AuthForm } from 'components/forms'
import { MainLoader } from 'components/common'
import * as SC from './AuthView.styled'

const AuthView: FC = () => {
  // const [errorMessage, setErrorMessage] = useState('')

  const location = useLocation()
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterUserMutation({
      fixedCacheKey: 'register-user',
    })
  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation({
    fixedCacheKey: 'login-user',
  })

  useEffect(() => {
    // setErrorMessage('')
  }, [location.pathname])

  const isLoginPage = location.pathname === path.login

  const handleAuth = async (body: ILoginFormValues | IBasicAuthFormValues) => {
    try {
      if (isLoginPage) {
        // setErrorMessage('')
        const data = await loginUser(body as ILoginFormValues).unwrap()

        successNotification(`Welcome back, ${data.user.email}!`)
      } else {
        const { email, password, firstName } = body as IBasicAuthFormValues
        const registerBody: IRegisterFormValues = {
          email,
          password,
          firstName,
        }

        // setErrorMessage('')
        const data = await registerUser(registerBody).unwrap()

        successNotification(
          `Welcome, ${data.user.email}! Thank you for registering!`
        )
      }
    } catch (err: unknown) {
      console.log('Error:', err)

      if (err && typeof err === 'object' && 'data' in err) {
        const errorObj = err as { data?: { message?: string } }
        const message = errorObj?.data?.message

        if (message) {
          console.log('Error message:', message)
          errorNotification(getErrorMessage(message))
        }
      }

      return err
    }
  }

  return (
    <>
      {(isRegisterLoading || isLoginLoading) && <MainLoader />}

      <SC.AuthSection>
        <SC.ContentWrapper>
          {/* {errorMessage && <SC.ErrorMessage>{errorMessage}</SC.ErrorMessage>} */}
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
    </>
  )
}

export default AuthView

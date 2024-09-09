import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Formik } from 'formik'
import { useLoginUserMutation, useRegisterUserMutation } from 'store/authApi'
import { ShowPasswordBtn } from './ShowPasswordBtn/ShowPasswordBtn'
import * as path from 'routsConfig'
import { loginFormSchema, registerFormSchema } from '../schemas'
import * as SC from './AuthForm.styled'
import sprite from 'assets/icons/sprite.svg'
import {
  IBasicAuthFormValues,
  ILoginFormValues,
  IRegisterFormValues,
} from 'types'
import { Loader } from 'components/common'

interface AuthFormProps {
  auth: (body: ILoginFormValues | IRegisterFormValues) => void
}

type HandleSubmitType = (
  body: ILoginFormValues | IBasicAuthFormValues,
  { resetForm }: { resetForm: () => void }
) => void

const initialRegisterValues: IBasicAuthFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
}

const initialLoginValues: ILoginFormValues = {
  email: '',
  password: '',
}

export const AuthForm: FC<AuthFormProps> = ({ auth }) => {
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [, { isLoading: isRegisterLoading }] = useRegisterUserMutation({
    fixedCacheKey: 'register-user',
  })
  const [, { isLoading: isLoginLoading }] = useLoginUserMutation({
    fixedCacheKey: 'login-user',
  })
  const isLoginPage = location.pathname === path.login

  const togglePassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  const handleSubmit: HandleSubmitType = (body, { resetForm }) => {
    auth(body)
    resetForm()
  }

  return (
    <Formik
      key={location.pathname}
      initialValues={isLoginPage ? initialLoginValues : initialRegisterValues}
      validationSchema={isLoginPage ? loginFormSchema : registerFormSchema}
      onSubmit={handleSubmit}
    >
      <SC.FormStyled autoComplete="on">
        <label htmlFor="email">
          <SC.FormText>Email *</SC.FormText>
          <SC.Input type="email" name="email" />
          <SC.ErrorMessageStyled name="email" component="div" />
        </label>

        <SC.Label htmlFor="password">
          <SC.FormText>Password *</SC.FormText>
          <SC.Input type={showPassword ? 'text' : 'password'} name="password" />

          <ShowPasswordBtn
            showPassword={showPassword}
            togglePassword={togglePassword}
          />

          <SC.ErrorMessageStyled name="password" component="div" />
        </SC.Label>

        {!isLoginPage && (
          <SC.Label htmlFor="confirmPassword">
            <SC.FormText>Confirm Password *</SC.FormText>
            <SC.Input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
            />

            <ShowPasswordBtn
              showPassword={showConfirmPassword}
              togglePassword={toggleConfirmPassword}
            />

            <SC.ErrorMessageStyled name="confirmPassword" component="div" />
          </SC.Label>
        )}

        {!isLoginPage && (
          <label htmlFor="firstName">
            <SC.FormText>First Name *</SC.FormText>
            <SC.Input type="text" name="firstName" />
            <SC.ErrorMessageStyled name="firstName" component="div" />
          </label>
        )}

        <SC.Button type="submit" disabled={isLoginLoading || isRegisterLoading}>
          {isLoginPage ? 'Log in' : 'Register'}

          {isLoginLoading || isRegisterLoading ? (
            <Loader $isButton />
          ) : (
            <SC.IconLogin>
              <use href={`${sprite}#login`} />
            </SC.IconLogin>
          )}
        </SC.Button>
      </SC.FormStyled>
    </Formik>
  )
}

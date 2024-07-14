import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Formik, FormikErrors } from 'formik'
import { Button } from 'components/buttons'
import ShowPasswordBtn from './ShowPasswordBtn/ShowPasswordBtn'
import * as path from 'routsConfig'
import { loginFormSchema, registerFormSchema } from '../schemas'
import * as SC from './AuthForm.styled'
import sprite from 'assets/icons/sprite.svg'

interface AuthFormProps {
  auth: (values: Record<string, string>) => void
}
const initialRegisterValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
}

const initialLoginValues = {
  email: '',
  password: '',
}

export const AuthForm: React.FC<AuthFormProps> = ({ auth }) => {
  const location = useLocation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isLoginPage = location.pathname === path.login

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (
    values: Record<string, string>,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(`values in :>> ${location.pathname} form`, values)

    auth(values)

    resetForm()
  }

  return (
    <Formik
      initialValues={isLoginPage ? initialLoginValues : initialRegisterValues}
      validationSchema={isLoginPage ? loginFormSchema : registerFormSchema}
      onSubmit={handleSubmit}
    >
      {({ setErrors }) => (
        <>
          <FormObserver setErrors={setErrors} pathname={location.pathname} />
          <SC.FormStyled autoComplete="on">
            <label htmlFor="email">
              <SC.FormText>Email *</SC.FormText>
              <SC.InputStyled type="email" name="email" />
              <SC.ErrorMessageStyled name="email" component="div" />
            </label>

            <SC.Label htmlFor="password">
              <SC.FormText>Password *</SC.FormText>
              <SC.InputStyled
                type={showPassword ? 'text' : 'password'}
                name="password"
              />

              <ShowPasswordBtn
                showPassword={showPassword}
                togglePassword={togglePassword}
              />

              <SC.ErrorMessageStyled name="password" component="div" />
            </SC.Label>

            {!isLoginPage && (
              <SC.Label htmlFor="confirmPassword">
                <SC.FormText>Confirm Password *</SC.FormText>
                <SC.InputStyled
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
                <SC.InputStyled type="text" name="firstName" />
                <SC.ErrorMessageStyled name="firstName" component="div" />
              </label>
            )}

            <Button type="submit">
              {isLoginPage ? 'Log in' : 'Register'}
              <SC.IconLogin>
                <use href={`${sprite}#login`} />
              </SC.IconLogin>
            </Button>
          </SC.FormStyled>
        </>
      )}
    </Formik>
  )
}

interface FormObserverProps {
  setErrors: (
    errors: FormikErrors<{
      email: string
      password: string
      confirmPassword: string
    }>
  ) => void

  pathname: string
}

const FormObserver: React.FC<FormObserverProps> = ({ setErrors, pathname }) => {
  useEffect(() => {
    setErrors({})
  }, [pathname, setErrors])

  return null
}

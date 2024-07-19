import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Formik, FormikErrors, useFormikContext } from 'formik'
import { Button } from 'components/buttons'
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

  const isLoginPage = location.pathname === path.login

  const togglePassword = () => setShowPassword((prev) => !prev)
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  const handleSubmit: HandleSubmitType = (body, { resetForm }) => {
    if (isLoginPage) {
      auth(body as ILoginFormValues)
    } else {
      const { email, password, firstName } = body as IBasicAuthFormValues
      const registerBody: IRegisterFormValues = {
        email,
        password,
        firstName,
      }
      auth(registerBody)
    }

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
    errors: FormikErrors<ILoginFormValues | IRegisterFormValues>
  ) => void
  pathname: string
}

const FormObserver: FC<FormObserverProps> = ({ setErrors, pathname }) => {
  const { resetForm } = useFormikContext<
    ILoginFormValues | IBasicAuthFormValues
  >()

  useEffect(() => {
    setErrors({})
    resetForm()
  }, [pathname, setErrors, resetForm])

  return null
}

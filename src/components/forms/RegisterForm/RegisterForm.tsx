import { Formik } from "formik"
import * as yup from "yup"
import * as SC from "./RegisterForm.styled"
import { useState } from "react"
import ShowPasswordBtn from "./ShowPasswordBtn/ShowPasswordBtn"
import { Button } from "components/buttons"
import loginIcon from "assets/icons/login.svg"

interface RegisterFormValues {
  email: string
  password: string
  confirmPassword: string
  firstName: string
}

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(12, "Password must not exceed 12 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
})

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
}

export const RegisterForm = ({ register }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (
    values: RegisterFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("values in RegisterForm :>> ", values)

    register(values)

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <SC.FormStyled autoComplete="on">
        <label htmlFor="email">
          <SC.FormText>Email</SC.FormText>
          <SC.InputStyled type="email" name="email" />
          <SC.ErrorMessageStyled name="email" component="div" />
        </label>
        <SC.Label htmlFor="password">
          <SC.FormText>Password</SC.FormText>
          <SC.InputStyled
            type={showPassword ? "text" : "password"}
            name="password"
          />

          <ShowPasswordBtn
            showPassword={showPassword}
            togglePassword={togglePassword}
          />

          <SC.ErrorMessageStyled name="password" component="div" />
        </SC.Label>
        <SC.Label htmlFor="confirmPassword">
          <SC.FormText>Confirm Password</SC.FormText>
          <SC.InputStyled
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
          />

          <ShowPasswordBtn
            showPassword={showConfirmPassword}
            togglePassword={toggleConfirmPassword}
          />

          <SC.ErrorMessageStyled name="confirmPassword" component="div" />
        </SC.Label>

        <label htmlFor="firstName">
          <SC.FormText>First Name</SC.FormText>
          <SC.InputStyled type="text" name="firstName" />
          <SC.ErrorMessageStyled name="firstName" component="div" />
        </label>

        <Button type="submit">
          Submit
          <img src={loginIcon} width="20" alt="" />
        </Button>
      </SC.FormStyled>
    </Formik>
  )
}

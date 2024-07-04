import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"
import { useState } from "react"

interface RegisterFormValues {
  email: string
  password: string
  confirmPassword: string
  //
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

  //
  firstName: "",
}

export const RegisterForm = ({ register }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (
    values: RegisterFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const newUser = {
      firstName: values.firstName,
      password: values.password,
      email: values.email,
    }

    console.log("newUser in RegisterForm :>> ", newUser)

    register(newUser)

    // resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="on">
        <label htmlFor="email">
          <p>Email</p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <Field type={showPassword ? "text" : "password"} name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <label htmlFor="confirmPassword">
          <p>Confirm Password</p>
          <Field
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
          />
          <ErrorMessage name="confirmPassword" component="div" />
        </label>

        {/*  */}

        <label htmlFor="firstName">
          <p>First Name</p>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </label>

        {/*  */}

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword
            ? "Hide Confirm Password"
            : "Show Confirm Password"}
        </button>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

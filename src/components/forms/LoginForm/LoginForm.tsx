import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"

interface LoginFormValues {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(12, "Password must not exceed 12 characters")
    .required("Password is required"),
})

const initialValues = {
  email: "",
  password: "",
}

export const LoginForm: React.FC = ({ login }) => {
  const handleSubmit = (
    values: LoginFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("values in LoginForm :>> ", values)

    login(values)

    resetForm()
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
          <Field type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

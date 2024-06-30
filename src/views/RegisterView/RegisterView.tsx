import { Link } from "react-router-dom"
import { RegisterForm } from "components/forms"

const RegisterView = () => {
  return (
    <div className="section">
      <div className="container">
        <RegisterForm />

        <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default RegisterView

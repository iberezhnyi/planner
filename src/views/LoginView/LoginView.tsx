import { Link } from "react-router-dom"
import { LoginForm } from "components/forms"

const LoginView = () => {
  return (
    <div className="section">
      <div className="container">
        <LoginForm />

        <Link to="/register">Registration</Link>
      </div>
    </div>
  )
}

export default LoginView

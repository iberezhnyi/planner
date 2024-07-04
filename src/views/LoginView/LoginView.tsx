import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { isAuthSelector, profileSelector } from "store"
import { useLoginUserMutation } from "store/authSlice/authApi"
import { LoginForm } from "components/forms"
import { useEffect } from "react"

const LoginView = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(isAuthSelector)
  const profile = useSelector(profileSelector)

  const [loginUser] = useLoginUserMutation()

  useEffect(() => {
    isAuth && navigate("/")
  }, [isAuth, navigate])

  const handleLogin = (body) => {
    loginUser(body)
  }

  console.log("isAuth :>> ", isAuth)
  console.log("profile :>> ", profile)

  return (
    <div className="section">
      <div className="container">
        <LoginForm login={handleLogin} />

        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default LoginView

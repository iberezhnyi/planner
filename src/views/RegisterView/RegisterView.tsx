import { Link, useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { isAuthSelector, profileSelector } from "store"
import { useRegisterUserMutation } from "store/authSlice/authApi"
import { RegisterForm } from "components/forms"
// import { useEffect } from "react"

const RegisterView = () => {
  // const navigate = useNavigate()
  const [registerUser] = useRegisterUserMutation()
  // const isAuth = useSelector(isAuthSelector)
  // const profile = useSelector(profileSelector)

  // useEffect(() => {
  //   isAuth && navigate("/")
  // }, [isAuth, navigate])

  const handleRegister = (body) => {
    registerUser(body)
  }

  // console.log("isAuth :>> ", isAuth)
  // console.log("profile :>> ", profile)

  return (
    <div className="section">
      <div className="container">
        <RegisterForm register={handleRegister} />

        <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default RegisterView

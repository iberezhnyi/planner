import { Link, useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"
// import { isAuthSelector, profileSelector } from "store"
import { useRegisterUserMutation } from "store/authSlice/authApi"
import { RegisterForm } from "components/forms"
// import { useEffect } from "react"
import * as SC from "./RegisterView.styled"

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
    <SC.RegisterSection className="section">
      {/* <div className="container"> */}
      <SC.ContentWrapper>
        <SC.Title>Register</SC.Title>

        <RegisterForm register={handleRegister} />

        <div>
          Have you joined us yet?{"\u00A0"}
          <Link to="/login">Log in</Link>
        </div>
      </SC.ContentWrapper>
      {/* </div> */}
    </SC.RegisterSection>
  )
}

export default RegisterView

import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "store/store"
import { authApi } from "./authApi"

interface AuthState {
  token: string
  profile: UserProfile | null
}

interface UserProfile {
  firstName: string
  email: string
  password: string
  _id: string
  lastName: string
  gender: string
  phone: string
  image: string
}

const initialState: AuthState = {
  token: "",
  profile: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = ""
      state.profile = null
      localStorage.removeItem("persist:auth")
    },
  },
  extraReducers: (builder) => {
    builder

      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.profile = payload.user
        }
      )

      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.profile = payload.user
        }
      )

      .addMatcher(
        authApi.endpoints.refreshUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token
          state.profile = payload.user
        }
      )
      .addMatcher(authApi.endpoints.refreshUser.matchRejected, (state) => {
        state.token = ""
        state.profile = null
        localStorage.removeItem("persist:auth")
      })
  },
})

export const authReducer = authSlice.reducer

export const isAuthSelector = (state: RootState) => state.auth.token
export const profileSelector = (state: RootState) => state.auth.profile

export const { logout } = authSlice.actions

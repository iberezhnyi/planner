import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './authApi'
import { IAuthState } from 'types'

const initialState: IAuthState = {
  token: '',
  profile: null,
  // isLoading: false,
  // isError: null,
  // isSuccess: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.token = ''
      state.profile = null
      localStorage.removeItem('persist:auth')
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

          // state.isLoading = false
          // state.isError = null
          // state.isSuccess = true
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
        state.token = ''
        state.profile = null
        localStorage.removeItem('persist:auth')
      })
  },
})

export const authReducer = authSlice.reducer
export const { logoutAction } = authSlice.actions

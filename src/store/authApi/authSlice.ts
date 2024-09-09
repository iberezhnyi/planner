import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from './authApi'
import { IAuthRefreshResponse, IAuthState } from 'types'

const initialState: IAuthState = {
  token: '',
  profile: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthRefreshResponse>) => {
      state.token = action.payload.access_token
    },

    clearCredentials: (state) => {
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
          state.token = payload.access_token
          state.profile = payload.user
        }
      )

      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.access_token
          state.profile = payload.user
        }
      )

      .addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }) => {
          state.profile = payload.user
        }
      )

      .addMatcher(authApi.endpoints.getProfile.matchRejected, (state) => {
        state.token = ''
        state.profile = null
        localStorage.removeItem('persist:auth')
      })

      // .addMatcher(
      //   authApi.endpoints.refreshUser.matchFulfilled,
      //   (state, { payload }) => {
      //     state.token = payload.access_token
      //   }
      // )

      // .addMatcher(authApi.endpoints.refreshUser.matchRejected, (state) => {
      //   state.token = ''
      //   state.profile = null
      //   localStorage.removeItem('persist:auth')
      // })

      .addMatcher(authApi.endpoints.logoutUser.matchFulfilled, (state) => {
        state.token = ''
        state.profile = null
        localStorage.removeItem('persist:auth')
      })
  },
})

export const authReducer = authSlice.reducer
export const { setCredentials, clearCredentials } = authSlice.actions

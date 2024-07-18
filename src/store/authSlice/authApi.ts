import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'store/store'
import { IAuthResponse, IUserProfile } from 'types'

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://practices-api.vercel.app/auth/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),

  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    registerUser: builder.mutation<
      IAuthResponse,
      Pick<IUserProfile, 'firstName' | 'email' | 'password'>
    >({
      query: (body) => ({
        url: 'signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    loginUser: builder.mutation<
      IAuthResponse,
      Pick<IUserProfile, 'email' | 'password'>
    >({
      query: (body) => ({
        url: `login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    refreshUser: builder.query<IAuthResponse, void>({
      query: () => `refresh`,
      providesTags: ['Auth'],
    }),
  }),
})

export const useRegisterUserMutation: typeof authApi.endpoints.registerUser.useMutation =
  authApi.endpoints.registerUser.useMutation

export const useLoginUserMutation: typeof authApi.endpoints.loginUser.useMutation =
  authApi.endpoints.loginUser.useMutation

export const useRefreshUserQuery: typeof authApi.endpoints.refreshUser.useQuery =
  authApi.endpoints.refreshUser.useQuery

import { createApi } from '@reduxjs/toolkit/query/react'
// import { RootState } from 'store/store'
import { IAuthResponse, ILoginFormValues, IRegisterFormValues } from 'types'
import { baseQueryWithReauth } from './baseQueryWithReauth'

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: baseQueryWithReauth,

  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    registerUser: builder.mutation<IAuthResponse, IRegisterFormValues>({
      query: (body) => {
        console.log('body :>> ', body)
        return {
          url: 'auth/register',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Auth'],
    }),

    loginUser: builder.mutation<IAuthResponse, ILoginFormValues>({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),

    getProfile: builder.query<IAuthResponse, void>({
      query: () => 'auth/profile',

      providesTags: ['Auth'],
    }),

    refreshUser: builder.query<IAuthResponse, void>({
      query: () => 'auth/refresh',

      providesTags: ['Auth'],
    }),

    logoutUser: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const useRegisterUserMutation: typeof authApi.endpoints.registerUser.useMutation =
  authApi.endpoints.registerUser.useMutation

export const useLoginUserMutation: typeof authApi.endpoints.loginUser.useMutation =
  authApi.endpoints.loginUser.useMutation

export const useGetProfileQuery: typeof authApi.endpoints.getProfile.useQuery =
  authApi.endpoints.getProfile.useQuery

export const useRefreshUserQuery: typeof authApi.endpoints.refreshUser.useQuery =
  authApi.endpoints.refreshUser.useQuery

export const useLogoutUserMutation: typeof authApi.endpoints.logoutUser.useMutation =
  authApi.endpoints.logoutUser.useMutation

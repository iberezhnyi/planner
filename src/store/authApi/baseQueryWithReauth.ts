import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { setCredentials, clearCredentials } from './authSlice'
import { RootState } from 'store'
import { IAuthRefreshResponse } from 'types'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://planner-backend-a3p5.onrender.com/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const { dispatch } = api
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('auth/refresh', api, extraOptions)

    if (refreshResult.data) {
      const { access_token }: Pick<IAuthRefreshResponse, 'access_token'> =
        refreshResult.data as IAuthRefreshResponse
      dispatch(setCredentials({ access_token }))

      result = await baseQuery(args, api, extraOptions)
    } else {
      dispatch(clearCredentials())
    }
  }

  return result
}

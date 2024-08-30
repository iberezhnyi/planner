import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'store/authSlice/baseQueryWithReauth'
import { IWeeksResponse } from 'types'

export const weeksApi = createApi({
  reducerPath: 'weeksApi',

  baseQuery: baseQueryWithReauth,

  tagTypes: ['Weeks'],

  endpoints: (builder) => ({
    getWeekInfo: builder.query<IWeeksResponse, void>({
      query: () => 'weeks',

      providesTags: ['Weeks'],
    }),
  }),
})

export const useGetWeekInfoQuery: typeof weeksApi.endpoints.getWeekInfo.useQuery =
  weeksApi.endpoints.getWeekInfo.useQuery

import { createApi } from '@reduxjs/toolkit/query/react'
import { getCurrentMonth, getCurrentYear } from 'helpers'
import { baseQueryWithReauth } from 'store/authApi/baseQueryWithReauth'
import { IMonthsReq, IMonthsResponse } from 'types'

export const monthsApi = createApi({
  reducerPath: 'monthsApi',

  baseQuery: baseQueryWithReauth,

  tagTypes: ['Months'],

  endpoints: (builder) => ({
    getMonthsInfo: builder.query<IMonthsResponse, IMonthsReq>({
      query: ({ month, year }) => {
        const currentYear = getCurrentYear()
        const currentMonth = getCurrentMonth()

        return `months?month=${month || currentMonth}&year=${
          year || currentYear
        }`
      },

      providesTags: ['Months'],
    }),
  }),
})

export const useGetMonthsInfoQuery: typeof monthsApi.endpoints.getMonthsInfo.useQuery =
  monthsApi.endpoints.getMonthsInfo.useQuery

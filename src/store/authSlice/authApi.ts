import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "store/store"

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://practices-api.vercel.app/auth/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token

      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),

  tagTypes: ["Auth"],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    loginUser: builder.mutation({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    refreshUser: builder.query({
      query: () => `refresh`,
      providesTags: ["Auth"],
    }),
  }),
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRefreshUserQuery,
} = authApi

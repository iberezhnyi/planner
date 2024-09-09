import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from 'store/authApi/baseQueryWithReauth'
import { IWeeksResponse } from 'types'

export const weeksApi = createApi({
  reducerPath: 'weeksApi',

  baseQuery: baseQueryWithReauth,

  tagTypes: ['Weeks'],

  endpoints: (builder) => ({
    getWeekInfo: builder.query<IWeeksResponse, { date: string | null }>({
      query: ({ date }) => {
        const currentDate = new Date().toISOString().slice(0, 10)

        return `weeks?date=${date || currentDate}`
      },

      providesTags: ['Weeks'],
    }),

    addNote: builder.mutation<void, { note: string; date: string }>({
      query: (body) => ({
        url: `/notes`,
        method: 'POST',
        body,
      }),

      invalidatesTags: ['Weeks'],
    }),

    updateNote: builder.mutation({
      query: ({ noteId, ...updatedNote }) => ({
        url: `/notes/${noteId}`,
        method: 'PATCH',
        body: updatedNote,
      }),

      invalidatesTags: ['Weeks'],
    }),

    deleteNote: builder.mutation<void, { noteId: string }>({
      query: ({ noteId }) => ({
        url: `/notes/${noteId}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Weeks'],
    }),
  }),
})

export const useGetWeekInfoQuery: typeof weeksApi.endpoints.getWeekInfo.useQuery =
  weeksApi.endpoints.getWeekInfo.useQuery

export const useAddNoteMutation: typeof weeksApi.endpoints.addNote.useMutation =
  weeksApi.endpoints.addNote.useMutation

export const useUpdateNoteMutation: typeof weeksApi.endpoints.updateNote.useMutation =
  weeksApi.endpoints.updateNote.useMutation

export const useDeleteNoteMutation: typeof weeksApi.endpoints.deleteNote.useMutation =
  weeksApi.endpoints.deleteNote.useMutation

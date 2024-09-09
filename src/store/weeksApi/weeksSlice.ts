// import { createSlice } from '@reduxjs/toolkit'
// import { weeksApi } from './weeksApi'
// import { IWeekDay } from 'types'

// const initialState: IWeekDay[] = []

// export const weeksSlice = createSlice({
//   name: 'weeks',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       weeksApi.endpoints.getWeekInfo.matchFulfilled,
//       (state, { payload }) => {
//         // console.log('state :>> ', state)
//         // console.log('action :>> ', action)
//         // return action.payload.weekDays
//         state = payload.weekDays
//         return state
//       }
//     )
//   },
// })

// export const weeksReducer = weeksSlice.reducer

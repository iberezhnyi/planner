// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { monthsApi } from './monthsApi'
// import { IMonthsDay } from 'types'

// const initialState: IMonthsDay[] = []

// export const monthsSlice = createSlice({
//   name: 'months',
//   initialState,
//   reducers: {
//     setMonths: (state, action: PayloadAction<IMonthsDay[]>) => {
//       console.log('action.payload :>> ', action.payload)
//       state = action.payload
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       monthsApi.endpoints.getMonthsInfo.matchFulfilled,
//       (state, { payload }) => {
//         // console.log('state :>> ', state)
//         // console.log('action :>> ', action)
//         // return action.payload.weekDays
//         state = payload.monthsDays
//         return state
//       }
//     )
//   },
// })

// export const monthsReducer = monthsSlice.reducer
// export const { setMonths } = monthsSlice.actions

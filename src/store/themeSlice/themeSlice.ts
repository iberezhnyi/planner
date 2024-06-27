import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

const initialState = {
  theme: "dark",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload
    },
  },
})

export const { changeTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer

// Selectors
export const selectTheme = (state: RootState) => state.theme.theme

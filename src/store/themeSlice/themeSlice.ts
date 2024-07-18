import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeNameType } from 'types'

const initialState: { theme: ThemeNameType } = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeAction: (state, action: PayloadAction<ThemeNameType>) => {
      state.theme = action.payload
    },
  },
})

export const themeReducer = themeSlice.reducer
export const { changeThemeAction } = themeSlice.actions

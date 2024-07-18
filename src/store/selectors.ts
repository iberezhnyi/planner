import { RootState } from './store'

export const selectIsAuth = (state: RootState) => state.auth.token
export const selectProfile = (state: RootState) => state.auth.profile

export const selectTheme = (state: RootState) => state.theme.theme

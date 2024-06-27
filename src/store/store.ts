import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "./themeSlice/themeSlice"

export const store = configureStore({
  reducer: {
    // tasks: tasksReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

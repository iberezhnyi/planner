import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './themeSlice/themeSlice'
import { authReducer } from './authSlice/authSlice.ts'
import { authApi } from './authSlice/authApi.ts'
import { weeksApi } from './weeksSlice/weeksApi.ts'
import { weeksReducer } from './weeksSlice/weeksSlice.ts'

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
}

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const reducer = {
  theme: persistReducer(themePersistConfig, themeReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  [weeksApi.reducerPath]: weeksApi.reducer,
  weeks: weeksReducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, weeksApi.middleware),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

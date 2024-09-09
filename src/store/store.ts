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

import { authApi, authReducer } from './authApi'
import { weeksApi } from './weeksApi'
import { themeReducer } from './themeSlice'
import { monthsApi } from './monthsApi'

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
  [monthsApi.reducerPath]: monthsApi.reducer,
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, weeksApi.middleware, monthsApi.middleware),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

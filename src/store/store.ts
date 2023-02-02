import { configureStore } from '@reduxjs/toolkit'
import themeColorReducer from 'core/themeColor/themeColorSlice'

export const store = configureStore({
  reducer: {
    themeColor : themeColorReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


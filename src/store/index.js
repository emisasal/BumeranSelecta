import { configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"

import userSlice from "./user"
import recruiterSlice from "./recruiters"
import searchSlice from "./searchs"
import pageReducer from "./page"
import reportsSlice from "./reports"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  reducer: {
    user: persistedReducer,
    recruiter: recruiterSlice,
    search: searchSlice,
    page: pageReducer,
    reports: reportsSlice,
  },
})

export default store

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./cars/slice";
import fitersReducer from "./filters/slice"

const persistCarsReducer = persistReducer({
  key: "cars",
  storage,
  whitelist: ["favorites"]
},
carsReducer
)
const persistFilterReducer = persistReducer(
  {
    key: "filters",
    storage,
  },
  fitersReducer
)
export const store = configureStore({
  reducer: {
cars: persistCarsReducer,
filters: persistFilterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";




const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedWeatherReducer = persistReducer(persistConfig, weatherReducer);

export const store = configureStore({
  reducer: {
    weather: persistedWeatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

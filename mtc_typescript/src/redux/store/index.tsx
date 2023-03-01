import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

import userStatusSlice from "redux/slice/userStatusSlice";

const persistConfiguration = {
  key: "persistStorage",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  userStatus: userStatusSlice,
});

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;

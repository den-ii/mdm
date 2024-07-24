import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authApi } from "./services/authApi";
import storage from "redux-persist/lib/storage";
import authReducer from "./slice/authSlice";
import modalReducer from "./slice/modalSlice";
import deviceTourReducer from "./slice/deviceTourSlice";

const persistConfig = { key: "auth", storage };

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistAuthReducer,
    modal: modalReducer,
    deviceTour: deviceTourReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

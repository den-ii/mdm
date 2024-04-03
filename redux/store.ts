import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { articleApi } from "./api/articleApi";
import { authApi } from "./api/authApi";
import applicationReducer from "./storage/memory";
import { libraryApi } from "./api/libraryApi";
import { subscriptionApi } from "./api/subscriptionApi";
import { adminApi } from "./api/adminApi";
import { cardApi } from "./api/cardApi";
import { awsApi as awsApiSlice } from "./api/awsApi";

const rootReducer = combineReducers({
  // other reducers here
  [articleApi.reducerPath]: articleApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [libraryApi.reducerPath]: libraryApi.reducer,
  [subscriptionApi.reducerPath]: subscriptionApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [cardApi.reducerPath]: cardApi.reducer,
  [awsApiSlice.reducerPath]: awsApiSlice.reducer,
  app: applicationReducer,
});

const persistConfig = {
  key: "mdm",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      articleApi.middleware,
      libraryApi.middleware,
      subscriptionApi.middleware,
      adminApi.middleware,
      cardApi.middleware,
      authApi.middleware,
      awsApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export const persistor = persistStore(store);

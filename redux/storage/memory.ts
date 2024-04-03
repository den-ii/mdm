import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DefaultMemory {
  user?: CurrentUser | null;
  subscription?: Subscription | null;
  token?: string;
  isAuthenticated: boolean;
}

export interface CurrentUser {
  firstName: string;
  lastName: string;
  _id: string;
  email: string;
  role: string;
}

export interface Subscription {
  user: string;
  subscriptionPlan: any;
  _id: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

export const initialState: DefaultMemory = {
  isAuthenticated: false,
};

export const memory = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppUser: (
      state: DefaultMemory,
      { payload }: PayloadAction<CurrentUser>
    ) => {
      state.user = payload;
    },
    setToken: (state: DefaultMemory, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setAuthenticated: (
      state: DefaultMemory,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isAuthenticated = payload;
    },
    setSubscription: (
      state: DefaultMemory,
      { payload }: PayloadAction<Subscription>
    ) => {
      state.subscription = payload;
    },
    logoutUser: (state: DefaultMemory) => {
      if (window.top) {
        window.top.location.href = "/";
      }
      state.user = null;
      state.isAuthenticated = false;
      state.subscription = null;
    },
    clearData: (state) => {
      return initialState;
    },
  },
});

export const {
  setAppUser,
  setSubscription,
  setToken,
  logoutUser,
  setAuthenticated,
} = memory.actions;

export const selectToken = (state: any) => state.app.token;
export default memory.reducer;

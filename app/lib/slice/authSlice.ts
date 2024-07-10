import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  user?: any;
  onboardingStage: OnboardingStage;
  tour: boolean;
}

export interface OnboardingStage {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
}

export enum OnboardingStageArgs {
  Stage1 = 1,
  Stage2 = 2,
  Stage3 = 3,
  Stage4 = 4,
}

const initialState: AuthState = {
  isAuthenticated: false,
  onboardingStage: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
  tour: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.onboardingStage = action.payload.onboardingStage;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    setOnboardingStage(state, action: PayloadAction<OnboardingStageArgs>) {
      state.onboardingStage = {
        ...state.onboardingStage,
        [action.payload]: true,
      } as OnboardingStage;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {
  setAuthenticated,
  setUser,
  setOnboardingStage,
  setToken,
  setAuth,
} = authSlice.actions;

export default authSlice.reducer;

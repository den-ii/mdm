import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuthenticated: boolean;
  token?: string;
  user?: any;
  onboardingStage: IOnboardingStage;
}

export interface IOnboardingStage {
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

const initialState: IAuthState = {
  isAuthenticated: false,
  onboardingStage: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuth: (state, action: PayloadAction<IAuthState>) => {
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
      } as IOnboardingStage;
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

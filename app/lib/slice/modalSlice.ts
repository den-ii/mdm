import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  billingInfo: boolean;
  billingInfoSuccess: boolean;
  inviteUsers: boolean;
  notificationPreference: boolean;
  requestDevice: boolean;
  requestDeviceSuccess: boolean;
}

const initialState: IModalState = {
  billingInfo: false,
  billingInfoSuccess: false,
  inviteUsers: false,
  notificationPreference: false,
  requestDevice: false,
  requestDeviceSuccess: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openBillingInfoModal: (state) => {
      state.billingInfo = true;
    },
    openBillingInfoSuccModal: (state) => {
      state.billingInfo = false;
      state.billingInfoSuccess = true;
    },
    openInviteUsersModal: (state) => {
      state.inviteUsers = true;
    },
    openNotificationPrefModal: (state) => {
      state.notificationPreference = true;
    },
    openRequestDeviceModal: (state) => {
      state.requestDevice = true;
    },
    openRequestDeviceSuccModal: (state) => {
      state.requestDevice = false;
      state.requestDeviceSuccess = true;
    },
    closeAModal: (state, action: PayloadAction<string>) => {
      if (state[action.payload as keyof IModalState] === undefined) {
        return state;
      }
      state[action.payload as keyof IModalState] = false;
    },
    closeModals: (state) => {
      return {
        ...state,
        billingInfo: false,
        inviteUsers: false,
        notificationPreference: false,
        requestDevice: false,
        billingInfoSuccess: false,
        requestDeviceSuccess: false,
      };
    },
  },
});

export const {
  openBillingInfoModal,
  openBillingInfoSuccModal,
  openInviteUsersModal,
  openNotificationPrefModal,
  openRequestDeviceModal,
  openRequestDeviceSuccModal,
  closeAModal,
  closeModals,
} = modalSlice.actions;

export default modalSlice.reducer;

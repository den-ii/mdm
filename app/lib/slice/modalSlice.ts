import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  billingInfo: boolean;
  inviteUsers: boolean;
  notificationPreference: boolean;
  requestDevice: boolean;
}

const initialState: IModalState = {
  billingInfo: false,
  inviteUsers: false,
  notificationPreference: false,
  requestDevice: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openBillingInfoModal: (state) => {
      state.billingInfo = true;
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
    closeModals: (state) => {
      return {
        ...state,
        billingInfo: false,
        inviteUsers: false,
        notificationPreference: false,
        requestDevice: false,
      };
    },
  },
});

export const {
  openBillingInfoModal,
  openInviteUsersModal,
  openNotificationPrefModal,
  openRequestDeviceModal,
  closeModals,
} = modalSlice.actions;

export default modalSlice.reducer;

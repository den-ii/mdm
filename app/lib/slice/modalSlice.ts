import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  billingInfo: boolean;
  billingInfoSuccess: boolean;
  inviteUsers: boolean;
  inviteUsersSuccess: boolean;
  notificationPreference: boolean;
  notificationPreferenceSuccess: boolean;
  requestDevice: boolean;
  requestDeviceSuccess: boolean;
}

const initialState: IModalState = {
  billingInfo: false,
  billingInfoSuccess: false,
  inviteUsers: false,
  inviteUsersSuccess: false,
  notificationPreference: false,
  notificationPreferenceSuccess: false,
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
    openInviteUsersSuccModal: (state) => {
      state.inviteUsers = false;
      state.inviteUsersSuccess = true;
    },
    openNotificationPrefModal: (state) => {
      state.notificationPreference = true;
    },
    openNotificationPrefSuccModal: (state) => {
      state.notificationPreference = false;
      state.notificationPreferenceSuccess = true;
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
        billingInfoSuccess: false,
        inviteUsers: false,
        inviteUsersSuccess: false,
        notificationPreference: false,
        notificationPreferenceSuccess: false,
        requestDevice: false,
        requestDeviceSuccess: false,
      };
    },
  },
});

export const {
  openBillingInfoModal,
  openBillingInfoSuccModal,
  openInviteUsersModal,
  openInviteUsersSuccModal,
  openNotificationPrefModal,
  openNotificationPrefSuccModal,
  openRequestDeviceModal,
  openRequestDeviceSuccModal,
  closeAModal,
  closeModals,
} = modalSlice.actions;

export default modalSlice.reducer;

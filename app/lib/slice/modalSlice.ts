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
  enrollCustomer: boolean;
  enrollNewCustomer: boolean;
  enrollExistingCustomer: boolean;
  enrollmentSuccess: boolean;
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
  enrollCustomer: false,
  enrollNewCustomer: false,
  enrollExistingCustomer: false,
  enrollmentSuccess: false,
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
    openEnrollmentSuccessModal: (state) => {
      state.enrollNewCustomer = false;
      state.enrollExistingCustomer = false;
      state.enrollmentSuccess = true;
    },
    openRequestDeviceModal: (state) => {
      state.requestDevice = true;
    },
    openCustomerEnrollmentModal: (state) => {
      state.enrollCustomer = true;
    },
    openEnrollNewCustomerModal: (state) => {
      state.enrollCustomer = false;
      state.enrollNewCustomer = true;
    },
    openEnrollExistingCustomerModal: (state) => {
      state.enrollCustomer = false;
      state.enrollExistingCustomer = true;
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
        enrollCustomer: false,
        enrollNewCustomer: false,
        enrollExistingCustomer: false,
        enrollmentSuccess: false,
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
  openCustomerEnrollmentModal,
  openEnrollNewCustomerModal,
  openEnrollExistingCustomerModal,
  openEnrollmentSuccessModal,
  closeAModal,
  closeModals,
} = modalSlice.actions;

export default modalSlice.reducer;

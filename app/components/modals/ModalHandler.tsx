import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import RequestDeviceModal from "./RequestDeviceModal";
import BillingInfoModal from "./BillingInfo";
import InviteUsersModal from "./InviteUsersModal";
import NotificationPrefModal from "./NotificationPreferenceModal";
import RequestDevicePopUp from "./success_modals/RequestDevicePopUp";
import BillingInfoPopUp from "./success_modals/BillingInfoPopUp";
import NotificationPreferencesPopUp from "./success_modals/NotificationPreferencesPopUp";
import InviteUsersPopUp from "./success_modals/InviteUsersPopUp";

function ModalHandler() {
  const requestDeviceModal = useSelector(
    (state: RootState) => state.modal.requestDevice
  );
  const requestDeviceSuccModal = useSelector(
    (state: RootState) => state.modal.requestDeviceSuccess
  );
  const billingInfoModal = useSelector(
    (state: RootState) => state.modal.billingInfo
  );
  const billingInfoSuccModal = useSelector(
    (state: RootState) => state.modal.billingInfoSuccess
  );
  const notificationPrefModal = useSelector(
    (state: RootState) => state.modal.notificationPreference
  );
  const notificationPrefSuccModal = useSelector(
    (state: RootState) => state.modal.notificationPreferenceSuccess
  );

  const inviteUsersModal = useSelector(
    (state: RootState) => state.modal.inviteUsers
  );

  const inviteUsersSuccModal = useSelector(
    (state: RootState) => state.modal.inviteUsersSuccess
  );

  return (
    <>
      {/* -----------------------------------  Modals -------------------------------------------*/}
      {requestDeviceModal && <RequestDeviceModal />}
      {billingInfoModal && <BillingInfoModal />}
      {notificationPrefModal && <NotificationPrefModal />}
      {inviteUsersModal && <InviteUsersModal />}
      {requestDeviceSuccModal && <RequestDevicePopUp />}
      {billingInfoSuccModal && <BillingInfoPopUp />}
      {notificationPrefSuccModal && <NotificationPreferencesPopUp />}
      {inviteUsersSuccModal && <InviteUsersPopUp />}

      {/* ---------------------------------------------------------------------------------------- */}
    </>
  );
}

export default ModalHandler;

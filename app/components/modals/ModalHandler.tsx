import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import RequestDeviceModal from "./RequestDeviceModal";
import BillingInfoModal from "./BillingInfo";
import InviteUsersModal from "./InviteUsersModal";
import NotificationPrefModal from "./NotificationPreferenceModal";

function ModalHandler() {
  const requestDeviceModal = useSelector(
    (state: RootState) => state.modal.requestDevice
  );
  const billingInfoModal = useSelector(
    (state: RootState) => state.modal.billingInfo
  );
  const notificationPrefModal = useSelector(
    (state: RootState) => state.modal.notificationPreference
  );

  const inviteUsersModal = useSelector(
    (state: RootState) => state.modal.inviteUsers
  );

  return (
    <>
      {/* -----------------------------------  Modals -------------------------------------------*/}

      {requestDeviceModal && <RequestDeviceModal />}
      {billingInfoModal && <BillingInfoModal />}
      {notificationPrefModal && <NotificationPrefModal />}
      {inviteUsersModal && <InviteUsersModal />}
      {/* ---------------------------------------------------------------------------------------- */}
    </>
  );
}

export default ModalHandler;

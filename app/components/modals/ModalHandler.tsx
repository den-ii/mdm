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
import EnrollCustomerModal from "./EnrollCustomer";
import NewCustomerModal from "./EnrollCustomerModals/NewCustomer";
import EnrollmentPopUp from "./success_modals/Enrollment";
import ExistingCustomerModal from "./EnrollCustomerModals/ExistingCustomer";
import PopUp from "../tour/PopUp";

function ModalHandler() {
  const requestDeviceModal = useSelector(
    (state: RootState) => state.modal.requestDevice
  );
  const requestDeviceSuccModal = useSelector(
    (state: RootState) => state.modal.requestDeviceSuccess
  );
  const enrollCustomerModal = useSelector(
    (state: RootState) => state.modal.enrollCustomer
  );
  const enrollNewCustomerModal = useSelector(
    (state: RootState) => state.modal.enrollNewCustomer
  );
  const enrollExistingCustomerModal = useSelector(
    (state: RootState) => state.modal.enrollExistingCustomer
  );
  const enrollSuccModal = useSelector(
    (state: RootState) => state.modal.enrollmentSuccess
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
      {enrollCustomerModal && <EnrollCustomerModal />}
      {enrollNewCustomerModal && <NewCustomerModal />}
      {enrollExistingCustomerModal && <ExistingCustomerModal />}
      {enrollSuccModal && <EnrollmentPopUp />}

      {/* ---------------------------------------------------------------------------------------- */}

      {/* -----------------------------------  Tour Guide ------------------------------------------ */}
      <>{/* <PopUp /> */}</>
      {/* ---------------------------------------------------------------------------------------- */}
    </>
  );
}

export default ModalHandler;
function state(state: unknown): unknown {
  throw new Error("Function not implemented.");
}

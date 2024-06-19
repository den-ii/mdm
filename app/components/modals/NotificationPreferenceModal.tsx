import Modal from ".";
import Image from "next/image";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";
import { useDispatch } from "react-redux";
import { openNotificationPrefSuccModal } from "@/lib/slice/modalSlice";
import Preferences from "../settings/Preferences";

function NotificationPreferenceModal() {
  const dispatch = useDispatch();

  const saveDetails = () => {
    dispatch(setOnboardingStage(OnboardingStageArgs.Stage3));
    dispatch(openNotificationPrefSuccModal());
  };

  return (
    <Modal heading="Notification Preference" maxHeight="max-h-[90%]">
      {/* <div className="mt-4"> */}
      <Preferences isModal={true} saveDetails={saveDetails} />
      {/* </div> */}
    </Modal>
  );
}

export default NotificationPreferenceModal;

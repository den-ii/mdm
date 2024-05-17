import Modal from ".";
import Image from "next/image";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";
import { useDispatch } from "react-redux";
import { openNotificationPrefSuccModal } from "@/lib/slice/modalSlice";

function NotificationPreferenceModal() {
  const dispatch = useDispatch();

  const saveDetails = () => {
    dispatch(setOnboardingStage(OnboardingStageArgs.Stage3));
    dispatch(openNotificationPrefSuccModal());
  };

  return (
    <Modal heading="Notification Preference" maxHeight="max-h-[90%]">
      <div className="flex-1 px-4 flex flex-col gap-3  overflow-y-auto">
        <div className="mt-4">
          <div className="rounded-2xl border border-neutral_300 px-2">
            <div className="border-b border-neutral_300 flex gap-3 py-3">
              <Image
                src="/assets/notification.svg"
                width={20}
                height={20}
                alt="notification for users"
              />{" "}
              <p className="font-medium font-Poppins text-lg">
                Notification For Users
              </p>
            </div>
            <div className="py-2">
              <div className="flex py-2 items-center justify-between">
                <div>
                  <p className="text-sm">New User Created</p>
                  <p className="text-[0.74rem] text-neutral_500">
                    Partner can decide to get notified when a new member is
                    onboarded
                  </p>
                </div>
                <div>
                  <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8]">
                    <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                  </div>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between">
                <div>
                  <p className="text-sm">User gets blocked</p>
                  <p className="text-[0.74rem] text-neutral_500">
                    Partner can decide to get notified when a new order is
                    received
                  </p>
                </div>
                <div>
                  <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8]">
                    <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                  </div>
                </div>
              </div>
              <div className="flex py-2 items-center justify-between">
                <div>
                  <p className="text-sm">User is deactivated</p>
                  <p className="text-[0.74rem] text-neutral_500">
                    Partner can decide to get notified when a new order is
                    received
                  </p>
                </div>
                <div>
                  <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8] ">
                    <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-neutral_300 px-2 mb-5">
          <div className="border-b border-neutral_300 flex gap-3 py-3">
            <Image
              src="/assets/notification.svg"
              width={20}
              height={20}
              alt="notification for users"
            />{" "}
            <p className="font-medium font-Poppins text-lg">
              Notification For Finance
            </p>
          </div>
          <div className="py-2">
            <div className="flex py-2 items-center justify-between">
              <div>
                <p className="text-sm">Received new payment</p>
                <p className="text-[0.74rem] text-neutral_500">
                  Partner can decide to get notified when a new member is
                  onboarded
                </p>
              </div>
              <div>
                <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8]">
                  <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                </div>
              </div>
            </div>
            <div className="flex py-2 items-center justify-between">
              <div>
                <p className="text-sm">Cancelled payment</p>
                <p className="text-[0.74rem] text-neutral_500">
                  Partner can decide to get notified when a new order is
                  received
                </p>
              </div>
              <div>
                <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8]">
                  <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                </div>
              </div>
            </div>
            <div className="flex py-2 items-center justify-between">
              <div>
                <p className="text-sm">Cancelled trip</p>
                <p className="text-[0.74rem] text-neutral_500">
                  Partner can decide to get notified when an order has been
                  completed
                </p>
              </div>
              <div>
                <div className="cursor-pointer w-[2.625rem] h-5 rounded-full bg-[#DADAE8] ">
                  <div className="h-5 w-5 rounded-full bg-white mx-[0.06rem] my-[0.04rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 border-t">
        <button
          onClick={saveDetails}
          className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white"
        >
          Save Details
        </button>
      </div>
    </Modal>
  );
}

export default NotificationPreferenceModal;

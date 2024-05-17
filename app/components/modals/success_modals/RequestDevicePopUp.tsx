import React from "react";
import Modal from "..";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import Buttons from "@/components/Button";
import { closeAModal } from "@/lib/slice/modalSlice";

function RequestDevicePopUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReturnToDashboard = () => {
    dispatch(closeAModal("requestDeviceSuccess"));
    router.push("/");
  };

  return (
    <Modal heading="Request Device" maxWidth="max-w-[400px] max-h-[532px]">
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col items-center justify-center px-5 mt-6">
          <div className="bg-primary_100 h-[65px] w-[65px] rounded-full  flex items-center justify-center">
            <Image
              src="/assets/vendor/dashboard/ftu_check.svg"
              width={40}
              height={40}
              alt="success"
            />
          </div>
          <div>
            <h3 className="text-lg font-Poppins text-center font-semibold">
              Request Sent Successfully
            </h3>
            <p className="text-[0.8rem] text-center">
              You have successfully requested for device to be assigned to you.
            </p>
          </div>
        </div>
        <div className="flex mt-auto py-4 flex-col gap-2 items-center justify-center border-t border-l-neutral_500">
          <Buttons text="View Assigned Device" styles="text-sm" />
          <button
            className="text-sm px-4 py-3 font-medium text-primary_700"
            onClick={handleReturnToDashboard}
          >
            Return To Dashboard
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default RequestDevicePopUp;

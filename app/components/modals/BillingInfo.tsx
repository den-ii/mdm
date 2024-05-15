import { useDispatch } from "react-redux";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";

import Modal from ".";
import { FormEvent, FormEventHandler } from "react";
import { closeModals } from "@/lib/slice/modalSlice";

function BillingInfoModal() {
  const dispatch = useDispatch();

  const saveDetails = () => {
    dispatch(setOnboardingStage(OnboardingStageArgs.Stage2));
    dispatch(closeModals());
  };

  return (
    <Modal
      heading="Billing Information"
      maxWidth="max-w-[489px]"
      maxHeight="max-h-[90%]"
    >
      <div className="flex-1 px-4 flex flex-col gap-3  overflow-y-auto">
        <div className="mt-4">
          <div className="flex gap-2 items-center">
            <h4 className="font-semibold ">Billing Address</h4>
            <div className="h-[1px] flex-1 bg-[#DADAE8]"></div>
          </div>
          <div className="mt-3">
            <label className="text-sm">Full Name</label>
            <input
              type="text"
              className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
            />
            <div className="mt-3">
              <label className="text-sm">Email Address</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm">City</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="mt-3">
              <label className="text-sm">Address</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex gap-2 items-center">
            <h4 className="font-semibold ">Card Details</h4>
            <div className="h-[1px] flex-1 bg-[#DADAE8]"></div>
          </div>
          <div className="mt-3">
            <label className="text-sm">CardHolder Name</label>
            <input
              type="text"
              className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
            />
            <div className="mt-3">
              <label className="text-sm">Card Number</label>
              <input
                type="text"
                className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="flex gap-3 mb-6">
              <div className="mt-3 flex-1">
                <label className="text-sm">CCV</label>
                <input
                  type="text"
                  className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
                />
              </div>
              <div className="mt-3 flex-1">
                <label className="text-sm">Expiry Date</label>
                <input
                  type="text"
                  className="text-sm mt-2 block border rounded-lg p-2 w-full focus:outline focus:outline-1 focus:outline-black"
                />
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

export default BillingInfoModal;

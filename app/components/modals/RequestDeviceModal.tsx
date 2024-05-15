import Modal from ".";
import useDeviceQty from "../device_qty/useDeviceQty";
import DeviceQty from "../device_qty";
import { useDispatch } from "react-redux";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";
import { closeModals } from "@/lib/slice/modalSlice";

function RequestDeviceModal() {
  const { deviceNo, increaseDevice, decreaseDevice, handleDeviceChange } =
    useDeviceQty();

  const dispatch = useDispatch();

  const submitRequest = () => {
    dispatch(setOnboardingStage(OnboardingStageArgs.Stage1));
    dispatch(closeModals());
  };

  return (
    <Modal heading="Request Device">
      <div className="flex-1 px-4 flex flex-col justify-center gap-3">
        <p>Select the quantity of sachet device you want</p>
        <DeviceQty
          deviceNo={deviceNo}
          increaseDevice={increaseDevice}
          decreaseDevice={decreaseDevice}
          handleChange={handleDeviceChange}
        />
      </div>
      <div className="flex justify-center py-3 border-t">
        <button
          className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white"
          onClick={submitRequest}
        >
          Submit Request
        </button>
      </div>
    </Modal>
  );
}

export default RequestDeviceModal;

import Image from "next/image";
import Modal from ".";
import useDeviceQty from "../device_qty/useDeviceQty";
import DeviceQty from "../device_qty";

interface IRequestDeviceModal {
  closeModal: () => void;
}

function RequestDeviceModal({ closeModal }: IRequestDeviceModal) {
  const {
    deviceNo,
    increaseDevice,
    decreaseDevice,
    handleDeviceChange,
    submitRequest,
  } = useDeviceQty();

  return (
    <Modal closeModal={closeModal}>
      <div className="px-4 py-4 border-b flex justify-between">
        <h4 className="font-semibold text-xl">Request Device</h4>
        <button onClick={closeModal}>
          <Image
            width={32}
            height={32}
            src={"/assets/close_modal.svg"}
            alt="close modal"
          />
        </button>
      </div>
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

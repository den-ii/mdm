import Image from "next/image";
import Modal from ".";

interface IRequestDeviceModal {
  closeModal: () => void;
}

function RequestDeviceModal({ closeModal }: IRequestDeviceModal) {
  return (
    <Modal closeModal={closeModal}>
      <div className="px-4 py-4 border-b flex justify-between">
        <h4 className="font-semibold text-lg">Request Device</h4>
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
        <div className="flex justify-between mt-2">
          <div className="flex gap-2 items-center ">
            <div className="bg-[#F0F5FF] p-3 rounded-[50%]">
              {/* <FaMobile fill="#0151FD" /> */}
              <Image
                src="/assets/devices/blue.svg"
                width={20}
                height={20}
                alt="device"
              />
            </div>
            <div className="font-semibold text-sm">Sachet Device</div>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
              // onClick={decreaseDevice}
            >
              <Image
                src="/assets/devices/minus.svg"
                width={20}
                height={20}
                alt="device"
              />
            </div>
            <div>
              <input
                type="number"
                // value={deviceNo}
                // onChange={handleDeviceChange}
                className="block font-semibold w-[40px] text-center p-2 appearance-none outline-none border bg-[#F8F9FC] border-[#E1E6EF] rounded-[8px]"
              />
            </div>
            <div
              className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
              // onClick={() => increaseDevice()}
            >
              <Image
                src="/assets/devices/plus.svg"
                width={20}
                height={20}
                alt="device"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 border-t">
        <button className="bg-primary_700 px-4 py-3 rounded-lg text-white">
          Submit Request
        </button>
      </div>
    </Modal>
  );
}

export default RequestDeviceModal;

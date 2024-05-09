import Image from "next/image";
import Modal from ".";

interface IBillingInfoModal {
  closeModal: () => void;
}

function BillingInfoModal({ closeModal }: IBillingInfoModal) {
  return (
    <Modal
      closeModal={closeModal}
      maxWidth="max-w-[489px]"
      maxHeight="max-h-[90%]"
    >
      <div className="px-4 py-4 border-b flex justify-between">
        <h4 className="font-semibold text-xl">Billing Information</h4>
        <button onClick={closeModal}>
          <Image
            width={32}
            height={32}
            src={"/assets/close_modal.svg"}
            alt="close modal"
          />
        </button>
      </div>
      <div className="flex-1 px-4 flex flex-col justify-center gap-3  overflow-y-scroll">
        <div>
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
      </div>
      <div className="flex justify-center py-3 border-t">
        <button className="bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 px-4 py-3 rounded-lg text-white">
          Save Details
        </button>
      </div>
    </Modal>
  );
}

export default BillingInfoModal;
